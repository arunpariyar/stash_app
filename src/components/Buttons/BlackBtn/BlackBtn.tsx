import styles from "./BlackBtn.module.css";

interface BlackBtnProps {
  label: string;
  onClick: () => void;
}
export default function BlackBtn({ label, onClick }: BlackBtnProps) {
  return (
    <button onClick={onClick} className={styles.blackBtn}>
      {label}
    </button>
  );
}
