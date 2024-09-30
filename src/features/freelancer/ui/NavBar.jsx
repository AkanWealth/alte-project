import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faFile,
  faHome,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ relativeStyles }) => {
  return (
    <nav
      className={`${relativeStyles} bg-white p-4 pb-3 lg:w-60 lg:p-0 lg:py-7`}
    >
      <menu className="flex w-full flex-row items-center justify-between gap-4 *:w-full lg:flex-col">
        <NavLink
          to="."
          end
          className="group order-3 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:order-1 lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500"
        >
          <FontAwesomeIcon
            icon={faHome}
            className="size-7 group-[.active]:text-pry-500 lg:size-6"
          />
          <span className="hidden group-[.active]:block lg:block">
            Dashboard
          </span>
        </NavLink>
        <NavLink
          to="projects"
          className="group order-2 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500"
        >
          <FontAwesomeIcon
            icon={faFile}
            className="size-7 group-[.active]:text-pry-500 lg:size-6"
          />
          <span className="hidden group-[.active]:block lg:block">
            Projects
          </span>
        </NavLink>
        <NavLink
          to="profile"
          className="group order-1 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:order-3 lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500"
        >
          <FontAwesomeIcon
            icon={faUser}
            className="size-7 group-[.active]:text-pry-500 lg:size-6"
          />
          <span className="hidden group-[.active]:block lg:block">Profile</span>
        </NavLink>
        <span className="mb-14 mt-10 hidden h-px bg-grey-400 lg:order-4 lg:block"></span>
        <NavLink
          to="settings"
          className="group order-4 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:order-5 lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500"
        >
          <FontAwesomeIcon
            icon={faCog}
            className="size-7 group-[.active]:text-pry-500 lg:size-6"
          />
          <span className="hidden group-[.active]:block lg:block">
            Settings
          </span>
        </NavLink>
        <button className="group order-5 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:order-6 lg:hidden lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500">
          <FontAwesomeIcon
            icon={faBell}
            className="size-7 group-[.active]:text-pry-500 lg:size-6"
          />
          <span className="hidden group-[.active]:block lg:block">
            Notifications
          </span>
        </button>
        <button className="order-6 hidden flex-row items-center gap-3 px-9 py-4 font-inter text-lg font-semibold text-error-500 lg:flex">
          <FontAwesomeIcon icon={faSignOutAlt} className="size-6" />
          <span className="block">Logout</span>
        </button>
      </menu>
    </nav>
  );
};

export default NavBar;
