import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <h1 className={styles.mainTitle}>About Our Pharmacy</h1>
          <p className={styles.heroDescription}>
            We are your trusted healthcare partner, delivering exceptional
            pharmaceutical services, expert guidance, and personalized care to
            every patient we serve.
          </p>
        </div>

        {/* Mission & Services */}
        <div className={styles.missionSection}>
          <div className={styles.missionGrid}>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>🏥</div>
              <h3>Our Mission</h3>
              <p>
                To provide comprehensive pharmaceutical care that improves the
                quality of life for patients and communities through expert
                guidance, compassion, and innovation.
              </p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>💊</div>
              <h3>Our Services</h3>
              <p>
                From prescription dispensing to preventive care, our services
                include health consultations, medication therapy management,
                immunizations, and customized compounding solutions.
              </p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>🔬</div>
              <h3>Our Commitment</h3>
              <p>
                Guided by a team of experienced healthcare professionals, we
                uphold the highest standards of safety, research, and clinical
                expertise to ensure optimal patient outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h4>Excellence</h4>
              <p>
                Delivering world-class pharmaceutical care and exceeding patient
                expectations at every step.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h4>Integrity</h4>
              <p>
                Building trust through honesty, accountability, and ethical
                practices in everything we do.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h4>Innovation</h4>
              <p>
                Adopting advanced technologies and evidence-based practices to
                improve healthcare delivery.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h4>Compassion</h4>
              <p>
                Providing personalized care with empathy, respect, and
                dedication to patient wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
