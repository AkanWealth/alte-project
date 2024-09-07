import React, { useState, useEffect } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

// App UI
import AppLayout from "./ui/AppLayout";
import UserCookies from "./components/UserCookies";

// Pages
import Home from "./ui/pages/Home";
import About from "./ui/pages/About";
import OurServices from "./ui/pages/OurServices";
import Careers from "./ui/pages/Careers";
import Blog from "./ui/pages/Blog";
import ContactUs from "./ui/pages/ContactUs";
import CaseStudy from "./ui/pages/CaseStudy";
import CaseStudyPage from "./ui/pages/CaseStudyPage";
import CookiePolicyPage from "./ui/pages/CookiePolicyPage";

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
        path: "case-study",
        element: <CaseStudy />,
      },
      {
        path: "case-study/:id", 
        element: <CaseStudyPage />,
      },
      {
        path: "/cookies-page",
        element: <CookiePolicyPage />,
      }
    
    ],
  },
]);

const App = () => {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    handleCookieOpen();
  }, []);

  const handleCookieClose = () => {
    setOpen(false);
  };

  const handleCookieOpen = () => {
    let cookieName = getCookie('cookiePolicy');
    if (cookieName !== '') {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const getCookie = (cookieName) => {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let total = decodedCookie.split(';');
    for (let i = 0; i < total.length; i++) {
      let cookie = total[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  };

  const handleCookieAccepted = () => {
    const expiry = new Date();
    expiry.setTime(expiry.getTime() + (30 * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + expiry.toUTCString();
    document.cookie = 'cookiePolicy=accepted;' + expires;
    setOpen(false);
  };

  const handleCookieDeclined = () => {
    setOpen(false);
    document.cookie = "cookiePolicy=declined";
  };

  return (
    <>
      <RouterProvider router={routes} />
      <UserCookies 
        open={open} 
        handleCookieAccepted={handleCookieAccepted}
        handleCookieClose={handleCookieClose} 
        handleCookieDeclined={handleCookieDeclined}         
      />
    </>
  );
}

export default App;
