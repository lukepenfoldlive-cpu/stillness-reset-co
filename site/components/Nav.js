"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "/corporate", label: "Corporate" },
  { href: "/private", label: "Private" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Stillness Reset Co.</span>
          <div className={styles.logoLine} />
        </Link>

        <div className={styles.desktopNav}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.enquireLink}>
            Enquire
          </Link>
        </div>

        <button
          className={styles.hamburger}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <div className={styles.hamburgerBar} />
          <div className={styles.hamburgerBar} />
          <div className={styles.hamburgerBar} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.closeBtn}
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="3" y1="3" x2="15" y2="15" stroke="#FAF8F3" strokeWidth="1.5" />
              <line x1="15" y1="3" x2="3" y2="15" stroke="#FAF8F3" strokeWidth="1.5" />
            </svg>
          </button>
          <div className={styles.mobileLogo}>Stillness Reset Co.</div>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={styles.mobileEnquire}
            onClick={() => setMenuOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      )}

      {scrolled && (
        <Link href="/contact" className={styles.mobileCTA}>
          Enquire for Your Organisation →
        </Link>
      )}
    </>
  );
}
