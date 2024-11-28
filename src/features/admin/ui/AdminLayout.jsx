import { Outlet } from "react-router-dom";
import { AdminRouteProvider } from "../auth/useAdminAuth";

const AdminLayout = () => {
  return (
    <AdminRouteProvider>
      <Outlet />
    </AdminRouteProvider>
  );
};

export default AdminLayout;
