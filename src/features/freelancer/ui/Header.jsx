import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRightStartOnRectangleIcon,
  BellIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

// Auths
import useFreelancerAuth from "../auth/useFreelancerAuth";

// Hooks
import useViewport from "../../../hooks/useViewPort";

// Contexts
import { useNotifications } from "../contexts/NotificationsContext";

// Components
import Logo from "../../../ui/Logo";

// UIs
import Notifications from "../../../ui/notifications";

const Header = ({ relativeStyles }) => {
  const { user, logout } = useFreelancerAuth();
  const [showModal, setShowModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { pathname } = useLocation();
  const currentPath =
    pathname.replace(/^\/freelancer\/dashboard/, "").replace("/", "") ||
    "dashboard";
  const [inViewport] = useViewport("1024px");
  const notificationsContext = useNotifications();
  const { unreadCount } = notificationsContext;

// References for notification and user modal
const notificationButtonRef = useRef(null);
const notificationDropdownRef = useRef(null);
const userButtonRef = useRef(null);
const userModalRef = useRef(null);

// Handle clicks outside of notification and user modal
useEffect(() => {
  const handleClickOutside = (event) => {
    // // Check if click is outside notification dropdown
    // if (
    //   showNotifications &&
    //   notificationButtonRef.current &&
    //   notificationDropdownRef.current &&
    //   !notificationButtonRef.current.contains(event.target) &&
    //   !notificationDropdownRef.current.contains(event.target)
    // ) {
    //   setShowNotifications(false);
    // }

    // Check if click is outside user modal
    if (
      showModal &&
      userButtonRef.current &&
      userModalRef.current &&
      !userButtonRef.current.contains(event.target) &&
      !userModalRef.current.contains(event.target)
    ) {
      setShowModal(false);
    }
  };

  // Add event listener
  document.addEventListener('mousedown', handleClickOutside);

  // Cleanup event listener
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [showModal]);

useEffect(() => {
  const handleClickOutside = (event) => {
    // Check if dropdown ref and notification button ref exist
    if (
      notificationDropdownRef.current &&
      notificationButtonRef.current &&
      !notificationDropdownRef.current.contains(event.target) &&
      !notificationButtonRef.current.contains(event.target)
    ) {
      setShowNotifications(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [showNotifications]);

useEffect(() => {
  setShowNotifications(false);
}, [inViewport]);

  return (
    <header
      className={`${relativeStyles} grid grid-cols-[auto_1fr] gap-10 px-4 py-5 lg:grid-cols-[210px_1fr] lg:px-10 lg:py-6`}
    >
      <Logo img="/images/freelancer/altee.png" link="/freelancer/dashboard" />
      <div className="relative flex flex-row items-center gap-8">
        <p className="hidden font-inter text-2xl font-semibold lowercase text-grey-900 first-letter:uppercase lg:block">
          {currentPath}
        </p>
        <div className="relative hidden lg:ml-auto lg:block">
          <button
            ref={notificationButtonRef}
            className="size-10 rounded-full bg-success-50 text-success-500"
            onClick={() => setShowNotifications((prev) => !prev)}
          >
            <BellIcon className="m-auto size-6" />
            {unreadCount > 0 && (
              <div
                className={`${unreadCount <= 0 && "hidden"} absolute -top-2 right-0 grid size-[18px] place-content-center rounded-full bg-error-500 text-center text-[9px] text-white`}
              >
                {unreadCount}
              </div>
            )}
          </button>
          {showNotifications && (
            <Notifications
              ref={notificationDropdownRef}
              relativeStyles="absolute right-0 top-[calc(100%+24px)]"
              context={notificationsContext}
              onClose={() => setShowNotifications(false)}
              
            />
          )}
        </div>
        <button
          ref={userButtonRef}
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
          {user?.name || "Freelancer"}
            <span className="flex flex-row items-center text-xs font-normal text-grey-300">
              <span className="mr-1 block size-2 rounded-full bg-grey-300"></span>
              {user?.isAvailable ? "Available" : "Unavailable"}
            </span>
          </p>
          {showModal ? (
            <ChevronUpIcon className="hidden size-5 lg:block" />
          ) : (
            <ChevronDownIcon className="hidden size-5 lg:block" />
          )}
        </button>
        <div
          ref={userModalRef}
          className={`${!showModal && "hidden"} absolute right-0 top-[calc(100%+4px)] flex w-full max-w-28 flex-col gap-3 rounded-lg border border-grey-50 bg-white px-3 py-4 shadow-lg`}
        >
          <Link
            to="/freelancer/dashboard/profile"
            className="flex w-full items-center gap-2 font-inter text-xs font-medium text-grey-400"
          >
            <UserIcon className="size-4 text-grey-200" />
            Profile
          </Link>
          <Link
            to="/freelancer/dashboard/settings"
            className="flex w-full items-center gap-2 font-inter text-xs font-medium text-grey-400"
          >
            <Cog6ToothIcon className="size-4 text-grey-200" />
            Settings
          </Link>
          <div className="border-t border-grey-400 pt-3">
            <button
              onClick={logout}
              className="flex w-full items-center gap-2 font-inter text-xs font-medium text-error-500"
            >
              <ArrowRightStartOnRectangleIcon className="size-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
