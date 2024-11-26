import { useState } from "react";
import Modal from "../../../components/Modal/Modal";

export default function AddPot() {
  const [modelState, setModalState] = useState(false);
  return (
    <div>
      <button onClick={() => setModalState(!modelState)}>+ Add Pot</button>
      {modelState && (
        <Modal
          closeModal={() => {
            setModalState(!modelState);
            console.log(modelState);
          }}
        >
          <h1>Add New Pot</h1>
          <h2>{modelState}</h2>
          <p>
            Create a port to set savings targets. These can help keep you on
            track as you save from special purchases
          </p>
        </Modal>
      )}
    </div>
  );
}
