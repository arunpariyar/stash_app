import { PropsWithChildren } from "react";
import styles from "./FormTitle.module.css";

export default function FormTitle({ children }: PropsWithChildren) {
  return <p className={styles.title}>{children}</p>;
}
