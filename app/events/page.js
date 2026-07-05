import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata = {
  title: "Events & Workshops",
  description:
    "Sound bath meditations, women's circles, and day wellness retreats — discover upcoming events or browse our past gatherings at Stillness Reset Co.",
};

const UPCOMING_EVENTS = [
  {
    day: "08",
    month: "Jul",
    year: "2026",
    tag: "Energy Healing",
    tagColor: "#7C9181",
    title: "Inner Healing Sanctuary (Small Group Session)",
    meta: "9:30am – 11:00am · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Over 1.5 hours, we will move through gentle breathwork, energy healing, and chakra clearing to melt away your stress.",
  },
  {
    day: "10",
    month: "Jul",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Sound Bath Meditation - Under The Night Sky",
    meta: "7:00pm – 8:00pm · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Join our sound bath meditation under the night Sky. Step away from the noise of the week and end your Friday by allowing resonant healing frequencies to wash away accumulated stress.",
  },
  {
    day: "12",
    month: "Jul",
    year: "2026",
    tag: "Yin Yoga",
    tagColor: "#7C9181",
    title: "Gentle Yin Yoga Trial Class (Beginner Friendly)",
    meta: "4:00pm – 5:00pm · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Curious about Yin Yoga but not sure where to start? This Sunday, join me for a beginner-friendly Yin Yoga Trial class!",
  },
  {
    day: "18",
    month: "Jul",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Sound Bath Meditation at High St Holistic",
    meta: "4:00pm – 5:00pm · High Street Holistic, Preston",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Wash away the stress of your busy week with a deeply relaxing Sound Bath. If you find it hard to meditate in silence because your mind is always racing, a sound bath is the perfect solution.",
  },
  {
    day: "26",
    month: "Jul",
    year: "2026",
    tag: "Women's Circle",
    tagColor: "#7C9181",
    title: "Women's Circle for Mindfulness & Self-Love",
    meta: "10:00am – 11:30am · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Pause, reconnect, and nurture your inner self. Join our intimate women's circle to step out of the daily rush. Through guided meditation and restorative mindfulness practices, we will create a safe sanctuary.",
  },
  {
    day: "29",
    month: "Aug",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Stillness Reset - Winter Day Retreat at Peninsula Hot Springs",
    meta: "9:30am – 4:00pm · Mornington Peninsula Hotspring",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "An immersive day-long wellness retreat at Mornington Peninsula Hot Springs. Reconnect with nature and regulate your nervous system.",
  },
  {
    day: "03",
    month: "Oct",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Soulflow Yoga & Healing Retreat - Ubud, Bali",
    meta: "TBA · Ubud- Bali",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Reconnect. Rejuvenate. Flow. Escape to the spiritual heart of Ubud for a 6-day immersive journey of self-discovery. Soulflow is designed for anyone seeking to hit 'reset,' heal, and find balance.",
  },
];

const PAST_EVENTS = [
  {
    day: "28",
    month: "Jun",
    year: "2026",
    tag: "Energy Healing",
    tagColor: "#7C9181",
    title: "Kundalini Revive Energy Healing",
    meta: "10:00am – 11:30am · The space between, Melbourne",
    soldOut: false,
    excerpt: "A deeply restorative energy healing session focused on activating your inner flow and releasing mental blockages.",
  },
  {
    day: "21",
    month: "Jun",
    year: "2026",
    tag: "Women's Circle",
    tagColor: "#7C9181",
    title: "Women's Circle for Mindfulness & Self-Love",
    meta: "10:00am – 11:30am · Stillness Reset Co, Melbourne",
    soldOut: false,
    excerpt: "An intimate gathering of women focusing on gentle breathwork, meditation, and self-love practices to regulate the nervous system.",
  },
  {
    day: "14",
    month: "Jun",
    year: "2026",
    tag: "Wellness Event",
    tagColor: "#7C9181",
    title: "Workshop 2: Quantum Radiance - Cellular Reset for Emotional Regulation During Menopause",
    meta: "9:00am – 12:00pm · Satori Hair, Melbourne",
    soldOut: false,
    excerpt: "A 3-hour immersion into the emotional and physical landscapes of menopause. Move beyond 'just enduring' the shifts and learn to navigate this transition with body-based tools.",
  },
  {
    day: "12",
    month: "Jun",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Sound Bath Meditation - Under The Night Sky",
    meta: "7:00pm – 8:00pm · Stillness Reset Co, Melbourne",
    soldOut: false,
    excerpt: "A beautiful evening session under the night sky to restore energetic alignment and calm the mind using therapeutic frequencies.",
  },
  {
    day: "07",
    month: "Jun",
    year: "2026",
    tag: "Breathwork",
    tagColor: "#7C9181",
    title: "Empowering Breathwork: A Somatic Journey to Release Stagnation and Reclaim Inner Calm",
    meta: "10:00am – 11:00am · Stillness Reset Co, Melbourne",
    soldOut: false,
    excerpt: "A somatic breathwork journey at our Glen Waverley studio to release stored stress, regulate the body, and expand clarity.",
  },
  {
    day: "06",
    month: "Jun",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Soulflow Winter Day Retreat at Peninsula Hot Springs",
    meta: "10:00am – 4:00pm · Mornington Peninsula Hotspring",
    soldOut: true,
    excerpt: "Our signature day retreat combining sound healing, breathwork, and thermal hot springs bathing. Completely sold out.",
  },
  {
    day: "08",
    month: "May",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Sound Bath Meditation - Under The Night Sky",
    meta: "7:00pm – 8:00pm · Stillness Reset Co, Melbourne",
    soldOut: true,
    excerpt: "A celestial sound bath experience under the glass roof of our studio, aligned with the lunar cycle for deep restoration.",
  },
  {
    day: "03",
    month: "May",
    year: "2026",
    tag: "Wellness Event",
    tagColor: "#7C9181",
    title: "Workshop 1: Quantum Radiance - Cellular Reset for Hormonal Health & Balance",
    meta: "9:00am – 12:00pm · Satori Hair, Melbourne",
    soldOut: false,
    excerpt: "A 3-hour deep dive into hormone health and nervous system regulation using science-backed somatic practices.",
  },
  {
    day: "26",
    month: "Apr",
    year: "2026",
    tag: "Women's Circle",
    tagColor: "#7C9181",
    title: "Women's Circle for Mindfulness & Self-Love",
    meta: "10:00am – 11:30am · Stillness Reset Co, Melbourne",
    soldOut: true,
    excerpt: "A warm and safe women's circle to slow down, share space, and regulate our internal systems through gentle ritual.",
  },
  {
    day: "11",
    month: "Apr",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Pottery Workshop & Soundhealing with Dana & Titin",
    meta: "9:30am – 12:30pm · Avonhurst Drive, Melbourne",
    soldOut: false,
    excerpt: "A tactile and auditory creative collaboration blending the earthiness of pottery-making with soothing sound frequencies.",
  },
  {
    day: "21",
    month: "Mar",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Sound Bath Meditation at High St Holistic Preston",
    meta: "7:00pm – 8:00pm · High Street Holistic, Preston",
    soldOut: true,
    excerpt: "A deeply relaxing Sound Bath in the beautiful Preston space. Completely sold out.",
  },
  {
    day: "01",
    month: "Mar",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Quiet Earth Day Retreat - Second Session",
    meta: "10:00am – 4:00pm · Mornington Peninsula Hot Springs",
    soldOut: true,
    excerpt: "Due to high demand, a second session of our restorative Peninsula Hot Springs day retreat was held.",
  },
  {
    day: "28",
    month: "Feb",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Quiet Earth Day Retreat",
    meta: "10:00am – 4:00pm · Mornington Peninsula Hot Springs",
    soldOut: true,
    excerpt: "A fully booked immersive retreat designed to reset body and mind amidst natural thermal pools.",
  },
  {
    day: "04",
    month: "Nov",
    year: "2025",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Quiet Earth Yoga Retreat",
    meta: "Weekend · 393 Dean-Barkstead Road, Rocklyn",
    soldOut: true,
    excerpt: "A soul-nourishing weekend escape in Rocklyn to rest, practice yoga, and reconnect with our authentic selves.",
  },
  {
    day: "23",
    month: "Aug",
    year: "2025",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Sound Bath Meditation with Titin",
    meta: "4:30pm – 5:30pm · Yoga Cave, Melbourne",
    soldOut: true,
    excerpt: "A quiet afternoon session using crystalline sound bowls to help participants sink into a deep state of meditation.",
  },
  {
    day: "25",
    month: "May",
    year: "2025",
    tag: "Wellness Event",
    tagColor: "#7C9181",
    title: "Heartfelt High Tea Experience",
    meta: "2:00pm – 5:00pm · Templestowe Lower, Melbourne",
    soldOut: true,
    excerpt: "A special celebratory event in honor of Mother's Day, combining wellness practices and connection with a high tea experience.",
  },
];

export default function EventsPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Upcoming Events Section */}
        <div className={styles.head}>
          <div>
            <Reveal className="eyebrow">
              <div className="line" />
              <span>Upcoming Events</span>
            </Reveal>
            <Reveal delay={100} as="h2" className={styles.heading}>
              Experiences to look forward to
            </Reveal>
          </div>
          <Reveal
            as="a"
            className={styles.viewAll}
            href="https://www.trybooking.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All on TryBooking →
          </Reveal>
        </div>

        <div className={styles.list}>
          {UPCOMING_EVENTS.map((e, i) => (
            <Reveal key={e.title + e.day + e.month} delay={i * 80} className={styles.row}>
              <div className={styles.rowLeft}>
                <div className={styles.date}>
                  <div className={styles.dateDay}>{e.day}</div>
                  <div className={styles.dateMonth}>{e.month}</div>
                  <div className={styles.dateYear}>{e.year}</div>
                </div>
                <div className={styles.divider} />
                <div className={styles.details}>
                  <div className={styles.tag} style={{ color: e.tagColor }}>
                    {e.tag}
                  </div>
                  <div className={styles.title}>
                    {e.title}
                    {e.soldOut && <span className={styles.soldOutBadge}>Sold Out</span>}
                  </div>
                  <div className={styles.meta}>{e.meta}</div>
                  {e.excerpt && <p className={styles.excerpt}>{e.excerpt}</p>}
                </div>
              </div>
              <div className={styles.actions}>
                {e.soldOut ? (
                  <div className={styles.soldOutText}>Sold Out</div>
                ) : (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.bookBtn} ${styles.bookBtnBrown}`}
                  >
                    Book Now
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Past Events Section */}
        <div className={styles.pastSection}>
          <div className={styles.head}>
            <div>
              <Reveal className="eyebrow">
                <div className="line" />
                <span>Past Events</span>
              </Reveal>
              <Reveal delay={100} as="h2" className={styles.heading}>
                Moments of stillness &amp; reset
              </Reveal>
            </div>
          </div>

          <div className={styles.list}>
            {PAST_EVENTS.map((e, i) => (
              <Reveal key={e.title + e.day + e.month + e.year} delay={i * 40} className={styles.pastRow}>
                <div className={styles.rowLeft}>
                  <div className={styles.date}>
                    <div className={styles.dateDay}>{e.day}</div>
                    <div className={styles.dateMonth}>{e.month}</div>
                    <div className={styles.dateYear}>{e.year}</div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.details}>
                    <div className={styles.tag}>{e.tag}</div>
                    <div className={styles.title}>{e.title}</div>
                    <div className={styles.meta}>{e.meta}</div>
                    {e.excerpt && <p className={styles.excerpt}>{e.excerpt}</p>}
                  </div>
                </div>
                <div className={styles.actions}>
                  <div className={`${styles.pastStatus} ${e.soldOut ? styles.pastStatusSoldOut : ""}`}>
                    {e.soldOut ? "Sold Out" : "Completed"}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
