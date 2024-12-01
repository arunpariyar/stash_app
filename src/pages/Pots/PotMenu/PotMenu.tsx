import styles from "./PotMenu.module.css";
export default function PotMenu() {
  return (
    <>
      <div>
        <button
          onClick={() => console.log("Edit Button Clicked")}
          className={styles.editBtn}
        >
          Edit Pot
        </button>
      </div>
      <hr className={styles.divider} />
      <div>
        <button
          onClick={() => console.log("Delete Button Clicked ")}
          className={styles.deleteBtn}
        >
          Delete Pot
        </button>
      </div>
    </>
  );
}
