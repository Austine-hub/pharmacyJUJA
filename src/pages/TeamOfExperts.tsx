import React from "react";
import styles from "./TeamOfExperts.module.css";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  specialization: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Lydi Thomas",
    title: "MBA, MD Dermatology",
    specialization: "Dermatology & Skin Care",
    image: "/api/placeholder/200/200",
  },
  {
    id: 2,
    name: "Dr. Priyom Bose",
    title: "Ph.D. Anesthesiology",
    specialization: "General & Anesthesiology",
    image: "/api/placeholder/200/200",
  },
  {
    id: 3,
    name: "Dr. Shweta Sinha",
    title: "Ph.D. Psychology",
    specialization: "Clinical Psychology",
    image: "/api/placeholder/200/200",
  },
  {
    id: 4,
    name: "Dr. Chiara Stellhran",
    title: "Ph.D. Pulmonology",
    specialization: "Respiratory Medicine",
    image: "/api/placeholder/200/200",
  },
  {
    id: 5,
    name: "Dr. Mary Cooke",
    title: "M.Sc. Infectious Diseases",
    specialization: "Infectious Diseases & Immunology",
    image: "/api/placeholder/200/200",
  },
  {
    id: 6,
    name: "Dr. Tomislav Stankovic",
    title: "Ph.D. Microbiology",
    specialization: "Microbiology & Cancer Research",
    image: "/api/placeholder/200/200",
  },
];

const TeamOfExperts: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Meet Our Expert Team</h2>
        <p className={styles.sectionDescription}>
          Our multidisciplinary healthcare professionals combine decades of
          experience in medicine, research, and patient-centered care.
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
              <p className={styles.memberSpecialization}>
                {member.specialization}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamOfExperts;
