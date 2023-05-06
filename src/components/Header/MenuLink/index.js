import Link from "next/link";
import styles from "./styles.module.scss";

export default function MenuLink({ name, link }) {
  return <Link href={link}>{name}</Link>;
}
