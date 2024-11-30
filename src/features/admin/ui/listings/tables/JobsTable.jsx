import { useState } from "react";
import { Link } from "react-router-dom";
import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../../contexts/ModalContext";

// UIs
import CreateJobForm from "../modals/CreateJobForm";
import DeleteJobForm from "../modals/DeleteJobForm";

// Utils
import { convertToTitleCase } from "../../../../../utils";

// Contents
import { jobsDataTitles } from "../../../../../contents/admin";

const JobsTable = ({ data }) => {
  const [activeRow, setActiveRow] = useState(null);
  const { setModalComponent } = useModalContext();

  return (
    <div className="overflow-x-auto rounded-lg border border-grey-50">
      <table className="w-full">
        <thead>
          <tr className="bg-grey-50 font-inter text-sm font-semibold text-grey-900">
            {jobsDataTitles.map((title, index) => (
              <th key={index} className="px-6 py-3 text-start">
                {convertToTitleCase(title)}
              </th>
            ))}
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="*:border-t *:border-grey-50 *:font-inter *:text-sm *:font-normal *:text-grey-400">
          {data.map((row, index) => (
            <tr
              key={index}
              className="whitespace-nowrap *:w-max *:px-6 *:py-5 focus-within:bg-sec-50 hover:bg-sec-50"
            >
              {Object.entries(row).map(([key, value], i) =>
                key === "projectTitle" ? (
                  <td key={i} className="text-start">
                    <Link to="/admin/listings/jobs/JobIdGoesHere">{value}</Link>
                  </td>
                ) : key === "status" ? (
                  <td key={i} className="text-start">
                    <span
                      className={`rounded-md px-4 py-2 text-grey-900 ${value === "opened" ? "bg-[#FFDF8A]" : value === "draft" ? "bg-[#E2FFCE]" : "bg-[#FAE8E8]"}`}
                    >
                      {value}
                    </span>
                  </td>
                ) : (
                  <td key={i} className="text-center">
                    {value}
                  </td>
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
                      <Link
                        to="/admin/listings/jobs/applications"
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                      >
                        <UsersIcon className="size-6 text-grey-200" />
                        View Applicants
                      </Link>
                    </li>
                    <li>
                      <button
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-grey-900"
                        onClick={() =>
                          setModalComponent(<CreateJobForm edit={true} />)
                        }
                      >
                        <PencilIcon className="size-6 text-grey-200" />
                        Edit Job
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex flex-row items-center gap-2 font-inter text-sm font-semibold text-error-500"
                        onClick={() => setModalComponent(<DeleteJobForm />)}
                      >
                        <TrashIcon className="size-6" />
                        Delete Job
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

export default JobsTable;
