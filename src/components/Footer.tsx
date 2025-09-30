import React from 'react';
import { FaTwitter } from 'react-icons/fa'; // Twitter bird icon
// import { FaXTwitter } from 'react-icons/fa6'; // Uncomment if you want the new "X" logo
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>USEFUL LINKS</h3>
          <ul className={styles.linkList}>
            <li><a href="#" className={styles.link}>Home</a></li>
            <li><a href="#" className={styles.link}>About Us</a></li>
            <li><a href="#" className={styles.link}>Ask The Doctor</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>&nbsp;</h3>
          <ul className={styles.linkList}>
            <li><a href="#" className={styles.link}>Legal Terms of Sales and Conditions</a></li>
            <li><a href="#" className={styles.link}>Customer Agreement</a></li>
            <li><a href="#" className={styles.link}>Privacy Policy</a></li>
            <li><a href="#" className={styles.link}>Sitemap</a></li>
            <li><a href="#" className={styles.link}>Trusted Medical Information</a></li>
            <li>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.twitterLink}
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className={styles.twitterIcon} />
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>INFORMATION</h3>
          <div className={styles.infoContent}>
            <p className={styles.infoText}>
              AJANJAPharmacy.com offers prescription drugs and over the counter medications but does not offer controlled prescription drugs. We are certified by the Kenya Pharmacists and Poisons Board.
            </p>
            
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <div className={styles.logoText}>
                  <span className={styles.logoMain}>AJANJA</span>
                  <span className={styles.logoSub}>PHARMACY</span>
                </div>
                <div className={styles.logoTagline}>CIPA • SAFE • SERVICE</div>
              </div>
            </div>

            <div className={styles.copyright}>
              <p>Copyright © 2025 - All Rights Reserved.</p>
              <p>AJANJAPharmacy.com Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
