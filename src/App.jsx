import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// App UI
import AppLayout from "./ui/AppLayout";

// Pages
import Home from "./ui/pages/Home";
import About from "./ui/pages/About";
import OurServices from "./ui/pages/OurServices";
import Careers from "./ui/pages/Careers";
import Blog from "./ui/pages/Blog";
import ContactUs from "./ui/pages/ContactUs";
import CaseStudies from "./ui/pages/CaseStudies";
import CaseStudy from "./ui/pages/CaseStudy";
import Freelancer from "./ui/pages/Freelancer";
import JobSeekers from "./ui/pages/JobSeekers";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Navigate to="/" />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "our-services",
        element: <OurServices />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "case-studies",
        element: <CaseStudies />,
      },
      {
        path: "case-studies/:id",
        element: <CaseStudy />,
      },
      {
        path: "freelancers",
        element: <Freelancer />,
      },
      {
        path: "jobseekers",
        element: <JobSeekers />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
