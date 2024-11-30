import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CalendarIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../../contexts/ModalContext";

// UIs
import { ToastMessage } from "../../../../../ui/ToastNotification";

// Contents
const industries = [
  "Accounting & finance",
  "Information technology",
  "Legal",
  "Human resources",
  "Procurement & supplychain",
  "Banking & Financial services",
  "Business Support",
  "Risk & compliance",
  "Sales & Commercial",
  "Projects & Transformation",
  "Tax",
  "Internal Vacancies",
  "Manufacturing & Engineering",
  "Marketing",
  "Recruitment",
  "Treasury",
];

const workTypes = ["Full Time", "Part Time", "Contract"];

const CreateJobForm = ({ edit = false, jobData }) => {
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
        {edit ? "Edit Job" : "Create Job"}
      </h2>
      <p className="mt-2 font-inter text-sm font-normal text-grey-400">
        This information would be used to create Job opportunities for Alte
        system
      </p>
      <div className="my-10 h-full w-full overflow-y-auto">
        <div className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="jobTitle"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Enter Job Title"
              aria-invalid={errors.jobTitle ? true : false}
              {...register("jobTitle", {
                required: "Job Title is required",
                minLength: {
                  value: 2,
                  message: "Job Title must be at least 2 characters long",
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Job Title can only contain letters and spaces",
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
              htmlFor="industry"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Job Industry
            </label>
            <select
              id="industry"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black lg:text-xl lg:first:text-sm [&[aria-invalid=true]]:border-error-500"
              aria-invalid={errors.industry ? "true" : "false"}
              {...register("industry", {
                required: "Job industry must be selected",
              })}
            >
              <option value="" disabled selected hidden>
                Select industry for application
              </option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.role.message}
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
              placeholder="Enter  job location"
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
              htmlFor="workType"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Work Type
            </label>
            <select
              id="workType"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black lg:text-xl lg:first:text-sm [&[aria-invalid=true]]:border-error-500"
              aria-invalid={errors.workType ? "true" : "false"}
              {...register("workType", {
                required: "Work type must be selected",
              })}
            >
              <option value="" disabled selected hidden>
                Select work type for application
              </option>
              {workTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.role.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="about"
              className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              About Job
            </label>
            <textarea
              id="about"
              rows="4"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Type about job"
              aria-invalid={errors.about ? true : false}
              {...register("about", { required: "About is required" })}
            />
            {errors.about && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.about}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="jobDescription"
              className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              rows="4"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Type Job Description"
              aria-invalid={errors.jobDescription ? true : false}
              {...register("jobDescription", {
                required: "Job Description is required",
              })}
            />
            {errors.jobDescription && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.jobDescription}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="jobResponsibilities"
              className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Job Responsibilities
            </label>
            <textarea
              id="jobResponsibilities"
              rows="4"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Type Job Responsibilities"
              aria-invalid={errors.jobResponsibilities ? true : false}
              {...register("jobResponsibilities", {
                required: "Job Responsibilities is required",
              })}
            />
            {errors.jobResponsibilities && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.jobResponsibilities}
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
export default CreateJobForm;
