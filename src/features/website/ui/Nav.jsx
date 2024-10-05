import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

// Contexts
import { useModalContext } from "../../../contexts/ModalContext";

// Hooks
import useViewport from "../../../hooks/useViewPort";

// UIs
import Logo from "../../../ui/Logo";
import QuoteForm from "./QuoteForm";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [inViewport] = useViewport("1024px");
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const mainPath = pathname.split("/")[1] || "home";
  const [openDropdown, setOpenDropdown] = useState(false);
  const { setModalComponent } = useModalContext();

  const setNavState = () => {
    if (inViewport) return;
    setIsOpen((isOpen) => !isOpen);
  };

  const toggleDropdown = () => {
    setOpenDropdown((prevOpenDropdown) => !prevOpenDropdown);
  };

  useEffect(() => {
    setOpenDropdown(false);
  }, [pathname]);

  return (
    <nav className="">
      <button
        className={`${inViewport && "hidden"} h-6 w-[21px] text-white lg:h-fit`}
        onClick={setNavState}
      >
        <Bars3Icon className="size-6" />
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
                <XMarkIcon className="size-7" />
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
                <div className="group relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex cursor-pointer list-none flex-row items-center gap-2 hover:text-sec-300"
                    aria-expanded={openDropdown}
                  >
                    Careers
                    {openDropdown ? (
                      <ChevronUpIcon className="size-4" />
                    ) : (
                      <ChevronDownIcon className="size-4" />
                    )}
                  </button>
                  {openDropdown && (
                    <div className="ml-5 mt-5 rounded-b-xl border border-white lg:absolute lg:top-16 lg:ml-0 lg:mt-0 lg:bg-white lg:p-5 lg:text-grey-900">
                      <ul className="flex flex-col gap-3 border-l-2 border-pry-500 pl-3 *:w-max">
                        <NavLink
                          to="freelancers"
                          className={`${mainPath === "freelancers" && "text-sec-500"} hover:text-sec-300`}
                          onClick={() => {
                            setNavState();
                            setOpenDropdown(false);
                          }}
                        >
                          Freelancers
                        </NavLink>
                        <NavLink
                          to="jobseekers"
                          className={`${mainPath === "jobseekers" && "text-sec-500"} hover:text-sec-300`}
                          onClick={() => {
                            setNavState();
                            setOpenDropdown(false);
                          }}
                        >
                          Job Seekers
                        </NavLink>
                      </ul>
                    </div>
                  )}
                </div>
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
              <button
                className="btn btn-pry w-full lg:w-fit"
                onClick={() => setModalComponent(<QuoteForm />)}
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
