import styles from "./styles.module.scss";

export default function AboutHeader() {
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
