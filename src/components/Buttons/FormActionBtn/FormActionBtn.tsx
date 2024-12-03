import styles from "./FormActionBtn.module.css";

interface FormActionBtnProps {
  label: string;
  isPending: boolean;
}
export default function FormActionBtn({
  label,
  isPending,
}: FormActionBtnProps) {
  return (
    <button type="submit" disabled={isPending} className={styles.formActionBtn}>
      {label}
    </button>
  );
}
