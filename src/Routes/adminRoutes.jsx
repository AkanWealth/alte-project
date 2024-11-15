import { Navigate } from "react-router-dom";

// UIs
import AdminLayout from "../features/admin/ui/AdminLayout";
import DashboardLayout from "../features/admin/ui/DashboardLayout";
import UsersLayout from "../features/admin/ui/users/UsersLayout";
import ListingsLayout from "../features/admin/ui/listings/ListingsLayout";

// Pages
import AdminLogin from "../features/admin/pages/AdminLogin";
import AdminSignup from "../features/admin/pages/AdminSignup";
import Users from "../features/admin/pages/Users";
import Listings from "../features/admin/pages/Listings";
import Content from "../features/admin/pages/Content";
import Settings from "../features/admin/pages/Settings";
import Freelancers from "../features/admin/pages/freelancers/Freelancers";
import { Freelancer } from "../features/admin/pages/freelancers/Freelancer";
import Clients from "../features/admin/pages/clients/Clients";
import Client from "../features/admin/pages/clients/Client";
import InternalUsers from "../features/admin/pages/InternalUsers";
import Projects from "../features/admin/pages/projects/Projects";
import Project from "../features/admin/pages/projects/Project";
import ProjectApplications from "../features/admin/pages/projects/ProjectApplications";
import Jobs from "../features/admin/pages/jobs/Jobs";
import Job from "../features/admin/pages/jobs/Job";
import JobApplications from "../features/admin/pages/jobs/JobApplications";

const adminRoutes = {
  path: "admin",
  element: <AdminLayout />,
  children: [
    {
      path: "login",
      element: <AdminLogin />,
    },
    {
      path: "register",
      element: <AdminSignup />,
    },
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
                  element: <Freelancer />,
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
          path: "listings",
          children: [
            {
              index: true,
              element: <Listings />,
            },
            {
              element: <ListingsLayout />,
              children: [
                {
                  path: "projects",
                  element: <Projects />,
                },
                {
                  path: "projects/:id",
                  element: <Project />,
                },
                {
                  path: "projects/applications",
                  element: <ProjectApplications />,
                },
                {
                  path: "projects/applications/:id",
                  element: <ProjectApplications />,
                },
                {
                  path: "jobs",
                  element: <Jobs />,
                },
                {
                  path: "jobs/:id",
                  element: <Job />,
                },
                {
                  path: "jobs/applications",
                  element: <JobApplications />,
                },
                {
                  path: "jobs/applications/:id",
                  element: <JobApplications />,
                },
              ],
            },
          ],
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
