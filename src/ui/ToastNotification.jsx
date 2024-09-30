import { Toaster } from "react-hot-toast";

export const ToastMessage = ({ title, message }) => {
  return (
    <p className="font-inter text-base font-bold">
      {title}
      <span className="mt-2 block text-sm font-normal">{message}</span>
    </p>
  );
};

const ToastNotification = () => {
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
          borderWidth: "1px",
          borderRadius: "4px",
        },

        // Options for success toasts
        success: {
          icon: <img className="mt-1" src="/icons/success-icon.svg" />,
          style: {
            color: "hsla(0,0%,9%,1)",
            background: "hsla(130,40%,94%,1)",
            borderColor: "hsla(133,42%,73%,1)",
          },
        },

        // Options for error toasts
        error: {
          icon: <img className="mt-1" src="/icons/error-icon.svg" />,
          style: {
            color: "hsla(156,45%,2%,1)",
            background: "hsla(0,64%,95%,1)",
            borderColor: "hsla(2,64%,62%,1)",
          },
        },
      }}
    />
  );
};

export default ToastNotification;
