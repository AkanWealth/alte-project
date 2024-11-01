import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { Toaster } from "react-hot-toast";

export const ToastMessage = ({ title, message }) => {
  return (
    <p className="flex w-full flex-col gap-1 text-start font-inter text-base font-bold">
      <span>{title && title}</span>
      <span className="mt-2 block text-sm font-normal">
        {message && message}
      </span>
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
          minWidth: "250px",
        },

        // Options for success toasts
        success: {
          icon: <CheckCircleIcon className="mt-1 size-6 text-success-500" />,
          style: {
            color: "hsla(0,0%,9%,1)",
            background: "hsla(130,40%,94%,1)",
            borderColor: "hsla(133,42%,73%,1)",
          },
        },

        // Options for error toasts
        error: {
          icon: (
            <ExclamationCircleIcon className="mt-1 size-6 text-error-500" />
          ),
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
