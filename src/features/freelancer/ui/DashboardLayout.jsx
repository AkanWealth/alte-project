import { Outlet } from "react-router-dom";

// Contexts
import NotificationsProvider from "../contexts/NotificationsContext";

// UIs
import Header from "./Header";
import NavBar from "./NavBar";
import ProtectedRoute from "./ProtectedRoute";

const DashboardLayout = () => {
  return (
    <ProtectedRoute>
      <NotificationsProvider>
        <div className="relative grid h-full min-h-screen grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[auto_1fr]">
          <Header relativeStyles="col-start-1 col-end-2 row-start-1 row-end-2 lg:col-end-3" />
          <div className="col-start-1 col-end-2 row-start-2 row-end-3 h-full overflow-y-auto bg-[hsla(165,100%,99%,1)] px-4 py-6 pb-24 lg:col-start-2 lg:col-end-3 lg:max-h-[calc(100vh-104px)] lg:border-t lg:border-grey-200 lg:px-10 lg:py-10 lg:pb-12">
            <Outlet />
          </div>
          <NavBar relativeStyles="fixed inset-x-0 bottom-0 lg:relative lg:inset-auto lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3" />
        </div>
      </NotificationsProvider>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
