
// src/components/Hero.tsx
import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

import Banner1 from "./../assets/hero/banner1.jpg";
import Banner2 from "./../assets/hero/banner2.jpg";
import Banner3 from "./../assets/hero/banner3.jpg";
import Banner4 from "./../assets/hero/banner4.jpg";
import Banner5 from "./../assets/hero/banner5.jpg";
import Banner6 from "./../assets/hero/banner6.png";
import Banner7 from "./../assets/hero/banner7.png";
import Banner8 from "./../assets/hero/banner8.jpg";
import Banner9 from "./../assets/hero/banner9.jpg";

const images: string[] = [
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7,
  Banner8,
  Banner9,
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <section className={styles.hero}>
      {/* Background Slides */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <h1>Trusted Pharmacy, Caring for Your Health</h1>
        <p>
          From prescriptions to wellness essentials, we make healthcare more
          accessible, reliable, and compassionate for you and your family.
        </p>


        <div className={styles.ctaGroup}>
          <Link to="/products" className={styles.primaryBtn}>
            Shop Medicines
          </Link>
          <Link to="/contact-us" className={styles.secondaryBtn}>
            Talk to a Pharmacist
          </Link>
        </div>

      </div>

      {/* Navigation Arrows */}
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default Hero;
