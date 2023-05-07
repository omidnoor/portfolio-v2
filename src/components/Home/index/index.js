import HomeCard from "../HomeCard";
import HomeImage from "../HomeImage";
import styles from "./styles.module.scss";

export default function HomeSection() {
  return (
    <div className={`${styles.homeSection} ${styles.blueGlow}`}>
      <HomeCard />
      <HomeImage />
    </div>
  );
}
