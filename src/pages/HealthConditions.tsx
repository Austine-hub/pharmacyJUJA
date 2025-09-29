import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./HealthConditions.module.css";
import { healthConditions } from "../data/healthConditions";

// --- Icon Components ---
const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MiniArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Component ---
const HealthConditionCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag/swipe support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = direction === "left" ? -300 : 300;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeftStart.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    const walk = (e.pageX - startX.current) * -1;
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current + walk;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDragging.current = false;
    el.releasePointerCapture(e.pointerId);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Shop by Health Condition</h2>
      </header>

      <div className={styles.carouselContainer}>
        {/* Left Arrow */}
        <button
          className={`${styles.navButton} ${styles.leftArrow}`}
          onClick={() => scroll("left")}
          aria-label="Previous conditions"
          disabled={!canScrollLeft}
        >
          <ArrowLeftIcon />
        </button>

        {/* Carousel */}
        <div
          className={styles.carousel}
          ref={scrollContainerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          role="list"
        >
          {healthConditions.map(({ id, title, image, bgColor }) => (
            <div key={id} className={styles.card} role="listitem">
              <div className={styles.imageContainer}>
                <img
                  src={image}
                  alt={title}
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div
                className={styles.cardFooter}
                style={{ "--bgColor": bgColor } as React.CSSProperties}
              >
                <span className={styles.cardTitle}>{title}</span>
                <button className={styles.cardButton} aria-label={`View ${title}`}>
                  <MiniArrowRightIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className={`${styles.navButton} ${styles.rightArrow}`}
          onClick={() => scroll("right")}
          aria-label="Next conditions"
          disabled={!canScrollRight}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default HealthConditionCarousel;

