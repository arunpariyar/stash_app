import styles from "./BeigeButton.module.css";

interface BeigeButtonProps {
  label: string;
  onClick: () => void;
}
export default function BeigeButton({ label, onClick }: BeigeButtonProps) {
  return (
    <button className={styles.beigeBtn} onClick={onClick}>
      {label}
    </button>
  );
}
