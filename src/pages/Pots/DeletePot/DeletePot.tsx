import styles from "./DeletePot.module.css";
import Modal from "../../../components/Modal/Modal";
import DeletePotForm from "../../../components/Forms/DeletePotForm/DeletePotForm";
// import AddNewPotForm from "../../../components/Forms/AddNewPotForm/AddNewPotForm";

export default function DeletePot({ id }: { id: string }) {
  return (
    <Modal>
      <Modal.Open opens="delete-pot-form">
        <button className={styles.deleteBtn}>Delete Pot</button>
      </Modal.Open>
      <Modal.Window name="delete-pot-form">
        {/* <AddNewPotForm onCloseModal={() => {}}></AddNewPotForm> */}
        <DeletePotForm id={id}></DeletePotForm>
      </Modal.Window>
    </Modal>
  );
}
