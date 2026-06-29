"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsConditions() {
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
              Terms of
              <br />
              <em style={{ fontStyle: "italic", color: "var(--ochre)" }}>Service</em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--sand-dim)", lineHeight: 1.85 }}>
              Terms of use governing our portal, content licensing, and donation integrity.
            </p>
          </div>
          <div className="page-hero-right">
            <div className="page-hero-image-wrap">
              <img
                src="/images/camp-farming.jpg"
                alt="Farming in Kotagiri, Nilgiris"
                className="page-hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "var(--ink)", color: "var(--sand-dim)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }} className="reveal">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--cream)", marginBottom: "1.5rem" }}>
            Terms &amp; Conditions
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.95rem", lineHeight: "1.8" }}>
            <p>
              Welcome to the website of The Heritage Foundation. By accessing or using this website (<code>the-heritage.org</code>), you agree to comply with and be bound by the following terms and conditions.
            </p>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                1. Acceptable Use
              </h3>
              <p>
                You agree to use this site strictly for lawful purposes and in a manner that does not infringe upon, restrict, or inhibit the use and enjoyment of this site by any third party. Unauthorized attempts to access the admin console, database log, or code files are strictly prohibited.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                2. Intellectual Property
              </h3>
              <p>
                All materials posted on this site (including text, architectural documentation, drawings, maps, photography, cinematography workshop records, and logo designs) are the intellectual property of The Heritage Foundation. You may download or share these resources for educational, non-commercial purposes, provided you credit the Trust explicitly.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                3. Donation Integrity
              </h3>
              <p>
                Donations made to the Trust are voluntary and non-refundable. They are processed in compliance with the registered Trust deed, 12A/80G status, and statutory reporting guidelines in India. Receipts will be issued based on valid PAN information.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                4. Disclaimer
              </h3>
              <p>
                The information provided on this site is for general awareness. While we strive to maintain accurate project descriptions, species logs under Forest First, and rock art historical records, we make no guarantees about absolute completeness or scientific finality.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "0.5rem" }}>
                5. Governing Law
              </h3>
              <p>
                These terms are governed by the laws of India. Any legal dispute or claim arising from the use of this portal will be resolved under the jurisdiction of the courts in the Nilgiris district, Tamil Nadu, India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
