import axios from "axios";
import { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {
  GlobeAltIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

// Configs
import { API } from "../../../../config";

// Contexts
import { useModalContext } from "../../../../contexts/ModalContext";

// Components
import JobPost from "./components/JobPost";

// UIs
import Pagination from "../../../../ui/Pagination";

// Loader
export const loadJobs = async () => {
  try {
    const { data } = await axios.get(`${API}/api/Alte/jobs/jobList`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

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
        <XCircleIcon className="size-6 text-base text-error-500" />
      </button>
    </span>
  );
};

const ResumeSubmittedModal = () => {
  const { setModalComponent } = useModalContext();

  return (
    <div className="relative flex w-full max-w-[750px] flex-col items-center rounded-2xl bg-white px-5 py-10 lg:px-44">
      <img
        src="/joblist-checked.png"
        alt=""
        className="mb-20 w-full max-w-64"
      />
      <h3 className="mb-4 font-inter text-lg font-semibold text-black lg:text-2xl">
        Resume Submitted Successfully!
      </h3>
      <p className="mb-8 w-full max-w-[40ch] text-center font-inter text-base font-normal">
        Thank you for submitting your resume. We will update you on future
        Openings. Make sure you are following us on all social media platforms
      </p>
      <button className="btn btn-pry" onClick={() => setModalComponent(null)}>
        Return to Jobs
      </button>
      <button
        className="absolute right-5 top-5"
        onClick={() => setModalComponent(null)}
      >
        <XMarkIcon className="size-6" />
      </button>
    </div>
  );
};

const ResumeForm = () => {
  const [resume, setResume] = useState();
  const { setModalComponent } = useModalContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    control,
  } = useForm();

  const handleFileUpload = (e) => {
    if (e.target.files.length === 1) {
      const file = e.target.files[0];
      setResume(file);
    }
  };

  const handleDrop = (e, field) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setResume(file);
    field.onChange(file);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("Resume", data.resume);

      const { status } = await axios.post(`${API}/resume`, formData);

      if (status === 200) {
        reset();
        setResume(null);
        setModalComponent(<ResumeSubmittedModal />);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="resume"
        control={control}
        rules={{ required: "Resume is required" }}
        render={({ field }) => (
          <label
            htmlFor="resume"
            className="flex flex-col items-center rounded-lg border border-dashed border-pry-900 bg-white py-8"
            onDrop={(e) => handleDrop(e, field)}
            onDragOver={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              id="resume"
              className="hidden"
              onChange={(e) => {
                field.onChange(e.target.files[0]);
                handleFileUpload(e);
              }}
            />
            <span className="font rounded-2xl border px-2 py-2 font-inter text-lg font-medium text-pry-500">
              Upload your Resume
            </span>
            <span className="mt-6 font-inter text-lg font-medium text-grey-900">
              or Drag & drop here
            </span>
            {resume && (
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Selected File: {resume.name}
                </p>
              </div>
            )}
            {errors.resume && (
              <p className="mt-2 font-inter text-xs font-normal text-error-500">
                {errors.resume.message}
              </p>
            )}
          </label>
        )}
      />
      <label
        htmlFor="privacy-policy"
        className="mt-6 flex flex-col font-inter text-base font-normal"
      >
        <div className="flex flex-row items-start gap-4">
          <input
            type="checkbox"
            id="privacy-policy"
            className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-pry-500 checked:bg-pry-500 checked:after:inline [&[aria-invalid=true]]:border-error-500"
            {...register("privacyChecked", {
              required: "Please check this field if you want to proceed",
            })}
          />
          <span>
            By submitting this form, you agree to our
            <a
              href="/policies/privacy-policy"
              className="ml-1 font-semibold text-sec-500"
            >
              Privacy policy
            </a>
          </span>
        </div>
        {errors.privacyChecked && (
          <p className="mt-2 font-inter text-xs font-normal text-error-500">
            {errors.privacyChecked.message}
          </p>
        )}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-pry mt-10 w-full"
      >
        Submit Resume
        <ArrowRightIcon className="size-6" />
      </button>
    </form>
  );
};

const JobSeekers = () => {
  const jobs = useLoaderData();
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
  let filteredData = [...jobs];

  switch (jobTypeFilter) {
    case "all":
      filteredData = [...jobs];
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
                  <MagnifyingGlassIcon className="size-5 text-[hsla(213,13%,59%,1)] lg:size-6" />
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
                    <AdjustmentsHorizontalIcon className="size-5 text-[hsla(213,13%,59%,1)] lg:size-6" />
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
                  <span className="font-inter text-sm font-normal text-grey-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-[1] after:overflow-hidden after:whitespace-pre after:pt-[2.5%] after:content-['Job_Category/Industry'] lg:text-base"></span>
                  <button
                    type="button"
                    onClick={() => setOpenCategory(!openCategory)}
                    className="z-[2] grid place-content-center bg-white pl-1 text-grey-200"
                  >
                    {openCategory ? (
                      <ChevronUpIcon className="size-7" />
                    ) : (
                      <ChevronDownIcon className="size-7" />
                    )}
                  </button>
                </div>
                {openCategory && (
                  <fieldset className="absolute right-0 top-[calc(100%+8px)] w-max min-w-44 rounded-sm border border-[hsla(216,12%,92%,1)] bg-[hsla(0,0%,100%,1)] shadow-[0px_4px_6px_-1px_hsla(0,0%,0%,0.1)]">
                    <legend className="sr-only">Job Category/Industry</legend>
                    {[
                      "Accounting & finance",
                      "Information technology",
                      "Legal",
                      "Human resources",
                      "Procurement & supply chain",
                      "Banking & Financial services",
                      "Business Support",
                      "Risk & compliance",
                      "Sales & Commercial",
                      "Projects & Transformation",
                      "Tax",
                      "Internal Vacancies",
                      "Manufacturing & Engineering",
                      "Marketing",
                      "Recruitment",
                      "Treasury",
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
            <button type="submit" className="btn btn-pry shrink grow basis-28">
              Find Job
            </button>
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
          {jobs && jobs.length > 0 ? (
            <>
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
                    <GlobeAltIcon className="-mt-px mr-1 inline-block size-4 lg:-mt-1 lg:size-6" />
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
            </>
          ) : (
            <>
              <h2 className="font-inter text-xl font-semibold lg:text-3xl">
                <span className="text-error-500">Oops!</span> Sorry there are no
                Job posting at the moment
              </h2>
              <p className="mt-2 font-inter text-base font-normal text-grey-500 lg:mt-4 lg:text-lg">
                Kindly upload your CV for future job Openings
              </p>
            </>
          )}
          <div className="mt-8 flex w-full flex-col items-center lg:mt-20">
            <div className="mb-6 w-full bg-sec-50 px-5 py-3 lg:mb-20 lg:px-14 lg:py-10">
              {jobs && jobs.length > 0 ? (
                <>
                  {(searchQuery ||
                    (levels && levels.length > 0) ||
                    (categories && categories.length > 0)) && (
                    <p className="font-inter text-xl font-semibold lg:text-3xl">
                      Search results for &quot;{searchQuery}
                      {levels &&
                        levels.length > 0 &&
                        ` + ${levels.join(" + ")}`}
                      {categories &&
                        categories.length > 0 &&
                        ` + ${categories.join(" + ")}`}
                      &quot;
                    </p>
                  )}
                  {filteredData.length > 0 ? (
                    <ul className="grid min-h-screen grid-cols-[repeat(auto-fit,minmax(240px,max-content))] place-content-start gap-8 py-3 lg:mb-20 lg:gap-x-20 lg:gap-y-10 lg:py-10">
                      {currentPageData.map((job, index) => (
                        <JobPost key={index} data={job} />
                      ))}
                    </ul>
                  ) : (
                    <p className="py-3 font-inter text-base font-normal text-grey-400 lg:py-10 lg:text-xl">
                      No results found
                    </p>
                  )}
                </>
              ) : (
                <div className="mx-auto flex w-full max-w-[800px] flex-col items-center gap-6">
                  <h3 className="w-full font-inter text-xl font-semibold lg:text-2xl">
                    Resume*
                  </h3>
                  <ResumeForm />
                </div>
              )}
            </div>
            {jobs.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalCount={filteredData.length}
                pageSize={pageSize}
                onPageChange={onPageChange}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobSeekers;
