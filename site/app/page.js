import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

const TESTIMONIALS = [
  {
    quote:
      "After just two Lunch & Reset sessions, the shift in our team's energy was unmistakable. People were more present, less reactive, and genuinely willing to support each other.",
    name: "[Client Name]",
    role: "People & Culture Director, Melbourne",
  },
  {
    quote:
      "Titin's sound bath was unlike anything I'd encountered. Within 20 minutes I was in a state of rest I hadn't reached in years. I left genuinely renewed, not just relaxed.",
    name: "[Client Name]",
    role: "Executive Leader, Financial Services",
  },
  {
    quote:
      "The Women's Circle gave me something I didn't know I was missing — genuine connection with women who understood exactly what I was carrying. I came home a different person.",
    name: "[Client Name]",
    role: "Corporate Manager & Women's Circle Participant",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <svg
          className={styles.heroPattern}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="rp" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <circle cx="150" cy="150" r="48" fill="none" stroke="#C4956A" strokeWidth="1" />
              <circle cx="150" cy="150" r="96" fill="none" stroke="#C4956A" strokeWidth="0.65" />
              <circle cx="150" cy="150" r="144" fill="none" stroke="#C4956A" strokeWidth="0.4" />
            </pattern>
            <radialGradient id="hg" cx="75%" cy="30%" r="55%">
              <stop offset="0%" stopColor="#C4956A" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6A4830" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#rp)" />
          <rect width="100%" height="100%" fill="url(#hg)" />
        </svg>
        <div className={styles.heroBar} />
        <div className={styles.heroInner}>
          <div className="eyebrow">
            <div className="line" />
            <span>Corporate Wellness · Melbourne</span>
          </div>
          <h1 className={styles.heroH1}>
            Where High Performance
            <br />
            Meets <em>Deep Restoration</em>
          </h1>
          <p className={styles.heroLede}>
            Evidence-based holistic wellness for Melbourne&apos;s forward-thinking
            organisations. We regulate nervous systems — because sustainable
            success begins with human vitality.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn btn-gold">
              Enquire for Your Organisation
            </Link>
            <Link href="/corporate" className="btn btn-outline">
              Explore Our Services
            </Link>
          </div>
          <div className={styles.scrollHint}>
            <div className={styles.scrollLine} />
            <span className={styles.scrollLabel}>Scroll</span>
          </div>
        </div>
      </section>

      {/* CREDENTIALS BAR */}
      <div className={styles.credentials}>
        <span>Melbourne Based</span>
        <div className={styles.divider} />
        <span>Corporate &amp; Private Services</span>
        <div className={styles.divider} />
        <span>Evidence-Based Approach</span>
        <div className={styles.divider} />
        <span>Mornington Peninsula Retreats</span>
      </div>

      {/* THE REALITY */}
      <section className={styles.reality}>
        <div className={styles.sectionInner}>
          <Reveal className="eyebrow">
            <div className="line" />
            <span>The Reality</span>
          </Reveal>
          <Reveal delay={100} as="h2" className={styles.realityHeading}>
            Corporate wellness programmes are failing your people.
          </Reveal>
          <Reveal delay={200} as="p" className={styles.realityLede}>
            When a team member&apos;s nervous system is locked in chronic
            fight-or-flight, no amount of mindset coaching, wellbeing apps, or
            Friday yoga will help. The body must come first.
          </Reveal>
          <div className={styles.realityGrid}>
            <Reveal delay={0} className={styles.realityCard}>
              <div className={styles.realityNum}>01</div>
              <h3>Burnout is Biological</h3>
              <p>
                Burnout is not a mindset problem. It is a physiological state —
                the nervous system&apos;s response to sustained stress beyond
                its regulatory capacity. Standard productivity tools cannot
                reverse it.
              </p>
            </Reveal>
            <Reveal delay={120} className={styles.realityCard}>
              <div className={styles.realityNum}>02</div>
              <h3>Mindset Hacks Don&apos;t Work</h3>
              <p>
                You cannot mindset-hack your way out of a depleted nervous
                system. Telling an exhausted employee to &quot;practise
                self-care&quot; or download a meditation app bypasses the
                fundamental biological issue entirely.
              </p>
            </Reveal>
            <Reveal delay={240} className={styles.realityCard}>
              <div className={styles.realityNum}>03</div>
              <h3>The Body Must Come First</h3>
              <p>
                Lasting performance begins when the autonomic nervous system
                shifts from survival mode into regulated, present-state
                function. That is where our work begins — and why it delivers
                results standard programmes don&apos;t.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.sectionInner}>
          <Reveal className="eyebrow">
            <div className="line" />
            <span>What Clients Say</span>
          </Reveal>
          <Reveal delay={100} as="h2" className={styles.testimonialsHeading}>
            Real results. Real humans.
          </Reveal>
          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name + i}
                delay={i * 120}
                className={styles.testimonialCard}
              >
                <div className={styles.quoteMark}>&ldquo;</div>
                <p>{t.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar} />
                  <div>
                    <div className={styles.testimonialName}>— {t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
