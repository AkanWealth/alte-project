import toast from "react-hot-toast";
import { TrashIcon } from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../contexts/ModalContext";

// UIs
import { ToastMessage } from "../../../../ui/ToastNotification";

const DeleteUserForm = () => {
  const { setModalComponent } = useModalContext();

  const handleSubmit = () => {
    setModalComponent(null);
    toast.success(
      <ToastMessage
        title="Success"
        message="The user has been deleted successfully."
      />,
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-max w-full max-w-lg flex-col gap-6 rounded-lg bg-white px-7 py-10 font-inter text-xl font-semibold"
    >
      <div className="flex flex-row gap-6">
        <TrashIcon className="size-10 min-w-fit rounded-lg bg-error-100 p-2 text-error-500 lg:size-14 lg:p-4" />
        <div>
          <h2 className="mb-2 font-inter text-xl font-semibold text-grey-900">
            You are about to delete Anjola Wunmi
          </h2>
          <p className="font-inter text-sm font-normal text-grey-300">
            Are you sure you want to delete this user? This action cannot be
            undone.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5 lg:flex-row">
        <button type="submit" className="btn btn-error btn--large">
          Yes, confirm
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
export default DeleteUserForm;
