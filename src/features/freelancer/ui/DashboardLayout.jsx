import { Outlet } from "react-router-dom";

// UIs
import Header from "./Header";
import NavBar from "./NavBar";

const DashboardLayout = () => {
  return (
    <div className="relative grid min-h-screen grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[auto_1fr]">
      <Header relativeStyles="col-start-1 col-end-2 row-start-1 row-end-2 lg:col-end-3" />
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 overflow-y-auto bg-[hsla(165,100%,99%,1)] lg:col-start-2 lg:col-end-3 lg:border-t lg:border-grey-200">
        <Outlet />
      </div>
      <NavBar relativeStyles="fixed inset-x-0 bottom-0 lg:relative lg:inset-auto lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3" />
    </div>
  );
};

export default DashboardLayout;
