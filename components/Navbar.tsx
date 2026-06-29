"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <Link href="/" className="nav-brand">
        <img src="/images/logo.png" alt="The Heritage Foundation" />
        <div className="nav-brand-text">
          <span className="nav-brand-name">The Heritage Foundation</span>
          <span className="nav-brand-sub">Kotagiri - Nilgiris - Registered Trust</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li><Link href="/#heritages">Mission</Link></li>
        <li><Link href="/#campaigns">Campaigns</Link></li>
        <li><Link href="/about" className={isActive("/about") ? "active" : ""}>About</Link></li>
        <li><Link href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link></li>
        <li><Link href="/donate" className={`nav-cta ${isActive("/donate") ? "active" : ""}`}>Support Us</Link></li>
      </ul>
    </nav>
  );
}
