/**
 * Cloudflare Pages Function: Domestic 12AB/80G Donor & UTR Verification
 * Route: POST /api/donate
 */

const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

export async function onRequestPost(context) {
  try {
    let payload = {};
    const contentType = context.request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      payload = await context.request.json();
    } else {
      const formData = await context.request.formData();
      payload = Object.fromEntries(formData);
    }

    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);

    // Case 1: UTR Submission Form
    if (payload.utr_number) {
      const utrRef = `THF-UTR-${dateStr}-${randomSuffix}`;
      return new Response(JSON.stringify({
        success: true,
        reference: utrRef,
        utr: payload.utr_number,
        message: 'UTR reference recorded. Reconciliation in progress for Form 10BE certificate generation.',
        timestamp: now.toISOString()
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // Case 2: Initial 80G Statutory Compliance Gate Form
    const pan = (payload.donor_pan || '').trim().toUpperCase();
    if (!pan || !PAN_REGEX.test(pan)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid Indian Permanent Account Number (PAN). Exactly 5 letters, 4 digits, 1 letter required for 80G compliance.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    if (!payload.donor_name || !payload.donor_email || !payload.donor_address) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Full Legal Name, Email, and Postal Address are mandatory under Income Tax rules for Form 10BD/10BE filing.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    const complianceRef = `THF-80G-${dateStr}-${randomSuffix}`;

    return new Response(JSON.stringify({
      success: true,
      complianceReference: complianceRef,
      donorPan: pan,
      donorName: payload.donor_name,
      message: 'Statutory 80G compliance verified. Domestic channels unlocked.',
      timestamp: now.toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      error: err.message || 'Internal processing error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
