import styles from "./FormSummary.module.css";

export default function FormSummary({ summary }: { summary: string }) {
  return <p className={styles.summary}>{summary}</p>;
}
