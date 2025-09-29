import { useState, useCallback } from "react";
import type { FormEvent, ChangeEvent } from "react";
import styles from "./ContactUs.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM_STATE: FormData = {
  name: "",
  email: "",
  message: "",
};

const CONTACT_INFO = {
  email: "info@yourhospital.com",
  phones: ["+254 123456789", "+254 987654321"],
  whatsappNumber: "254123456789", // Replace with actual WhatsApp number
  hours: "9:30 AM – 12:00 PM",
} as const;

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        // TODO: integrate API or email service
        console.log("Form submitted:", formData);
        
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        setFormData(INITIAL_FORM_STATE);
        // TODO: Show success message to user
      } catch (error) {
        console.error("Form submission error:", error);
        // TODO: Show error message to user
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent(
      "Hello, I would like to inquire about hospital services."
    );
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <section className={styles.container} aria-labelledby="contact-heading">
      <h1 id="contact-heading" className={styles.title}>
        Contact Our Hospital
      </h1>

      <p className={styles.description}>
        For medical inquiries or appointment requests, you can reach our team
        during <span className={styles.highlight}>{CONTACT_INFO.hours}</span>{" "}
        daily via live chat. Outside these hours, please leave us a message and
        we will respond promptly.
      </p>

      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.chatButton}
          onClick={handleWhatsAppClick}
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
            href={`mailto:${CONTACT_INFO.email}`}
            className={styles.link}
            aria-label="Send email to hospital"
          >
            {CONTACT_INFO.email}
          </a>
        </p>
        <p>
          📞 Tel:{" "}
          <a
            href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, "")}`}
            className={styles.link}
            aria-label="Call hospital support"
          >
            {CONTACT_INFO.phones.join(", ")}
          </a>
        </p>
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
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
            autoComplete="name"
            disabled={isSubmitting}
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
            autoComplete="email"
            disabled={isSubmitting}
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
          disabled={isSubmitting}
        />

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "📤 Sending..." : "📨 Send Message"}
        </button>
      </form>
    </section>
  );
}