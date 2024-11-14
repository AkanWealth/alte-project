import { createContext, useContext, useReducer } from "react";

const NotificationsContext = createContext();

export const useNotifications = () => useContext(NotificationsContext);

const initialNotifications = [
  {
    id: "1",
    message: "Application Submitted Successfully",
    details:
      "Your application for the Frontend Developer for E-commerce Website project has been submitted.",
    timestamp: "2023-07-21T10:00:00",
    read: true,
  },
  {
    id: "2",
    message: "New Project Alert",
    details: "Check out the UX Designer for Mobile App project and apply now.",
    timestamp: "2023-07-21T10:00:00",
    read: false,
  },
  {
    id: "3",
    message: "Application Status Updated",
    details:
      "You have an update on your application for the Backend Developer position for the Fintech Platform project. Check your email for details.",
    timestamp: "2023-07-21T10:00:00",
    read: true,
  },
  {
    id: "4",
    message: "Application Status Updated",
    details:
      "You’ve been scheduled for an interview based on your application for the Fintech Platform project. Check your email for the interview details ",
    timestamp: "2023-07-21T10:00:00",
    read: false,
  },
  {
    id: "5",
    message: "Don&apos;t Forget to Apply",
    details: "You saved the Digital Marketing Specialist project.",
    timestamp: "2023-07-21T10:00:00",
    read: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "notification/added":
      return [action.payload, ...state];
    case "notification/read":
      return state.map((notification) =>
        notification.id === action.payload
          ? { ...notification, read: true }
          : notification,
      );
    case "all/read":
      return state.map((notification) => ({ ...notification, read: true }));
    case "notification/deleted":
      return state.filter((notification) => notification.id !== action.payload);
    case "all/deleted":
      return [];
    default:
      return state;
  }
};

const NotificationsProvider = ({ children }) => {
  const [notifications, dispatch] = useReducer(reducer, initialNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const addNotification = (notification) => {
    dispatch({
      type: "notification/added",
      payload: {
        ...notification,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        read: false,
      },
    });
  };

  const markAsRead = (id) => {
    dispatch({ type: "notification/read", payload: id });
  };

  const markAllAsRead = () => {
    dispatch({ type: "all/read" });
  };

  const removeNotification = (id) => {
    dispatch({ type: "notification/deleted", payload: id });
  };

  const removeAll = () => {
    dispatch({ type: "all/deleted" });
  };

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        removeNotification,
        removeAll,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
