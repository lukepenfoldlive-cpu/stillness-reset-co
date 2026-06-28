import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.grid}>
        <Reveal className={styles.portraitWrap}>
          <div className={styles.portrait}>
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              viewBox="0 0 400 533"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="400" height="533" fill="#D8CFBF" />
              <defs>
                <pattern id="ph" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">
                  <line x1="0" y1="0" x2="0" y2="14" stroke="#C8BBAA" strokeWidth="0.7" />
                </pattern>
              </defs>
              <rect width="400" height="533" fill="url(#ph)" />
              <ellipse cx="200" cy="165" rx="68" ry="78" fill="#C0B09C" opacity="0.5" />
              <path d="M60 533 Q200 340 340 533" fill="#C0B09C" opacity="0.38" />
              <text x="200" y="510" textAnchor="middle" fill="#A89880" fontFamily="serif" fontSize="11" letterSpacing="3">
                TITIN · FOUNDER PORTRAIT
              </text>
            </svg>
            <div className={styles.portraitCornerH} />
            <div className={styles.portraitCornerV} />
          </div>
        </Reveal>

        <div>
          <Reveal className="eyebrow">
            <div className="line" />
            <span>Meet Titin</span>
          </Reveal>
          <Reveal delay={100} as="h2" className={styles.heading}>
            Six years in corporate.
            <br />
            <em>A lifetime learning to listen.</em>
          </Reveal>
          <Reveal delay={150} as="blockquote" className={styles.blockquote}>
            &ldquo;I realised that modern workplace wellbeing often misses the
            point. Telling an exhausted employee to practise self-care
            doesn&apos;t work when their nervous system is locked in chronic
            fight-or-flight.&rdquo;
          </Reveal>
          <Reveal delay={200} className={styles.bioParas}>
            <p>
              For six years, Titin&apos;s professional life was governed by
              the monthly sales dashboard. Like many high performers, she
              treated stress as a fuel source — until the fuel ran out.
              Complete burnout made the decision for her.
            </p>
            <p>
              Today, as a Holistic Counsellor, Spiritual Coach, and Intuitive
              Energy Healer, she brings those two worlds together —
              partnering with organisations who recognise that sustainable
              success cannot come at the expense of human vitality.
            </p>
            <p>
              Her approach replaces the corporate culture of pushing through
              with the transformative power of tuning in.
            </p>
          </Reveal>
          <Reveal delay={280} className={styles.tags}>
            <span className={styles.tag}>Holistic Counsellor</span>
            <span className={styles.tag}>Spiritual Coach</span>
            <span className={styles.tag}>Intuitive Energy Healer</span>
            <span className={styles.tag}>Corporate Wellness Consultant</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
