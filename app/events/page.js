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
    excerpt: "Over 1.5 hours, we will move through gentle breathwork, energy healing, and chakra clearing to melt away your stress",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1782384709458-YT906ITSXUPAIUURSTF0/1.+Inner+Healing+Sanctuary.jpg",
  },
  {
    day: "10",
    month: "Jul",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "SOUND BATH MEDITATION- Under The Night Sky",
    meta: "7:00pm – 8:00pm · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Join our sound bath meditation under the night Sky. Step away from the noise of the week and end your Friday by allowing resonant healing frequencies to wash away accumulated stress. In this immersive acoustic journey, we use therapeutic sound to create vibrations that work on a cellular level. These frequencies help to guide your brainwaves into a deep, restorative state, effortlessly quieting the conscious mind and allowing the physical body to profoundly relax. Set under the canopy of the night sky, this session is a beautiful opportunity to restore your energetic balance, harmonise your nervous system, and step into the weekend feeling completely reset and aligned. The Benefits of this Practice Include: Cellular Harmony: Utilises resonant frequencies to restore balance and harmony on a cellular and energetic level. Deep Physical Relaxation: releases tension built up throughout the week. Quiet Mind: Slows brainwave activity to quiet the constant stream of conscious thoughts and mental chatter. Improved Sleep Quality: Promotes a state of profound relaxation that carries over into deeper, more restorative sleep.",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1782386546981-MKEAUA5XZMN21CHZ7LWU/2.+Sound+Bath+10+July.jpg",
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
    excerpt: "Curious about Yin Yoga but not sure where to start? 🧘‍♀️ This Sunday, join me for a beginner-friendly Yin Yoga Trial class!",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1782386115573-LQ7H06ARRM8BJ4D9SOVW/3.+Yin+Yoga+12+July+%281%29.jpg",
  },
  {
    day: "18",
    month: "Jul",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Sound bath Meditation at High st Holistic Preston",
    meta: "4:00pm – 5:00pm · High Street Holistic",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Wash away the stress of your busy week with a deeply relaxing Sound Bath. If you find it hard to meditate in silence because your mind is always racing, a sound bath is the perfect solution. You do not need any experience at all, your only job is to lie down, close your eyes, and let your body rest.",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1782388771799-CV4CW2Y7UL1AYP816JMR/Soundbath+18+July+preston.jpg",
  },
  {
    day: "26",
    month: "Jul",
    year: "2026",
    tag: "Women's Circle",
    tagColor: "#7C9181",
    title: "WOMEN’S CIRCLE for Mindfulness & Self-love",
    meta: "10:00am – 11:30am · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Pause, reconnect, and nurture your inner self. Join our intimate women's circle to step out of the daily rush. Through guided meditation and restorative mindfulness practices, we will create a safe sanctuary for you to slow down, regulate, and cultivate profound self-love. Give yourself permission to just be .",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1782386751656-UCF0KCBNU5PGVSZ42UGX/5.+Women%E2%80%99s+Circle+26+July.jpg",
  },
  {
    day: "29",
    month: "Aug",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Stillness Reset- Winter Day Retreat at Peninsula Hot Spring",
    meta: "9:30am – 4:00pm · Mornington Peninsula Hotspring",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1782871548415-MTW595R3WI5WC6IRYF5P/Soulflow+Peninsula+Sat+29+August.jpg",
  },
  {
    day: "03",
    month: "Oct",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Soulflow Yoga & Healing Retreat- Ubud Bali",
    meta: "TBA · Ubud- Bali",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Reconnect. Rejuvenate. Flow. Escape to the spiritual heart of Ubud for a 6-day immersive journey of self-discovery. Soulflow is designed for anyone seeking to hit \"reset,\" heal, and find balance amidst lush rice paddies and tropical greenery. Whether you are looking for deep relaxation, spiritual growth, or simply a break from the noise of daily life, this all-inclusive retreat provides the perfect sanctuary to nourish your mind, body, and soul.",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1782810691297-NZI28ZM69UDWPQ61FD4A/SOULFLOW+new.jpeg",
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
    meta: "10:00am – 11:30am · The space between",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1777679522553-3D4RSD7UXN6RZRII3FFL/Kundalini+Revive+Session+April+Melbourne+%28Instagram+Post+%2845%29%29+%281%29.jpg",
  },
  {
    day: "21",
    month: "Jun",
    year: "2026",
    tag: "Women's Circle",
    tagColor: "#7C9181",
    title: "WOMEN’S CIRCLE for Mindfulness & Self-love",
    meta: "10:00am – 11:30am · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Pause, reconnect, and nurture your inner self. Join our intimate women's circle to step out of the daily rush. Through guided meditation and restorative mindfulness practices, we will create a safe sanctuary for you to slow down, regulate, and cultivate profound self-love. Give yourself permission to just be .",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1777289862182-NYZWKIMEUQ1UFOMNPA36/Women%E2%80%99s+%28Instagram+Post+%2845%29%29.jpg",
  },
  {
    day: "14",
    month: "Jun",
    year: "2026",
    tag: "Wellness Event",
    tagColor: "#7C9181",
    title: "𝗪𝗢𝗥𝗞𝗦𝗛𝗢𝗣 𝟮: 𝗤𝘂𝗮𝗻𝘁𝘂𝗺 𝗥𝗮𝗱𝗶𝗮𝗻𝗰𝗲-𝘾𝙚𝙡𝙡𝙪𝙡𝙖𝙧 𝙍𝙚𝙨𝙚𝙩 𝙛𝙤𝙧 𝙀𝙢𝙤𝙩𝙞𝙤𝙣𝙖𝙡 𝙍𝙚𝙜𝙪𝙡𝙖𝙩𝙞𝙤𝙣 𝘿𝙪𝙧𝙞𝙣𝙜 𝙈𝙚𝙣𝙤𝙥𝙖𝙪𝙨𝙚",
    meta: "9:00am – 12:00pm · Satori Hair",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "A 3-hour immersion into the emotional and physical landscapes of menopause. Move beyond \"just enduring\" the shifts and learn to navigate this transition with practical, body-based tools for regulation and ease.",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1774433402493-J6UR09W6LACAKKYIFIC5/Quantum+radiance+2.png",
  },
  {
    day: "12",
    month: "Jun",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "SOUND BATH MEDITATION- Under The Night Sky",
    meta: "7:00pm – 8:00pm · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Join our sound bath meditation under the night Sky. Step away from the noise of the week and end your Friday by allowing resonant healing frequencies to wash away accumulated stress. In this immersive acoustic journey, we use therapeutic sound to create vibrations that work on a cellular level. These frequencies help to guide your brainwaves into a deep, restorative state, effortlessly quieting the conscious mind and allowing the physical body to profoundly relax. Set under the canopy of the night sky, this session is a beautiful opportunity to restore your energetic balance, harmonise your nervous system, and step into the weekend feeling completely reset and aligned. The Benefits of this Practice Include: Cellular Harmony: Utilises resonant frequencies to restore balance and harmony on a cellular and energetic level. Deep Physical Relaxation: releases tension built up throughout the week. Quiet Mind: Slows brainwave activity to quiet the constant stream of conscious thoughts and mental chatter. Improved Sleep Quality: Promotes a state of profound relaxation that carries over into deeper, more restorative sleep.",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1778323200602-WG6ST30IZLHJD7T45P7O/Sound+Bath+.png",
  },
  {
    day: "07",
    month: "Jun",
    year: "2026",
    tag: "Breathwork",
    tagColor: "#7C9181",
    title: "Empowering Breathwork: A Somatic Journey to Release Stagnation and Reclaim Inner Calm",
    meta: "10:00am – 11:00am · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "Breathwork is a powerful yet simple practice that uses your breath to reset your body, calm your mind, and release stored stress and emotions. The ancient practice of Breathwork have the power to assist in an individual’s personal evolution and can lead deeper states of wisdom. Join me at the Stillness Reset Co studio in Glen Waverley for a profound morning of somatic release and energetic alignment. The Benefits of this Practice Include: 🤍 Reduce stress and anxiety 🤍 Improve focus and mental clarity 🤍 Boost energy naturally Because breathwork is such a deeply transformative practice. Please be aware that these sessions can evoke deep physiological and emotional responses. This is simply your body's natural way of clearing out stagnant energy, unprocessed feelings, and stored tension. However, for your safety, we strongly recommend seeking clearance from a healthcare professional before deciding to purchase a ticket if you fall under any of the following categories: * Cardiovascular conditions * Personal history of heart attacks, high blood pressure, or angina * Glaucoma or retinal detachment * Recent serious injury or surgery * Any condition that requires you to take medication to assist with breathing or lowering blood pressure * Personal history of PTSD, panic attacks, or psychosis * Personal history of aneurysms (or family history) * You are currently in the 2nd or 3rd trimester of pregnancy or are breastfeeding",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1778322728582-RVX7JYIQO4TF0FNQRD2E/Empowering+Breathwork.jpg",
  },
  {
    day: "06",
    month: "Jun",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "SOULFLOW Winter Day Retreat at Peninsula Hot Springs",
    meta: "10:00am – 4:00pm · Mornington Peninsula Hotspring",
    link: "https://www.trybooking.com",
    soldOut: true,
    excerpt: "",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1775446603408-XGGAZSY5PWP2KJ46V29Z/Soulflow+Peninsula+Sat+6+June.png",
  },
  {
    day: "08",
    month: "May",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "SOUND BATH MEDITATION- Under The Night Sky",
    meta: "7:00pm – 8:00pm · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: true,
    excerpt: "Join our sound bath meditation under the stars. Experience the profound connection between the Earth and the Cosmos at our upcoming Celestial Sound Bath Journey . This isn't your typical indoor meditation. At the Stillness Reset Co. home studio in Glen Waverley , we invite you to lie back and look upward. Our unique clear-roof studio allows you to gaze directly at the moon and stars as you are enveloped in a sea of therapeutic sound. Through the power of frequency and intention, this one-hour immersion is designed to: Downregulate the nervous system for deep restoration. Harmonize your energetic field with the lunar cycle. Expand your awareness through heart-brain coherence.",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1777187204144-ZD23CLVJ6R88EBVY4OZ1/Sound+Bath+8+May+.jpg",
  },
  {
    day: "03",
    month: "May",
    year: "2026",
    tag: "Wellness Event",
    tagColor: "#7C9181",
    title: "Workshop 1: Quantum Radiance - Cellular Reset for Hormonal Health & Balance",
    meta: "9:00am – 12:00pm · Satori Hair",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "A 3-hour immersion into hormonal health and nervous system regulation. Move beyond \"pushing through\" and learn to support your body with soft, effective, science-backed tools.",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1774431726349-YUASJS1SWMBP4CUURMFF/Quantum+Radiance+1.png",
  },
  {
    day: "26",
    month: "Apr",
    year: "2026",
    tag: "Women's Circle",
    tagColor: "#7C9181",
    title: "WOMEN’S CIRCLE for Mindfulness & Self-love",
    meta: "10:00am – 11:30am · Stillness Reset Co, Melbourne",
    link: "https://www.trybooking.com",
    soldOut: true,
    excerpt: "Pause, reconnect, and nurture your inner self. Join our intimate women's circle to step out of the daily rush. Through guided meditation and restorative mindfulness practices, we will create a safe sanctuary for you to slow down, regulate, and cultivate profound self-love. Give yourself permission to just be .",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1777187585988-30IWVTRP96DJPG74FFLO/Women%E2%80%99s+%28Instagram+Post+%2845%29%29+%281%29.png",
  },
  {
    day: "11",
    month: "Apr",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Pottery Workshop & Soundhealing with Dana & Titin",
    meta: "9:30am – 12:30pm · Avonhurst Drive",
    link: "https://www.trybooking.com",
    soldOut: false,
    excerpt: "",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1773039368909-TDYGECKWKEXV88E6IR8J/Pottery+Workshop.png",
  },
  {
    day: "21",
    month: "Mar",
    year: "2026",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Sound bath Meditation at High st Holistic Preston Saturday 21 March 2026",
    meta: "7:00pm – 8:00pm · High Street Holistic",
    link: "https://www.trybooking.com",
    soldOut: true,
    excerpt: "",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1770710552098-2L0CDXN2Z8FC9KXEW3FJ/Soundbath+21+Mar.png",
  },
  {
    day: "01",
    month: "Mar",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Quite Earth Day retreat Second Session",
    meta: "10:00am – 4:00pm · Mornington Peninsula Hotspring",
    link: "https://www.trybooking.com",
    soldOut: true,
    excerpt: "",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1764994332918-UUU8EHNY83MUHH8NA41A/Quiet+Earth+Day+Retreat+-+Portrait+%282%29.png",
  },
  {
    day: "28",
    month: "Feb",
    year: "2026",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Quite Earth Day retreat",
    meta: "10:00am – 4:00pm · Mornington Peninsula Hotspring",
    link: "https://www.trybooking.com",
    soldOut: true,
    excerpt: "",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1764994332918-UUU8EHNY83MUHH8NA41A/Quiet+Earth+Day+Retreat+-+Portrait+%282%29.png",
  },
  {
    day: "04",
    month: "Nov",
    year: "2025",
    tag: "Day Retreat",
    tagColor: "#7C9181",
    title: "Quiet Earth Yoga Retreat",
    meta: "TBA · 393 Dean-Barkstead Road Rocklyn, VIC, 3364 Australia",
    link: "https://www.trybooking.com",
    soldOut: true,
    excerpt: "Join us for soulful weekend to rest, reconnect & return to your true self",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1752412633992-K3PQV470LIU00F01HWJG/event-image.png",
  },
  {
    day: "23",
    month: "Aug",
    year: "2025",
    tag: "Sound Bath",
    tagColor: "#7C9181",
    title: "Sound Bath Meditation with Titin",
    meta: "4:30pm – 5:30pm · Yoga Cave",
    link: "https://www.trybooking.com",
    soldOut: true,
    excerpt: "Step into a space of calm and healing. Let the sound guide you home to yourself.",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1753879563025-RSPDKJ8X8I33GS5A7D5Z/sound-bath-event.png",
  },
  {
    day: "25",
    month: "May",
    year: "2025",
    tag: "Wellness Event",
    tagColor: "#7C9181",
    title: "𝗛𝗲𝗮𝗿𝘁𝗳𝗲𝗹𝘁 𝗛𝗶𝗴𝗵 𝗧𝗲𝗮 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲",
    meta: "2:00pm – 5:00pm · 200 High Street Templestowe Lower, VIC, 3107 Australia",
    link: "https://www.trybooking.com",
    soldOut: true,
    excerpt: "To celebrate Mother’s Day, take a well-deserved break and treat yourself.",
    image_url: "https://images.squarespace-cdn.com/content/v1/686d0c2861d9072cd139598e/1753881080234-VFE1C5E1NG8RNJJDI4VE/hight-tea-event.png",
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
                
                {e.image_url && (
                  <div className={styles.thumbnail}>
                    <img src={e.image_url} alt={e.title} loading="lazy" />
                  </div>
                )}
                
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
                  
                  {e.image_url && (
                    <div className={styles.thumbnail}>
                      <img src={e.image_url} alt={e.title} loading="lazy" />
                    </div>
                  )}
                  
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
