import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

const EVENTS = [
  {
    day: "15",
    month: "Aug",
    tag: "Group Sound Bath",
    tagColor: "#7DAF88",
    title: "Evening Sound Bath Meditation",
    meta: "6:30pm – 8:00pm · Melbourne CBD",
    btnClass: "bookBtnBrown",
  },
  {
    day: "22",
    month: "Aug",
    tag: "Women's Circle",
    tagColor: "#D4A853",
    title: "Weekend Women's Gathering",
    meta: "Saturday 10:00am – 4:00pm · Venue TBC",
    btnClass: "bookBtnBrown",
  },
  {
    day: "06",
    month: "Sep",
    tag: "Corporate Retreat",
    tagColor: "#7DAF88",
    title: "Mornington Peninsula Day Retreat",
    meta: "Full Day · Mornington Peninsula Hot Springs",
    btnClass: "bookBtnGold",
  },
];

export default function EventsPage() {
  return (
    <section className={styles.section}>
      <div className="container">
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
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 100} className={styles.row}>
              <div className={styles.rowLeft}>
                <div className={styles.date}>
                  <div className={styles.dateDay}>{e.day}</div>
                  <div className={styles.dateMonth}>{e.month}</div>
                </div>
                <div className={styles.divider} />
                <div>
                  <div className={styles.tag} style={{ color: e.tagColor }}>
                    {e.tag}
                  </div>
                  <div className={styles.title}>{e.title}</div>
                  <div className={styles.meta}>{e.meta}</div>
                </div>
              </div>
              <a
                href="https://www.trybooking.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.bookBtn} ${styles[e.btnClass]}`}
              >
                Book Now
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
