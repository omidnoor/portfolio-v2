import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { ImLinkedin } from "react-icons/im";
import { init } from "ityped";
import { Component } from "react";

import styles from "./styles.module.scss";
import AnimatedTexts from "@/components/AnimatedText";

export default function HomeCard() {
  return (
    <div className={styles.HomeCard}>
      <div className={styles.HomeCard__socials}>
        <FaFacebookSquare />
        <ImLinkedin />
        <FaInstagram />
        <FaTwitterSquare />
      </div>

      <div className={styles.HomeCard__intro}>
        <h2>
          Hello I'm &nbsp;<span> Omid</span>
        </h2>
        <div className={styles.HomeCard__intro__skills}>
          <h1>
            <AnimatedTexts text1="Next/React Dev" text2="Cross Platform Dev" />
          </h1>
        </div>
        <p>Knock of building with front end and backend operations</p>
      </div>
    </div>
  );
}
