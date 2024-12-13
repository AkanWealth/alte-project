import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isSalaryDropdownOpen, setIsSalaryDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const locations = ["Remote", "On-site", "Hybrid(part-time"];
  const salaryRanges = [
    "Less than $1000",
    "$1000-$2000",
    "$2000-$5000",
    "$5000-$10000",
  ];
  const filters = [
    "Product Management",
    "Project Management",
    "Business Analyst",
    "UI/UX Design",
    "Software Development",
  ];

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <main>
      <div className="bg-[#FBFFFE] p-6">
        <h2 className="text-gray-900 text-2xl font-bold">
          Projects picks for you
        </h2>
        <p className="text-gray-500 mb-4">
          Based on your profile and search history
        </p>

        <div className="flex flex-wrap items-center justify-end space-x-4">
          {!showSearch && (
            <button onClick={toggleSearch} className="relative">
              <svg
                className="text-gray-400 h-6 w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.66-4.32A7.5 7.5 0 1116.64 6a7.5 7.5 0 011.67 6.33z"
                />
              </svg>
            </button>
          )}

          {/* Search Input - only visible when showSearch is true */}
          {showSearch && (
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="border-gray-300 focus:ring-blue-500 w-full rounded-md border py-2 pl-8 pr-4 focus:outline-none focus:ring-2 md:w-auto"
              />
              <svg
                className="text-gray-400 absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 transform"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.66-4.32A7.5 7.5 0 1116.64 6a7.5 7.5 0 011.67 6.33z"
                />
              </svg>
            </div>
          )}
          {/* Location Filter Dropdown */}
          <div className="relative inline-block">
            <button
              className="border-gray-300 text-gray-700 inline-flex w-full justify-between rounded-md border bg-white px-4 py-2"
              onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
            >
              {selectedLocation || "Location"}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isLocationDropdownOpen && (
              <div className="border-gray-200 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border bg-white shadow-lg">
                <div className="py-1">
                  {locations.map((location) => (
                    <label
                      key={location}
                      className="hover:bg-gray-100 flex cursor-pointer items-center px-4 py-2"
                    >
                      <input
                        type="checkbox"
                        name="location"
                        value={location}
                        checked={selectedLocation === location}
                        onChange={() => {
                          setSelectedLocation(location);
                          setIsLocationDropdownOpen(false);
                        }}
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2">{location}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Salary Range Filter Dropdown */}
          <div className="relative inline-block">
            <button
              className="border-gray-300 text-gray-700 inline-flex w-full justify-between rounded-md border bg-white px-4 py-2"
              onClick={() => setIsSalaryDropdownOpen(!isSalaryDropdownOpen)}
            >
              {selectedSalary || "Salary Range"}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isSalaryDropdownOpen && (
              <div className="border-gray-200 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border bg-white shadow-lg">
                <div className="py-1">
                  {salaryRanges.map((range) => (
                    <label
                      key={range}
                      className="hover:bg-gray-100 flex cursor-pointer items-center px-4 py-2"
                    >
                      <input
                        type="checkbox"
                        name="salary"
                        value={range}
                        checked={selectedSalary === range}
                        onChange={() => {
                          setSelectedSalary(range);
                          setIsSalaryDropdownOpen(false);
                        }}
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Filter By Dropdown */}
          <div className="relative inline-block">
            <button
              className="border-gray-300 text-gray-700 inline-flex w-full justify-between rounded-md border bg-white px-4 py-2"
              onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
            >
              {selectedFilter || "Filter by"}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isFilterDropdownOpen && (
              <div className="border-gray-200 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border bg-white shadow-lg">
                <div className="py-1">
                  {filters.map((filter) => (
                    <label
                      key={filter}
                      className="hover:bg-gray-100 flex cursor-pointer items-center px-4 py-2"
                    >
                      <input
                        type="checkbox"
                        name="filterBy"
                        value={filter}
                        checked={selectedFilter === filter}
                        onChange={() => {
                          setSelectedFilter(filter);
                          setIsFilterDropdownOpen(false);
                        }}
                        className="form-checkbox text-blue-600"
                      />
                      <span className="ml-2">{filter}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mb-2 ">
          <ProjectCard />
          
        </div>
      </div>
    </main>
  );
};

export default Projects;
