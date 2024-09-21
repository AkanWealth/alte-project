import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import {
  faChevronDown,
  faCircleXmark,
  faGlobe,
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import JobPost from "../../components/JobPost";
import Pagination from "../../components/Pagination";
import { jobListings } from "../../contents/jobLists";

const DropdownItem = ({ register, name, value }) => {
  return (
    <label
      htmlFor={value}
      className="flex flex-row items-center gap-2 p-2 font-inter text-base font-normal text-grey-900 hover:bg-[hsla(214,11%,87%,1)] has-[:checked]:bg-[hsla(214,11%,87%,1)]"
    >
      <input
        type="checkbox"
        name={name}
        id={value}
        className="relative aspect-square w-4 appearance-none overflow-hidden rounded-sm border border-[hsla(210,10%,58%,1)] bg-white bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:text-[red] checked:after:inline [&[aria-invalid=true]]:text-error-500"
        {...register(`${name}.${value}`)}
      />
      {value}
    </label>
  );
};

const FilterTag = ({ tag, handleSetTags }) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg bg-pry-50 p-2 font-inter text-sm font-normal text-pry-900">
      {tag}
      <button onClick={() => handleSetTags()}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="text-base text-error-500"
        />
      </button>
    </span>
  );
};

const JobSeekers = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const levels = searchParams.get("levels")?.split(",") || [];
  const categories = searchParams.get("categories")?.split(",") || [];
  const [jobTypeFilter, setJobTypeFilter] = useState("all");
  const { register, handleSubmit, reset } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  let filteredData = [...jobListings];

  switch (jobTypeFilter) {
    case "all":
      filteredData = [...jobListings];
      break;
    case "full-time":
      filteredData = filteredData.filter((data) => data.type === "full-time");
      break;
    case "part-time":
      filteredData = filteredData.filter((data) => data.type === "part-time");
      break;
    case "contract":
      filteredData = filteredData.filter((data) => data.type === "contract");
  }

  if (searchQuery) {
    filteredData = filteredData.filter((data) =>
      data.position.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  if (levels && levels.length > 0) {
    filteredData = filteredData.filter((data) => levels.includes(data.level));
  }

  if (categories && categories.length > 0) {
    filteredData = filteredData.filter((data) =>
      categories.includes(data.category),
    );
  }

  const currentPageData = filteredData.slice(startIndex, endIndex);

  const onSubmit = (data) => {
    const { search, levels, categories } = data;
    const newParams = new URLSearchParams(searchParams);

    if (search) {
      newParams.set("search", search);
    } else {
      newParams.delete("search");
    }

    if (levels) {
      const newLevels = Object.keys(levels).filter((key) => levels[key]);

      if (newLevels.length > 0) {
        newParams.set("levels", newLevels.join(","));
      } else newParams.delete("levels");
    }

    if (categories) {
      const newCategories = Object.keys(categories).filter(
        (key) => categories[key],
      );

      if (newCategories.length > 0) {
        newParams.set("categories", newCategories.join(","));
      } else newParams.delete("categories");
    }

    setSearchParams(newParams);
    reset();
    setCurrentPage(1);
  };

  const deleteTags = (param, value) => {
    const newParams = new URLSearchParams(searchParams);

    const newTags = searchParams
      .get(param)
      .split(",")
      .filter((tag) => tag !== value);

    if (newTags.length <= 0) {
      newParams.delete(param);
    } else {
      newParams.set(param, newTags.join(","));
    }

    setSearchParams(newParams);
  };

  const clearTags = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("levels");
    newParams.delete("categories");
    setSearchParams(newParams);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <section className="min-h-[400px] bg-pry-500 px-5 py-12 md:py-24 lg:px-10">
        <div className="inner flex flex-col items-start">
          <h1 className="rounded-md bg-sec-500 p-2 font-inter text-3xl font-bold text-black">
            Vacant Positions
          </h1>
          <p className="mb-6 mt-10 font-inter text-2xl font-semibold text-white">
            Find Your Dream Job with Alte
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full max-w-5xl flex-wrap gap-3"
          >
            <div className="flex shrink grow basis-[820px] flex-wrap gap-2">
              <div className="relative flex shrink grow basis-2/3 flex-row items-center rounded bg-[hsla(0,0%,100%,1)] px-2 py-2">
                <label
                  htmlFor="search"
                  className="flex w-full flex-row items-center"
                >
                  <span className="sr-only">Search</span>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="size-5 text-[hsla(213,13%,59%,1)] lg:size-6"
                  />
                  <input
                    type="text"
                    name=""
                    id="search"
                    placeholder="Search"
                    className="mx-1 w-full text-base outline-none lg:text-lg"
                    {...register("search", { required: true })}
                  />
                </label>
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setOpenFilter(!openFilter)}
                    className="grid place-content-center"
                  >
                    <FontAwesomeIcon
                      icon={faSliders}
                      className="size-5 text-[hsla(213,13%,59%,1)] lg:size-6"
                    />
                  </button>
                  {openFilter && (
                    <fieldset className="absolute right-0 top-[calc(100%+8px)] w-max min-w-44 rounded-sm border border-[hsla(216,12%,92%,1)] bg-[hsla(0,0%,100%,1)] shadow-[0px_4px_6px_-1px_hsla(0,0%,0%,0.1)]">
                      <legend className="sr-only">Filter by</legend>
                      {["Internship", "Mid level", "Senior", "Entry level"].map(
                        (item) => (
                          <DropdownItem
                            key={item}
                            register={register}
                            name="levels"
                            value={item}
                          />
                        ),
                      )}
                    </fieldset>
                  )}
                </div>
              </div>
              <fieldset className="relative flex shrink-0 grow basis-[30%] flex-row rounded bg-[hsla(0,0%,100%,1)] px-2 py-2">
                <div className="relative flex w-full flex-row items-center justify-between">
                  <span className="font-inter text-sm font-normal text-grey-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-[1] after:overflow-hidden after:whitespace-pre after:pt-[5%] after:content-['Job_Category/Industry']"></span>
                  <button
                    type="button"
                    onClick={() => setOpenCategory(!openCategory)}
                    className="z-[2] grid place-content-center bg-white pl-1"
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="size-5 text-[hsla(213,13%,59%,1)] lg:size-6"
                    />
                  </button>
                </div>
                {openCategory && (
                  <fieldset className="absolute right-0 top-[calc(100%+8px)] w-max min-w-44 rounded-sm border border-[hsla(216,12%,92%,1)] bg-[hsla(0,0%,100%,1)] shadow-[0px_4px_6px_-1px_hsla(0,0%,0%,0.1)]">
                    <legend className="sr-only">Job Category/Industry</legend>
                    {[
                      "Agriculture",
                      "Health Care",
                      "Finance",
                      "Education",
                      "Real Estate",
                    ].map((item) => (
                      <DropdownItem
                        key={item}
                        register={register}
                        name="categories"
                        value={item}
                      />
                    ))}
                  </fieldset>
                )}
              </fieldset>
            </div>
            <Button type="submit" className="shrink grow basis-28">
              Find Job
            </Button>
          </form>
          {!!(levels.length + categories.length) && (
            <div className="mt-6 flex flex-wrap gap-4">
              <p className="flex flex-wrap gap-4">
                {!!levels.length &&
                  levels.map((tag) => (
                    <FilterTag
                      key={tag}
                      tag={tag}
                      handleSetTags={() => deleteTags("levels", tag)}
                    />
                  ))}
                {!!categories.length &&
                  categories.map((tag) => (
                    <FilterTag
                      key={tag}
                      tag={tag}
                      handleSetTags={() => deleteTags("categories", tag)}
                    />
                  ))}
              </p>
              <button
                className="rounded-lg bg-error-500 p-2 font-inter text-sm font-normal text-white"
                onClick={clearTags}
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>
      <section className="px-5 py-12 md:py-24 lg:px-10">
        <div className="inner flex flex-col lg:items-center">
          <h2 className="mb-4 font-inter text-3xl font-bold lg:mb-10 lg:text-5xl">
            Latest Job Posts
          </h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <label
                htmlFor="all"
                onClick={() => {
                  setJobTypeFilter("all");
                  setCurrentPage(1);
                }}
                className="w-fit rounded-md border border-pry-500 px-2 py-1 font-raleway text-sm font-normal text-pry-500 has-[:checked]:bg-pry-500 has-[:checked]:text-white md:text-base lg:text-xl"
              >
                <input
                  type="radio"
                  id="all"
                  name="jobType"
                  value="all"
                  checked={jobTypeFilter === "all"}
                  className="hidden"
                />
                <FontAwesomeIcon icon={faGlobe} className="mr-1" />
                All
              </label>
            </li>
            <li>
              <label
                htmlFor="full-time"
                onClick={() => {
                  setJobTypeFilter("full-time");
                  setCurrentPage(1);
                }}
                className="w-fit rounded-md border border-pry-500 px-2 py-1 font-raleway text-sm font-normal text-pry-500 has-[:checked]:bg-pry-500 has-[:checked]:text-white md:text-base lg:text-xl"
              >
                <input
                  type="radio"
                  id="full-time"
                  name="jobType"
                  value="full-time"
                  checked={jobTypeFilter === "full-time"}
                  className="hidden"
                />
                Full Time Roles
              </label>
            </li>
            <li>
              <label
                htmlFor="contract"
                onClick={() => {
                  setJobTypeFilter("contract");
                  setCurrentPage(1);
                }}
                className="w-fit rounded-md border border-pry-500 px-2 py-1 font-raleway text-sm font-normal text-pry-500 has-[:checked]:bg-pry-500 has-[:checked]:text-white md:text-base lg:text-xl"
              >
                <input
                  type="radio"
                  id="contract"
                  name="jobType"
                  value="contract"
                  checked={jobTypeFilter === "contract"}
                  className="hidden"
                />
                Contract Positions
              </label>
            </li>
            <li>
              <label
                htmlFor="part-time"
                onClick={() => {
                  setJobTypeFilter("part-time");
                  setCurrentPage(1);
                }}
                className="w-fit rounded-md border border-pry-500 px-2 py-1 font-raleway text-sm font-normal text-pry-500 has-[:checked]:bg-pry-500 has-[:checked]:text-white md:text-base lg:text-xl"
              >
                <input
                  type="radio"
                  id="part-time"
                  name="jobType"
                  value="part-time"
                  checked={jobTypeFilter === "part-time"}
                  className="hidden"
                />
                Part Time Opportunities
              </label>
            </li>
          </ul>
          <div className="mt-8 flex w-full flex-col items-center lg:mt-20">
            <ul className="mb-6 grid min-h-screen w-full grid-cols-[repeat(auto-fit,minmax(240px,max-content))] place-content-start gap-8 bg-sec-50 px-5 py-6 *:[flex:1] lg:mb-20 lg:gap-x-20 lg:gap-y-10 lg:px-14 lg:py-20">
              {currentPageData.map((job, index) => (
                <JobPost key={index} data={job} />
              ))}
            </ul>
            <Pagination
              currentPage={currentPage}
              totalCount={filteredData.length}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobSeekers;
