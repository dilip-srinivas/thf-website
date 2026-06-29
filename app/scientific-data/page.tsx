"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface DatasetItem {
  category: string;
  title: string;
  desc: string;
  linkText: string;
  size: string;
}

const SCIENTIFIC_DATASETS: DatasetItem[] = [
  {
    category: "Ecological Restoration",
    title: "Soil Organic Carbon Monitoring Logs - Rewilded Plots",
    desc: "Longitudinal carbon capture monitoring logs spanning 5 test rewilding areas in the Nilgiris montane zone. Tracks organic matters recovery rates.",
    linkText: "Download PDF Data Sheet",
    size: "2.4 MB",
  },
  {
    category: "Hydrology",
    title: "Riparian Water Quality Survey Logs (12 Test Points)",
    desc: "Chemical and microbiological assay reports tracking indicators (turbidity, pH, biological oxygen demand, nitrates) across Nilgiris streams.",
    linkText: "Download Excel Dataset",
    size: "1.8 MB",
  },
  {
    category: "Citizen Science",
    title: "Avian Census Logs (2020-2025) - Nilgiris Buffer Zones",
    desc: "Aggregated bird observation listings logging rare, endemic species distributions and migratory timeline anomalies.",
    linkText: "Download CSV Dataset",
    size: "4.1 MB",
  },
  {
    category: "Vernacular Architecture",
    title: "Toda Mandarins and Badaga Longhouses Structural Plans",
    desc: "Vectorized CAD drawings, joinery details, and structural blueprints recording vanishing vernacular indigenous styles.",
    linkText: "Download CAD ZIP Archive",
    size: "18.2 MB",
  },
  {
    category: "Archeology",
    title: "Petroglyphs Carbon Dating & Visual Surveys (10 Sites)",
    desc: "Analytical carbon-14 dating estimates, high-resolution rock art photographs, and visual conservation reports for sites across the hills.",
    linkText: "Download Survey Report",
    size: "8.5 MB",
  },
];

export default function ScientificData() {
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
            <div className="eyebrow">Academic Repository</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 0.95, marginBottom: "2rem" }}>
              Scientific
              <br />
              <em style={{ fontStyle: "italic", color: "var(--ochre)" }}>Data</em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--sand-dim)", lineHeight: 1.85 }}>
              Open-source scientific datasets, environmental monitoring logs, and anthropological research blueprints compiled by our field teams.
            </p>
          </div>
          <div className="page-hero-right">
            <div className="page-hero-image-wrap">
              <img
                src="/images/camp-river.jpg"
                alt="Water management research site"
                className="page-hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "var(--ink)" }}>
        <div className="reveal">
          <div className="eyebrow">Open Source Repository</div>
          <h2 className="display" style={{ marginBottom: "3rem" }}>
            Field Research &amp; <em>Logs</em>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {SCIENTIFIC_DATASETS.map((item, i) => (
              <div
                className="reveal"
                key={i}
                style={{
                  background: "var(--forest)",
                  border: "1px solid rgba(107, 140, 94, 0.15)",
                  padding: "2rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                }}
              >
                <div style={{ flex: "1 1 500px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--fern)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.category}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      color: "var(--cream)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--sand-dim)", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Downloading files in simulation mode...");
                    }}
                    className="btn-outline"
                    style={{ padding: "0.75rem 1.5rem", fontSize: "0.76rem", display: "inline-block" }}
                  >
                    {item.linkText}
                  </a>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--fern)",
                      marginTop: "0.4rem",
                      opacity: 0.7,
                    }}
                  >
                    Size: {item.size}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
