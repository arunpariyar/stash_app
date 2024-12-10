import EditPot from "../EditPot/EditPot";
import DeletePot from "../DeletePot/DeletePot";
import styles from "./PotMenu.module.css";
import { Pot } from "../../../models/pot";
// import Modal from "../../../components/Modal/Modal";
// import PotOptionsButton from "../PotOptionsButton/PotOptionsButton";

// export default function PotMenu({ pot }: { pot: Pot }) {
//   return (
//     <Modal>
//       <Modal.Open opens="pot-menu-form">
//         <button>open</button>
//       </Modal.Open>

//       <Modal.Window name="pot-menu-form">
//         <Menu pot={pot} />
//       </Modal.Window>
//     </Modal>
//   );
// }

export default function PotMenu({ pot }: { pot: Pot }) {
  return (
    <>
      <div>
        <EditPot pot={pot} />
      </div>
      <hr className={styles.divider} />
      <div>
        <DeletePot id={pot.id} name={pot.name} />
      </div>
    </>
  );
}
