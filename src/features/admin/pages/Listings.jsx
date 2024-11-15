import { Link, NavLink, useSearchParams } from "react-router-dom";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../contexts/ModalContext";

// Utils
import { convertToTitleCase } from "../../../utils";

// UIs
import ProjectsTable from "../ui/listings/tables/ProjectsTable";
import JobsTable from "../ui/listings/tables/JobsTable";
import CreateProjectForm from "../ui/listings/modals/CreateProjectForm";
import CreateJobForm from "../ui/listings/modals/CreateJobForm";

// Contents
import { jobsRecentData, projectsRecentData } from "../../../contents/admin";

const emptyTabContents = {
  projects: {
    heading: "No Projects Posted",
    text: "Currently, there are no projects in the system.",
  },
  jobs: {
    heading: "No Jobs Posted",
    text: "Currently, there are no jobs in the system.",
  },
};

const EmptyState = ({ tab }) => {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <h2 className="font-inter text-2xl font-semibold text-grey-500">
        {convertToTitleCase(tab)}
      </h2>
      <div className="flex w-full flex-col-reverse items-center gap-4 px-4 py-10 text-center lg:py-16">
        <div>
          <h3 className="font-inter text-lg font-semibold text-grey-900">
            {emptyTabContents[tab].heading}
          </h3>
          <p className="mt-4 font-inter text-sm font-normal text-grey-400">
            {emptyTabContents[tab].text}
          </p>
        </div>
        <img src="/images/admin/users-empty-icon.png" alt="" />
      </div>
    </div>
  );
};

const ProjectsTab = () => {
  if (projectsRecentData.length <= 0) return <EmptyState tab="projects" />;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h3 className="flex flex-row items-center gap-1 font-inter text-lg font-semibold text-grey-900">
          Projects
          <span className="rounded bg-pry-500 p-1 text-xs font-normal text-white">
            200
          </span>
        </h3>
        <Link to="projects" className="text-btn text-btn-sec">
          View All
        </Link>
      </div>
      <ProjectsTable data={projectsRecentData} />
    </div>
  );
};

const JobsTab = () => {
  if (jobsRecentData.length <= 0) return <EmptyState tab="jobs" />;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h3 className="flex flex-row items-center gap-1 font-inter text-lg font-semibold text-grey-900">
          Jobs
          <span className="rounded bg-pry-500 p-1 text-xs font-normal text-white">
            200
          </span>
        </h3>
        <Link to="jobs" className="text-btn text-btn-sec">
          View All
        </Link>
      </div>
      <JobsTable data={jobsRecentData} />
    </div>
  );
};

const Listings = () => {
  const { setModalComponent } = useModalContext();
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "projects";

  return (
    <main>
      <div className="flex flex-wrap-reverse items-center justify-between gap-4">
        <div>
          <h1 className="font-inter text-2xl font-semibold text-pry-500 lg:text-3xl xl:text-4xl">
            Hi Anjola!
          </h1>
          <p className="font-inter text-base font-normal text-grey-400">
            Good afternoon
          </p>
        </div>
        <div className="flex flex-row items-start gap-3 lg:gap-4">
          <button
            className="btn btn-pry"
            onClick={() => setModalComponent(<CreateProjectForm />)}
          >
            Create Project
          </button>
          <button
            className="btn btn-sec--outline"
            onClick={() => setModalComponent(<CreateJobForm />)}
          >
            Create Job
          </button>
        </div>
      </div>
      <ul className="my-5 flex flex-row justify-between gap-6 overflow-x-auto whitespace-nowrap *:w-full *:min-w-64 *:justify-between lg:my-10 lg:gap-10">
        <li className="gap-10 rounded-xl bg-sec-100 px-4 py-6 font-inter lg:px-6 lg:py-8">
          <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
            Total Listings
            <span className="mt-2 flex w-full flex-row items-center justify-between text-xl text-black lg:mt-3 lg:text-2xl">
              2500
              <BriefcaseIcon className="size-11 rounded-full bg-white p-[6px] text-black" />
            </span>
          </h2>
          <p className="text-xs font-normal text-grey-300 lg:text-sm">
            since 2024
          </p>
        </li>
        <li className="gap-10 rounded-xl bg-[hsla(95,100%,90%,1)] px-4 py-6 font-inter lg:px-6 lg:py-8">
          <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
            Total Freelancers on project
            <span className="mt-2 flex w-full flex-row items-center justify-between text-xl text-black lg:mt-3 lg:text-2xl">
              2500
              <BriefcaseIcon className="size-11 rounded-full bg-white p-[6px] text-black" />
            </span>
          </h2>
          <p className="text-xs font-normal text-grey-300 lg:text-sm">
            since 2024
          </p>
        </li>
        <li className="gap-10 rounded-xl bg-[hsla(0,64%,95%,1)] px-4 py-6 font-inter lg:px-6 lg:py-8">
          <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
            Total Applications received
            <span className="mt-2 flex w-full flex-row items-center justify-between text-xl text-black lg:mt-3 lg:text-2xl">
              2500
              <BriefcaseIcon className="size-11 rounded-full bg-white p-[6px] text-black" />
            </span>
          </h2>
          <p className="text-xs font-normal text-grey-300 lg:text-sm">
            since 2024
          </p>
        </li>
        <li className="gap-10 rounded-xl bg-[hsl(115,100%,93%)] px-4 py-6 font-inter lg:px-6 lg:py-8">
          <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
            Total Applications Accepted
            <span className="mt-2 flex w-full flex-row items-center justify-between text-xl text-black lg:mt-3 lg:text-2xl">
              2500
              <BriefcaseIcon className="size-11 rounded-full bg-white p-[6px] text-black" />
            </span>
          </h2>
          <p className="text-xs font-normal text-grey-300 lg:text-sm">
            since 2024
          </p>
        </li>
        <li className="gap-10 rounded-xl bg-[hsla(13,100%,93%,1)] px-4 py-6 font-inter lg:px-6 lg:py-8">
          <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
            Total Applications rejected
            <span className="mt-2 flex w-full flex-row items-center justify-between text-xl text-black lg:mt-3 lg:text-2xl">
              2500
              <BriefcaseIcon className="size-11 rounded-full bg-white p-[6px] text-black" />
            </span>
          </h2>
          <p className="text-xs font-normal text-grey-300 lg:text-sm">
            since last month
          </p>
        </li>
      </ul>
      <section className="flex flex-col gap-5 lg:gap-10">
        <ul className="flex flex-row gap-4 overflow-x-auto *:min-w-max lg:gap-6">
          <li>
            <NavLink
              to="?tab=projects"
              className={`btn ${currentTab === "projects" ? "btn-pry" : "btn-sec--outline"}`}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="?tab=jobs"
              className={`btn ${currentTab === "jobs" ? "btn-pry" : "btn-sec--outline"}`}
            >
              Jobs
            </NavLink>
          </li>
        </ul>
        {currentTab === "projects" && <ProjectsTab />}
        {currentTab === "jobs" && <JobsTab />}
      </section>
    </main>
  );
};

export default Listings;
