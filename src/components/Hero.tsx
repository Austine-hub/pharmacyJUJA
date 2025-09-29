// src/components/Hero.tsx
import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

// Dynamically import all images from /assets/hero
const imageModules = import.meta.glob("../assets/hero/*.{jpg,png,jpeg}", {
  eager: true,
  import: "default",
});

const images: { src: string; alt: string }[] = Object.values(imageModules).map(
  (src, index) => ({
    src: src as string,
    alt: `Pharmacy banner ${index + 1}`, // You can customize alt text later
  })
);

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <section className={styles.hero}>
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={styles.slideImage}
            loading="lazy"
          />
        </div>
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
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </section>
  );
};

export default Hero;
