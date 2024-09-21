import { useModalContext } from "../contexts/ModalContext";

const Modal = () => {
  const { modalComponent } = useModalContext();
  return (
    modalComponent && (
      <div className="fixed inset-0 top-0 z-50 grid h-screen w-full place-content-center bg-black/30">
        <div>{modalComponent}</div>
      </div>
    )
  );
};

export default Modal;
