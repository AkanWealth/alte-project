import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseIcon,
  EllipsisVerticalIcon,
  FlagIcon,
  TrashIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../../contexts/ModalContext";

// UIs
import DeleteUserForm from "../../modals/DeleteUserForm";
import DeactivateUserForm from "../../modals/DeactivateUserForm";
import UserFeedbackWidget from "../modals/UserFeedbackWidget";
import AssignProjectForm from "../modals/AssignProjectForm";

// Utils
import { convertToTitleCase } from "../../../../../utils";

// Contents
import { freelancersDataTitles } from "../../../../../contents/admin";

const FreelancersTable = ({ data }) => {
  const [activeRow, setActiveRow] = useState(null);
  const { setModalComponent } = useModalContext();

  return (
    <div className="overflow-x-auto rounded-lg border border-grey-50">
      <table className="w-full">
        <thead>
          <tr className="bg-grey-50 font-inter text-sm font-semibold text-grey-900">
            {freelancersDataTitles.map((title, index) =>
              title === "projectsApplied" || title === "status" ? (
                <th key={index} className="px-6 py-3 text-center">
                  {convertToTitleCase(title)}
                </th>
              ) : (
                <th key={index} className="px-6 py-3 text-start">
                  {convertToTitleCase(title)}
                </th>
              ),
            )}
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="*:border-t *:border-grey-50 *:font-inter *:text-sm *:font-normal *:text-grey-400">
          {data.map((row, index) => (
            <tr
              key={index}
              className="*:w-max *:whitespace-nowrap *:px-6 *:py-5 focus-within:bg-sec-50 hover:bg-sec-50"
            >
              {Object.entries(row).map(([key, value], i) =>
                key === "name" ? (
                  <td
                    key={i}
                    className="flex flex-row items-center gap-2 font-semibold"
                  >
                    <img
                      src="/images/admin/user-img.png"
                      alt=""
                      className="size-8 rounded-full"
                    />
                    <Link to="/admin/users/freelancers/FreelancerIdGoesHere">
                      {value}
                    </Link>
                  </td>
                ) : key === "projectsApplied" ? (
                  <td key={i} className="text-center">
                    <span className="rounded-md bg-sec-500 p-2 font-inter text-sm font-semibold">
                      {value}
                    </span>
                  </td>
                ) : key === "available" ? (
                  <td key={i} className="text-center">
                    <span
                      className={`rounded-2xl px-2 py-1 ${
                        value
                          ? "bg-success-50 text-success-700"
                          : "bg-error-50 text-error-700"
                      }`}
                    >
                      <span
                        className={`mr-2 inline-block size-2 rounded-full ${
                          value ? "bg-success-500" : "bg-error-500"
                        }`}
                      ></span>
                      {value ? "Available" : "Unavailable"}
                    </span>
                  </td>
                ) : (
                  <td key={i}>{value}</td>
                ),
              )}
              <td className="relative">
                <button
                  onClick={() =>
                    setActiveRow(activeRow === index ? null : index)
                  }
                >
                  <EllipsisVerticalIcon className="size-6" />
                </button>
                {activeRow === index && (
                  <ul className="absolute right-0 top-[80%] z-10 flex min-w-full flex-col gap-4 rounded-lg border border-grey-50 bg-white py-4 pl-5 pr-6 shadow">
                    <li>
                      <button
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-error-500"
                        onClick={() => setModalComponent(<DeleteUserForm />)}
                      >
                        <TrashIcon className="size-6" />
                        Delete User
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                        onClick={() =>
                          setModalComponent(<DeactivateUserForm />)
                        }
                      >
                        <XCircleIcon className="size-6 text-grey-200" />
                        Deactivate
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/admin/users/freelancers/FreelancerIdGoesHere"
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                      >
                        <UserIcon className="size-6 text-grey-200" />
                        View Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                        onClick={() => setModalComponent(<AssignProjectForm />)}
                      >
                        <BriefcaseIcon className="size-6 text-grey-200" />
                        Assign Project
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                        onClick={() =>
                          setModalComponent(<UserFeedbackWidget />)
                        }
                      >
                        <FlagIcon className="size-6 text-grey-200" />
                        Add Flag/Rate
                      </button>
                    </li>
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreelancersTable;
