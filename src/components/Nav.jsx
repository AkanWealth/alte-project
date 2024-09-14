import { NavLink, useLocation } from "react-router-dom";
import useViewport from "../hooks/useViewPort";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import QuoteModal from "./QuoteModal";
import Logo from "./Logo";

const Nav = () => {
  const [inViewport] = useViewport("1024px");
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useLocation();
  const mainPath = pathname.split("/")[1] || "home";

  const setNavState = () => {
    if (inViewport) return;
    setIsOpen((isOpen) => !isOpen);
  };

  const toggleModal = () => {
    setShowModal(!showModal); // Toggle the modal state
  };

  return (
    <nav className="">
      <button
        className={`${inViewport && "hidden"} h-6 w-[21px] text-white lg:h-fit`}
        onClick={setNavState}
      >
        <FontAwesomeIcon icon={faBars} className="size-full" />
      </button>
      <AnimatePresence>
        {(inViewport || isOpen) && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 1 }}
            exit={{ y: "-100%" }}
            transition={{ ease: "easeInOut" }}
            className="fixed right-0 top-0 flex min-h-[462px] w-full flex-col gap-11 bg-white px-5 pb-4 pt-10 lg:relative lg:right-auto lg:top-auto lg:min-h-fit lg:max-w-screen-lg lg:bg-pry-500 lg:p-0"
          >
            <div className="flex flex-row items-center justify-between lg:hidden">
              <Logo
                img="/mobile-nav-logo.png"
                relativeStyles="max-h-[55.88px] w-full max-w-20"
                clickHandler={setNavState}
              />
              <button className="size-6 text-pry-500" onClick={setNavState}>
                <FontAwesomeIcon icon={faXmark} className="size-full" />
              </button>
            </div>
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-10 xl:gap-20">
              <menu className="[.active]*:text-sec-500 flex flex-col gap-6 font-inter text-base font-medium text-grey-900 *:w-max lg:flex-row lg:text-white xl:gap-10">
                <NavLink
                  to="about-us"
                  className={`${mainPath === "about-us" && "bg text-sec-500"} hover:text-sec-300`}
                  onClick={setNavState}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="our-services"
                  className={`${mainPath === "our-services" && "bg text-sec-500"} hover:text-sec-300`}
                  onClick={setNavState}
                >
                  Our Services
                </NavLink>
                <NavLink
                  to="case-studies"
                  className={`${mainPath === "case-studies" && "bg text-sec-500"} hover:text-sec-300`}
                  onClick={setNavState}
                >
                  Case Studies
                </NavLink>
                <details className="group relative">
                  <summary className="flex cursor-pointer list-none flex-row items-center gap-2 hover:text-sec-300 group-open:text-sec-500">
                    Careers
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="size-4 group-open:hidden"
                    />
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="hidden size-4 group-open:block"
                    />
                  </summary>
                  <div className="ml-5 mt-5 rounded-b-xl border border-white lg:absolute lg:top-16 lg:ml-0 lg:mt-0 lg:bg-white lg:p-5 lg:text-grey-900">
                    <ul className="flex flex-col gap-3 border-l-2 border-pry-500 pl-3 *:w-max">
                      <NavLink
                        to="freelancers"
                        className={`${mainPath === "freelancers" && "text-sec-500"} hover:text-sec-300`}
                        onClick={setNavState}
                      >
                        Freelancers
                      </NavLink>
                      <NavLink
                        to="jobseekers"
                        className={`${mainPath === "jobseekers" && "text-sec-500"} hover:text-sec-300`}
                        onClick={setNavState}
                      >
                        Job Seekers
                      </NavLink>
                    </ul>
                  </div>
                </details>
                <NavLink
                  to="blog"
                  className={`${mainPath === "blog" && "bg text-sec-500"} hover:text-sec-300`}
                  onClick={setNavState}
                >
                  Blog
                </NavLink>
                <NavLink
                  to="contact-us"
                  className={`${mainPath === "contact-us" && "text-sec-500"}`}
                  onClick={setNavState}
                >
                  Contact Us
                </NavLink>
              </menu>
              <Button className="w-full lg:w-auto" clickHandler={toggleModal}>
                Request a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {showModal && <QuoteModal onClose={toggleModal} />}
    </nav>
  );
};

export default Nav;
