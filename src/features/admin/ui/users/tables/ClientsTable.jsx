import { useState } from "react";
import {
  EllipsisVerticalIcon,
  TrashIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../../contexts/ModalContext";

// Components
import CopyEmailButton from "../../../components/CopyEmailButton";

// UIs
import DeleteUserForm from "../../modals/DeleteUserForm";

// Utils
import { convertToTitleCase } from "../../../../../utils";

// Contents
import { clientsDataTitles } from "../../../../../contents/admin";
import { Link } from "react-router-dom";

const ClientsTable = ({ data }) => {
  const [activeRow, setActiveRow] = useState(null);
  const { setModalComponent } = useModalContext();

  return (
    <div className="overflow-x-auto rounded-lg border border-grey-50">
      <table className="w-full">
        <thead>
          <tr className="bg-grey-50 font-inter text-sm font-semibold text-grey-900 *:px-6 *:py-3">
            {clientsDataTitles.map((title, index) => (
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
                key === "businessName" ? (
                  <td key={index}>
                    <Link to="/admin/users/clients/ClientIdGoesHere">
                      {value}
                    </Link>
                  </td>
                ) : key === "contactDetails" ? (
                  <td key={index}>
                    <span className="block font-semibold">{value.name}</span>
                    <span className="flex flex-row items-center gap-1">
                      {value.email}
                      <CopyEmailButton email={value.email} />
                    </span>
                  </td>
                ) : key === "clientRequest" ? (
                  <td key={index} className="text-xs">
                    <ul className="flex flex-wrap gap-1">
                      {value.map((item, index) => (
                        <li
                          key={index}
                          className="rounded-md bg-grey-50 px-2 py-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
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
                      <button
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-error-500"
                        onClick={() => setModalComponent(<DeleteUserForm />)}
                      >
                        <TrashIcon className="size-6" />
                        Delete Client
                      </button>
                    </li>
                    <li>
                      <Link
                        to='to="/admin/users/clients/ClientIdGoesHere"'
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                      >
                        <UserIcon className="size-6 text-grey-200" />
                        View Client
                      </Link>
                    </li>
                    <li>
                      <button className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900">
                        <EnvelopeIcon className="size-6 text-grey-200" />
                        Send Email
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

export default ClientsTable;
