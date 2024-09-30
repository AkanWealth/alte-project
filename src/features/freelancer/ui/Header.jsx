import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronDown,
  faCog,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Components
import Logo from "../../../ui/Logo";
import { Link } from "react-router-dom";

const Header = ({ relativeStyles }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header
      className={`${relativeStyles} grid grid-cols-[auto_1fr] gap-10 px-4 py-5 lg:grid-cols-[210px_1fr] lg:px-10 lg:py-6`}
    >
      <Logo img="/mobile-nav-logo.png" link="/freelancer/dashboard" />
      <div className="relative flex flex-row items-center gap-8">
        <p className="hidden font-inter text-2xl font-semibold text-grey-900 lg:block">
          Dashboard
        </p>
        <button className="hidden size-10 rounded-full bg-success-50 lg:ml-auto lg:block">
          <FontAwesomeIcon
            icon={faBell}
            className="m-auto size-6 text-success-500"
          />
        </button>
        <button
          onClick={() => setShowModal(!showModal)}
          className="ml-auto flex flex-row items-center gap-2 lg:m-0"
        >
          <div className="relative">
            <img
              src="/images/freelancer/user.png"
              alt=""
              className="size-8 rounded-full lg:size-10"
            />
            <span className="absolute bottom-0 right-0 block size-2 rounded-full bg-success-500 lg:hidden"></span>
          </div>
          <p className="hidden flex-col items-start font-inter text-base font-medium lg:flex">
            Patricia Oko
            <span className="flex flex-row items-center text-xs font-normal text-grey-300">
              <span className="mr-1 block size-2 rounded-full bg-grey-300"></span>
              Unavailable
            </span>
          </p>
          <FontAwesomeIcon icon={faChevronDown} className="hidden lg:block" />
        </button>
        <div
          className={`${!showModal && "hidden"} absolute right-0 top-[calc(100%+4px)] flex w-full max-w-28 flex-col gap-3 rounded-lg border border-grey-50 bg-white px-3 py-4 shadow-lg`}
        >
          <Link
            to="/freelancer/dashboard/profile"
            className="flex w-full items-center gap-2 font-inter text-xs font-medium text-grey-400"
          >
            <FontAwesomeIcon icon={faUser} className="size-4 text-grey-200" />
            Profile
          </Link>
          <Link
            to="/freelancer/dashboard/settings"
            className="flex w-full items-center gap-2 font-inter text-xs font-medium text-grey-400"
          >
            <FontAwesomeIcon icon={faCog} className="size-4 text-grey-200" />
            Settings
          </Link>
          <div className="border-t border-grey-400 pt-3">
            <button className="flex w-full items-center gap-2 font-inter text-xs font-medium text-error-500">
              <FontAwesomeIcon icon={faSignOutAlt} className="size-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
