import EditPot from "../EditPot/EditPot";
import DeletePot from "../DeletePot/DeletePot";
import styles from "./PotMenu.module.css";

export default function PotMenu({ id }: { id: string }) {
  return (
    <>
      <div>
        <EditPot />
      </div>
      <hr className={styles.divider} />
      <div>
        <DeletePot id={id} />
      </div>
    </>
  );
}
