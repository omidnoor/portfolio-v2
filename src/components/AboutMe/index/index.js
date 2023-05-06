import AboutCard from "../AboutCard";
import AboutImage from "../AboutImage";
import styles from "./styles.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.aboutme}>
      <div className={styles.aboutCard}>
        <AboutCard />
      </div>
      <div className={styles.aboutImage}></div>
      <AboutImage />
    </div>
  );
}
