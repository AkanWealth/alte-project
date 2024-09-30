import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// UIs
import Header from "./Header";
import BookCall from "./BookCall";
import Footer from "./Footer";

const WebLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className="relative grid grid-cols-1 grid-rows-[auto_1fr_auto_auto]">
      <Header relativeStyles="col-start-1 col-end-2 row-start-1 row-end-2" />
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 min-h-screen bg-white pt-[78.63px] lg:pt-[87.86px]">
        <Outlet />
      </div>
      <BookCall relativeStyles="col-start-1 col-end-2 row-start-3 row-end-4" />
      <Footer relativeStyles="col-start-1 col-end-2 row-start-4 row-end-5" />
    </div>
  );
};

export default WebLayout;
