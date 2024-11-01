import { useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";
import { BellIcon } from "@heroicons/react/24/outline";

// Contents
const tabContent = {
  applied: {
    title: "No Applied Projects Yet",
    description: "It looks like you haven't applied for any projects yet.",
  },
  saved: {
    title: "No Saved Projects",
    description:
      "You haven't saved any projects. Save projects that catch your eye so you can easily find and apply to them later.",
  },
  decision: {
    title: "No Project Decisions Yet",
    description:
      "You haven't received any decisions on your project applications.",
  },
};

const appliedContent = [
  {
    projectId: "1232",
    projectTitle: "Frontend Developer for E-commerce Website",
    timeApplied: "Applied 3w ago",
    status: "Under review",
  },
  {
    projectId: "1232",
    projectTitle: "Frontend Developer for E-commerce Website",
    timeApplied: "Applied 3w ago",
    status: "Application viewed 3 hours ago",
  },
  {
    projectId: "1232",
    projectTitle: "Frontend Developer for E-commerce Website",
    timeApplied: "Applied 3w ago",
    status: "Application viewed 3 hours ago",
  },
];

const DashboardBanner = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  const handleToggle = () => {
    setIsAvailable(!isAvailable);
    toast.success(
      <ToastMessage message="Your work availability has been successfully saved." />,
    );
  };

  return (
    <section className="dashboard-banner-gradient flex w-full flex-row items-center justify-between gap-2 rounded-2xl px-5 py-4 font-inter text-white shadow-lg lg:p-8">
      <div>
        <h1 className="mb-1 text-lg font-semibold text-sec-50 lg:text-3xl">
          Hello, Patricia
        </h1>
        <p className="text-xs font-normal text-sec-50 lg:text-base">
          Welcome to your dashboard
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <label
          htmlFor="availability"
          aria-label="set your availability status"
          className="relative h-5 w-8 cursor-pointer rounded-full bg-[hsla(240,3%,49%,0.16)] transition has-[:checked]:bg-[hsla(135,59%,49%,1)] lg:h-8 lg:w-12"
        >
          <input
            type="checkbox"
            id="availability"
            checked={isAvailable}
            onChange={handleToggle}
            className="peer sr-only"
          />
          <span className="shadow-[0px_3px_1px_0px_hsla(0, 0%, 0%, 0.06),0px_3px_8px_0px_hsla(0, 0%, 0%, 0.15),0px_0px_0px_1px_hsla(0, 0%, 0%, 0.04)] absolute left-[2px] top-[2px] size-4 rounded-full bg-white transition-all peer-checked:start-[calc(100%-18px)] lg:size-7 lg:peer-checked:start-[calc(100%-30px)]"></span>
        </label>
        <span className="text-xs font-semibold lg:text-2xl">
          {isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>
    </section>
  );
};

const ProfileCompletionWidget = () => {
  return (
    <div className="w-full rounded-md border border-grey-50 bg-white p-8 shadow-xl lg:w-1/2">
      <h2 className="text-lg font-semibold">
        Your Profile is <span className="font-bold">30% complete</span>
      </h2>

      {/* Completion Checklist */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked
            readOnly
            className="form-checkbox h-4 w-4 text-pry-500"
          />
          <span>Complete Basic Profile Info</span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-pry-500"
          />
          <span>Add Resume and Cover Letter</span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-pry-500"
          />
          <span>Add Work Experience</span>
        </div>
      </div>

      <p className="mt-4 text-grey-500">
        Complete profiles stand a higher chance of getting hired
      </p>

      {/* Update Profile Button */}
      <button className="mt-36 w-full rounded-md bg-sec-500 py-2 font-raleway text-grey-500">
        Update Profile
      </button>
    </div>
  );
};

const TabEmptyState = ({ tab }) => {
  return (
    <div className="flex w-full max-w-[26ch] flex-col items-center text-center lg:max-w-[32ch] lg:pt-16">
      <img
        src="/images/freelancer/project.png"
        alt="Projects"
        className="mb-4 size-14 lg:size-32"
      />

      <h3 className="font-inter text-base font-semibold text-grey-900 lg:text-lg">
        {tabContent[tab].title}
      </h3>
      <p className="mb-6 mt-2 text-xs text-grey-600 lg:mb-12 lg:mt-4 lg:text-sm">
        {tabContent[tab].description}
      </p>
      <Link to="projects" className="btn btn-pry btn--large">
        Explore Projects
      </Link>
    </div>
  );
};

const AppliedTab = () => {
  if (appliedContent.length <= 0) return <TabEmptyState tab="applied" />;

  return (
    <ul className="flex w-full flex-col gap-4 rounded-lg border border-grey-100 bg-white p-2 font-inter lg:p-4">
      {appliedContent.map((item, index) => (
        <li
          key={index}
          className="flex flex-row items-start justify-between gap-4 border-b border-grey-200 pb-2"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-grey-900 lg:text-lg">
              {item.projectTitle}
            </h3>
            <p className="text-xs font-normal text-grey-400 lg:text-base">
              {item.timeApplied}
            </p>
            <p className="flex flex-row items-center gap-1 text-[10px] lg:text-sm">
              <BellIcon className="size-4 text-success-500" />
              {item.status}
            </p>
          </div>
          <p className="rounded bg-success-500 p-1 text-[10px] font-normal text-white lg:p-2 lg:text-sm">
            Applied
          </p>
        </li>
      ))}
    </ul>
  );
};

const activeTabClasses =
  "font-medium lg:font-semibold text-grey-900 after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-grey-900";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "applied";

  return (
    <main className="flex flex-col gap-6 lg:gap-12">
      <DashboardBanner />
      <section className="flex flex-col-reverse justify-between gap-6 lg:flex-row lg:gap-12">
        <div className="w-full">
          <h2 className="mb-2 font-inter text-lg font-semibold text-grey-900 lg:mb-4 lg:text-xl">
            My Projects
          </h2>
          <div className="flex flex-col gap-4">
            <nav className="w-full">
              <menu className="flex w-full flex-row items-center justify-between gap-2 border-b border-grey-200 font-inter text-xs font-normal text-grey-300 lg:text-base xl:pr-16">
                <li className="relative px-2 py-1">
                  <NavLink
                    to="?tab=applied"
                    className={currentTab === "applied" && activeTabClasses}
                  >
                    Applied (0)
                  </NavLink>
                </li>
                <li className="relative px-2 py-1">
                  <NavLink
                    to="?tab=saved"
                    className={currentTab === "saved" && activeTabClasses}
                  >
                    Saved (0)
                  </NavLink>
                </li>
                <li className="relative px-2 py-1">
                  <NavLink
                    to="?tab=decision"
                    className={currentTab === "decision" && activeTabClasses}
                  >
                    Decision (0)
                  </NavLink>
                </li>
              </menu>
            </nav>
            <div className="flex flex-col items-center">
              {currentTab === "applied" && <AppliedTab />}
            </div>
          </div>
        </div>
        <ProfileCompletionWidget />
      </section>
    </main>
  );
};

export default Dashboard;
