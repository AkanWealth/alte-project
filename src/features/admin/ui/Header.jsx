import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRightStartOnRectangleIcon,
  BellIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

// Auths
import useViewport from "../../../hooks/useViewPort";

// Hooks
import useAdminAuth from "../auth/useAdminAuth";

// Contexts
import { useNotifications } from "../contexts/NotificationsContext";

// Components
import Logo from "../../../ui/Logo";
import Notifications from "../../../ui/notifications";

// UIs

const Header = ({ relativeStyles }) => {
  const { logout } = useAdminAuth();
  const [showModal, setShowModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { pathname } = useLocation();
  const currentPath =
    pathname.replace(/^\/admin\/?/, "").split("/")[0] || "users";
  const [inViewport] = useViewport("1024px");
  const notificationsContext = useNotifications();
  const { unreadCount } = notificationsContext;

  useEffect(() => {
    setShowNotifications(false);
  }, [inViewport, setShowNotifications]);

  return (
    <header
      className={`${relativeStyles} grid grid-cols-[auto_1fr] gap-10 px-4 py-5 lg:grid-cols-[210px_1fr] lg:px-10 lg:py-6`}
    >
      <Logo img="/images/freelancer/altee.png" link="/admin/dashboard" />
      <div className="relative flex flex-row items-center gap-8">
        <p className="hidden font-inter text-2xl font-semibold lowercase text-grey-900 first-letter:uppercase lg:block">
          {currentPath}
        </p>
        <div className="relative hidden lg:ml-auto lg:block">
          <button
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
              relativeStyles="absolute right-0 top-[calc(100%+24px)]"
              context={notificationsContext}
            />
          )}
        </div>
        <button
          onClick={() => setShowModal(!showModal)}
          className="ml-auto flex flex-row items-center gap-2 lg:m-0"
        >
          <div className="relative">
            <img
              src="/images/admin/user-img.png"
              alt=""
              className="size-8 rounded-full lg:size-10"
            />
            <span className="absolute bottom-0 right-0 block size-2 rounded-full bg-success-500 lg:hidden"></span>
          </div>
          <p className="hidden flex-col items-start font-inter text-base font-medium lg:flex">
            Patricia Oko
            <span className="text-xs font-normal text-grey-300">
              Super Admin
            </span>
          </p>
          {showModal ? (
            <ChevronUpIcon className="hidden size-5 lg:block" />
          ) : (
            <ChevronDownIcon className="hidden size-5 lg:block" />
          )}
        </button>
        <div
          className={`${!showModal && "hidden"} absolute right-0 top-[calc(100%+4px)] flex w-full max-w-28 flex-col gap-3 rounded-lg border border-grey-50 bg-white px-3 py-4 shadow-lg`}
        >
          <Link
            to="/admin/profile"
            className="flex w-full items-center gap-2 font-inter text-xs font-medium text-grey-400"
          >
            <UserIcon className="size-4 text-grey-200" />
            My Profile
          </Link>
          <Link
            to="/admin/settings"
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
