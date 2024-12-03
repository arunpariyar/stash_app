import EditPot from "../EditPot/EditPot";
import DeletePot from "../DeletePot/DeletePot";
import styles from "./PotMenu.module.css";
import { Pot } from "../../../models/pot";

export default function PotMenu({ pot }: { pot: Pot }) {
  return (
    <>
      <div>
        <EditPot />
      </div>
      <hr className={styles.divider} />
      <div>
        <DeletePot id={pot.id} name={pot.name} />
      </div>
    </>
  );
}
