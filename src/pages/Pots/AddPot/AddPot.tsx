import Modal from "../../../components/Modal/Modal";
import AddNewPotForm from "../../../components/Forms/AddNewPotForm/AddNewPotForm";
import BlackBtn from "../../../components/Buttons/BlackBtn/BlackBtn";
export default function AddPot() {
  return (
    <Modal>
      {/* {the empty function onClick and OnCloseModal is being passed just as place holder the actual onCloseModal is passed while cloning element} */}
      <Modal.Open opens="pot-form">
        <BlackBtn onClick={() => {}} label="+ Add New Pot"></BlackBtn>
      </Modal.Open>
      <Modal.Window name="pot-form">
        <AddNewPotForm onCloseModal={() => {}}></AddNewPotForm>
      </Modal.Window>
    </Modal>
  );
}
