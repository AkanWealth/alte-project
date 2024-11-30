import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// UIs
import { ToastMessage } from "../../../../ui/ToastNotification";

// Contents
const systemRoles = [
  "Super Administrator ",
  "Administrator",
  "Content Manager",
  "Sale/Marketing",
  "HR Officer",
];

const systemActions = [
  "Client Management",
  "Freelancer & Job Management",
  "Job Posting",
  "User Account",
  "System Notifications",
  "Blog",
];

const activeTabClasses =
  "font-medium lg:font-semibold text-grey-900 after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-grey-900";

const InternalUser = () => {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "profile-information";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleForm = async (data) => {
    console.log("Form Data:", data);

    toast.success(
      <ToastMessage
        title="Changes Saved"
        message="Profile Information has been successfully been updated."
      />,
    );

    reset();
  };

  return (
    <main>
      <nav className="mb-4 border-b border-grey-200 font-inter text-xs font-normal text-grey-300 lg:mb-6 lg:text-base">
        <ul className="flex w-full flex-row items-center justify-center gap-12">
          <li className="relative px-2 py-1">
            <Link
              to="?tab=profile-information"
              className={
                currentTab === "profile-information" && activeTabClasses
              }
            >
              Profile Information
            </Link>
          </li>
          <li className="relative px-2 py-1">
            <Link
              to="?tab=user-permission"
              className={currentTab === "user-permission" && activeTabClasses}
            >
              User Permission
            </Link>
          </li>
        </ul>
      </nav>
      {currentTab === "profile-information" && (
        <section className="flex w-full flex-col items-center rounded-2xl bg-white p-6 pt-10">
          <img
            src="/images/admin/user-img.png"
            alt=""
            className="size-24 rounded-full lg:size-32"
          />
          <h2 className="mt-2 font-inter text-lg font-medium lg:text-xl">
            Oloruntomi D
          </h2>
          <p className="mb-4 font-inter text-xs font-normal text-grey-300 lg:text-base">
            tomi@gmail.com
          </p>
          <form onSubmit={handleSubmit(handleForm)}>
            <div className="border-t border-grey-200 pt-6">
              <h2 className="font-inter text-base font-semibold text-grey-900 lg:text-xl">
                Personal Information
              </h2>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-6 *:basis-[420px]">
                <div className="grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
                      placeholder="Enter Full Name"
                      aria-invalid={errors.fullName ? true : false}
                      {...register("fullName", {
                        required: "Full name is required.",
                      })}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
                      placeholder="Enter Email Address"
                      aria-invalid={errors.email ? true : false}
                      {...register("email", {
                        required: "Email is required.",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address.",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grow-0">
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-pry w-full lg:ml-auto lg:w-fit"
            >
              Save Changes
            </button>
          </form>
        </section>
      )}
      {currentTab === "user-permission" && (
        <div className="overflow-x-auto rounded-lg border border-grey-50 bg-white">
          <div className="flex w-full flex-wrap items-center justify-between gap-2 bg-grey-50 px-6 py-4">
            <div className="flex flex-row items-center gap-2">
              <label
                htmlFor="role"
                className="font-inter text-sm font-medium lg:text-xl"
              >
                Roles
              </label>
              <select
                id="role"
                className="block rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black lg:text-xl lg:first:text-sm"
              >
                <option value="" disabled selected hidden>
                  Select user role
                </option>
                {systemRoles.map((item) => (
                  <option key={item.role} value={item.role}>
                    {item.role}
                  </option>
                ))}
              </select>
            </div>
            <div className="ml-auto flex flex-wrap items-center gap-6">
              <label
                htmlFor=""
                className="flex flex-row items-center gap-2 font-inter text-sm lg:text-xl"
              >
                Enable All
                <input
                  type="checkbox"
                  name=""
                  className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                />
              </label>
              <button className="text-btn">Reset</button>
              <button className="btn btn-pry">Save</button>
            </div>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="font-inter text-sm font-semibold text-grey-900 *:border *:border-grey-50 *:px-6 *:py-3 *:text-start">
                <th>Action</th>
                <th>View</th>
                <th>Manage</th>
                <th>Delete</th>
                <th>Export</th>
              </tr>
            </thead>
            <tbody className="*:font-inter *:text-sm *:font-normal *:text-grey-400">
              {systemActions.map((item) => (
                <tr
                  key={item}
                  className="*:w-max *:whitespace-nowrap *:border *:border-grey-50 *:px-6 *:py-5 focus-within:bg-sec-50 hover:bg-sec-50"
                >
                  <td>{item}</td>
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default InternalUser;
