import { Outlet } from "react-router-dom";
import { FreelancerRouteProvider } from "../auth/useFreelancerAuth";

const FreelancerLayout = () => {
  return (
    <FreelancerRouteProvider>
      <Outlet />
    </FreelancerRouteProvider>
  );
};

export default FreelancerLayout;
