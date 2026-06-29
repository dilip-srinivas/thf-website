import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <img
            src="/images/logo.png"
            alt="The Heritage Foundation"
            style={{ height: "60px", width: "auto", marginBottom: "1rem" }}
          />
          <div className="footer-brand-name">The Heritage Foundation</div>
          <div className="footer-brand-loc">Kotagiri - The Nilgiris - Tamil Nadu - India</div>
          <p className="footer-brand-desc">
            Working to restore Ecological, Arts & Cultural, and Anthropological Heritage across the Nilgiris through fieldwork, community partnerships, and creative practice.
          </p>
          <div style={{ marginBottom: "1.2rem" }}>
            <a
              href="mailto:info@the-heritage.org"
              style={{ color: "var(--fern)", fontSize: "0.85rem", textDecoration: "none", display: "block", marginBottom: "0.3rem" }}
            >
              info@the-heritage.org
            </a>
            <a
              href="tel:+919500013897"
              style={{ color: "var(--sand-dim)", fontSize: "0.82rem", textDecoration: "none", opacity: 0.7, display: "block", marginBottom: "0.2rem" }}
            >
              +91 95000 13897
            </a>
            <a
              href="tel:+919159016991"
              style={{ color: "var(--sand-dim)", fontSize: "0.82rem", textDecoration: "none", opacity: 0.7, display: "block" }}
            >
              +91 91590 16991
            </a>
          </div>
          <div className="footer-socials">
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
        <div className="footer-col">
          <h4>Ecological</h4>
          <ul>
            <li><Link href="/#forest">Collective Forest</Link></li>
            <li><Link href="/donate">Water Management</Link></li>
            <li><Link href="/about">River Cleanup</Link></li>
            <li><Link href="/donate">Sustainable Farming</Link></li>
            <li><Link href="/about">Eco Tourism</Link></li>
            <li><Link href="/about">Bird Watching</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Arts & Culture</h4>
          <ul>
            <li><Link href="/#campaigns">Indigenous Cultural Documentation</Link></li>
            <li><Link href="/about">Literary Forum</Link></li>
            <li><Link href="/about">Arts Workshops</Link></li>
            <li><Link href="/about">Cinema Workshops</Link></li>
            <li><Link href="/about">Architecture Docs</Link></li>
            <li><Link href="/gallery">Tribal Art Exhibitions</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get Involved</h4>
          <ul>
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="/donate#forest">Invest in Forest</Link></li>
            <li><Link href="/about">Volunteer</Link></li>
            <li><Link href="/about">Internships</Link></li>
            <li><Link href="/contact">Partner With Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 The Heritage Foundation, Kotagiri. Registered Trust. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/donate">Annual Report</Link>
          <Link href="/contact">Press Kit</Link>
        </div>
      </div>
    </footer>
  );
}
