import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata = {
  title: "About Titin",
  description:
    "Meet Titin — Holistic Counsellor, Spiritual Coach, and Intuitive Energy Healer bringing six years of corporate experience to nervous-system-led wellness work.",
};

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.grid}>
        <Reveal className={styles.portraitWrap}>
          <div className={styles.portrait}>
            <Image
              src="/images/titin-about.webp"
              alt="Titin, founder of Stillness Reset Co."
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
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
