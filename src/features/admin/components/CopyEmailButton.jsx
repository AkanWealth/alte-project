import toast from "react-hot-toast";
import { ClipboardIcon } from "@heroicons/react/24/outline";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";

const CopyEmailButton = ({ email }) => {
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success(<ToastMessage title="Email copied" />);
        console.log("Email copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <button
      aria-label="copy email"
      onClick={handleCopyClick}
      className="hover:bg-gray-100 rounded-full p-1 transition-colors"
    >
      <ClipboardIcon className="size-4" />
    </button>
  );
};

export default CopyEmailButton;
