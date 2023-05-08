import Image from "next/image";
import styles from "./styles.module.scss";

export default function AboutImage() {
  return (
    <div className={styles.aboutImage}>
      <Image src="/public/abstract2.jpg" alt="about" fill />
    </div>
  );
}
