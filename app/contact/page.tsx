"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
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
            <div className="eyebrow">Get in Touch</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 0.95, marginBottom: "2rem" }}>
              <em style={{ fontStyle: "italic", color: "var(--ochre)" }}>Connect</em>
              <br />
              With Us
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--sand-dim)", lineHeight: 1.85 }}>
              Whether you want to volunteer, partner, donate, or simply learn more about our work in the Nilgiris—we&apos;d love to hear from you.
            </p>
          </div>
          <div className="page-hero-right">
            <div className="page-hero-image-wrap">
              <img
                src="/images/camp-workshops.jpg"
                alt="The Heritage Foundation Community Workshops"
                className="page-hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "var(--ink)" }}>
        <div className="contact-grid">
          <div className="reveal">
            <div className="eyebrow">Send a Message</div>
            <h2 className="display" style={{ marginBottom: "2.5rem" }}>
              Write
              <br />
              to <em>Us</em>
            </h2>
            <form className="contact-form-box" action="https://formspree.io/f/xojkrony" method="POST">
              <input type="hidden" name="_subject" value="New enquiry from The Heritage Foundation website" />
              <input className="form-input" type="text" name="name" placeholder="Your full name" required />
              <input className="form-input" type="email" name="email" placeholder="Email address" required />
              <input className="form-input" type="tel" name="phone" placeholder="Phone number" />
              <select className="form-input" name="enquiry_type" style={{ cursor: "pointer" }} required>
                <option value="">I&apos;m reaching out about...</option>
                <option>Donating / Funding</option>
                <option>Forest First Partnership</option>
                <option>Volunteering</option>
                <option>Internships &amp; Research</option>
                <option>Media / Press</option>
                <option>Corporate Partnership</option>
                <option>General Enquiry</option>
              </select>
              <textarea className="form-input" name="message" placeholder="Your message" required></textarea>
              <button type="submit" className="btn-solid" style={{ width: "100%", textAlign: "center" }}>
                Send Message
              </button>
            </form>
          </div>
          <div className="reveal reveal-delay-2" style={{ paddingLeft: "2rem" }}>
            <div className="contact-info-block">
              <h4>Office Location</h4>
              <p>
                The Heritage Foundation,
                <br />
                Kotagiri, The Nilgiris,
                <br />
                Tamil Nadu - 643217, India
              </p>
            </div>
            <div className="contact-info-block">
              <h4>General Enquiries</h4>
              <a href="mailto:info@the-heritage.org">info@the-heritage.org</a>
            </div>
            <div className="contact-info-block">
              <h4>Phone Contacts</h4>
              <a href="tel:+919500013897" style={{ marginBottom: "0.3rem" }}>
                +91 95000 13897
              </a>
              <a href="tel:+919159016991">+91 91590 16991</a>
            </div>
            <div className="contact-info-block">
              <h4>Social Profiles</h4>
              <div style={{ display: "flex", gap: "1rem", marginTop: "0.8rem" }}>
                <a
                  href="https://www.instagram.com/the.heritagefoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  IG
                </a>
                <a
                  href="https://www.linkedin.com/company/the-heritage-foundation-india/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LI
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--forest-mid)" }}>
        <div className="reveal">
          <div className="eyebrow">Other Ways to Help</div>
          <h2 className="display">
            Partner with
            <br />
            <em>Us</em>
          </h2>
          <div className="partner-grid">
            <div className="partner-item">
              <div className="partner-icon">🌿</div>
              <div className="partner-title">Forest Investors</div>
              <div className="partner-desc">
                Fund local montane forest corridor acquisition and community restoration projects.
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-icon">🧑‍🤝‍🧑</div>
              <div className="partner-title">Volunteers</div>
              <div className="partner-desc">
                Join our cleanup drives, documentation projects, and community campaigns.
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-icon">🎓</div>
              <div className="partner-title">Internships</div>
              <div className="partner-desc">
                Academic research and field placements for environmental science, architecture, or anthropology.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
