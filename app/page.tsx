"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
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

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-foliage">
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0.15,
            }}
          >
            <path
              d="M80 900 L80 480 Q80 420 120 380 Q100 340 130 300 Q110 270 140 240 Q125 210 155 190 L175 190 Q205 210 190 240 Q220 270 200 300 Q230 340 210 380 Q250 420 250 480 L250 900Z"
              fill="rgba(74,99,80,0.6)"
            />
            <path
              d="M1280 900 L1280 520 Q1280 460 1320 415 Q1295 370 1330 330 Q1310 295 1345 268 L1365 268 Q1400 295 1385 330 Q1415 370 1395 415 Q1430 460 1430 520 L1430 900Z"
              fill="rgba(74,99,80,0.5)"
            />
            <ellipse cx="720" cy="820" rx="900" ry="160" fill="rgba(22,37,24,0.6)" />
          </svg>
        </div>
        <div className="hero-content">
          <div>
            <div className="hero-kicker">The Heritage Foundation</div>
            <h1 className="hero-title">
              <em>Restoring</em>
              <strong>Heritage.</strong>Reclaiming the Future.
            </h1>
            <p className="hero-desc">
              The Heritage Foundation works across the Nilgiris to protect what is irreplaceable: ancient forests, living art traditions, prehistoric rock art, vernacular architecture, and the ecological wisdom of tribal communities.
            </p>
            <div className="hero-actions">
              <a href="#heritages" className="btn-solid">
                Explore Our Work
              </a>
              <Link href="/donate" className="btn-outline">
                Support Us
              </Link>
            </div>
          </div>
          <div>
            <div className="hero-verse">
              <blockquote>
                &quot;To us all towns are our own, everyone our kin We marvel not at the greatness of the great; Still less despise we men of low estate.&quot;
              </blockquote>
              <cite>Kaniyan Poongundranar, Purananuru 192</cite>
            </div>
            <div className="hero-pillars">
              <div className="hero-pillar">
                <div className="hero-pillar-icon">🌿</div>
                <div className="hero-pillar-label">
                  Ecological
                  <br />
                  Heritage
                </div>
              </div>
              <div className="hero-pillar">
                <div className="hero-pillar-icon">🎨</div>
                <div className="hero-pillar-label">
                  Arts &amp;
                  <br />
                  Culture
                </div>
              </div>
              <div className="hero-pillar">
                <div className="hero-pillar-icon">🏛️</div>
                <div className="hero-pillar-label">
                  Anthropological
                  <br />
                  Heritage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner">
          <span className="ticker-item">Forest First</span>
          <span className="ticker-item">Nilgiris Rock Art</span>
          <span className="ticker-item">River &amp; Stream Cleanup</span>
          <span className="ticker-item">Literary Forum</span>
          <span className="ticker-item">Regenerative Farming</span>
          <span className="ticker-item">Architecture Documentation</span>
          <span className="ticker-item">Cinematography Workshops</span>
          <span className="ticker-item">Heritage Eco Tourism</span>
          <span className="ticker-item">Arts Workshops</span>
          <span className="ticker-item">Water Management</span>
          <span className="ticker-item">Bird Watching</span>
          <span className="ticker-item">Tribal Art Exhibitions</span>
          <span className="ticker-item">Forest First</span>
          <span className="ticker-item">Nilgiris Rock Art</span>
          <span className="ticker-item">River &amp; Stream Cleanup</span>
          <span className="ticker-item">Literary Forum</span>
          <span className="ticker-item">Regenerative Farming</span>
          <span className="ticker-item">Architecture Documentation</span>
          <span className="ticker-item">Cinematography Workshops</span>
          <span className="ticker-item">Heritage Eco Tourism</span>
          <span className="ticker-item">Arts Workshops</span>
          <span className="ticker-item">Water Management</span>
          <span className="ticker-item">Bird Watching</span>
          <span className="ticker-item">Tribal Art Exhibitions</span>
        </div>
      </div>

      <section id="heritages">
        <div className="three-heritages">
          <div className="heritage-col" data-num="I">
            <div className="heritage-icon">🌿</div>
            <h3>
              Ecological
              <br />
              Heritage
            </h3>
            <p>
              The Nilgiris is one of India&apos;s most biodiverse mountain systems yet its rivers, forests, and farmlands face mounting pressure. We work on water management, river cleanup, sustainable farming, eco-tourism, and our flagship Forest First initiative.
            </p>
            <div className="heritage-tags">
              <span className="tag">Collective Forest</span>
              <span className="tag">River Cleanup</span>
              <span className="tag">Water Management</span>
              <span className="tag">Regenerative Farming</span>
              <span className="tag">Eco Tourism</span>
              <span className="tag">Bird Watching</span>
            </div>
          </div>
          <div className="heritage-col" data-num="II">
            <div className="heritage-icon">🎨</div>
            <h3>
              Arts &amp;
              <br />
              Cultural Heritage
            </h3>
            <p>
              From prehistoric rock paintings to living craft traditions, the Nilgiris holds a vast and largely undocumented cultural treasury. We host a literature festival, run arts and cinematography workshops, document vernacular architecture, and mount tribal art exhibitions.
            </p>
            <div className="heritage-tags">
              <span className="tag">Indigenous Cultural Documentation</span>
              <span className="tag">Literary Forum</span>
              <span className="tag">Arts Workshops</span>
              <span className="tag">Cinema Workshops</span>
              <span className="tag">Architecture Docs</span>
              <span className="tag">Tribal Art Exhibitions</span>
            </div>
          </div>
          <div className="heritage-col" data-num="III">
            <div className="heritage-icon">🏛️</div>
            <h3>
              Anthropological
              <br />
              Heritage
            </h3>
            <p>
              The Indigenous communities of the Nilgiris Todas, Kotas, Irulas, Kurumbas carry millennia of knowledge about land, medicine, ritual, and coexistence. We document their architecture, farming systems, oral histories, and art, working alongside communities.
            </p>
            <div className="heritage-tags">
              <span className="tag">Indigenous Culture</span>
              <span className="tag">Architecture Documentation</span>
              <span className="tag">Oral History</span>
              <span className="tag">Anthropological Research</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="campaigns" style={{ background: "var(--ink)" }}>
        <div className="campaigns-header">
          <div className="campaigns-header-left">
            <div className="eyebrow">Active Campaigns</div>
            <h2 className="display">
              Work on the
              <br />
              <em>Ground</em>
            </h2>
            <p>Twelve active campaigns across ecology, arts, and anthropology all rooted in the Nilgiris, all community-led.</p>
          </div>
          <Link href="/about" className="link-arrow">
            View All Campaigns
          </Link>
        </div>
        <div className="campaigns-mosaic reveal">
          <div className="camp-card">
            <img
              className="camp-bg"
              src="/images/camp-forest.jpeg"
              alt="Forest First Campaign - Rewilding Nilgiris"
            />
            <div className="camp-overlay"></div>
            <div className="camp-body">
              <div className="camp-cat">Ecological Heritage</div>
              <div className="camp-title">Forest First</div>
              <div className="camp-desc">
                Individuals and companies buy land in the Nilgiris and convert it into permanent rewilded forest forever.
              </div>
            </div>
          </div>
          <div className="camp-card">
            <img
              className="camp-bg"
              src="/images/camp-indigenous.jpg"
              alt="Indigenous Cultural Documentation - Prehistoric Rock Art"
            />
            <div className="camp-overlay"></div>
            <div className="camp-body">
              <div className="camp-cat">Arts &amp; Culture</div>
              <div className="camp-title">Indigenous Cultural Documentation</div>
              <div className="camp-desc">
                Documenting 10 sites across the Nilgiris before they are lost to vandalism and time.
              </div>
            </div>
          </div>
          <div className="camp-card">
            <img
              className="camp-bg"
              src="/images/camp-river.jpg"
              alt="River &amp; Water Management - Waterways Restoration"
            />
            <div className="camp-overlay"></div>
            <div className="camp-body">
              <div className="camp-cat">Ecological Heritage</div>
              <div className="camp-title">River &amp; Water Management</div>
              <div className="camp-desc">
                Restoring Nilgiris waterways through community-led cleanup and traditional water harvesting.
              </div>
            </div>
          </div>
          <div className="camp-card">
            <img
              className="camp-bg"
              src="/images/camp-festival.jpg"
              alt="Literary Forum - Gathering of Writers &amp; Thinkers"
            />
            <div className="camp-overlay"></div>
            <div className="camp-body">
              <div className="camp-cat">Arts &amp; Culture</div>
              <div className="camp-title">Literary Forum</div>
              <div className="camp-desc">
                Annual gathering of writers, poets, and thinkers rooted in Tamil and Nilgiris literary heritage.
              </div>
            </div>
          </div>
          <div className="camp-card">
            <img
              className="camp-bg"
              src="/images/camp-farming.jpg"
              alt="Regenerative Farming - Indigenous Agricultural Knowledge"
            />
            <div className="camp-overlay"></div>
            <div className="camp-body">
              <div className="camp-cat">Anthropological</div>
              <div className="camp-title">Regenerative Farming</div>
              <div className="camp-desc">
                Reviving indigenous agricultural knowledge alongside Indigenous communities of the Nilgiris.
              </div>
            </div>
          </div>
          <div className="camp-card">
            <img
              className="camp-bg"
              src="/images/camp-architecture.jpg"
              alt="Architecture Documentation - Vernacular Buildings"
            />
            <div className="camp-overlay"></div>
            <div className="camp-body">
              <div className="camp-cat">Arts &amp; Culture</div>
              <div className="camp-title">Architecture Documentation</div>
              <div className="camp-desc">
                Recording vanishing Nilgiris vernacular buildings hill station bungalows, tribal dwellings, colonial-era structures.
              </div>
            </div>
          </div>
          <div className="camp-card">
            <img
              className="camp-bg"
              src="/images/camp-workshops.jpg"
              alt="Cinematography &amp; Arts Workshops - Storyteller Training"
            />
            <div className="camp-overlay"></div>
            <div className="camp-body">
              <div className="camp-cat">Arts &amp; Culture</div>
              <div className="camp-title">Cinematography &amp; Arts Workshops</div>
              <div className="camp-desc">
                Hands-on film-making and visual arts training bringing professional skills to the next generation of storytellers.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="forest" style={{ padding: 0 }}>
        <div className="forest-section">
          <div className="forest-visual">
            <div className="forest-visual-bg-fallback"></div>
            <img
              className="forest-visual-bg"
              src="/images/forest-bg.jpg"
              alt="Forest First Rewilding Area"
            />
            <div className="forest-visual-overlay"></div>
            <div className="forest-visual-text">FOREST</div>
          </div>
          <div className="forest-content reveal">
            <div className="eyebrow">Flagship Initiative</div>
            <h2>
              Forest <em> First
              <br />
              Collective</em>
            </h2>
            <p>
              Forests do not need to be owned by governments to be wild. The Forest First initiative invites individuals, companies, and foundations to purchase land in the Nilgiris and permanently rewild it converting degraded terrain into thriving biodiversity corridors.
            </p>
            <p>
              This is not tree planting. This is landscape-scale rewilding with native species, monitored biodiversity, and community involvement baked in from day one.
            </p>
            <div className="forest-steps">
              <div className="forest-step">
                <div className="step-num">01</div>
                <div className="step-text">
                  <strong>Identify &amp; Acquire Land</strong>
                  <span>We identify suitable degraded private land in the Nilgiris and facilitate purchase.</span>
                </div>
              </div>
              <div className="forest-step">
                <div className="step-num">02</div>
                <div className="step-text">
                  <strong>Community-Led Rewilding</strong>
                  <span>Tribal communities guide native species restoration, creating lasting livelihoods.</span>
                </div>
              </div>
              <div className="forest-step">
                <div className="step-num">03</div>
                <div className="step-text">
                  <strong>Permanent Protection</strong>
                  <span>The land is legally protected in perpetuity it can never be developed.</span>
                </div>
              </div>
              <div className="forest-step">
                <div className="step-num">04</div>
                <div className="step-text">
                  <strong>Monitored &amp; Reported</strong>
                  <span>Annual biodiversity reports shared with all investors and the public.</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", marginTop: "1rem" }}>
              <Link href="/donate#forest" className="btn-solid">
                Invest in a Forest
              </Link>
              <Link href="/about" className="link-arrow" style={{ alignSelf: "center" }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="impact-layout">
          <div className="reveal">
            <div className="eyebrow ochre">Why It Matters</div>
            <h2 className="display">
              Every Site Lost
              <br />
              Is a Memory
              <br />
              <em>Erased</em>
            </h2>
            <p style={{ color: "var(--sand-dim)", fontSize: "1rem", lineHeight: 1.85, marginTop: "1.5rem", maxWidth: "440px", marginBottom: "2rem" }}>
              These rock art sites, forests, and traditions are not relics they are living knowledge systems. Vandalism, encroachment, and neglect are silencing them year by year. Your support helps us act before it&apos;s too late.
            </p>
            <div className="trust-badge">
              <div className="trust-badge-dot"></div>
              <span>Registered NGO / Trust 80G Tax Exemption</span>
            </div>
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-num">10</div>
                <div className="stat-label">Environmental Conservation Consulting in the Nilgiris</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">12+</div>
                <div className="stat-label">Active campaigns across ecology, arts &amp; anthropology</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">∞</div>
                <div className="stat-label">Years of protection for every forest acre we secure</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">4</div>
                <div className="stat-label">Forest First Initiatives in progress</div>
              </div>
            </div>
            <Link href="/donate" className="btn-solid">
              Support the Foundation
            </Link>
          </div>
          <div
            className="reveal reveal-delay-2"
            style={{
              background: "var(--forest)",
              border: "1px solid rgba(107,140,94,0.2)",
              padding: "3.5rem",
              position: "sticky",
              top: "7rem",
            }}
          >
            <div
              style={{
                height: "2px",
                margin: "-3.5rem -3.5rem 3rem",
                background: "linear-gradient(to right,var(--fern),var(--ochre),transparent)",
              }}
            ></div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 600, color: "var(--cream)", lineHeight: 1.15, marginBottom: "1rem" }}>
              Make a
              <br />
              Contribution
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--sand-dim)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Support ecological restoration, arts preservation, and community research in the Nilgiris. Donations eligible for 80G tax deduction.
            </p>
            <Link href="/donate" className="btn-solid" style={{ width: "100%", textAlign: "center", display: "block", marginBottom: "1rem" }}>
              Donate Now
            </Link>
            <Link href="/donate#forest" className="btn-outline" style={{ width: "100%", textAlign: "center", display: "block" }}>
              Invest in a Forest
            </Link>
            <p style={{ fontSize: "0.73rem", color: "var(--sand-dim)", opacity: 0.6, marginTop: "1.2rem", lineHeight: 1.6, textAlign: "center" }}>
              Registered Trust 80G Tax Exemption
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
