import styles from "./PotOptionsButton.module.css";
import optionsIcon from "../../../../public/images/icon-ellipsis.svg";

interface PotOptionsButtonProps {
  onClick: () => void;
}

export default function PotOptionsButton({ onClick }: PotOptionsButtonProps) {
  return (
    <button className={styles.optionsButton} onClick={onClick}>
      <img src={optionsIcon} alt="menu option for pot" />
    </button>
  );
}
