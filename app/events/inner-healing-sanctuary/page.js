"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

export default function InnerHealingPage() {
  useEffect(() => {
    // Dynamically inject the TryBooking widget script on mount
    // to ensure it scans the DOM and renders the iframe inside our container
    const script = document.createElement("script");
    script.src = "https://www.trybooking.com/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when unmounting the page
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.backLink}>
          <a href="/events">← Back to Events</a>
        </div>

        <div className={styles.header}>
          <div className="eyebrow">
            <div className="line" />
            <span>Workshop Registration</span>
          </div>
          <h1 className={styles.heading}>Inner Healing Sanctuary</h1>
          <p className={styles.subheading}>
            Join us for a 1.5-hour small group session of gentle breathwork, 
            energy healing, and chakra clearing to melt away stress.
          </p>
        </div>

        <div className={styles.widgetContainer}>
          <div 
            className="tryb-widget" 
            data-type="landingPageEmbed" 
            data-eid="1603957"
          ></div>
        </div>
      </div>
    </section>
  );
}
