import { Link } from "react-router-dom";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

// Contents
const systemRoles = [
  {
    role: "Super Administrator ",
    count: 1,
  },
  {
    role: "Administrator",
    count: 1,
  },
  {
    role: "Content Manager",
    count: 1,
  },
  {
    role: "Sale/Marketing",
    count: 1,
  },
  {
    role: "HR Officer",
    count: 1,
  },
];

const systemActions = [
  "Client Management",
  "Freelancer & Job Management",
  "Job Posting",
  "User Account",
  "System Notifications",
  "Blog",
];

const RolesAndPermission = () => {
  return (
    <main>
      <Link to="create-new-role" className="btn btn-pry ml-auto">
        <PlusIcon className="size-5" /> Create New Role
      </Link>
      <ul className="my-5 flex flex-row justify-between gap-6 overflow-x-auto whitespace-nowrap *:w-full *:min-w-64 *:justify-between lg:my-10 lg:gap-10">
        {systemRoles.map((item) => (
          <li
            key={item.role}
            className="gap-10 rounded-xl bg-[#E2FFCE] px-4 py-6 font-inter lg:px-6 lg:py-8"
          >
            <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
              {item.role}
              <span className="mt-2 flex w-full flex-row items-center justify-between text-xl text-black lg:mt-3 lg:text-2xl">
                {item.count}
                <TrashIcon className="size-6 rounded-full text-error-500" />
              </span>
            </h2>
          </li>
        ))}
      </ul>
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
    </main>
  );
};

export default RolesAndPermission;
