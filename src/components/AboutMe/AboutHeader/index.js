import styles from "./styles.module.scss";

export default function AboutHeader() {
  return (
    <div className={styles.aboutHeader}>
      <h2>About Me</h2>
      <h3>Why Choose Me?</h3>
      <div className={styles.aboutHeader__line}></div>
    </div>
  );
}
