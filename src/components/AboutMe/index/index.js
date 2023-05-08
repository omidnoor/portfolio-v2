import BackgroundAnimation from "@/components/BgAnimation";
import AboutCard from "../AboutCard";
import AboutHeader from "../AboutHeader";
import AboutImage from "../AboutImage";
import OverLay from "../OverLay";
import ScrollingDiv from "../../UI/ScrollingDiv";
import styles from "./styles.module.scss";

export default function AboutMe() {
  return (
    <div className={`${styles.aboutMe}`}>
      <AboutHeader />

      <AboutImage />
      <ScrollingDiv>
        <AboutCard />
      </ScrollingDiv>
    </div>
  );
}
