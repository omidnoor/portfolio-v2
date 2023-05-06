import styles from "./styles.module.scss";

export default function HomeImage() {
  return (
    <div className={styles.homeImage}>
      <img src="/favicon.ico" alt="image" />
    </div>
  );
}
