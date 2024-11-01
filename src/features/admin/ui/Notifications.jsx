import { format, formatDistanceToNow, parseISO } from "date-fns";

// Contexts
import { useNotifications } from "../contexts/NotificationsContext";

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

const NotificationItem = ({ data }) => {
  const { markAsRead } = useNotifications();
  const { id, message, details, read, timestamp } = data;
  const date = parseISO(timestamp);

  return (
    <li
      className="flex w-full flex-row items-start gap-3"
      onClick={() => markAsRead(id)}
    >
      <img
        src="/images/freelancer/alte-logo.png"
        alt=""
        className="size-8 rounded-full"
      />
      <div className="flex w-full flex-col items-start gap-1 text-start">
        <h3 className="flex w-full flex-row items-center justify-between gap-4 font-inter text-sm font-medium text-pry-500">
          {message}
          {!read && (
            <span className="block size-2 rounded-full bg-pry-500"></span>
          )}
        </h3>
        <p className="pr-10 font-inter text-xs font-normal text-grey-300">
          {details}
        </p>
        <div className="flex w-full flex-wrap justify-between gap-2">
          <p className="font-inter text-xs font-normal text-grey-400">
            {format(date, "EEE dd, yyyy")}
          </p>
          <p className="font-inter text-xs font-normal text-grey-400">
            {formatDistanceToNow(date, { addSuffix: false })}
          </p>
        </div>
      </div>
    </li>
  );
};

const NotificationsList = () => {
  const { notifications } = useNotifications();

  return (
    <ul className="col-start-1 col-end-1 row-start-2 row-end-3 flex h-full w-full flex-col gap-4 overflow-y-auto py-3">
      {notifications.map((item, index) => (
        <NotificationItem key={index} data={item} />
      ))}
    </ul>
  );
};

const Notifications = ({ relativeStyles }) => {
  const { notifications, unreadCount, markAllAsRead } = useNotifications();

  return (
    <div
      className={`${relativeStyles} lg:shadow-[0px_2px_4px_-1px_hsla(0, 0%, 0%, 0.06),0px_4px_6px_-1px_hsla(0, 0%, 0%, 0.1)] z-10 grid max-h-[calc(100vh-149px)] grid-cols-1 grid-rows-[auto_1fr] rounded-t-[32px] bg-white px-6 pt-6 shadow-[0px_1px_3px_0px_hsla(0,0%,0%,0.1),0px_1px_2px_0px_hsla(0,0%,0%,0.06)] lg:max-h-[calc(100vh-103px)] lg:w-96 lg:rounded-xl`}
    >
      <div
        className={`col-start-1 col-end-1 row-start-1 row-end-2 grid gap-1 ${unreadCount > 0 ? "grid-cols-[1fr_auto] grid-rows-2" : "grid-cols-1 grid-rows-1"}`}
      >
        <h2 className="col-start-1 col-end-2 row-start-1 row-end-2 my-auto mr-auto font-inter text-lg font-semibold text-grey-900">
          Notifications
        </h2>
        {notifications.length > 0 && (
          <>
            <p className="col-start-2 col-end-3 row-start-1 row-end-2 my-auto ml-auto rounded-xl bg-success-50 px-2 py-1 font-inter text-xs font-normal text-success-900">
              {unreadCount} unread
            </p>
            <button
              className="col-start-1 col-end-3 row-start-2 row-end-3 my-auto mr-auto font-inter text-sm font-medium text-success-500"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
          </>
        )}
      </div>
      {notifications.length <= 0 ? (
        <EmptyNotifications />
      ) : (
        <NotificationsList />
      )}
    </div>
  );
};

export default Notifications;
