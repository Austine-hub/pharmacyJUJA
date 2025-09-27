import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={`${styles.navLink} ${styles.active}`}>
              HOME
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/products" className={styles.navLink}>
              PRODUCTS
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/blog" className={styles.navLink}>
              BLOG
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/about" className={styles.navLink}>
              ABOUT US
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={styles.navLink}>
              CONTACT US
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/cart" className={styles.navLink}>
              CART
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;