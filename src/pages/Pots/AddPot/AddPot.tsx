import Modal from "../../../components/Modal/Modal";
import AddNewPotForm from "../../../components/Forms/AddNewPotForm/AddNewPotForm";

export default function AddPot() {
  return (
    <Modal>
      <Modal.Open opens="pot-form">
        <button>+ Add Pot</button>
      </Modal.Open>
      <Modal.Window name="pot-form">
        {/* {the empty function is being passed just as place holder the actual onCloseModal is passed while cloning element} */}
        <AddNewPotForm onCloseModal={() => {}}></AddNewPotForm>
      </Modal.Window>
    </Modal>
  );
}
