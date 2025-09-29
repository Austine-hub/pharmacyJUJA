import styles from "./OurServices.module.css";

// Import local service images
import Service1 from "../assets/services/service1.png";
import Service2 from "../assets/services/service2.png";
import Service3 from "../assets/services/service3.png";
import Service4 from "../assets/services/service4.png";
import Service5 from "../assets/services/service5.png";
import Service6 from "../assets/services/service6.png";
import Service7 from "../assets/services/service7.png";

interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "consultation",
    image: Service2,
    title: "Consultation",
    description: "Professional guidance to help manage your health effectively.",
  },
  {
    id: "prescription",
    image: Service1,
    title: "Prescription Medication",
    description: "Dispensing prescriptions and over-the-counter medication.",
  },

  {
    id: "delivery",
    image: Service3,
    title: "Delivery Services",
    description:
      "Conveniently have your medications delivered to your doorstep.",
  },
  {
    id: "bp-check",
    image: Service4,
    title: "Blood Pressure Check",
    description: "Monitor blood pressure to manage and prevent hypertension.",
  },
  {
    id: "sugar-check",
    image: Service5,
    title: "Blood Sugar Check",
    description: "Quick tests to monitor and manage blood sugar effectively.",
  },
  {
    id: "immunizations",
    image: Service6,
    title: "Immunizations",
    description:
      "Vaccines to protect against flu, typhoid, pneumonia, and more.",
  },

    {
    id: "compounding",
    image: Service7,
    title: "Compounding",
    description: "Custom medication formulations tailored to your needs.",
  },
  
];

const OurServices = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>
          Compassionate care with professional excellence
        </p>

        <div className={styles.servicesGrid}>
          {services.map(({ id, image, title, description }) => (
            <div key={id} className={styles.serviceCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={image}
                  alt={title}
                  className={styles.serviceImage}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.serviceTitle}>{title}</h3>
              <p className={styles.serviceDescription}>{description}</p>
            </div>
          ))}
        </div>
      </div>

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