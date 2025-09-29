import { useEffect, useRef } from 'react';
import styles from './OurPharmacy.module.css';

// Import your images
import contraceptivesImg from './../assets/medicine/contraceptives.png';
import coughColdImg from './../assets/medicine/cough.png';
import herHealthImg from './../assets/medicine/female.png';
import hisHealthImg from './../assets/medicine/men.png';
import team1Img from './../assets/team/team1.png';
import team2Img from './../assets/team/team2.png';
import team3Img from './../assets/team/team3.png';

const OurPharmacy = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      position += speed;
      const cardWidth = 270; // approximate width including gap
      
      if (position >= cardWidth) {
        position = 0;
        // Move first card to end
        if (carousel.firstElementChild) {
          carousel.appendChild(carousel.firstElementChild);
        }
      }
      
      carousel.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const categories = [
    { title: 'Contraceptives', image: contraceptivesImg },
    { title: 'Cough & Cold', image: coughColdImg },
    { title: 'Her Health', image: herHealthImg },
    { title: 'His Health', image: hisHealthImg },
    // Duplicate for seamless loop
    { title: 'Contraceptives', image: contraceptivesImg },
    { title: 'Cough & Cold', image: coughColdImg },
    { title: 'Her Health', image: herHealthImg },
    { title: 'His Health', image: hisHealthImg },
  ];

  return (
    <div className={styles.pharmacySection}>
      <div className={styles.header}>OUR PHARMACY</div>
      
      <h2 className={styles.title}>Better care for all health categories</h2>
      
      <div className={styles.carouselContainer}>
        <div className={styles.carousel} ref={carouselRef}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{category.title}</h3>
              <div className={styles.imageWrapper}>
                <img src={category.image} alt={category.title} className={styles.cardImage} />
              </div>
              <button className={styles.addButton}>
                <span className={styles.plusIcon}>+</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.guidanceSection}>
        <div className={styles.teamImages}>
          <div className={styles.teamCircle}>
            <img src={team1Img} alt="Team member 1" />
          </div>
          <div className={styles.teamCircle}>
            <img src={team2Img} alt="Team member 2" />
          </div>
          <div className={styles.teamCircle}>
            <img src={team3Img} alt="Team member 3" />
          </div>
        </div>

        <div className={styles.guidanceText}>
          <h3 className={styles.guidanceTitle}>Need medical guidance?</h3>
          <p className={styles.guidanceSubtitle}>Speak with our in-house care team</p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 20 20" fill="none">
                <path d="M2 3h16v14H2V3z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 3l8 6 8-6" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>08179017319</span>
            </div>
            
            <div className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 20 20" fill="none">
                <path d="M2 5.5C2 3 4 2 6.5 2h7C16 2 18 3 18 5.5v9c0 2.5-2 3.5-4.5 3.5h-7C4 18 2 17 2 14.5v-9z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M14 7l-4.5 3.5L5 7" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>08179017319</span>
            </div>
            
            <div className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>customerservice@onehealthng.com</span>
            </div>
          </div>
        </div>

        <button className={styles.callButton}>
          Call us now
          <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="none">
            <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OurPharmacy;