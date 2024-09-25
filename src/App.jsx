import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// App UI
import AppLayout from "./ui/AppLayout";
import Policies from "./ui/Policies";

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
import FreelancerSignup from "./ui/pages/FreelancerSignup";
import JobSeekers from "./ui/pages/JobSeekers";
import VerifyEmail from "./ui/pages/VerifyEmail";
import EmailVerified from "./ui/pages/EmailVerified";

import PrivacyPolicy from "./ui/pages/PrivacyPolicy";
import CookiesPolicy from "./ui/pages/CookiesPolicy";
import JobSeeker from "./ui/pages/JobSeeker";
import QuoteSuccessPage from "./ui/pages/QuoteSuccessPage";

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
        path: "freelancers/register",
        element: <FreelancerSignup />,
      },
      {
        path: "freelancers/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "freelancers/email-verified",
        element: <EmailVerified />,
      },
      {
        path: "/request-qoute/success",
        element: <QuoteSuccessPage />,
      },
      {
        path: "jobseekers",
        element: <JobSeekers />,
      },
      {
        path: "jobseekers/:id",
        element: <JobSeeker />,
      },
      {
        path: "policies",
        element: <Policies />,
        children: [
          {
            index: true,
            element: <Navigate to="privacy-policy" replace={true} />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "cookies-policy",
            element: <CookiesPolicy />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
