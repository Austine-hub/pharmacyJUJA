import React from "react";
import styles from "./OurServices.module.css";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OurServices: React.FC = () => {
  const services: Service[] = [
    {
      id: "prescription",
      icon: <span className={styles.icon}>💊</span>,
      title: "Prescription Medication",
      description: "Dispensing prescriptions and over-the-counter medication.",
    },
    {
      id: "compounding",
      icon: <span className={styles.icon}>⚕️</span>,
      title: "Compounding",
      description: "Custom medication formulations e.g., skin preparations.",
    },
    {
      id: "delivery",
      icon: <span className={styles.icon}>🚚</span>,
      title: "Delivery Services",
      description: "Conveniently have your medications delivered at your doorstep.",
    },
    {
      id: "bp-check",
      icon: <span className={styles.icon}>🩺</span>,
      title: "Blood Pressure Check",
      description: "Measure blood pressure levels to monitor hypertension.",
    },
    {
      id: "sugar-check",
      icon: <span className={styles.icon}>💉</span>,
      title: "Blood Sugar Check",
      description: "To monitor and manage blood sugar levels effectively.",
    },
    {
      id: "immunizations",
      icon: <span className={styles.icon}>🧪</span>,
      title: "Immunizations",
      description: "We provide vaccines to prevent flu, typhoid, pneumonia & more.",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>
          Compassionate care with professional excellence
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width extra section (refill / contact CTA) */}
      <div className={styles.extraSection}>
        <div className={styles.extraContent}>
          <h3 className={styles.extraHeading}>
            📱 Send Your Prescription for Refill
          </h3>
          <p className={styles.extraSubtext}>
            Fast, reliable, and confidential service at your convenience.
          </p>
          <p className={styles.extraNumber}>0714 217 617</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
