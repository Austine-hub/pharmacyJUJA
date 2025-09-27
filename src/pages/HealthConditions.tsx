import React, { useRef, useState, useEffect } from "react";
import styles from "./HealthConditions.module.css";
import { healthConditions } from "../data/healthConditions";

const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MiniArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HealthConditionCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // --- For drag/swipe support ---
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  // --- Drag handlers ---
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX || e.clientX;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    const x = e.pageX || e.clientX;
    const walk = (x - startX.current) * -1; // drag direction
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current + walk;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = false;
    scrollContainerRef.current.releasePointerCapture(e.pointerId);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll(); // initial check
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Shop By Your Health Condition</h2>
        <nav className={styles.navigation}>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={() => scroll("left")}
            aria-label="Previous"
            disabled={!canScrollLeft}
          >
            <ArrowLeftIcon />
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={() => scroll("right")}
            aria-label="Next"
            disabled={!canScrollRight}
          >
            <ArrowRightIcon />
          </button>
        </nav>
      </header>

      <div className={styles.carouselContainer}>
        <div
          className={styles.carousel}
          ref={scrollContainerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {healthConditions.map(({ id, title, image, bgColor }) => (
            <div key={id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.cardImage} />
              </div>
              <div className={styles.cardFooter} style={{ ["--bgColor" as any]: bgColor }}>
                <span className={styles.cardTitle}>{title}</span>
                <button className={styles.cardButton} aria-label={`View ${title}`}>
                  <MiniArrowRightIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthConditionCarousel;
