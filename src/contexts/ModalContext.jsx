import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [modalComponent, setModalComponent] = useState(null);
  return (
    <ModalContext.Provider value={{ modalComponent, setModalComponent }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export default ModalProvider;