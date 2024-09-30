// UIs
import FreelancerLayout from "../features/freelancer/ui/FreelancerLayout";
import DashboardLayout from "../features/freelancer/ui/DashboardLayout";

// Pages
import SignUp from "../features/freelancer/pages/SignUp";
import VerifyEmail from "../features/freelancer/pages/VerifyEmail";
import EmailVerified from "../features/freelancer/pages/EmailVerified";
import Login from "../features/freelancer/pages/Login";
import Dashboard from "../features/freelancer/pages/Dashboard";
import Projects from "../features/freelancer/pages/Projects";
import Profile from "../features/freelancer/pages/Profile";
import Settings from "../features/freelancer/pages/Settings";

const freelancerRoutes = {
  path: "freelancer",
  element: <FreelancerLayout />,
  children: [
    {
      path: "register",
      element: <SignUp />,
    },
    {
      path: "verify-email",
      element: <VerifyEmail />,
    },
    {
      path: "email-verified",
      element: <EmailVerified />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ],
};
export default freelancerRoutes;
