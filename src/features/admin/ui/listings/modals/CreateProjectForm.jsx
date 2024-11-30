import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CalendarIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../../contexts/ModalContext";

// UIs
import { ToastMessage } from "../../../../../ui/ToastNotification";

const CreateProjectForm = ({ edit = false, projectData }) => {
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
        message="User has been successfully created"
      />,
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex h-max max-h-[calc(100vh-100px)] w-full max-w-2xl flex-col rounded-3xl bg-white px-7 py-10 font-inter text-xl font-semibold"
    >
      <button
        type="button"
        onClick={() => setModalComponent(null)}
        className="text-gray-500 hover:text-gray-800 absolute right-6 top-6"
      >
        <XMarkIcon className="size-6" />
      </button>
      <h2 className="font-inter text-2xl font-semibold text-pry-500">
        {edit ? "Edit Project" : "Create Project"}
      </h2>
      <p className="mt-2 font-inter text-sm font-normal text-grey-400">
        This information would be used to create Job opportunities for Alte
        system
      </p>
      <div className="my-10 h-full w-full overflow-y-auto">
        <div className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="projectTitle"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Project Title
            </label>
            <input
              type="text"
              id="projectTitle"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Enter Project Title"
              aria-invalid={errors.projectTitle ? true : false}
              {...register("projectTitle", {
                required: "Project Title is required",
                minLength: {
                  value: 2,
                  message: "Project Title must be at least 2 characters long",
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Project Title can only contain letters and spaces",
                },
              })}
            />
            {errors.firstName && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="role"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Enter  project role"
              aria-invalid={errors.role ? true : false}
              {...register("role", {
                required: "Role is required",
                minLength: {
                  value: 2,
                  message: "Role must be at least 2 characters long",
                },
              })}
            />
            {errors.firstName && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="timeline"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Timeline
            </label>
            <input
              type="text"
              id="timeline"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Enter the duration for the project"
              aria-invalid={errors.timeline ? true : false}
              {...register("timeline", {
                required: "Timeline is required",
                minLength: {
                  value: 2,
                  message: "Timeline must be at least 2 characters long",
                },
              })}
            />
            {errors.firstName && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="location"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Enter  project location"
              aria-invalid={errors.location ? true : false}
              {...register("location", {
                required: "Location is required",
                minLength: {
                  value: 2,
                  message: "Location must be at least 2 characters long",
                },
              })}
            />
            {errors.firstName && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="overview"
              className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Overview
            </label>
            <textarea
              id="overview"
              rows="4"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Type project overview"
              aria-invalid={errors.overview ? true : false}
              {...register("overview", { required: "Overview is required" })}
            />
            {errors.overview && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.overview}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="projectResponsibilities"
              className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Project Responsibilities
            </label>
            <textarea
              id="projectResponsibilities"
              rows="4"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Type Project Responsibilities"
              aria-invalid={errors.projectResponsibilities ? true : false}
              {...register("projectResponsibilities", {
                required: "Project Responsibilities is required",
              })}
            />
            {errors.projectResponsibilities && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.projectResponsibilities}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="skillsRequired"
              className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Skills Required
            </label>
            <textarea
              id="skillsRequired"
              rows="2"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Separate skills with a comma (,)"
              aria-invalid={errors.skillsRequired ? true : false}
              {...register("skillsRequired", {
                required: "Skills Required is required",
              })}
            />
            {errors.skillsRequired && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.skillsRequired}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="deadline"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Application Deadline
            </label>
            <div className="relative flex flex-row items-center justify-between rounded-lg border border-grey-400 bg-white p-2.5 [&[aria-invalid=true]]:border-error-500">
              <input
                type="date"
                id="deadline"
                className="absolute inset-2.5 block bg-transparent font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm"
                placeholder="Enter  project deadline"
                aria-invalid={errors.deadline ? true : false}
                {...register("deadline", {
                  required: "Deadline is required",
                })}
              />
              <CalendarIcon className="ml-auto size-6" />
            </div>
            {errors.firstName && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-5">
        <button type="submit" className="btn btn-pry btn--large">
          Save and Publish
        </button>
        {edit ? (
          <button type="button" className="btn btn-sec--outline btn--large">
            Cancel
          </button>
        ) : (
          <button type="button" className="btn btn-sec--outline btn--large">
            Save as Draft
          </button>
        )}
      </div>
    </form>
  );
};
export default CreateProjectForm;
