import { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../contexts/ModalContext";

// UIs
import FreelancerTable from "../../ui/users/tables/FreelancersTable";
import Pagination from "../../../../ui/Pagination";
import ExportDataForm from "../../ui/ExportDataForm";

// Contents
import { freelancersData } from "../../../../contents/admin";

const Freelancers = () => {
  const { setModalComponent } = useModalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = freelancersData.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <form className="w-full max-w-screen-sm overflow-hidden rounded-md bg-grey-50 px-3 py-2 lg:py-3">
          <div className="flex flex-row items-center gap-2">
            <MagnifyingGlassIcon className="size-6 text-grey-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-transparent bg-none font-inter text-sm font-normal text-grey-500 outline-none"
            />
          </div>
          <button type="submit" className="sr-only">
            Submit
          </button>
        </form>
        <button
          className="btn btn-pry btn-icon ml-auto"
          onClick={() => setModalComponent(<ExportDataForm />)}
        >
          <span className="hidden lg:block">Export</span>
          <ArrowTopRightOnSquareIcon className="size-6" />
        </button>
        <button className="btn btn-icon group relative text-grey-400">
          <span className="hidden lg:block">Filter</span>
          <Bars3BottomRightIcon className="size-6" />
          <ul className="absolute right-0 top-[80%] z-10 hidden min-w-full flex-col gap-4 rounded-lg border border-grey-50 bg-white py-4 pl-5 pr-6 shadow *:whitespace-nowrap group-focus:flex">
            <li>
              <label
                htmlFor="allUsers"
                className="flex flex-row items-center gap-2 font-inter text-base text-grey-900"
              >
                <input
                  type="checkbox"
                  name="allUsers"
                  id="allUsers"
                  className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                />
                All Users
              </label>
            </li>
            <li>
              <label
                htmlFor="onProject"
                className="flex flex-row items-center gap-2 font-inter text-base text-grey-900"
              >
                <input
                  type="checkbox"
                  name="onProject"
                  id="onProject"
                  className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                />
                On Project
              </label>
            </li>
            <li>
              <label
                htmlFor="roles"
                className="flex flex-row items-center gap-2 font-inter text-base text-grey-900"
              >
                <input
                  type="checkbox"
                  name="roles"
                  id="roles"
                  className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                />
                Roles
              </label>
            </li>
          </ul>
        </button>
      </div>
      <section className="flex flex-col gap-6">
        <FreelancerTable data={currentPageData} />
        <div className="mx-auto">
          <Pagination
            currentPage={currentPage}
            totalCount={freelancersData.length}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </section>
    </main>
  );
};

export default Freelancers;
