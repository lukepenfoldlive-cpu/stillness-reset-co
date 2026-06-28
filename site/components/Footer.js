import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brandName}>Stillness Reset Co.</div>
            <div className={styles.brandLine} />
            <p className={styles.brandCopy}>
              Holistic counselling and wellness for corporate Melbourne.
              Bridging high performance with deep restoration.
            </p>
            <div className={styles.socials}>
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/titincoachingandwellness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(250,248,243,0.42)" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="rgba(250,248,243,0.42)" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(250,248,243,0.42)" />
                </svg>
              </a>
              <a
                className={styles.socialLink}
                href="https://www.facebook.com/titisagie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 2H15C13.67 2 12 3.67 12 5V8H9V12H12V22H16V12H19L20 8H16V5C16 4.45 16.45 4 17 4H20V2H18Z"
                    stroke="rgba(250,248,243,0.42)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/titinmubarokah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="3" stroke="rgba(250,248,243,0.42)" strokeWidth="1.5" />
                  <path
                    d="M7 10V17M7 7V7.01M12 17V13C12 11.34 13.34 10 15 10C16.66 10 18 11.34 18 13V17M12 10V17"
                    stroke="rgba(250,248,243,0.42)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Corporate</div>
            <div className={styles.colLinks}>
              <Link href="/corporate">Breathwork</Link>
              <Link href="/corporate">Sound Bath</Link>
              <Link href="/corporate">Soul-Led Coaching</Link>
              <Link href="/corporate">Lunch &amp; Reset</Link>
              <Link href="/corporate">Wellness Retreats</Link>
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Private</div>
            <div className={styles.colLinks}>
              <Link href="/private">Private Sound Bath</Link>
              <Link href="/private">Group Sound Bath</Link>
              <Link href="/private">Women&apos;s Circle</Link>
              <Link href="/events">Upcoming Events</Link>
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Company</div>
            <div className={styles.colLinks}>
              <Link href="/about">About Titin</Link>
              <Link href="/contact">Contact</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © 2025 Stillness Reset Co. All rights reserved. Melbourne,
            Victoria, Australia.
          </span>
          <span>ABN: [Your ABN]</span>
        </div>
      </div>
    </footer>
  );
}
