import React, { useEffect, useState, useCallback } from "react";
import { Phone, Stethoscope, MessageCircle } from "lucide-react";
import styles from "./Topbar.module.css";

const Topbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const lastScrollY = parseInt(
      document.documentElement.style.getPropertyValue('--last-scroll-y') || '0'
    );
    
    setIsHidden(currentScrollY > lastScrollY && currentScrollY > 50);
    document.documentElement.style.setProperty('--last-scroll-y', currentScrollY.toString());
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
    
    return () => {
      window.removeEventListener("scroll", requestScroll);
    };
  }, [handleScroll]);

  const handlePhoneCall = useCallback(() => {
    window.location.href = "tel:+254700000000";
  }, []);

  const handleWhatsAppOrder = useCallback(() => {
    window.open(
      "https://wa.me/254700000000?text=Hello! I would like to order medicine.",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <nav className={`${styles.navbar} ${isHidden ? styles.hidden : ""}`} role="navigation">
      {/* Left: Tagline */}
      <div className={styles.leftSection}>
        <span className={styles.tagline}>
          <Stethoscope className={styles.taglineIcon} aria-hidden="true" />
          Caring for Your Health, Every Step of the Way
        </span>
      </div>

      {/* Right: Contact & Actions */}
      <div className={styles.rightSection}>
        {/* Contact Icons */}
        <div className={styles.contactIcons}>
          <a 
            href="tel:+254700000000" 
            className={styles.contactLink}
            aria-label="Call pharmacy"
            title="Call Pharmacy"
          >
            <Phone aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            aria-label="Contact via WhatsApp"
            title="WhatsApp"
          >
            <MessageCircle aria-hidden="true" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <button 
            className={styles.callButton}
            onClick={handlePhoneCall}
            aria-label="Call pharmacy now"
          >
            <Phone size={16} aria-hidden="true" /> 
            Call Pharmacy
          </button>
          <button 
            className={styles.whatsappButton}
            onClick={handleWhatsAppOrder}
            aria-label="Order medicine via WhatsApp"
          >
            <MessageCircle size={16} aria-hidden="true" /> 
            Order Medicine
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;