import styles from "./WarningBtn.module.css";

interface WarningBtnProps {
  label: string;
  onClick: () => void;
}
export default function WarningBtn({ label, onClick }: WarningBtnProps) {
  return (
    <button className={styles.warningBtn} onClick={onClick}>
      {label}
    </button>
  );
}
