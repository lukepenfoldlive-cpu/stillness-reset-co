import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

const CARDS = [
  {
    label: "60–90 Minutes",
    labelColor: "#7DAF88",
    title: "Private Sound Bath",
    body:
      "A personalised one-on-one sound healing experience. Bowls, gongs, and chimes are tuned to your specific energetic frequency for a deeply restorative journey.",
    bar: "linear-gradient(to right, #7DAF88, #5A7A64)",
    titleColor: "#1E2A30",
    bodyColor: "#4A5A62",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="5" fill="#7DAF88" />
        <circle cx="18" cy="18" r="11" stroke="#7DAF88" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="18" cy="18" r="17" stroke="#7DAF88" strokeWidth="0.5" fill="none" opacity="0.28" />
      </svg>
    ),
  },
  {
    label: "Up to 12 Participants",
    labelColor: "#D4A853",
    title: "Group Sound Bath",
    body:
      "Share the experience. Small group sessions combining sound healing with guided breathwork and meditation — a powerful collective reset for up to twelve participants.",
    bar: "linear-gradient(to right, #D4A853, #B8924A)",
    titleColor: "#1E2A30",
    bodyColor: "#4A5A62",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="11" cy="18" r="5" fill="#D4A853" opacity="0.7" />
        <circle cx="25" cy="18" r="5" fill="#D4A853" />
        <circle cx="18" cy="11" r="5" fill="#D4A853" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: "Weekend Gathering",
    labelColor: "rgba(212,168,83,0.78)",
    title: "Women's Circle",
    body:
      "Weekend gatherings for women to connect, share, and be witnessed — ritual, sound, breathwork, and soul-led conversation in a safe, non-judgemental space.",
    bar: "linear-gradient(to right, #D4A853, rgba(212,168,83,0.2))",
    dark: true,
    titleColor: "#FAF8F3",
    bodyColor: "rgba(250,248,243,0.6)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="rgba(250,248,243,0.32)" strokeWidth="1" fill="none" />
        <circle cx="18" cy="18" r="8" stroke="rgba(250,248,243,0.62)" strokeWidth="1" fill="none" />
        <circle cx="18" cy="18" r="3" fill="#D4A853" />
      </svg>
    ),
  },
];

export default function PrivatePage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className="eyebrow">
          <div className="line" />
          <span>Private &amp; Group</span>
        </Reveal>
        <Reveal delay={100} as="h2" className={styles.heading}>
          Healing that meets you <em>exactly where you are</em>
        </Reveal>
        <Reveal delay={200} as="p" className={styles.lede}>
          Beyond the corporate setting, Titin offers deeply personal sound
          healing and women&apos;s gathering experiences open to all.
        </Reveal>

        <div className={styles.grid}>
          {CARDS.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 120}
              className={`${styles.card} ${c.dark ? styles.cardDark : ""}`}
            >
              <div className={styles.cardBar} style={{ background: c.bar }} />
              <div className={styles.cardIcon}>{c.icon}</div>
              <div className={styles.cardLabel} style={{ color: c.labelColor }}>
                {c.label}
              </div>
              <h3 style={{ color: c.titleColor }}>{c.title}</h3>
              <p style={{ color: c.bodyColor }}>{c.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360} className={styles.ctas}>
          <Link href="/events" className="btn btn-gold">
            View Upcoming Events
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Make an Enquiry
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
