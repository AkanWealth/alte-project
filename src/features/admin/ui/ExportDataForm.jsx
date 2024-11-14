import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CalendarIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../contexts/ModalContext";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";

const ExportDataForm = () => {
  const { setModalComponent } = useModalContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setModalComponent(null);
    toast.success(
      <ToastMessage message="Your data has been successfully exported." />,
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex h-max w-full max-w-sm flex-col rounded-3xl bg-white px-7 py-10 font-inter text-xl font-semibold"
    >
      <button
        type="button"
        onClick={() => setModalComponent(null)}
        className="text-gray-500 hover:text-gray-800 absolute right-6 top-6"
      >
        <XMarkIcon className="size-6" />
      </button>
      <h2 className="font-inter text-2xl font-semibold text-pry-500">
        Export Data
      </h2>
      <div className="mt-10">
        <p className="mb-4 font-inter text-base font-normal">
          Select Timestamp
        </p>
        <div className="mb-5">
          <label
            htmlFor="fromDate"
            className="font-inter text-sm font-semibold text-grey-400"
          >
            Date From
          </label>
          <div className="relative mt-2 flex flex-row items-center justify-between border-b border-grey-400 pb-2">
            <input
              type="date"
              id="fromDate"
              aria-invalid={errors.fromDate ? "true" : "false"}
              className="absolute inset-0 bottom-1 w-full bg-transparent font-inter text-sm font-normal text-grey-200 outline-none"
              {...register("fromDate", { required: "From date not selected" })}
            />
            <CalendarIcon className="ml-auto size-6" />
          </div>
          {errors.fromDate && (
            <p className="mt-2 font-inter text-xs font-normal text-error-500">
              {errors.fromDate.message}
            </p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="toDate"
            className="font-inter text-sm font-semibold text-grey-400"
          >
            Date To
          </label>
          <div className="relative mt-2 flex flex-row items-center justify-between border-b border-grey-400 pb-2">
            <input
              type="date"
              id="toDate"
              aria-invalid={errors.toDate ? "true" : "false"}
              className="absolute inset-0 bottom-1 w-full bg-transparent font-inter text-sm font-normal text-grey-200 outline-none"
              {...register("toDate", { required: "To date not selected" })}
            />
            <CalendarIcon className="ml-auto size-6" />
          </div>
          {errors.toDate && (
            <p className="mt-2 font-inter text-xs font-normal text-error-500">
              {errors.toDate.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-10 mt-10">
        <p className="mb-4 font-inter text-base font-normal">
          Export File Type
        </p>
        <div className="flex flex-row justify-between gap-4">
          <label
            htmlFor="exportExcel"
            className="flex items-center font-inter text-base font-normal text-black"
          >
            <input
              type="radio"
              id="exportExcel"
              value="excel"
              className="mr-4 h-5 w-5 appearance-none rounded-full border-4 border-white bg-white ring-1 ring-black checked:bg-sec-500 checked:ring-sec-500"
              {...register("exportType", {
                required: "Please select a file type",
              })}
            />
            <span>Excel (.xls)</span>
          </label>
          <label
            htmlFor="exportPdf"
            className="flex items-center font-inter text-base font-normal text-black"
          >
            <input
              type="radio"
              id="exportPdf"
              value="pdf"
              className="mr-4 h-5 w-5 appearance-none rounded-full border-4 border-white bg-white ring-1 ring-black checked:bg-sec-500 checked:ring-sec-500"
              {...register("exportType", {
                required: "Please select a file type",
              })}
            />
            <span>PDF (.pdf)</span>
          </label>
        </div>
        {errors.exportType && (
          <p className="mt-2 font-inter text-xs font-normal text-error-500">
            {errors.exportType.message}
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <button type="submit" className="btn btn-pry btn--large">
          Export Data
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

export default ExportDataForm;
