import { Outlet } from "react-router-dom";

// Contexts
import { CookiesProvider } from "../contexts/CookiesContext";
import ModalProvider from "../contexts/ModalContext";

// UIs
import ToastNotification from "./ToastNotification";
import Cookies from "./Cookies";

const AppLayout = () => {
  return (
    <CookiesProvider>
      <ModalProvider>
        <ToastNotification />
        <Outlet />
        <Cookies relativeStyles="fixed bottom-2 left-2" />
      </ModalProvider>
    </CookiesProvider>
  );
};

export default AppLayout;
