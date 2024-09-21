import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import BookCall from "./BookCall";
import { useEffect } from "react";
import Cookies from "./Cookies";
import { CookiesProvider } from "../contexts/CookiesContext";
import ModalProvider from "../contexts/ModalContext";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <CookiesProvider>
      <ModalProvider>
        <div className="relative grid grid-cols-1 grid-rows-[auto_1fr_auto_auto]">
          <Header relativeStyles="col-start-1 col-end-2 row-start-1 row-end-2" />
          <div className="col-start-1 col-end-2 row-start-1 row-end-3 min-h-screen bg-white pt-[78.63px] lg:pt-[87.86px]">
            <Outlet />
          </div>
          <BookCall relativeStyles="col-start-1 col-end-2 row-start-3 row-end-4" />
          <Footer relativeStyles="col-start-1 col-end-2 row-start-4 row-end-5" />
          <Cookies relativeStyles="fixed bottom-2 left-2" />
        </div>
      </ModalProvider>
    </CookiesProvider>
  );
};

export default AppLayout;
