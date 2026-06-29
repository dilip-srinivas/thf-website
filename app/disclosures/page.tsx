"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Disclosures() {
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
              Statutory
              <br />
              <em style={{ fontStyle: "italic", color: "var(--ochre)" }}>Disclosures</em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--sand-dim)", lineHeight: 1.85 }}>
              Registered Trust registrations, 12A/80G status documentation, audited financial statements, and administrative structure.
            </p>
          </div>
          <div className="page-hero-right">
            <div className="page-hero-image-wrap">
              <img
                src="/images/forest-bg.jpg"
                alt="Conserved Shola woodland"
                className="page-hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "var(--ink)", color: "var(--sand-dim)" }}>
        <div className="donate-layout">
          {/* Section 1: Trust Profile */}
          <div className="reveal" style={{ marginBottom: "4rem" }}>
            <div className="eyebrow ochre">Registration Details</div>
            <h2 className="display" style={{ marginBottom: "2rem" }}>
              Legal Profile
            </h2>
            <div className="bank-box">
              <div className="bank-row">
                <span className="bank-label">Trust Name</span>
                <span className="bank-value">The Heritage Foundation</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Legal Entity</span>
                <span className="bank-value">Registered Public Charitable Trust</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Trust Deed Registration No</span>
                <span className="bank-value">No. 43 of Book IV, 2020 (Kotagiri SRO)</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">PAN (Income Tax Department)</span>
                <span className="bank-value">AAGTT7298F</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Section 12A Unique ID</span>
                <span className="bank-value">AAGTT7298FE20214</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">Section 80G Approval Code</span>
                <span className="bank-value">AAGTT7298FD20215 (Eligible for 50% Tax Exemption)</span>
              </div>
            </div>
          </div>

          {/* Section 2: Financial Audits */}
          <div className="reveal" style={{ marginBottom: "4rem" }}>
            <div className="eyebrow ochre">Trust Transparency</div>
            <h2 className="display" style={{ marginBottom: "2rem" }}>
              Audited Statements
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
              We compile annual balance sheets, income statements, and auditor reports to maintain transparency with our donors and the public.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "FY 2024-2025 Audited Financial Accounts", date: "June 2025" },
                { title: "FY 2023-2024 Audited Financial Accounts", date: "June 2024" },
                { title: "Trust Annual Performance Report 2024-2025", date: "July 2025" },
              ].map((audit, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--forest-mid)",
                    border: "1px solid rgba(107, 140, 94, 0.15)",
                    padding: "1.5rem 2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--cream)" }}>
                      {audit.title}
                    </h4>
                    <span style={{ fontSize: "0.78rem", color: "var(--sand-dim)", opacity: 0.7 }}>
                      Published: {audit.date}
                    </span>
                  </div>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Downloading audited accounts...");
                    }}
                    className="link-arrow"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Download Audit PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
