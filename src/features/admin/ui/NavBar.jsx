import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ArrowRightStartOnRectangleIcon,
  BellIcon,
  BookOpenIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

// Hooks
import useViewport from "../../../hooks/useViewPort";

// Contexts
import { useNotifications } from "../contexts/NotificationsContext";

// UIs
import Notifications from "../../../ui/notifications";

const NavBar = ({ relativeStyles }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const { pathname } = useLocation();
  const [inViewport] = useViewport("1024px");
  const notificationsContext = useNotifications();
  const { unreadCount } = notificationsContext;

  useEffect(() => {
    setShowNotifications(false);
  }, [pathname, inViewport, setShowNotifications]);

  return (
    <nav className={`${relativeStyles} bg-white`}>
      <div className="relative w-full p-4 pb-3 lg:w-60 lg:p-0 lg:py-7">
        <menu className="relative flex w-full flex-row items-center justify-between gap-4 *:w-full lg:flex-col">
          <NavLink
            to="users"
            className="group order-3 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:order-1 lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500"
            onClick={() => setShowNotifications(false)}
          >
            <UsersIcon className="size-7 group-[.active]:text-pry-500 lg:size-6" />
            <span
              className={`hidden lg:block ${showNotifications ? "block" : "hidden group-[&.active]:block"}`}
            >
              Users
            </span>
          </NavLink>
          <NavLink
            to="listings"
            className="group order-2 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500"
            onClick={() => setShowNotifications(false)}
          >
            <BriefcaseIcon className="size-7 group-[.active]:text-pry-500 lg:size-6" />
            <span
              className={`hidden lg:block ${showNotifications ? "block" : "hidden group-[.active]:block"}`}
            >
              Listings
            </span>
          </NavLink>
          <NavLink
            to="Content"
            className="group order-1 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:order-3 lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500"
            onClick={() => setShowNotifications(false)}
          >
            <BookOpenIcon className="size-7 group-[.active]:text-pry-500 lg:size-6" />
            <span
              className={`hidden lg:block ${showNotifications ? "block" : "hidden group-[.active]:block"}`}
            >
              Content
            </span>
          </NavLink>
          <span className="mb-14 mt-10 hidden lg:order-4 lg:block"></span>
          <NavLink
            to="settings"
            className="group order-4 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:order-5 lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500"
            onClick={() => setShowNotifications(false)}
          >
            <Cog6ToothIcon className="size-7 group-[.active]:text-pry-500 lg:size-6" />
            <span
              className={`hidden lg:block ${showNotifications ? "block" : "hidden group-[.active]:block"}`}
            >
              Settings
            </span>
          </NavLink>
          <button
            className="group order-5 flex flex-col items-center font-inter text-xs font-semibold text-grey-500 lg:order-6 lg:hidden lg:flex-row lg:gap-3 lg:border-l-4 lg:border-[transparent] lg:px-9 lg:py-4 lg:text-lg [&.active]:text-success-500 lg:[&.active]:border-pry-500 lg:[&.active]:bg-success-50 lg:[&.active]:text-pry-500"
            onClick={() => setShowNotifications((prev) => !prev)}
          >
            <span className="relative">
              <BellIcon className="size-7 group-[.active]:text-pry-500 lg:size-6" />
              {unreadCount > 0 && (
                <div
                  className={`${unreadCount <= 0 && "hidden"} absolute bottom-0 right-0 grid size-3 place-content-center rounded-full bg-error-500 text-center text-[6px] text-white`}
                >
                  {unreadCount}
                </div>
              )}
            </span>
            <span className={`${!showNotifications && "hidden"}`}>
              Notifications
            </span>
          </button>
          <button className="order-6 hidden flex-row items-center gap-3 px-9 py-4 font-inter text-lg font-semibold text-error-500 lg:flex">
            <ArrowRightStartOnRectangleIcon className="size-6" />
            <span className="block">Logout</span>
          </button>
        </menu>
        {showNotifications && (
          <Notifications
            relativeStyles="fixed inset-x-0 bottom-[72px]"
            context={notificationsContext}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
