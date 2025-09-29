import React from "react";
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
  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.container}>
        <ul className={styles.navList}>
          {navItems.map(({ to, label }) => (
            <li key={to} className={styles.navItem}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                // ✅ No need to manually manage aria-current (React Router does it)
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
