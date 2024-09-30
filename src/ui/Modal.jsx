// Contexts
import { useModalContext } from "../contexts/ModalContext";

const Modal = () => {
  const { modalComponent } = useModalContext();
  return (
    modalComponent && (
      <div className="fixed inset-0 top-0 z-50 h-screen w-full bg-black/30">
        <div className="flex h-full w-full items-center justify-center p-4">
          {modalComponent}
        </div>
      </div>
    )
  );
};

export default Modal;
