import { useState } from "react";
import styles from "./styles.module.scss";

export default function AboutHeader() {
  const [visible, setVisible] = useState(false);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const handleScroll = (e) => {};

  return (
    <div className={styles.aboutHeader}>
      <h2>About Me</h2>
      <h3>
        Passionate Front-end Developer with a Unique Background in Engineering
        and Neuroscience
      </h3>
      <div className={styles.aboutHeader__line}></div>
    </div>
  );
}
