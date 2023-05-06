import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import styles from "./styles.module.scss";

export default function HomeCard() {
  return (
    <div className={styles.HomeCard}>
      <div className={styles.HomeCard__socials}>
        <div className={styles.HomeCard__socials__icons}>
          <FaFacebookSquare />
          <ImLinkedin />
          <FaInstagram />
          <FaTwitterSquare />
        </div>
      </div>
    </div>
  );
}
