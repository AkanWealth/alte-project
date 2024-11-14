import { useState } from "react";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const EmptyNotifications = () => {
  return (
    <div className="col-start-1 col-end-1 row-start-2 row-end-3 flex flex-col items-center py-8">
      <img src="/icons/empty-notification.svg" alt="" className="size-32" />
      <h3 className="my-4 max-w-[18ch] font-inter text-base font-semibold text-grey-900">
        No new notifications at the moment.
      </h3>
      <p className="font-inter text-xs font-normal text-grey-400">
        Check back later for updates.
      </p>
    </div>
  );
};

const Notification = ({ data, context }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { id, message, details, read, timestamp } = data;
  const { markAsRead, removeNotification } = context;
  const date = parseISO(timestamp);

  return (
    <article className="flex w-full flex-row items-start gap-3">
      <div className="relative aspect-square w-8">
        <img
          src="/images/freelancer/alte-logo.png"
          alt=""
          className="rounded-full"
        />
        {!read && (
          <span className="absolute -top-px right-0 block size-2 rounded-full bg-pry-500 ring-1 ring-white ring-offset-0"></span>
        )}
      </div>
      <div className="flex w-full flex-col items-start gap-1">
        <div className="flex w-full flex-row items-start justify-between gap-1">
          <div className="text-start">
            <h3 className="mb-1 flex w-full flex-row items-center justify-between gap-4 font-inter text-sm font-medium text-pry-500">
              {message}
            </h3>
            <p className="font-inter text-xs font-normal text-grey-300">
              {details}
            </p>
          </div>
          <div className="relative">
            <button onClick={() => setShowOptions(!showOptions)}>
              <EllipsisVerticalIcon className="size-6 text-grey-400" />
            </button>
            {showOptions && (
              <div className="absolute right-0 top-0 flex min-w-full flex-col gap-4 whitespace-nowrap rounded-lg border border-grey-50 bg-white py-4 pl-5 pr-6 shadow">
                <button
                  onClick={() => {
                    markAsRead(id);
                    setShowOptions(!showOptions);
                  }}
                  className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                >
                  <PencilSquareIcon className="size-6 text-grey-200" />
                  Mark as read
                </button>
                <button
                  onClick={() => {
                    removeNotification(id);
                    setShowOptions(!showOptions);
                  }}
                  className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-error-500"
                >
                  <TrashIcon className="size-6" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-2">
          <p className="font-inter text-xs font-normal text-grey-400">
            {format(date, "EEE dd, yyyy")}
          </p>
          <p className="font-inter text-xs font-normal text-grey-400">
            {formatDistanceToNow(date, { addSuffix: false })}
          </p>
        </div>
      </div>
    </article>
  );
};

const NotificationsList = ({ context }) => {
  const { notifications } = context;

  return (
    <ul className="col-start-1 col-end-1 row-start-2 row-end-3 flex h-full w-full flex-col gap-4 overflow-y-auto py-3">
      {notifications.map((item, index) => (
        <li key={index}>
          <Notification data={item} context={context} />
        </li>
      ))}
    </ul>
  );
};

const Notifications = ({ relativeStyles, context }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { notifications, unreadCount, markAllAsRead, removeAll } = context;

  return (
    <div
      className={`${relativeStyles} lg:shadow-[0px_2px_4px_-1px_hsla(0, 0%, 0%, 0.06),0px_4px_6px_-1px_hsla(0, 0%, 0%, 0.1)] z-10 grid max-h-[calc(100vh-149px)] grid-cols-1 grid-rows-[auto_1fr] rounded-t-[32px] bg-white px-6 pt-6 shadow-[0px_1px_3px_0px_hsla(0,0%,0%,0.1),0px_1px_2px_0px_hsla(0,0%,0%,0.06)] lg:max-h-[calc(100vh-103px)] lg:w-96 lg:rounded-xl`}
    >
      <div className="col-start-1 col-end-1 row-start-1 row-end-2 flex flex-row items-center gap-1">
        <h2 className="col-start-1 col-end-2 row-start-1 row-end-2 my-auto mr-auto font-inter text-lg font-semibold text-grey-900">
          Notifications
        </h2>
        {notifications.length > 0 && (
          <>
            <p className="col-start-2 col-end-3 row-start-1 row-end-2 my-auto ml-auto rounded-xl bg-success-50 px-2 py-1 font-inter text-xs font-normal text-success-900">
              {unreadCount} unread
            </p>
            <div className="relative">
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="col-start-1 col-end-3 row-start-2 row-end-3 my-auto font-inter text-sm font-medium text-success-500"
              >
                <EllipsisVerticalIcon className="size-6 text-grey-900" />
              </button>
              {showOptions && (
                <div className="absolute right-0 top-0 z-10 flex min-w-full flex-col gap-4 whitespace-nowrap rounded-lg border border-grey-50 bg-white py-4 pl-5 pr-6 shadow">
                  <button
                    onClick={() => {
                      markAllAsRead();
                      setShowOptions(!showOptions);
                    }}
                    className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                  >
                    <PencilSquareIcon className="size-6 text-grey-200" />
                    Mark all as read
                  </button>
                  <button
                    onClick={() => {
                      removeAll();
                      setShowOptions(!showOptions);
                    }}
                    className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-error-500"
                  >
                    <TrashIcon className="size-6" />
                    Delete all
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {notifications.length <= 0 ? (
        <EmptyNotifications />
      ) : (
        <NotificationsList context={context} />
      )}
    </div>
  );
};

export default Notifications;
