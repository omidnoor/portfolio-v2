import AboutCard from "../AboutCard";
import AboutHeader from "../AboutHeader";
import AboutImage from "../AboutImage";
import OverLay from "../OverLay";
import styles from "./styles.module.scss";

export default function AboutMe() {
  return (
    <div className={`${styles.aboutMe} `}>
      <AboutHeader />
      <AboutCard />
      <AboutImage />
      <OverLay />
    </div>
  );
}
