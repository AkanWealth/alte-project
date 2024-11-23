import toast from "react-hot-toast";
import { XCircleIcon } from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../contexts/ModalContext";

// UIs
import { ToastMessage } from "../../../../ui/ToastNotification";

const DeactivateUserForm = () => {
  const { setModalComponent } = useModalContext();

  const handleSubmit = () => {
    setModalComponent(null);
    toast.success(
      <ToastMessage
        title="Success"
        message="The user has been deactivated successfully."
      />,
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-max w-full max-w-lg flex-col gap-6 rounded-lg bg-white px-7 py-10 font-inter text-xl font-semibold"
    >
      <div className="flex flex-row gap-6">
        <XCircleIcon className="size-10 min-w-fit rounded-lg bg-error-100 p-2 text-error-500 lg:size-14 lg:p-4" />
        <div>
          <h2 className="mb-2 font-inter text-xl font-semibold text-grey-900">
            You are about to deactivate Anjola Wunmi
          </h2>
          <p className="font-inter text-sm font-normal text-grey-300">
            Are you sure you want to deactivate this user? The user will lose
            access to their account until reactivated.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5 lg:flex-row">
        <button type="submit" className="btn btn-error btn--large">
          Yes, deactivate
        </button>
        <button
          type="button"
          className="btn btn-sec--outline btn--large"
          onClick={() => setModalComponent(null)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default DeactivateUserForm;
