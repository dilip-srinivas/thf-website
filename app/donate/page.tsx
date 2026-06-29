"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Donate() {
  useEffect(() => {
    // Intersection Observer for scroll animation reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-grid">
          <div className="page-hero-left">
            <div className="eyebrow">Support Us</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 0.95, marginBottom: "2rem" }}>
              Help Us
              <br />
              <em style={{ fontStyle: "italic", color: "var(--ochre)" }}>Protect</em>
              <br />
              What Matters
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--sand-dim)", lineHeight: 1.85 }}>
              The Heritage Foundation is a Registered Trust. Your donation goes directly toward fieldwork, documentation, community programmes, and forest restoration in the Nilgiris. All donations above INR 500 are eligible for 80G tax exemption.
            </p>
          </div>
          <div className="page-hero-right">
            <div className="page-hero-image-wrap">
              <img
                src="/images/camp-farming.jpg"
                alt="Regenerative Farming and Ecological Impact"
                className="page-hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "var(--ink)" }} id="donate-form">
        <div className="donate-layout">
          <div className="reveal">
            <div className="eyebrow ochre">Make a Donation</div>
            <h2 className="display" style={{ marginBottom: "2rem" }}>
              Your Support
              <br />
              <em>Matters</em>
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--sand-dim)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              Every contribution directly funds the work of preserving the Nilgiris&apos; ecological and cultural heritage. You can donate via UPI or bank transfer, or reach out to discuss a larger partnership.
            </p>
            <div className="impact-use-grid">
              <div className="impact-use-item">
                <div className="impact-use-icon">🌿</div>
                <div className="impact-use-title">Forest Restoration</div>
                <div className="impact-use-desc">Fund land acquisition and rewilding under the Forest First initiative.</div>
              </div>
              <div className="impact-use-item">
                <div className="impact-use-icon">🪨</div>
                <div className="impact-use-title">Indigenous Cultural Documentation</div>
                <div className="impact-use-desc">Equipment, field surveys, and conservation advocacy for 10 Nilgiris sites.</div>
              </div>
              <div className="impact-use-item">
                <div className="impact-use-icon">🎨</div>
                <div className="impact-use-title">Arts &amp; Culture</div>
                <div className="impact-use-desc">Literary Forum events, workshops, tribal exhibitions, and architecture documentation.</div>
              </div>
              <div className="impact-use-item">
                <div className="impact-use-icon">🏘️</div>
                <div className="impact-use-title">Community Programmes</div>
                <div className="impact-use-desc">Internships, awareness programmes, and tribal community partnerships.</div>
              </div>
            </div>
            <div className="bank-box reveal" style={{ marginTop: "3rem" }}>
              <div className="eyebrow" style={{ marginBottom: "1.5rem" }}>
                Bank Transfer Details
              </div>
              <div className="bank-row">
                <span className="bank-label">Account Name</span>
                <span className="bank-value">The Heritage Foundation</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Bank Name</span>
                <span className="bank-value">HDFC Bank Ltd</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Account Number</span>
                <span className="bank-value">50100577529107</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">IFSC Code</span>
                <span className="bank-value">HDFC0008875</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Branch</span>
                <span className="bank-value">Kotagiri Branch</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Account Type</span>
                <span className="bank-value">Institutional Savings</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">UPI ID</span>
                <span className="bank-value">9159016991@okbizaxis</span>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--sand-dim)", opacity: 0.6, marginTop: "1.2rem", lineHeight: 1.6 }}>
                Please email{" "}
                <a href="mailto:info@the-heritage.org" style={{ color: "var(--fern)" }}>
                  info@the-heritage.org
                </a>{" "}
                after your transfer with your name and amount. A receipt and 80G certificate will be issued within 7 working days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--forest-mid)" }} id="forest">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div className="reveal">
            <div className="eyebrow">Flagship Investment</div>
            <h2 className="display">
              Invest in
              <br />
              <em>Forest First</em>
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--sand-dim)", lineHeight: 1.85, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
              Forest First is our most ambitious initiative. Individuals, families, and corporate foundations can purchase land in the Nilgiris and permanently rewild it, creating a biodiversity corridor that carries your name in perpetuity.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--sand-dim)", lineHeight: 1.85, marginBottom: "2rem" }}>
              The land is legally protected and can never be developed. Annual biodiversity reports are shared with all investors.
            </p>
            <Link href="/contact" className="btn-solid">
              Enquire About Forest Investment
            </Link>
          </div>
          <div className="reveal reveal-delay-2">
            <div style={{ background: "var(--forest)", border: "1px solid rgba(107,140,94,0.2)", padding: "3rem" }}>
              <div className="eyebrow">What&apos;s Included</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid rgba(107,140,94,0.15)" }}>
                <div style={{ padding: "1.2rem 1.5rem", borderBottom: "1px solid rgba(107,140,94,0.12)", display: "flex", gap: "1rem" }}>
                  <span style={{ color: "var(--fern)" }}>+</span>
                  <span style={{ fontSize: "0.88rem", color: "var(--sand-dim)" }}>Land identification &amp; acquisition support</span>
                </div>
                <div style={{ padding: "1.2rem 1.5rem", borderBottom: "1px solid rgba(107,140,94,0.12)", display: "flex", gap: "1rem" }}>
                  <span style={{ color: "var(--fern)" }}>+</span>
                  <span style={{ fontSize: "0.88rem", color: "var(--sand-dim)" }}>Community-led rewilding with native species</span>
                </div>
                <div style={{ padding: "1.2rem 1.5rem", borderBottom: "1px solid rgba(107,140,94,0.12)", display: "flex", gap: "1rem" }}>
                  <span style={{ color: "var(--fern)" }}>+</span>
                  <span style={{ fontSize: "0.88rem", color: "var(--sand-dim)" }}>Legal documentation &amp; permanent protection</span>
                </div>
                <div style={{ padding: "1.2rem 1.5rem", borderBottom: "1px solid rgba(107,140,94,0.12)", display: "flex", gap: "1rem" }}>
                  <span style={{ color: "var(--fern)" }}>+</span>
                  <span style={{ fontSize: "0.88rem", color: "var(--sand-dim)" }}>Annual biodiversity monitoring reports</span>
                </div>
                <div style={{ padding: "1.2rem 1.5rem", display: "flex", gap: "1rem" }}>
                  <span style={{ color: "var(--fern)" }}>+</span>
                  <span style={{ fontSize: "0.88rem", color: "var(--sand-dim)" }}>Named recognition on the Heritage Foundation&apos;s forest register</span>
                </div>
              </div>
              <Link href="/contact" className="btn-outline" style={{ display: "block", textAlign: "center", marginTop: "2rem" }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
