"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  title: string;
}

const ITEMS: GalleryItem[] = [
  { src: "/images/hero-bg.jpg", alt: "Nilgiris mountain ridges backdrop", category: "Landscape", title: "Nilgiris Biosphere buffer zone" },
  { src: "/images/forest-bg.jpg", alt: "Restored evergreen Shola woodland", category: "Ecology", title: "Conserved Shola woodland" },
  { src: "/images/camp-forest.jpeg", alt: "Young saplings growing in rewilding zone", category: "Ecology", title: "Rewilding site, Forest First Initiative" },
  { src: "/images/camp-indigenous.jpg", alt: "Ancient petroglyph rock paintings", category: "Anthropology", title: "Prehistoric rock art site documentation" },
  { src: "/images/camp-river.jpg", alt: "Clean stream flowing in mountains", category: "Ecology", title: "Community stream restoration program" },
  { src: "/images/camp-festival.jpg", alt: "Literary forum meeting outdoors", category: "Culture", title: "Tamil & Nilgiris Literary Forum" },
  { src: "/images/camp-farming.jpg", alt: "Traditional organic farm steps", category: "Anthropology", title: "Indigenous agroecology plots" },
  { src: "/images/camp-architecture.jpg", alt: "Traditional Toda thatched hut structure", category: "Anthropology", title: "Todas vernacular building documentation" },
  { src: "/images/camp-workshops.jpg", alt: "Students using cameras outdoors", category: "Culture", title: "Cinematography & visual storytelling training" },
];

export default function Gallery() {
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
            <div className="eyebrow">Visual Archives</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 0.95, marginBottom: "2rem" }}>
              Media
              <br />
              <em style={{ fontStyle: "italic", color: "var(--ochre)" }}>Gallery</em>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--sand-dim)", lineHeight: 1.85 }}>
              Field archives documenting ecological recovery, rock art surveys, tribal life, and creative workshops across the Nilgiris Biosphere.
            </p>
          </div>
          <div className="page-hero-right">
            <div className="page-hero-image-wrap">
              <img
                src="/images/camp-workshops.jpg"
                alt="Arts documentation in the field"
                className="page-hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "var(--ink)" }}>
        <div className="reveal">
          <div className="eyebrow">Field Documentation</div>
          <h2 className="display" style={{ marginBottom: "3rem" }}>
            Captured <em>Moments</em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {ITEMS.map((item, i) => (
              <div
                className="reveal"
                key={i}
                style={{
                  background: "var(--forest)",
                  border: "1px solid rgba(107, 140, 94, 0.15)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "240px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.00)")}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--fern)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.category}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      color: "var(--cream)",
                      lineHeight: "1.3",
                    }}
                  >
                    {item.title}
                  </h4>
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
