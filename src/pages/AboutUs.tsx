import React from 'react';
import styles from './AboutUs.module.css';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  specialization: string;
  image: string;
}

const AboutUs: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Lydi Thomas",
      title: "MBA, MD Dermatology",
      specialization: "Dermatology & Skin Care",
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Dr. Priyom Bose",
      title: "Ph.D.",
      specialization: "General and Anesthesiologist, Ph.D. from Biology and Medicine",
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Dr. Shweta Sinha",
      title: "B.Sc. Psychology, M.Sc. Psychology, Ph.D. Psychology",
      specialization: "Clinical Psychology",
      image: "/api/placeholder/200/200"
    },
    {
      id: 4,
      name: "Sneha Cheryakath",
      title: "B.Sc. Microbiology",
      specialization: "Microbiology",
      image: "/api/placeholder/200/200"
    },
    {
      id: 5,
      name: "Benedetto Cortesi",
      title: "B.Sc. Technology, M.Sc. Technology",
      specialization: "Technology & Innovation",
      image: "/api/placeholder/200/200"
    },
    {
      id: 6,
      name: "Priyanjana Pramanik",
      title: "Health Writer, Public Health, Maternal and Child Health, Immunization",
      specialization: "Health Writing & Public Health Communication",
      image: "/api/placeholder/200/200"
    },
    {
      id: 7,
      name: "Tanira Raj Looba",
      title: "B.Sc. Biotechnology",
      specialization: "Biotechnology Research",
      image: "/api/placeholder/200/200"
    },
    {
      id: 8,
      name: "Pooja Rajkumar Palsania",
      title: "Clinical Research, Quality Assurance, Auditing, Regulatory Affairs, Medical Surgery Done Mediation and Arbitration",
      specialization: "Clinical Research & Quality Assurance",
      image: "/api/placeholder/200/200"
    },
    {
      id: 9,
      name: "Dr. Subhash S. Chopinkar",
      title: "Biotechnology, Microbiology, Also in Microbiology",
      specialization: "Biotechnology & Microbiology",
      image: "/api/placeholder/200/200"
    },
    {
      id: 10,
      name: "Dr. Chiara Stellhran",
      title: "Pulmonology and Respiratory, Ph.D. in Biology",
      specialization: "Pulmonology & Respiratory Medicine",
      image: "/api/placeholder/200/200"
    },
    {
      id: 11,
      name: "Hugo Francisco de Souza",
      title: "Bioinformatics, Evolutionary Biology, and Microbiology",
      specialization: "Bioinformatics & Evolutionary Biology",
      image: "/api/placeholder/200/200"
    },
    {
      id: 12,
      name: "Dr. Adreya Mandal",
      title: "M.D. Dermatology",
      specialization: "Dermatology & Skin Disorders",
      image: "/api/placeholder/200/200"
    },
    {
      id: 13,
      name: "Dr. Tomislav Stankovic",
      title: "Microbiology and Immunology and research in cancer",
      specialization: "Microbiology, Immunology & Cancer Research",
      image: "/api/placeholder/200/200"
    },
    {
      id: 14,
      name: "Dr. Neha Suryawani",
      title: "B.Sc. Microbiology, B.Sc. Microbiology degree from Panjabrao Deshmukh Krishi Vidyapeeth",
      specialization: "Microbiology & Agricultural Sciences",
      image: "/api/placeholder/200/200"
    },
    {
      id: 15,
      name: "Michael Greenwood",
      title: "B.Sc. Chemistry, B.Sc. Drug Chemistry and Discovery",
      specialization: "Chemistry & Drug Discovery",
      image: "/api/placeholder/200/200"
    },
    {
      id: 16,
      name: "Dr. Mary Cooke",
      title: "B.Sc. Biological Science, M.Sc. Cancer of Infectious Diseases, Immunology and Microbiology",
      specialization: "Infectious Diseases & Immunology",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <h1 className={styles.mainTitle}>About Our Pharmacy</h1>
          <p className={styles.heroDescription}>
            Your trusted healthcare partner committed to providing exceptional pharmaceutical services and personalized care to our community.
          </p>
        </div>

        {/* Mission Section */}
        <div className={styles.missionSection}>
          <div className={styles.missionGrid}>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>🏥</div>
              <h3>Our Mission</h3>
              <p>To provide comprehensive pharmaceutical care and health services that improve the quality of life for our patients and community members through expert guidance and personalized attention.</p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>💊</div>
              <h3>Our Services</h3>
              <p>We offer prescription medications, over-the-counter drugs, health consultations, medication therapy management, immunizations, and specialized compounding services.</p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>🔬</div>
              <h3>Our Commitment</h3>
              <p>Backed by a team of experienced healthcare professionals, we ensure the highest standards of pharmaceutical care with cutting-edge research and clinical expertise.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={styles.teamSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meet Our Expert Team</h2>
            <p className={styles.sectionDescription}>
              Our multidisciplinary team of healthcare professionals brings together decades of experience in pharmaceuticals, medicine, and patient care.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamMember}>
                <div className={styles.memberImageContainer}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={styles.memberImage}
                  />
                  <div className={styles.memberOverlay}>
                    <span className={styles.viewProfile}>View Profile</span>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberTitle}>{member.title}</p>
                  <p className={styles.memberSpecialization}>{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h4>Excellence</h4>
              <p>Maintaining the highest standards in pharmaceutical care and service delivery.</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Integrity</h4>
              <p>Building trust through honest, transparent, and ethical practices in all our interactions.</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Innovation</h4>
              <p>Embracing new technologies and methodologies to enhance patient outcomes.</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Compassion</h4>
              <p>Providing caring, personalized service that puts patient wellbeing first.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;