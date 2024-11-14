import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { isEmail, isMobilePhone, isURL } from "validator";
import {
  ClockIcon,
  HomeIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { jobListings } from "../../../../contents/jobLists";

// Contexts
import { useModalContext } from "../../../../contexts/ModalContext";

// Components
import JobPost from "./components/JobPost";

// Utils
import { convertToTitleCase, formatDate } from "../../../../utils";

// Configs
import { API } from "../../../../config";

// Loader
export const getJob = async ({ params }) => {
  try {
    const { id } = params;
    const { data } = await axios.get(`${API}/jobs/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const ApplicationSubmittedModal = () => {
  const { id } = useParams();
  const currentJob = jobListings.find((job) => job.id === Number(id));
  const { setModalComponent } = useModalContext();
  const navigate = useNavigate();

  return (
    <div className="relative mx-4 flex w-full max-w-[750px] flex-col items-center rounded-2xl bg-white px-5 py-10 text-center lg:px-44">
      <img
        src="/joblist-checked.png"
        alt=""
        className="mb-20 w-full max-w-64"
      />
      <h3 className="mb-4 font-inter text-lg font-semibold text-black lg:text-2xl">
        Application Submitted Successfully!
      </h3>
      <p className="mb-8 w-full max-w-[40ch] text-center font-inter text-base font-normal">
        Thank you for applying for the {currentJob.position} position. W e have
        received your application and will review it shortly. You wil l receive
        an email confirmation shortly.
      </p>
      <button
        type="button"
        onClick={() => {
          setModalComponent(null);
          navigate("/jobseekers");
        }}
      >
        Return to Jobs
      </button>
      <button
        type="button"
        className="absolute right-5 top-5"
        onClick={() => {
          setModalComponent(null);
          navigate("/jobseekers");
        }}
      >
        <XMarkIcon className="size-6" />
      </button>
    </div>
  );
};

const JobApplyForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    control,
  } = useForm();
  const [resume, setResume] = useState(null);
  const { setModalComponent } = useModalContext();
  const navigate = useNavigate();

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      field.onChange(file);
    }
  };

  const handleDrop = (e, field) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setResume(file);
      field.onChange(file);
    }
  };

  const onSubmit = async (data) => {
    reset();
    setResume(null);
    setModalComponent(<ApplicationSubmittedModal />);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex h-full max-h-screen w-full max-w-screen-lg flex-col rounded-3xl bg-white px-7 py-10 font-inter text-xl font-semibold lg:px-28 lg:py-20 lg:text-3xl"
    >
      <button
        type="button"
        onClick={() => setModalComponent(null)}
        className="text-gray-500 hover:text-gray-800 absolute right-6 top-6 lg:right-16 lg:top-16"
      >
        <XMarkIcon className="size-6" />
      </button>
      <h2>Join Alte - {data.position}</h2>
      <div className="mt-10 flex flex-col gap-5 overflow-y-scroll text-start lg:gap-8">
        <div className="">
          <label
            htmlFor="name"
            className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
          >
            Full name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
            placeholder="Enter your first and last name"
            aria-invalid={errors.fullName ? true : false}
            {...register("fullName", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters long",
              },
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: "Name can only contain letters and spaces",
              },
            })}
          />
          {errors.fullName && (
            <p className="mt-2 font-inter text-xs font-normal text-error-500">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
            placeholder="Enter a valid email address"
            aria-invalid={errors.email ? true : false}
            {...register("email", {
              required: "Email is required",
              validate: (value) => isEmail(value) || "Invalid Email Format",
            })}
          />
          {errors.email && (
            <p className="mt-2 font-inter text-xs font-normal text-error-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="phoneNumber"
            className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 invalid:border-error-500 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
            placeholder="Enter your phone number with country code"
            aria-invalid={errors.phoneNumber ? true : false}
            {...register("phoneNumber", {
              required: "Phone Number is required",
              validate: (value) =>
                isMobilePhone(value) || "Provide a valid Phone Number",
            })}
          />
          {errors.phoneNumber && (
            <p className="mt-2 font-inter text-xs font-normal text-error-500">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="reason"
            className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
          >
            Why are you interested in joining Alte?
          </label>
          <textarea
            id="reason"
            rows="4"
            className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
            placeholder="Type here"
            aria-invalid={errors.reason ? true : false}
            {...register("reason", { required: "Message is required" })}
          />
          {errors.reason && (
            <p className="mt-2 font-inter text-xs font-normal text-error-500">
              {errors.reason.message}
            </p>
          )}
        </div>
        <Controller
          name="resume"
          control={control}
          rules={{ required: "Resume is required" }}
          render={({ field }) => (
            <label
              htmlFor="resume"
              className={`${errors.resume && "border-error-500"} flex flex-col items-center rounded-lg border border-dashed border-pry-900 bg-white py-8`}
              onDrop={(e) => handleDrop(e, field)}
              onDragOver={(e) => e.preventDefault()}
            >
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                id="resume"
                className="hidden"
                aria-invalid={errors.resume ? true : false}
                onChange={(e) => handleFileUpload(e, field)}
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
        <div className="">
          <label
            htmlFor="portfolio"
            className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
          >
            Provide a link to your portfolio
          </label>
          <input
            type="url"
            id="portfolio"
            className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 invalid:border-error-500 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
            placeholder="Portfolio URL"
            aria-invalid={errors.portfolio ? true : false}
            {...register("portfolio", {
              required: "URL is required",
              validate: (value) => isURL(value) || "Provide a valid URL",
            })}
          />
          {errors.portfolio && (
            <p className="mt-2 font-inter text-xs font-normal text-error-500">
              {errors.portfolio.message}
            </p>
          )}
        </div>
        <label
          htmlFor="privacy-policy"
          className="font-inter text-base font-normal text-black"
        >
          <div className="flex flex-row items-start gap-4">
            <input
              type="checkbox"
              id="privacy-policy"
              className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-pry-500 checked:bg-pry-500 checked:after:inline [&[aria-invalid=true]]:border-error-500"
              aria-invalid={errors.privacyChecked ? true : false}
              {...register("privacyChecked", {
                required: "Please check this field if you want to proceed",
              })}
            />
            <span>
              By submitting this form, you agree to our
              <Link
                to="/policies/privacy-policy"
                className="ml-1 font-semibold text-sec-500"
                onClick={(e) => {
                  e.preventDefault();
                  setModalComponent(null);
                  navigate("/policies/privacy-policy");
                }}
              >
                Privacy policy
              </Link>
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
          className="btn btn-pry w-full"
        >
          Submit Application
          <ArrowRightIcon className="size-6" />
        </button>
      </div>
    </form>
  );
};

const JobSeeker = () => {
  const job = useLoaderData();
  const asideJobs = jobListings.slice(0, 15);
  const mainRef = useRef(null);
  const [mainHeight, setMainHeight] = useState("100vh");
  const { setModalComponent } = useModalContext();

  useEffect(() => {
    if (mainRef.current) {
      setMainHeight(`${mainRef.current.offsetHeight}px`);
    }
  }, []);

  return (
    <div className="bg-[hsla(204,33%,97%,1)] px-5 py-8 md:py-12 lg:px-10 lg:py-28">
      <section className="inner grid grid-rows-[1fr_auto] justify-start gap-8 lg:grid-cols-[auto_1fr] lg:grid-rows-1">
        <main
          ref={mainRef}
          className="col-start-1 col-end-2 row-start-1 row-end-2 grid h-fit grid-cols-1 grid-rows-[auto_1fr] bg-white p-2 lg:col-start-2 lg:col-end-3 lg:p-8"
        >
          <img
            src="/job-hero.png"
            alt=""
            className="col-start-1 col-end-2 w-full"
          />
          <article className="flex flex-col px-4 lg:px-10">
            <div className="mb-8 flex flex-col items-start gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
              <img
                src={job.companyLogo}
                alt=""
                className="-mt-5 ml-2 aspect-square w-full max-w-12 lg:-mt-10 lg:ml-5 lg:max-w-28"
              />
              <button
                className="btn btn-pry"
                onClick={() => setModalComponent(<JobApplyForm data={job} />)}
              >
                Apply
                <ArrowRightIcon className="size-6" />
              </button>
            </div>
            <h1 className="font-inter text-2xl font-bold lg:text-3xl">
              {job.position}
            </h1>
            <ul className="mb-6 mt-4 flex flex-wrap gap-4 text-sm lg:gap-8">
              <li
                className={`rounded-2xl px-2 py-1 ${job.active ? "bg-success-50 text-success-700" : "bg-error-50 text-error-700"}`}
              >
                <span
                  className={`mr-2 inline-block size-2 rounded-full ${job.active ? "bg-success-500" : "bg-error-500"}`}
                ></span>
                {job.active ? "Active" : "Inactive"}
              </li>
              <li className="text-sm font-medium text-grey-400">
                <span className="mr-2 inline-block size-2 rounded-full bg-grey-200 text-base"></span>
                {job.category}
              </li>
              <li className="rounded-md bg-grey-50 px-2 py-1">{job.level}</li>
            </ul>
            <div>
              <h2 className="mb-6 w-full border-b pb-2 font-raleway text-xl font-bold lg:text-2xl">
                Role Details
              </h2>
              <ul className="flex flex-col gap-3 text-sm text-grey-300 lg:text-base">
                <li className="inline-flex items-start lg:items-center">
                  <MapPinIcon className="mr-5 size-4 rounded-full bg-pry-50 p-1 lg:size-6 lg:p-2" />
                  <span className="inline-flex flex-wrap items-center">
                    <span className="mr-4">Location</span>
                  </span>
                  <span className="text-base font-medium text-black lg:text-lg">
                    {job.location}
                  </span>
                </li>
                <li className="inline-flex items-start lg:items-center">
                  <ClockIcon className="mr-5 size-4 rounded-full bg-pry-50 p-1 text-success-500 lg:size-6 lg:p-2" />
                  <span className="inline-flex flex-wrap items-center">
                    <span className="mr-4">Job posted on</span>
                    <time
                      dateTime={new Date(job.datePosted).toISOString()}
                      className="text-base font-medium text-black lg:text-lg"
                    >
                      {formatDate(job.datePosted)}
                    </time>
                  </span>
                </li>
                <li className="inline-flex items-start lg:items-center">
                  <ClockIcon className="mr-5 size-4 rounded-full bg-pry-50 p-1 text-error-500 lg:size-6 lg:p-2" />
                  <span className="inline-flex flex-wrap items-center">
                    <span className="mr-4">Application Deadline</span>
                    <time
                      dateTime={new Date(job.deadline).toISOString()}
                      className="text-base font-medium text-black lg:text-lg"
                    >
                      {formatDate(job.deadline)}
                    </time>
                  </span>
                </li>
                <li className="inline-flex items-start lg:items-center">
                  <HomeIcon className="mr-5 size-4 rounded-full bg-pry-50 p-1 lg:size-6 lg:p-2" />
                  <span className="inline-flex flex-wrap items-center">
                    <span className="mr-4">Work Type</span>
                  </span>
                  <span className="text-base font-medium text-black lg:text-lg">
                    {convertToTitleCase(job.type)}
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="mb-8 font-inter text-3xl font-bold text-grey-400">
                Overview
              </h2>
              <h3 className="mb-4 font-inter text-2xl font-medium text-grey-500">
                About:
              </h3>
              <p className="mb-8 text-base text-grey-900">{job.aboutJob}</p>
              <h3 className="mb-4 font-inter text-2xl font-medium text-grey-500">
                Job Description:
              </h3>
              <p className="mb-8 text-base text-grey-900">{job.description}</p>
              <h3 className="mb-4 font-inter text-2xl font-medium text-grey-500">
                Job Responsibility:
              </h3>
              <ol className="mb-8 list-inside list-decimal text-base text-grey-900">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
              <h3 className="mb-4 font-inter text-2xl font-medium text-grey-500">
                Skill Required:
              </h3>
              <ul className="mb-8 flex flex-wrap gap-4 text-base text-grey-900">
                {job.skills.map((item, index) => (
                  <li key={index} className="rounded-md bg-grey-50 px-2 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10 rounded-lg bg-sec-50 px-6 py-8">
              <h3 className="mb-4 font-inter text-3xl font-bold text-grey-900">
                About the Company
              </h3>
              <p className="text-base text-grey-900">{job.aboutCompany}</p>
            </div>
            <button
              className="btn btn-pry ml-auto"
              onClick={() => setModalComponent(<JobApplyForm />)}
            >
              Apply
              <ArrowRightIcon className="size-6" />
            </button>
          </article>
        </main>
        <aside className="col-start-1 col-end-2 row-start-2 row-end-3 h-full p-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:px-4 lg:py-0">
          <ul
            className="flex h-full flex-col items-center gap-4 overflow-y-scroll"
            style={{
              maxHeight: window.innerWidth >= 1024 ? mainHeight : "none",
            }}
          >
            {asideJobs.map((job, index) => (
              <JobPost key={index} data={job} />
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default JobSeeker;
