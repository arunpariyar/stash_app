import styles from "./Model.module.css";
import {
  cloneElement,
  PropsWithChildren,
  ReactElement,
  useContext,
} from "react";
import closeMenu from "/images/icon-close-modal.svg";
import { createPortal } from "react-dom";
import { createContext } from "react";
import { useState } from "react";
interface WindowProps {
  children: ReactElement;
  name: string;
}

interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const defaultValue: ModalContextType = {
  openName: "",
  open: () => {},
  close: () => {},
};

//creating the Model context
const ModalContext = createContext(defaultValue);

export default function Modal({ children }: PropsWithChildren) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <button className={styles.closeMenuBtn}>
          <img src={closeMenu} alt="" />
        </button>
        {cloneElement(children, { onCloseModal: close })}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

function StyledModal({ children }: PropsWithChildren) {
  return <div className={styles.styledModal}>{children}</div>;
}

function Overlay({ children }: PropsWithChildren) {
  return (
    <div className={styles.overlay}>
      <>{children}</>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
