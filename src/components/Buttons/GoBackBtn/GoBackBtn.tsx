import styles from "./GoBackBtn.module.css";

interface GoBackBtnProps {
  label: string;
  onClick: () => void;
}

export default function GoBackBtn({ label, onClick }: GoBackBtnProps) {
  return (
    <button className={styles.goBackBtn} onClick={onClick}>
      {label}
    </button>
  );
}
