import styles from "./TeamOfExperts.module.css";
import { teamMembers } from "../data/Team";

const TeamOfExperts = () => {
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
        {teamMembers.map(({ id, name, title, specialization, image }) => (
          <div key={id} className={styles.teamMember}>
            <div className={styles.memberImageContainer}>
              <img
                src={image}
                alt={name}
                className={styles.memberImage}
                loading="lazy"
              />
              <div className={styles.memberOverlay}>
                <span className={styles.viewProfile}>View Profile</span>
              </div>
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>{name}</h3>
              <p className={styles.memberTitle}>{title}</p>
              <p className={styles.memberSpecialization}>{specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamOfExperts;

