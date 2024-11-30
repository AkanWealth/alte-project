import { useState } from "react";
import {
  EllipsisVerticalIcon,
  KeyIcon,
  PencilSquareIcon,
  TrashIcon,
  UserMinusIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../../contexts/ModalContext";

// UIs
import DeleteUserForm from "../../modals/DeleteUserForm";
import DeactivateUserForm from "../../modals/DeactivateUserForm";

// Utils
import { convertToTitleCase } from "../../../../../utils";

// Contents
import { internalUsersDataTitles } from "../../../../../contents/admin";
import { Link } from "react-router-dom";

const InternalUsersTable = ({ data }) => {
  const [activeRow, setActiveRow] = useState(null);
  const { setModalComponent } = useModalContext();

  return (
    <div className="overflow-x-auto rounded-lg border border-grey-50">
      <table className="w-full">
        <thead>
          <tr className="bg-grey-50 font-inter text-sm font-semibold text-grey-900 *:px-6 *:py-3">
            {internalUsersDataTitles.map((title, index) => (
              <th key={index} className="text-start">
                {convertToTitleCase(title)}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody className="*:border-t *:border-grey-50 *:font-inter *:text-sm *:font-normal *:text-grey-400">
          {data.map((data, index) => (
            <tr
              key={index}
              className="*:w-max *:whitespace-nowrap *:px-6 *:py-5 focus-within:bg-sec-50 hover:bg-sec-50"
            >
              {Object.entries(data).map(([key, value], index) =>
                key === "name" ? (
                  <td key={index}>
                    <Link to="/admin/users/internal-users/userIdGoesHere">
                      {value}
                    </Link>
                  </td>
                ) : key === "active" ? (
                  <td key={index}>
                    <p
                      className={`w-fit rounded-2xl px-2 py-1 ${value ? "bg-success-50 text-success-700" : "bg-error-50 text-error-700"}`}
                    >
                      <span
                        className={`mr-2 inline-block size-2 rounded-full ${value ? "bg-success-500" : "bg-error-500"}`}
                      ></span>
                      {value ? "Active" : "Inactive"}
                    </p>
                  </td>
                ) : (
                  <td key={index}>{value}</td>
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
                      <button className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900">
                        <UserPlusIcon className="size-6 text-grey-200" />
                        Activate
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                        onClick={() =>
                          setModalComponent(<DeactivateUserForm />)
                        }
                      >
                        <UserMinusIcon className="size-6 text-grey-200" />
                        Deactivate
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/admin/users/internal-users/userIdGoesHere"
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                      >
                        <PencilSquareIcon className="size-6 text-grey-200" />
                        Edit User
                      </Link>
                    </li>
                    <li>
                      <button className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900">
                        <KeyIcon className="size-6 text-grey-200" />
                        Reset password
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-error-500"
                        onClick={() => setModalComponent(<DeleteUserForm />)}
                      >
                        <TrashIcon className="size-6" />
                        Delete User
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

export default InternalUsersTable;
