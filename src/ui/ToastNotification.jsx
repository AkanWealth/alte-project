import { Toaster } from "react-hot-toast";

export const ToastNotification = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName="toast-container"
      containerStyle={{}}
      toastOptions={{
        // Default options
        duration: 3000,
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "24px 16px",
          borderRadius: "4px",
        },

        // Options for success toasts
        success: {
          icon: <img className="mt-1" src="/icons/success-icon.svg" />,
          style: {
            background: "hsla(130, 40%, 94%, 1)",
            color: "hsla(0, 0%, 9%, 1)",
          },
        },
      }}
    />
  );
};

export const ToastMessage = ({ title, message }) => {
  return (
    <p className="font-inter text-base font-bold">
      {title}
      <span className="mt-2 block text-sm font-normal">{message}</span>
    </p>
  );
};
