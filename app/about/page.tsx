"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
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
            <div className="eyebrow">Who We Are</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 0.95, marginBottom: "2rem" }}>
              About the
              <br />
              <em style={{ fontStyle: "italic", color: "var(--ochre)" }}>Foundation</em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--sand-dim)", lineHeight: 1.85 }}>
              The Heritage Foundation is a registered Trust based in Kotagiri, Nilgiris. We work at the intersection of ecology, culture, and community—protecting what is irreplaceable across the Nilgiris hills.
            </p>
          </div>
          <div className="page-hero-right">
            <div className="page-hero-image-wrap">
              <img src="/images/forest-bg.jpg" alt="Nilgiris Shola Forest" className="page-hero-image" />
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "var(--forest-mid)" }}>
        <div className="about-grid">
          <div className="reveal">
            <div className="eyebrow">Our Mission</div>
            <h2 className="display">
              Restoration
              <br />
              of <em>Heritage</em>
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--sand-dim)", lineHeight: 1.85, marginTop: "1.5rem" }}>
              The Heritage Foundation was founded on the conviction that heritage is not merely what we inherit it is what we choose to protect, practice, and pass forward. In the Nilgiris, that means acting urgently across three fronts: ecology, arts and culture, and the anthropological record of its communities.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--sand-dim)", lineHeight: 1.85, marginTop: "1rem" }}>
              We are a Registered Trust eligible for 80G tax exemption, headquartered in Kotagiri, Tamil Nadu.
            </p>
          </div>
          <div className="reveal reveal-delay-2">
            <div style={{ borderLeft: "2px solid var(--moss)", padding: "2rem 2.5rem", background: "rgba(31,50,35,0.4)" }}>
              <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic", color: "var(--sand)", lineHeight: 1.9, marginBottom: "0.8rem" }}>
                &quot;யாதும் ஊரே யாவரும் கேளிர்&quot;
                <br />
                &quot;To us all towns are our own, everyone our kin&quot;
              </blockquote>
              <cite style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fern)", fontStyle: "normal" }}>
                Kaniyan Poongundranar, Purananuru 192
              </cite>
            </div>
            <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(107,140,94,0.15)" }}>
              <div style={{ background: "var(--forest)", padding: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--ochre)" }}>2020</div>
                <div style={{ fontSize: "0.8rem", color: "var(--sand-dim)" }}>Year Founded</div>
              </div>
              <div style={{ background: "var(--forest)", padding: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--ochre)" }}>12+</div>
                <div style={{ fontSize: "0.8rem", color: "var(--sand-dim)" }}>Active Campaigns</div>
              </div>
              <div style={{ background: "var(--forest)", padding: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--ochre)" }}>10</div>
                <div style={{ fontSize: "0.8rem", color: "var(--sand-dim)" }}>Forest First Established</div>
              </div>
              <div style={{ background: "var(--forest)", padding: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--ochre)" }}>80G</div>
                <div style={{ fontSize: "0.8rem", color: "var(--sand-dim)" }}>Tax Exemption Eligible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--ink)" }}>
        <div className="eyebrow reveal">The Team</div>
        <h2 className="display reveal" style={{ marginBottom: "3.5rem" }}>
          The People
          <br />
          Behind the <em>Work</em>
        </h2>
        <div className="team-grid">
          <div className="team-card reveal">
            <div className="team-body">
              <div className="team-name">Dilip Srinivas M</div>
              <div className="team-role">Founder &amp; President</div>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-1">
            <div className="team-body">
              <div className="team-name">Hari Prasad K</div>
              <div className="team-role">Trustee</div>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-2">
            <div className="team-body">
              <div className="team-name">Sathish Srinivas M</div>
              <div className="team-role">Trustee</div>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-3">
            <div className="team-body">
              <div className="team-name">Kayalvizhi S</div>
              <div className="team-role">Trustee</div>
            </div>
          </div>
        </div>

        <div className="advisory-heading reveal">Honorary Advisory Board</div>
        <div className="team-grid">
          <div className="team-card reveal">
            <div className="team-body">
              <div className="team-name">Dr Shanthakumar</div>
              <div className="team-role">Honorary Advisor</div>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-1">
            <div className="team-body">
              <div className="team-name">Mrs Sudha</div>
              <div className="team-role">Honorary Advisor</div>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-2">
            <div className="team-body">
              <div className="team-name">Mrs Sangeetha</div>
              <div className="team-role">Honorary Advisor</div>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-3">
            <div className="team-body">
              <div className="team-name">Ms Shobana</div>
              <div className="team-role">Honorary Advisor</div>
            </div>
          </div>
        </div>

        <div className="advisory-heading reveal">Field Team</div>
        <div className="team-grid">
          <div className="team-card reveal">
            <div className="team-body">
              <div className="team-name">Mr Ganesh</div>
              <div className="team-role">Field Officer</div>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-1">
            <div className="team-body">
              <div className="team-name">Mr Sundarrajan</div>
              <div className="team-role">Community Officer</div>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-2">
            <div className="team-body">
              <div className="team-name">Mr Babu Rao</div>
              <div className="team-role">Office Admin</div>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-3">
            <div className="team-body">
              <div className="team-name">Mr Sai Krishna</div>
              <div className="team-role">Public Relations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--forest-mid)" }} id="news">
        <div className="eyebrow reveal">All Campaigns</div>
        <h2 className="display reveal" style={{ marginBottom: "3.5rem" }}>
          Our Work
          <br />
          on the <em>Ground</em>
        </h2>
        <div className="campaign-list">
          <div className="campaign-item reveal">
            <div className="campaign-item-cat">Ecological</div>
            <div className="campaign-item-title">Forest First</div>
            <div className="campaign-item-desc">
              Engaging individuals and companies to purchase and permanently rewild land in the Nilgiris, creating biodiversity corridors that are protected in perpetuity.
            </div>
          </div>
          <div className="campaign-item reveal reveal-delay-1">
            <div className="campaign-item-cat">Ecological</div>
            <div className="campaign-item-title">Water Management</div>
            <div className="campaign-item-desc">
              Reviving traditional water harvesting systems and advocating for responsible water use across the Nilgiris watershed.
            </div>
          </div>
          <div className="campaign-item reveal reveal-delay-2">
            <div className="campaign-item-cat">Ecological</div>
            <div className="campaign-item-title">River &amp; Stream Cleanup</div>
            <div className="campaign-item-desc">
              Community-led cleanup drives and long-term monitoring of the Nilgiris river systems to restore water quality and riparian habitats.
            </div>
          </div>
          <div className="campaign-item reveal reveal-delay-3">
            <div className="campaign-item-cat">Ecological</div>
            <div className="campaign-item-title">Regenerative Farming</div>
            <div className="campaign-item-desc">
              Supporting and documenting indigenous farming knowledge of the Nilgiris tribal communities.
            </div>
          </div>
          <div className="campaign-item reveal">
            <div className="campaign-item-cat">Ecological</div>
            <div className="campaign-item-title">Earth Pilgrimage</div>
            <div className="campaign-item-desc">
              Designing responsible heritage and nature tourism routes that generate community income while protecting sensitive ecological zones.
            </div>
          </div>
          <div className="campaign-item reveal reveal-delay-1">
            <div className="campaign-item-cat">Ecological</div>
            <div className="campaign-item-title">Bird Watching &amp; Wildlife Photography</div>
            <div className="campaign-item-desc">
              Citizen science programmes to document the extraordinary avian biodiversity of the Nilgiris Biosphere Reserve.
            </div>
          </div>
          <div className="campaign-item reveal reveal-delay-2">
            <div className="campaign-item-cat">Arts &amp; Culture</div>
            <div className="campaign-item-title">Indigenous Cultural Documentation</div>
            <div className="campaign-item-desc">
              Systematic documentation of 10 pictograph and petroglyph sites the only evidence of prehistoric hunter-gatherer communities in the region.
            </div>
          </div>
          <div className="campaign-item reveal reveal-delay-3">
            <div className="campaign-item-cat">Arts &amp; Culture</div>
            <div className="campaign-item-title">Tribal Art Exhibitions</div>
            <div className="campaign-item-desc">
              Curating and mounting exhibitions of tribal visual art, craft, and material culture.
            </div>
          </div>
          <div className="campaign-item reveal">
            <div className="campaign-item-cat">Arts &amp; Culture</div>
            <div className="campaign-item-title">Literary Forum</div>
            <div className="campaign-item-desc">
              An annual gathering of Tamil and English writers, poets, oral storytellers, and scholars held in the landscape that inspired them.
            </div>
          </div>
          <div className="campaign-item reveal reveal-delay-1">
            <div className="campaign-item-cat">Arts &amp; Culture</div>
            <div className="campaign-item-title">Arts Workshops</div>
            <div className="campaign-item-desc">
              Regular workshops in painting, craft, and traditional visual arts drawing from Nilgiris tribal aesthetics and natural pigments.
            </div>
          </div>
          <div className="campaign-item reveal reveal-delay-2">
            <div className="campaign-item-cat">Arts &amp; Culture</div>
            <div className="campaign-item-title">Cinematography Workshops</div>
            <div className="campaign-item-desc">
              Hands-on film-making training covering documentary technique, nature cinematography, and indigenous storytelling.
            </div>
          </div>
          <div className="campaign-item reveal reveal-delay-3">
            <div className="campaign-item-cat">Anthropological</div>
            <div className="campaign-item-title">Architecture Documentation</div>
            <div className="campaign-item-desc">
              Recording vanishing Nilgiris vernacular buildings Toda mandarins, Badaga longhouses, colonial bungalows, and bazaar streetscapes.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
