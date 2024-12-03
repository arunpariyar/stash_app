import styles from "./EditPot.module.css";
import Modal from "../../../components/Modal/Modal";
// import AddNewPotForm from "../../../components/Forms/AddNewPotForm/AddNewPotForm";

export default function EditPot() {
  return (
    <Modal>
      <Modal.Open opens="edit-pot-form">
        <button className={styles.editBtn}>Edit Pot</button>
      </Modal.Open>
      <Modal.Window name="edit-pot-form">
        {/* {the empty function is being passed just as place holder the actual onCloseModal is passed while cloning element} */}
        {/* <AddNewPotForm onCloseModal={() => {}}></AddNewPotForm> */}
        <h2>Edit Pot form comes here</h2>
      </Modal.Window>
    </Modal>
  );
}
