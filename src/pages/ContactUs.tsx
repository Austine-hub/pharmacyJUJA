import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./ContactUs.module.css";


interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: integrate API or email service
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className={styles.container} aria-labelledby="contact-heading">
      <h1 id="contact-heading" className={styles.title}>
        Contact Our Hospital
      </h1>

      <p className={styles.description}>
        For medical inquiries or appointment requests, you can reach our team
        during{" "}
        <span className={styles.highlight}>9:30 AM – 12:00 PM</span> daily via
        live chat. Outside these hours, please leave us a message and we will
        respond promptly.
      </p>

      <div className={styles.buttonContainer}>
        <button
          className={styles.chatButton}
          aria-label="Start WhatsApp chat with hospital support"
        >
          💬 Chat with us on WhatsApp
        </button>
      </div>

      <p className={styles.alternativeText}>
        You may also reach us via phone or email:
      </p>

      <div className={styles.contactInfo}>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:info@yourhospital.com"
            className={styles.link}
            aria-label="Send email to hospital"
          >
            info@yourhospital.com
          </a>
        </p>
        <p>
          📞 Tel:{" "}
          <a
            href="tel:+254123456789"
            className={styles.link}
            aria-label="Call hospital support"
          >
            +254 123456789, +254 987654321
          </a>
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Your name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your email"
          />
        </div>

        <textarea
          name="message"
          placeholder="How can we help you?"
          className={styles.textarea}
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          aria-label="Your message"
        />

        <button type="submit" className={styles.submitButton}>
          📨 Send Message
        </button>
      </form>
    </section>
  );
}
