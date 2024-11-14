import { Navigate } from "react-router-dom";

// UIs
import WebLayout from "../features/website/ui/WebLayout";
import Policies from "../features/website/ui/Policies";

// Pages
import Home from "../features/website/pages/Home";
import About from "../features/website/pages/About";
import OurServices from "../features/website/pages/OurServices";
import Blog from "../features/website/pages/Blog";
import ContactUs from "../features/website/pages/ContactUs";
import CaseStudies from "../features/website/pages/case studies/CaseStudies";
import CaseStudy from "../features/website/pages/case studies/CaseStudy";
import Freelancer from "../features/website/pages/Freelancer";
import QuoteSuccessPage from "../features/website/pages/QuoteSuccessPage";
import JobSeekers, {
  loadJobs,
} from "../features/website/pages/job seekers/JobSeekers";
import JobSeeker, {
  getJob,
} from "../features/website/pages/job seekers/JobSeeker";
import PrivacyPolicy from "../features/website/pages/policies/PrivacyPolicy";
import CookiesPolicy from "../features/website/pages/policies/CookiesPolicy";

const websiteRoutes = {
  path: "/",
  element: <WebLayout />,
  children: [
    {
      index: true,
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
      path: "/request-qoute/success",
      element: <QuoteSuccessPage />,
    },
    {
      path: "jobseekers",
      element: <JobSeekers />,
      loader: loadJobs,
    },
    {
      path: "jobseekers/:id",
      element: <JobSeeker />,
      loader: getJob,
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
};

export default websiteRoutes;
