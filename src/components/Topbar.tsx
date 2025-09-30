import React, { useEffect, useState, useCallback } from "react";
import { Phone, Stethoscope, MessageCircle } from "lucide-react";
import styles from "./Topbar.module.css";

const Topbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const lastScrollY = parseInt(
      document.documentElement.style.getPropertyValue("--last-scroll-y") || "0"
    );

    setIsHidden(currentScrollY > lastScrollY && currentScrollY > 50);
    document.documentElement.style.setProperty(
      "--last-scroll-y",
      currentScrollY.toString()
    );
  }, []);

  useEffect(() => {
    let ticking = false;
    const requestScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestScroll, { passive: true });
    return () => window.removeEventListener("scroll", requestScroll);
  }, [handleScroll]);

  const handlePhoneCall = () => {
    window.location.href = "tel:+254796787207";
  };

  const handleWhatsAppOrder = () => {
    window.open(
      "https://wa.me/254796787207?text=Hello! I would like to order medicine.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <nav
      className={`${styles.navbar} ${isHidden ? styles.hidden : ""}`}
      role="navigation"
    >
      {/* Left: Tagline */}
      <div className={styles.leftSection}>
        <span className={styles.tagline}>
          <Stethoscope className={styles.taglineIcon} aria-hidden="true" />
          Caring for Your Health, Every Step of the Way
        </span>
      </div>

      {/* Right: Actions (Compact on Mobile) */}
      <div className={styles.rightSection}>
        <button
          className={styles.iconButton}
          onClick={handlePhoneCall}
          aria-label="Call pharmacy now"
        >
          <Phone aria-hidden="true" />
          <span className={styles.btnText}>Call</span>
        </button>
        <button
          className={styles.iconButton}
          onClick={handleWhatsAppOrder}
          aria-label="Order medicine via WhatsApp"
        >
          <MessageCircle aria-hidden="true" />
          <span className={styles.btnText}>WhatsApp</span>
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
