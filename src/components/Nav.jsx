import { NavLink, useLocation } from "react-router-dom";
import useViewport from "../hooks/useViewPort";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOutdent, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [inViewport] = useViewport("1024px");
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const mainPath = pathname.split("/")[1] || "home";

  const setNavState = () => {
    if (inViewport) return;
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <nav className="overflow-hidden">
      <button
        className={`${inViewport && "hidden"} h-6 w-[21px] text-white`}
        onClick={setNavState}
      >
        <FontAwesomeIcon icon={faOutdent} className="size-full" />
      </button>
      <AnimatePresence>
        {(inViewport || isOpen) && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 1 }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut" }}
            className="lg:max-h-auto fixed right-0 top-0 flex h-full max-h-screen w-full max-w-xs flex-col items-start gap-6 bg-pry-500 p-6 lg:relative lg:right-auto lg:top-auto lg:max-w-screen-lg lg:flex-row lg:items-center lg:gap-10 lg:p-0 xl:gap-20"
          >
            <button
              className="h-6 w-[21px] rounded-sm bg-white text-pry-500 lg:hidden"
              onClick={setNavState}
            >
              <FontAwesomeIcon icon={faXmark} className="size-full" />
            </button>
            <menu className="[.active]*:text-sec-500 flex flex-col gap-5 font-inter text-base font-normal text-white *:w-fit hover:*:text-sec-300 lg:flex-row xl:gap-10">
              <NavLink
                to="home"
                className={`${mainPath === "home" && "text-sec-500"} `}
                onClick={setNavState}
              >
                Home
              </NavLink>
              <NavLink
                to="about-us"
                className={`${mainPath === "about-us" && "text-sec-500"} `}
                onClick={setNavState}
              >
                About Us
              </NavLink>
              <NavLink
                to="our-services"
                className={`${mainPath === "our-services" && "text-sec-500"} `}
                onClick={setNavState}
              >
                Our Services
              </NavLink>
              <NavLink
                to="careers"
                className={`${mainPath === "careers" && "text-sec-500"} `}
                onClick={setNavState}
              >
                Careers
              </NavLink>
              <NavLink
                to="blog"
                className={`${mainPath === "blog" && "text-sec-500"} `}
                onClick={setNavState}
              >
                Blog
              </NavLink>
              <NavLink
                to="contact-us"
                className={`${mainPath === "contact-us" && "text-sec-500"} `}
                onClick={setNavState}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="case-study"
                className={`${mainPath === "case-study" && "text-sec-500"} `}
                onClick={setNavState}
              >
                Case Studies
              </NavLink>
            </menu>
            <Button>Request a Quote</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
