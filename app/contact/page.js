import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss a corporate wellbeing programme or book a private sound healing session with Stillness Reset Co. in Melbourne.",
};

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <Reveal className="eyebrow">
            <div className="line" style={{ background: "rgba(124, 145, 129,0.85)" }} />
            <span style={{ color: "rgba(124, 145, 129,0.85)" }}>Enquiries</span>
          </Reveal>
          <Reveal delay={100} as="h2" className={styles.heading}>
            Let&apos;s talk about <em>what you need</em>
          </Reveal>
          <Reveal delay={200} as="p" className={styles.lede}>
            Whether it&apos;s a corporate wellbeing strategy or a personal
            sound healing session, we&apos;re here to find the right fit for
            you.
          </Reveal>

          <Reveal delay={240} className={styles.contactItems}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="15" height="13" viewBox="0 0 16 14" fill="none">
                  <rect x="1" y="1" width="14" height="12" rx="1" stroke="#7C9181" strokeWidth="1" fill="none" />
                  <path d="M1 2.5 L8 8 L15 2.5" stroke="#7C9181" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <a href="mailto:hello@stillnessresetco.com.au" className={styles.contactValue}>
                  hello@stillnessresetco.com.au
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="13" height="16" viewBox="0 0 14 18" fill="none">
                  <path
                    d="M7 1 C4.2 1 2 3.2 2 6 C2 10.5 7 17 7 17 C7 17 12 10.5 12 6 C12 3.2 9.8 1 7 1Z"
                    stroke="#7C9181"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle cx="7" cy="6" r="2" stroke="#7C9181" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Location</div>
                <span className={styles.contactValue}>Melbourne, Victoria, Australia</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className={styles.bookingBox}>
            <div className={styles.bookingLabel}>Private &amp; Group Bookings</div>
            <p className={styles.bookingBody}>
              Sound baths, group sessions, and Women&apos;s Circle tickets are
              available directly via TryBooking.
            </p>
            <a
              href="https://www.trybooking.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookingLink}
            >
              Book via TryBooking →
            </a>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
