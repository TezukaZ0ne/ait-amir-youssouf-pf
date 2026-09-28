import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import styles from "./ProfessionalCard.module.css";

interface ProfessionalCardProps {
  name: string;
  position: string;
  aboutMe: string;
  linkedin: string;
  github: string;
  cvLink: string;
  profileImage: string;
}

export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  name,
  position,
  aboutMe,
  linkedin,
  github,
  cvLink,
  profileImage,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.descripcion}>
          <h1>{name}</h1>
          <h2>{position}</h2>
          <p>{aboutMe}</p>
          <div className={styles.icons}>
            <a
              href={linkedin}
              className={styles.hoverText}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={github}
              className={styles.hoverText}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={cvLink}
              className={styles.hoverText}
              target="_blank"
              rel="noopener noreferrer"
              title="CV"
              aria-label="CV"
            >
              <HiOutlineDocumentArrowDown size={28} />
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <div
            className={styles.photo}
            role="img"
            aria-label={name}
            style={{ backgroundImage: `url(${profileImage})` }}
          />
        </div>
      </div>
    </div>
  );
};
