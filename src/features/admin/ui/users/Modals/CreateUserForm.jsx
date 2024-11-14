import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../../contexts/ModalContext";

// UIs
import { ToastMessage } from "../../../../../ui/ToastNotification";
import { isEmail } from "validator";

// Contents
const systemRoles = [
  "Super Administrator ",
  "Administrator",
  "Content Manager",
  "Sale/Marketing",
  "HR Officer",
];

const CreateUserForm = () => {
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
        Create User
      </h2>
      <p className="mt-2 font-inter text-sm font-normal text-grey-400">
        This information would be used to create an admin user for Alte system
      </p>
      <div className="my-10 h-full w-full overflow-y-auto">
        <div className="flex flex-col gap-5">
          <div className="">
            <label
              htmlFor="name"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              First name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Enter users first name"
              aria-invalid={errors.firstName ? true : false}
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters long",
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "First name can only contain letters and spaces",
                },
              })}
            />
            {errors.firstName && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="">
            <label
              htmlFor="name"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Last name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Enter users last name"
              aria-invalid={errors.firstName ? true : false}
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters long",
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Last name can only contain letters and spaces",
                },
              })}
            />
            {errors.lastName && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Enter Users Email"
              aria-invalid={errors.email ? true : false}
              {...register("email", {
                required: "Email is required",
                validate: (value) => isEmail(value) || "Invalid Email Format",
              })}
            />
            {errors.email && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="">
            <label
              htmlFor="role"
              className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
            >
              Role
            </label>
            <select
              id="role"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black lg:text-xl lg:first:text-sm [&[aria-invalid=true]]:border-error-500"
              aria-invalid={errors.role ? "true" : "false"}
              {...register("role", {
                required: "User role must be selected",
              })}
            >
              <option value="" disabled selected hidden>
                Select user role
              </option>
              {systemRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.role.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-5">
        <button type="submit" className="btn btn-pry btn--large">
          Create User
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
export default CreateUserForm;
