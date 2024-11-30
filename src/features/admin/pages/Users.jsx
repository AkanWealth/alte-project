import { Link, NavLink, useSearchParams } from "react-router-dom";
import {
  PlusIcon,
  UserGroupIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../contexts/ModalContext";

// Utils
import { convertToTitleCase } from "../../../utils";

// UIs
import FreelancersTable from "../ui/users/tables/FreelancersTable";
import ClientsTable from "../ui/users/tables/ClientsTable";
import InternalUsersTable from "../ui/users/tables/InternalUsersTable";
import CreateUserForm from "../ui/users/modals/CreateUserForm";

// Contents
import {
  clientsRecentData,
  freelancersRecentData,
  internalUsersData,
  internalUsersRecentData,
} from "../../../contents/admin";

const emptyTabContents = {
  freelancers: {
    heading: "No Freelancers Registered",
    text: "Currently, there are no freelancers in the system.",
  },
  clients: {
    heading: "No Clients Available",
    text: "There are no clients at the moment.",
  },
  "internal-users": {
    heading: "No Internal Users Added",
    text: "No internal users have been added to the platform yet.",
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

const FreelancersTab = () => {
  if (freelancersRecentData.length <= 0)
    return <EmptyState tab="freelancers" />;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h3 className="flex flex-row items-center gap-1 font-inter text-lg font-semibold text-grey-900">
          Freelancers
          <span className="rounded bg-pry-500 p-1 text-xs font-normal text-white">
            200
          </span>
        </h3>
        <Link to="freelancers" className="text-btn text-btn-sec">
          View All
        </Link>
      </div>
      <FreelancersTable data={freelancersRecentData} />
    </div>
  );
};

const ClientsTab = () => {
  if (freelancersRecentData.length <= 0) return <EmptyState tab="clients" />;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h3 className="flex flex-row items-center gap-1 font-inter text-lg font-semibold text-grey-900">
          Clients
          <span className="rounded bg-pry-500 p-1 text-xs font-normal text-white">
            200
          </span>
        </h3>
        <Link to="clients" className="text-btn text-btn-sec">
          View All
        </Link>
      </div>
      <ClientsTable data={clientsRecentData} />
    </div>
  );
};

const InternalUsersTab = () => {
  if (internalUsersData.length <= 0) return <EmptyState tab="internal-users" />;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h3 className="flex flex-row items-center gap-1 font-inter text-lg font-semibold text-grey-900">
          Internal Users
          <span className="rounded bg-pry-500 p-1 text-xs font-normal text-white">
            200
          </span>
        </h3>
        <Link to="internal-users" className="text-btn text-btn-sec">
          View All
        </Link>
      </div>
      <InternalUsersTable data={internalUsersRecentData} />
    </div>
  );
};

const Users = () => {
  const { setModalComponent } = useModalContext();
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "freelancers";

  return (
    <main>
      <div className="flex flex-wrap items-center justify-between gap-2">
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
            onClick={() => setModalComponent(<CreateUserForm />)}
          >
            <PlusIcon className="size-5" /> Create New User
          </button>
          <Link to="user-roles-and-permission" className="btn btn-sec--outline">
            Manage Roles
          </Link>
        </div>
      </div>
      <ul className="my-5 flex flex-row justify-between gap-6 overflow-x-auto lg:my-10 lg:gap-10">
        <li className="flex min-w-max flex-row items-center gap-10 rounded-xl bg-sec-100 px-4 py-6 lg:px-6 lg:py-8">
          <div className="font-inter">
            <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
              Total Users
              <span className="mt-2 block text-xl text-black lg:mt-3 lg:text-2xl">
                2500
              </span>
            </h2>
            <p className="text-xs font-normal text-grey-300 lg:text-sm">
              <span className="mr-1 font-bold text-success-500">+23%</span>
              since last month
            </p>
          </div>
          <UserGroupIcon className="size-11 rounded-full bg-white p-[6px] text-black" />
        </li>
        <li className="flex min-w-max flex-row items-center gap-10 rounded-xl bg-[hsla(95,100%,90%,1)] px-4 py-6 lg:px-6 lg:py-8">
          <div className="font-inter">
            <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
              Clients
              <span className="mt-2 block text-xl text-black lg:mt-3 lg:text-2xl">
                400
              </span>
            </h2>
            <p className="text-xs font-normal text-grey-300 lg:text-sm">
              <span className="mr-1 font-bold text-success-500">+23%</span>
              since last month
            </p>
          </div>
          <UserIcon className="size-11 rounded-full bg-white p-[6px] text-black" />
        </li>
        <li className="flex min-w-max flex-row items-center gap-10 rounded-xl bg-[hsla(0,64%,95%,1)] px-4 py-6 lg:px-6 lg:py-8">
          <div className="font-inter">
            <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
              Freelancers
              <span className="mt-2 block text-xl text-black lg:mt-3 lg:text-2xl">
                250
              </span>
            </h2>
            <p className="text-xs font-normal text-grey-300 lg:text-sm">
              <span className="mr-1 font-bold text-success-500">+23%</span>
              since last month
            </p>
          </div>
          <UsersIcon className="size-11 rounded-full bg-white p-[6px] text-black" />
        </li>
        <li className="flex min-w-max flex-row items-center gap-10 rounded-xl bg-[hsla(13,100%,93%,1)] px-4 py-6 lg:px-6 lg:py-8">
          <div className="font-inter">
            <h2 className="mb-2 text-sm font-semibold text-grey-400 lg:mb-3 lg:text-base">
              Internal Users
              <span className="mt-2 block text-xl text-black lg:mt-3 lg:text-2xl">
                750
              </span>
            </h2>
            <p className="text-xs font-normal text-grey-300 lg:text-sm">
              <span className="mr-1 font-bold text-success-500">+23%</span>
              since last month
            </p>
          </div>
          <UserPlusIcon className="size-11 rounded-full bg-white p-[6px] text-black" />
        </li>
      </ul>
      <section className="flex flex-col gap-5 lg:gap-10">
        <ul className="flex flex-row gap-4 overflow-x-auto *:min-w-max lg:gap-6">
          <li>
            <NavLink
              to="?tab=freelancers"
              className={`btn ${currentTab === "freelancers" ? "btn-pry" : "btn-sec--outline"}`}
            >
              Freelancers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="?tab=clients"
              className={`btn ${currentTab === "clients" ? "btn-pry" : "btn-sec--outline"}`}
            >
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="?tab=internal-users"
              className={`btn ${currentTab === "internal-users" ? "btn-pry" : "btn-sec--outline"}`}
            >
              Internal User
            </NavLink>
          </li>
        </ul>
        {currentTab === "freelancers" && <FreelancersTab />}
        {currentTab === "clients" && <ClientsTab />}
        {currentTab === "internal-users" && <InternalUsersTab />}
      </section>
    </main>
  );
};

export default Users;
