import styles from "./Model.module.css";
import {
  cloneElement,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  useContext,
} from "react";
import closeMenu from "/images/icon-close-modal.svg";
import { createPortal } from "react-dom";
import { createContext } from "react";
import { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

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

const ModalContext = createContext<ModalContextType>(defaultValue);

export default function Modal({ children }: PropsWithChildren): ReactElement {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  opens: string;
  children: ReactElement;
}

function Open({ children, opens: opensWindowName }: OpenProps): ReactElement {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

interface WindowProps {
  children: ReactElement;
  name: string;
}

function Window({ children, name }: WindowProps): ReactElement | null {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <ModalWrapper ref={ref}>
        <button onClick={close} className={styles.closeMenuBtn}>
          <img src={closeMenu} alt="" />
        </button>
        <div className={styles.clonedContainer}>
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </ModalWrapper>
    </Overlay>,
    document.body
  );
}

const ModalWrapper = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref): ReactElement => {
    return (
      <div ref={ref} className={styles.styledModal}>
        {children}
      </div>
    );
  }
);

function Overlay({ children }: PropsWithChildren): ReactElement {
  return (
    <div className={styles.overlay}>
      <>{children}</>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
