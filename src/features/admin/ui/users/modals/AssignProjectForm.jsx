import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../../contexts/ModalContext";

// UIs
import { ToastMessage } from "../../../../../ui/ToastNotification";

// Contents
const projects = [
  "Full Stack Development for an E-commerce App",
  "Full Stack Development for an E-commerce App",
  "Full Stack Development for an E-commerce App",
  "Full Stack Development for an E-commerce App",
  "Full Stack Development for an E-commerce App",
  "Full Stack Development for an E-commerce App",
];

const AssignProjectForm = () => {
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
      <ToastMessage
        title="Success"
        message="User successfully assigned to the project!"
      />,
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex h-max max-h-[calc(100vh-100px)] w-full max-w-lg flex-col rounded-3xl bg-white px-7 py-10 font-inter text-xl font-semibold"
    >
      <button
        type="button"
        onClick={() => setModalComponent(null)}
        className="text-gray-500 hover:text-gray-800 absolute right-6 top-6"
      >
        <XMarkIcon className="size-6" />
      </button>
      <h2 className="font-inter text-2xl font-semibold text-pry-500">
        Assign to Project
      </h2>
      <p className="mt-2 font-inter text-sm font-normal text-grey-400">
        You are about to assign Sarah Johnson to a project.
      </p>
      <div className="my-10 h-full w-full overflow-y-auto">
        <div className="flex flex-col gap-5">
          <div className="">
            <h3 className="mb-2 block font-inter text-sm font-medium lg:text-xl">
              Sarah Johnson
            </h3>
            <div className="flex flex-wrap items-center justify-between text-base font-normal text-grey-400">
              <p>sarah.j@gmail.com</p>
              <p>Software Developer</p>
            </div>
          </div>
          <div className="">
            <label
              htmlFor="project"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Select Project
            </label>
            <select
              id="project"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black lg:text-xl lg:first:text-sm [&[aria-invalid=true]]:border-error-500"
              aria-invalid={errors.project ? "true" : "false"}
              {...register("project", {
                required: "A project must be selected",
              })}
            >
              <option value="" disabled selected hidden>
                Choose from the available projects
              </option>
              {projects.map((project) => (
                <option key={project} value={project}>
                  {project}
                </option>
              ))}
            </select>
            {errors.project && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.project.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-5">
        <button type="submit" className="btn btn-pry btn--large">
          Assign
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
export default AssignProjectForm;
