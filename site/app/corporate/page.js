import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

const SERVICES = [
  {
    duration: "45 Minutes",
    title: "Breathwork Sessions",
    body:
      "Guided conscious-connected breathwork to activate the parasympathetic nervous system. Fully deployable in any office space — no equipment required.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M4 19 C4 19 10 9 19 9 C28 9 34 19 34 19 C34 19 28 29 19 29 C10 29 4 19 4 19Z" stroke="#7DAF88" strokeWidth="1.4" fill="none" />
        <circle cx="19" cy="19" r="4" fill="#D4A853" />
      </svg>
    ),
  },
  {
    duration: "60 Minutes",
    title: "Sound Bath Meditation",
    body:
      "Immersive Tibetan and crystal singing bowl soundscapes that shift brainwave states from beta (stress) to theta (restoration) within minutes.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="4" fill="#D4A853" />
        <circle cx="19" cy="19" r="10" stroke="#7DAF88" strokeWidth="1.2" fill="none" />
        <circle cx="19" cy="19" r="17" stroke="#7DAF88" strokeWidth="0.6" fill="none" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    duration: "Individual & Group",
    title: "Energy Healing",
    body:
      "Intuitive energy work identifying and clearing the subconscious blockages driving overwork, imposter syndrome, and decision fatigue in high-performing professionals.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M19 3 L22 16 L35 19 L22 22 L19 35 L16 22 L3 19 L16 16 Z" stroke="#7DAF88" strokeWidth="1.2" fill="none" />
        <circle cx="19" cy="19" r="3" fill="#D4A853" />
      </svg>
    ),
  },
  {
    duration: "45 Minutes",
    title: "Soul-Led Coaching",
    body:
      "One-on-one executive coaching sessions to reconnect professionals with their authentic drivers — beyond KPI pressures, burnout cycles, and self-imposed limitations.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M7 13 Q7 7 13 7 L25 7 Q31 7 31 13 L31 21 Q31 27 25 27 L21 27 L15 34 L15 27 L13 27 Q7 27 7 21 Z" stroke="#7DAF88" strokeWidth="1.2" fill="none" />
        <circle cx="19" cy="17" r="2.5" fill="#D4A853" />
      </svg>
    ),
  },
  {
    duration: "45 Minutes",
    title: "Lunch & Reset",
    body:
      "A midday wellbeing activation combining breathwork, sound, and guided reflection. Restore focus and presence for the afternoon without disrupting the working day.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="13" stroke="#7DAF88" strokeWidth="1.2" fill="none" />
        <path d="M19 8 L19 19 L27 19" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    duration: "Full Day & Overnight",
    title: "Corporate Wellness Retreat",
    body:
      "Immersive off-site experiences at Mornington Peninsula Hot Springs for teams navigating high pressure, major transitions, or sustained depletion.",
    featured: true,
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M4 32 L14 14 L19 22 L25 10 L34 32 Z" stroke="#7DAF88" strokeWidth="1.2" fill="none" />
        <circle cx="25" cy="10" r="3" fill="#D4A853" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    title: "Identify",
    body:
      "We assess your team's current stress profile, identifying where depletion is most acute and what approach will have the greatest impact.",
  },
  {
    title: "Regulate",
    body:
      "Breathwork and sound therapy shift the autonomic nervous system from fight-or-flight into calm, present-state function — the biological foundation for high performance.",
  },
  {
    title: "Release",
    body:
      "Coaching and energy healing address the mental and emotional patterns driving overwork, imposter syndrome, and disconnection from purpose.",
  },
  {
    title: "Restore",
    body:
      "You don't just get a more productive employee — you get a more grounded, capable human being who brings their full self to their work.",
  },
];

export default function CorporatePage() {
  return (
    <>
      {/* SERVICES */}
      <section className={styles.intro}>
        <div className="container">
          <Reveal className="eyebrow">
            <div className="line" style={{ background: "rgba(212,168,83,0.85)" }} />
            <span style={{ color: "rgba(212,168,83,0.85)" }}>Corporate Wellness</span>
          </Reveal>
          <div className={styles.introHead}>
            <Reveal delay={100} as="h2" className={styles.introHeading}>
              Programmes designed for <em>high-performing teams</em>
            </Reveal>
            <Reveal delay={200} as="p" className={styles.introLede}>
              All programmes are deployable at your premises, tailored to
              your team, and built on a clinical understanding of nervous
              system regulation.
            </Reveal>
          </div>

          <div className={styles.grid}>
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 80}
                className={`${styles.card} ${s.featured ? styles.cardFeatured : ""}`}
              >
                <div className={styles.cardIcon}>{s.icon}</div>
                <div
                  className={`${styles.cardDuration} ${
                    s.featured ? styles.cardDurationFeatured : ""
                  }`}
                >
                  {s.duration}
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className={styles.cardRule} />
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.discussCta}>
            <Link href="/contact" className={styles.discussLink}>
              Discuss a Programme for Your Team →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* THE METHOD */}
      <section className={styles.method}>
        <div className={styles.methodGrid}>
          <div>
            <Reveal className="eyebrow">
              <div className={`line ${styles.methodEyebrowLine}`} />
              <span className={styles.methodEyebrowText}>Our Method</span>
            </Reveal>
            <Reveal delay={100} as="h2" className={styles.methodHeading}>
              A framework that works at the level of the body
            </Reveal>
            <Reveal delay={200} as="p" className={styles.methodLede}>
              Research shows that regulated nervous systems produce
              measurably better cognitive function, emotional intelligence,
              and decision-making capacity. Our programmes create that shift
              — sustainably, not temporarily.
            </Reveal>
          </div>
          <div className={styles.steps}>
            {STEPS.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 100}
                className={`${styles.step} ${
                  i === STEPS.length - 1 ? styles.stepLast : ""
                }`}
              >
                <div className={styles.stepNum}>0{i + 1}</div>
                <div>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MORNINGTON PENINSULA RETREAT */}
      <section className={styles.retreat}>
        <svg
          className={styles.retreatBg}
          viewBox="0 0 1280 540"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1280" height="540" fill="#253E2E" />
          <rect width="1280" height="270" fill="#2E4E3A" opacity="0.7" />
          <rect y="270" width="1280" height="270" fill="#1E3228" opacity="0.85" />
          <line x1="0" y1="270" x2="1280" y2="270" stroke="#7DAF88" strokeWidth="0.5" opacity="0.28" />
          <path d="M0 270 Q200 155 380 270 Q540 168 720 270 Q900 138 1080 270 Q1180 172 1280 270" fill="#293E30" opacity="0.82" />
          <path d="M0 312 Q320 302 640 312 Q960 322 1280 312" stroke="#7DAF88" strokeWidth="0.5" fill="none" opacity="0.22" />
          <path d="M0 348 Q320 338 640 348 Q960 358 1280 348" stroke="#7DAF88" strokeWidth="0.3" fill="none" opacity="0.15" />
          <text x="640" y="452" textAnchor="middle" fill="rgba(250,248,243,0.1)" fontFamily="serif" fontSize="12" letterSpacing="5">
            MORNINGTON PENINSULA HOT SPRINGS · PHOTOGRAPHY
          </text>
        </svg>
        <div className={styles.retreatOverlay} />
        <div className={styles.retreatInner}>
          <Reveal className="eyebrow">
            <div className="line" />
            <span>Corporate Retreat</span>
          </Reveal>
          <Reveal delay={100} as="h2" className={styles.retreatHeading}>
            Immersive restoration at{" "}
            <em>Mornington Peninsula Hot Springs</em>
          </Reveal>
          <Reveal delay={200} as="p" className={styles.retreatLede}>
            Full-day and overnight corporate wellness retreats for teams
            navigating high pressure, major transitions, or sustained
            depletion. A complete reset in Victoria&apos;s most restorative
            environment.
          </Reveal>
          <Reveal delay={300}>
            <Link href="/contact" className="btn btn-gold">
              Enquire About a Retreat
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
