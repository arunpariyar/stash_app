import styles from "./Model.module.css";
import { PropsWithChildren, ReactNode } from "react";
import closeMenu from "/images/icon-close-modal.svg";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export default function Modal({ children, closeModal }: ModalProps) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <button onClick={closeModal} className={styles.closeMenuBtn}>
          <img src={closeMenu} alt="" />
        </button>
        {children}
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
