import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HomeIcon,
  MapPinIcon,
  Square3Stack3DIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

const Job = () => {
  return (
    <main>
      <h1 className="mb-4 font-inter text-2xl font-bold lg:text-3xl">
        UIUX Designer
      </h1>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-row items-center gap-2">
          <ClockIcon className="size-4 rounded-full bg-pry-50 p-px lg:size-6 lg:p-1" />
          <span className="text-base text-black lg:text-lg">
            <span className="mr-1">Posted on</span>
            <span className="font-medium">Sept 2, 2024</span>
          </span>
        </li>
        <li className="flex flex-row items-center gap-2">
          <ClockIcon className="size-4 rounded-full bg-pry-50 p-px lg:size-6 lg:p-1" />
          <span className="text-base text-black lg:text-lg">
            <span className="mr-1">Deadline</span>
            <span className="font-medium">Sept 2, 2024</span>
          </span>
        </li>
        <li className="flex flex-row items-center gap-2">
          <MapPinIcon className="size-4 rounded-full bg-pry-50 p-px lg:size-6 lg:p-1" />
          <span className="text-base font-medium text-black lg:text-lg">
            Remote
          </span>
        </li>
        <li className="flex flex-row items-center gap-2">
          <HomeIcon className="size-4 rounded-full bg-pry-50 p-px lg:size-6 lg:p-1" />
          <span className="text-base font-medium text-black lg:text-lg">
            Full time
          </span>
        </li>
        <li className="flex flex-row items-center gap-2">
          <TagIcon className="size-4 rounded-full bg-pry-50 p-px lg:size-6 lg:p-1" />
          <span className="text-base font-medium text-black lg:text-lg">
            Banking/Finance
          </span>
        </li>
        <li className="flex flex-row items-center gap-2">
          <Square3Stack3DIcon className="size-4 rounded-full bg-pry-50 p-px lg:size-6 lg:p-1" />
          <span className="text-base font-medium text-black lg:text-lg">
            Entry Level
          </span>
        </li>
      </ul>
      <div className="mt-8">
        <h2 className="mb-6 w-fit border-b pb-2 font-raleway text-xl font-bold lg:text-2xl">
          Overview
        </h2>
        <h3 className="mb-4 font-inter text-2xl font-medium text-grey-500">
          About:
        </h3>
        <p className="mb-8 text-base text-grey-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id estlaborum.
        </p>
        <h3 className="mb-4 font-inter text-2xl font-medium text-grey-500">
          Job Description:
        </h3>
        <p className="mb-8 text-base text-grey-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id estlaborum.
        </p>
        <h3 className="mb-4 font-inter text-2xl font-medium text-grey-500">
          Job Responsibility:
        </h3>
        <ol className="mb-8 list-inside list-decimal text-base text-grey-900">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
        </ol>
        <h3 className="mb-4 font-inter text-2xl font-medium text-grey-500">
          Skill Required:
        </h3>
        <ul className="mb-8 flex flex-wrap gap-4 text-base text-grey-900">
          <li className="rounded-md bg-grey-50 px-2 py-1">Skill</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="mb-6 w-fit border-b pb-2 font-raleway text-xl font-bold lg:text-2xl">
          Application Details
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex flex-wrap items-center gap-2 text-base lg:text-lg">
            <span className="font-medium text-pry-600">
              Number of Applicant:
            </span>
            <span>
              <span className="mr-2">6</span>
              <Link to="/" className="text-btn--underline text-btn-sec">
                View
              </Link>
            </span>
          </li>
          <li className="flex flex-wrap items-center gap-2 text-base lg:text-lg">
            <span className="font-medium text-pry-600">
              Number of Application Accepted:
            </span>
            <span>
              <span className="mr-2">6</span>
              <Link to="/" className="text-btn--underline text-btn-sec">
                View
              </Link>
            </span>
          </li>
          <li className="flex flex-wrap items-center gap-2 text-base lg:text-lg">
            <span className="font-medium text-pry-600">
              Number of Application Pending:
            </span>
            <span>
              <span className="mr-2">6</span>
              <Link to="/" className="text-btn--underline text-btn-sec">
                View
              </Link>
            </span>
          </li>
          <li className="flex flex-wrap items-center gap-2 text-base lg:text-lg">
            <span className="font-medium text-pry-600">
              Number Scheduled for interview:
            </span>
            <span>
              <span className="mr-2">6</span>
              <Link to="/" className="text-btn--underline text-btn-sec">
                View
              </Link>
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-6 flex flex-row gap-4">
        <button className="btn btn-pry--outline w-full border-error-500 text-error-500 hover:border-error-500">
          Delete
        </button>
        <button className="btn btn-pry w-full">Edit</button>
      </div>
    </main>
  );
};

export default Job;
