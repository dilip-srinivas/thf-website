"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
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
            <div className="eyebrow">Trust Disclosures</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 0.95, marginBottom: "2rem" }}>
              Privacy
              <br />
              <em style={{ fontStyle: "italic", color: "var(--ochre)" }}>Policy</em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--sand-dim)", lineHeight: 1.85 }}>
              The Heritage Foundation is committed to protecting your personal information and ensuring transparency in all our operations.
            </p>
          </div>
          <div className="page-hero-right">
            <div className="page-hero-image-wrap">
              <img
                src="/images/forest-bg.jpg"
                alt="Conserved Shola woodlands in Kotagiri"
                className="page-hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "var(--ink)", color: "var(--sand-dim)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }} className="reveal">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--cream)", marginBottom: "1.5rem" }}>
            Data Protection &amp; Transparency
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.95rem", lineHeight: "1.8" }}>
            <p>
              This Privacy Policy explains how The Heritage Foundation (referred to as &quot;we&quot;, &quot;us&quot;, or &quot;the Trust&quot;) collects, handles, and protects user information collected through our official portal (<code>the-heritage.org</code>) and during donation processing.
            </p>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                1. Information We Collect
              </h3>
              <p>
                We collect personal information directly from you when you submit forms, contact us via email, or process contributions. This data includes:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", listStyleType: "square" }}>
                <li>Full name, residential address, and email coordinates.</li>
                <li>Phone numbers and contact references.</li>
                <li>Tax identification details (PAN card) required to generate 80G tax exemption certificates.</li>
                <li>Bank transaction reference identifiers (we do not collect or store credit card details or bank passwords).</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                2. How We Use Your Data
              </h3>
              <p>
                Your data is strictly restricted to non-profit administrative and restoration operations, specifically:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", listStyleType: "square" }}>
                <li>To issue official donation receipts, 12A certificates, and 80G tax exemptions.</li>
                <li>To send periodic newsletters, project field updates, and annual performance reports.</li>
                <li>To coordinate volunteering schedules, internships, and field research initiatives.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                3. Information Sharing &amp; Third Parties
              </h3>
              <p>
                We do not sell, rent, trade, or distribute your personal details to third-party marketing companies. Personal data is shared only with financial audit specialists and government bodies (e.g. Income Tax Department of India) for statutory filings and NGO reporting.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                4. Data Security
              </h3>
              <p>
                We implement physical and electronic security buffers to safeguard files. Financial logs, local databases, and audit reports are hosted on secured drives and accessed only by authorized trustees.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                5. Access Rights &amp; Rectification
              </h3>
              <p>
                You may request access to, correction of, or deletion of your personal database records at any time. For queries, please email us directly at{" "}
                <a href="mailto:info@the-heritage.org" style={{ color: "var(--ochre)" }}>
                  info@the-heritage.org
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
