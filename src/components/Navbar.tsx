import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: "/", label: "HOME" },
  { to: "/products", label: "PRODUCTS" },
  { to: "/services", label: "OUR SERVICES" },
  { to: "/about-us", label: "ABOUT US" },
  { to: "/contact-us", label: "CONTACT US" },
  { to: "/team", label: "OUR TEAM" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.container}>
        {/* Logo / Brand placeholder */}
        <div className={styles.brand}>MyPharma</div>

        {/* Hamburger button */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav links */}
        <ul
          className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}
        >
          {navItems.map(({ to, label }) => (
            <li key={to} className={styles.navItem}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={closeMenu}
                end
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
