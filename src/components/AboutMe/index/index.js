import BackgroundAnimation from "@/components/BgAnimation";
import AboutCard from "../AboutCard";
import AboutHeader from "../AboutHeader";
import AboutImage from "../AboutImage";
import OverLay from "../OverLay";
import ScrollingDiv from "../../UI/ScrollingDiv";
import styles from "./styles.module.scss";
import { useState } from "react";
import WheelDiv from "@/components/UI/WheelDiv";

export default function AboutMe() {
  const [animationInProgress, setAnimationInProgress] = useState(false);

  return (
    <div className={`${styles.aboutMe}`}>
      <AboutImage />
      {/* <ScrollingDiv
        animationInProgress={animationInProgress}
        setAnimationInProgress={setAnimationInProgress}
      >
      <AboutHeader
        animationInProgress={animationInProgress}
        setAnimationInProgress={setAnimationInProgress}
      />
      <AboutCard />
      </ScrollingDiv> */}
      <WheelDiv
        animationInProgress={animationInProgress}
        setAnimationInProgress={setAnimationInProgress}
      >
        <AboutHeader
          animationInProgress={animationInProgress}
          setAnimationInProgress={setAnimationInProgress}
        />
        <AboutCard
          animationInProgress={animationInProgress}
          setAnimationInProgress={setAnimationInProgress}
        />
      </WheelDiv>
    </div>
  );
}
