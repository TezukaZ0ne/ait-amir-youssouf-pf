import { Lato } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import styles from "./ProfessionalCard.module.css";

// Même police que professional-card-astro (chargée via Google Fonts là-bas)
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-lato",
});

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
    <div className={`${styles.container} ${lato.className} ${lato.variable}`}>
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profileImage} alt={name} />
        </div>
      </div>
    </div>
  );
};
