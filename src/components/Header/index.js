import MenuLink from "./MenuLink";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <MenuLink name="ON" link="/" />
      </div>
      <MenuLink name="Home" link="/" />
      <MenuLink name="About Me" link="/" />
      <MenuLink name="Resume" link="/" />
      <MenuLink name="Contact Me" link="/" />
      {/* <div className={styles.header__Home}>Home</div>
      <div className={styles.header__aboutme}>About Me</div>
      <div className={styles.header__Resume}>Resume</div>
      <div className={styles.header__Testemonial}>Testemonial</div>
      <div className={styles.header__contactme}>Contactme</div> */}
    </div>
  );
}
