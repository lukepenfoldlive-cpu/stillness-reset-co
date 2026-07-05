"use client";

import { useState } from "react";
import styles from "./page.module.css";

const CORPORATE_SERVICES = [
  { value: "breathwork", label: "Breathwork Sessions" },
  { value: "soundbath", label: "Sound Bath Meditation" },
  { value: "energy", label: "Energy Healing" },
  { value: "coaching", label: "Soul-Led Coaching" },
  { value: "lunch", label: "Lunch & Reset" },
  { value: "retreat", label: "Corporate Wellness Retreat" },
  { value: "multiple", label: "Multiple / Not Sure Yet" },
];

const PRIVATE_SERVICES = [
  { value: "private-soundbath", label: "Private Sound Bath" },
  { value: "group-soundbath", label: "Group Sound Bath" },
  { value: "womens-circle", label: "Women's Circle" },
  { value: "not-sure", label: "Not Sure Yet" },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [enquiryType, setEnquiryType] = useState("corporate");
  const [service, setService] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.successBox}>
        <div className={styles.successHeading}>Thank you.</div>
        <p className={styles.successBody}>
          Your enquiry has been received. We&apos;ll be in touch within 1–2
          business days.
        </p>
      </div>
    );
  }

  const isCorporate = enquiryType === "corporate";
  const isGroupPrivate = service === "group-soundbath" || service === "womens-circle";

  function selectType(type) {
    setEnquiryType(type);
    setService("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.typeToggle} role="radiogroup" aria-label="Enquiry type">
        <button
          type="button"
          className={`${styles.typeBtn} ${isCorporate ? styles.typeBtnActive : ""}`}
          aria-pressed={isCorporate}
          onClick={() => selectType("corporate")}
        >
          Corporate
        </button>
        <button
          type="button"
          className={`${styles.typeBtn} ${!isCorporate ? styles.typeBtnActive : ""}`}
          aria-pressed={!isCorporate}
          onClick={() => selectType("private")}
        >
          Private &amp; Group
        </button>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="name">Your Name *</label>
          <input id="name" name="name" type="text" required placeholder="Jane Smith" />
        </div>
        {isCorporate ? (
          <div className={styles.field}>
            <label htmlFor="company">Company *</label>
            <input id="company" name="company" type="text" required placeholder="Acme Pty Ltd" />
          </div>
        ) : (
          <div className={styles.field}>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="04XX XXX XXX" />
          </div>
        )}
      </div>

      {isCorporate && (
        <div className={styles.formRow}>
          <div className={styles.field}>
            <label htmlFor="role">Your Role</label>
            <input id="role" name="role" type="text" placeholder="People & Culture Manager" />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="04XX XXX XXX" />
          </div>
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={isCorporate ? "jane@yourcompany.com.au" : "jane@email.com"}
        />
      </div>

      {isCorporate ? (
        <div className={styles.field}>
          <label htmlFor="teamSize">Approx. Team Size</label>
          <input id="teamSize" name="teamSize" type="text" placeholder="e.g. 25 people" />
        </div>
      ) : (
        <div className={styles.formRow}>
          <div className={styles.field}>
            <label htmlFor="preferredDate">Preferred Date(s)</label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="text"
              placeholder="e.g. Mid-September weekend"
            />
          </div>
          {isGroupPrivate && (
            <div className={styles.field}>
              <label htmlFor="participants">Number of Participants</label>
              <input
                id="participants"
                name="participants"
                type="text"
                placeholder="e.g. 8 people"
              />
            </div>
          )}
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="service">Service Interest</label>
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select a service…</option>
          {(isCorporate ? CORPORATE_SERVICES : PRIVATE_SERVICES).map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={
            isCorporate
              ? "Tell us about your team and what you're looking for…"
              : "Tell us a little about what you're looking for…"
          }
        />
      </div>

      <button type="submit" className={styles.submitBtn}>
        Send Enquiry
      </button>
    </form>
  );
}
