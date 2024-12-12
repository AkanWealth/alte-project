import React, { forwardRef, useState, useEffect } from 'react';
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
    default:
      return state;
  }
};
export const Notifications = forwardRef(({ context, onClose }, ref) => {
  const { 
    notifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead, 
    removeNotification 
  } = context;

  // Add outside click handling
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the notification dropdown
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClose]);

  return (
    <div 
      ref={ref} 
      className="w-80 max-h-[400px] overflow-y-auto rounded-lg border border-grey-100 bg-white shadow-lg p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Notifications</h3>
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="text-xs text-primary-500 hover:underline"
          >
            Mark all as read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <p className="text-center text-grey-400 py-4">No notifications</p>
      ) : (
        notifications.map((notification) => (
          <div 
            key={notification.id}
            className={`p-3 mb-2 rounded-md cursor-pointer transition-colors ${
              !notification.read 
                ? 'bg-primary-50 hover:bg-primary-100' 
                : 'bg-grey-50 hover:bg-grey-100'
            }`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-semibold text-sm">{notification.message}</h4>
              {!notification.read && (
                <span className="h-2 w-2 bg-primary-500 rounded-full"></span>
              )}
            </div>
            <p className="text-xs text-grey-400 line-clamp-2">
              {notification.details}
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-grey-300">
                {new Date(notification.timestamp).toLocaleString()}
              </span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  removeNotification(notification.id);
                }}
                className="text-xs text-error-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
});

// Add display name for better debugging
Notifications.displayName = 'Notifications';

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

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        removeNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
