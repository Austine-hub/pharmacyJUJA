import React, { useEffect, useState } from "react";
import styles from "./Topbar.module.css";

const Topbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setIsHidden(true);
      } else {
        // scrolling up → show
        setIsHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isHidden ? styles.hidden : ""}`}>
      <div className={styles.leftSection}>
        <span className={styles.tagline}>Our Client Our Priority!</span>
      </div>

      <div className={styles.rightSection}>
        {/* Socials */}
        <div className={styles.socialIcons}>
          {/* ... your icons here ... */}
        </div>

        {/* Buttons */}
        <div className={styles.actionButtons}>
          <button className={styles.callButton}>Call To Order</button>
          <button className={styles.whatsappButton}>Order Through WhatsApp</button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
