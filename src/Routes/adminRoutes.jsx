import { Navigate } from "react-router-dom";

// UIs
import AdminLayout from "../features/admin/ui/AdminLayout";
import DashboardLayout from "../features/admin/ui/DashboardLayout";
import UsersLayout from "../features/admin/ui/UsersLayout";

// Pages
import Users from "../features/admin/pages/Users";
import Job from "../features/admin/pages/Job";
import Content from "../features/admin/pages/Content";
import Settings from "../features/admin/pages/Settings";
import Freelancers from "../features/admin/pages/Freelancers";
import Clients from "../features/admin/pages/Clients";
import InternalUsers from "../features/admin/pages/InternalUsers";
import User from "../features/admin/pages/User";
import Client from "../features/admin/pages/Client";

const adminRoutes = {
  path: "admin",
  element: <AdminLayout />,
  children: [
    {
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="users" />,
        },
        {
          path: "users",
          children: [
            {
              index: true,
              element: <Users />,
            },
            {
              element: <UsersLayout />,
              children: [
                {
                  path: "freelancers",
                  element: <Freelancers />,
                },
                {
                  path: "freelancers/:id",
                  element: <User />,
                },
                {
                  path: "clients",
                  element: <Clients />,
                },
                {
                  path: "clients/:id",
                  element: <Client />,
                },
                {
                  path: "internal-users",
                  element: <InternalUsers />,
                },
              ],
            },
          ],
        },
        {
          path: "job",
          element: <Job />,
        },
        {
          path: "content",
          element: <Content />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ],
};

export default adminRoutes;
