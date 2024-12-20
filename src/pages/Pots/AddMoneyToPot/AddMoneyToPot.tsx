// import styles from "./AddMoneyToPot.module.css";
import Modal from "../../../components/Modal/Modal";
import BeigeButton from "../BeigeButton/BeigeButton";
import { Pot } from "../../../models/pot";
// import AddNewPotForm from "../../../components/Forms/AddNewPotForm/AddNewPotForm";
import AddMoneyToPotForm from "../../../components/Forms/AddMoneyToPotForm/AddMoneyToPotForm";

export default function AddMoneyToPot({ pot }: { pot: Pot }) {
  return (
    <Modal>
      <Modal.Open opens="add-money-form">
        <BeigeButton label="+ Add Money" onClick={() => {}}></BeigeButton>
      </Modal.Open>
      <Modal.Window name="add-money-form">
        {/* {the empty function is being passed just as place holder the actual onCloseModal is passed while cloning element} */}
        {/* <AddNewPotForm onCloseModal={() => {}}></AddNewPotForm> */}
        <AddMoneyToPotForm pot={pot} onCloseModal={() => {}} />
      </Modal.Window>
    </Modal>
  );
}
