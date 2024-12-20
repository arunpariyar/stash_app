// import styles from "./AddMoneyToPot.module.css";
import Modal from "../../../components/Modal/Modal";
import BeigeButton from "../BeigeButton/BeigeButton";
import { Pot } from "../../../models/pot";
// import AddNewPotForm from "../../../components/Forms/AddNewPotForm/AddNewPotForm";
import WithdrawMoneyForm from "../../../components/Forms/WithdrawMoneyForm/WithdrawMoneyForm";

export default function WithdrawPot({ pot }: { pot: Pot }) {
  return (
    <Modal>
      <Modal.Open opens="withdraw-money-form">
        <BeigeButton label="Withdraw" onClick={() => {}}></BeigeButton>
      </Modal.Open>
      <Modal.Window name="withdraw-money-form">
        {/* {the empty function is being passed just as place holder the actual onCloseModal is passed while cloning element} */}
        {/* <AddNewPotForm onCloseModal={() => {}}></AddNewPotForm> */}
        <WithdrawMoneyForm pot={pot} onCloseModal={() => {}} />
      </Modal.Window>
    </Modal>
  );
}
