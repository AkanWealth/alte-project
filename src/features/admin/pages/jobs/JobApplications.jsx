import { useEffect, useRef, useState } from "react";
import {
  BriefcaseIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Application = ({ data }) => {
  return (
    <article className="flex w-full min-w-80 flex-col justify-between rounded-2xl bg-white px-6 py-6 font-inter font-normal shadow-[0px_1px_3px_0px_hsla(0,0%,0%,0.1)] lg:px-8 lg:py-6">
      <h3 className="mb-3 text-lg font-semibold">Anjola Aina</h3>
      <div className="mb-3 flex flex-col gap-4">
        <p className="inline-flex items-center text-sm text-grey-400">
          <MapPinIcon className="mr-2 size-4" />
          Remote
        </p>
        <span className="w-fit rounded-2xl bg-success-50 px-2 py-1 text-success-700">
          <span className="mr-2 inline-block size-2 rounded-full bg-success-500"></span>
          Interview stage
        </span>
      </div>

      <time
        className="mt-6 flex items-center text-xs"
        // dateTime={new Date(datePosted).toISOString()}
      >
        <ClockIcon className="mr-2 size-4 text-grey-200" />
        {/* {formatDistanceToNow(new Date(datePosted), { addSuffix: true })} */}
        5 days ago
      </time>
    </article>
  );
};

const JobApplications = () => {
  const mainRef = useRef(null);
  const [mainHeight, setMainHeight] = useState("100vh");

  useEffect(() => {
    if (mainRef.current) {
      setMainHeight(`${mainRef.current.offsetHeight}px`);
    }
  }, []);

  return (
    <section className="inner grid grid-rows-[1fr_auto] justify-start gap-8 xl:grid-cols-[auto_1fr] xl:grid-rows-1">
      <main
        ref={mainRef}
        className="col-start-1 col-end-2 row-start-1 row-end-2 h-fit grid-cols-1 p-2 lg:col-start-2 lg:col-end-3 lg:p-8"
      >
        <div className="mb-6 flex flex-row gap-4">
          <button className="btn btn-pry--outline w-full border-error-500 text-error-500 hover:border-error-500">
            Reject
          </button>
          <button className="btn btn-pry w-full">Accept</button>
        </div>
        <div className="mb-4 flex w-full flex-wrap-reverse items-start justify-between gap-4">
          <h1 className="font-inter text-2xl font-bold lg:text-3xl">
            Anjola Aina
          </h1>
          <span className="rounded-2xl bg-success-50 px-2 py-1 text-success-700">
            <span className="mr-2 inline-block size-2 rounded-full bg-success-500"></span>
            Interview stage
          </span>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex flex-wrap gap-2 text-base text-black lg:text-lg">
            <span className="font-medium">Email:</span>
            <span>anina45@gmail.com</span>
          </li>
          <li className="flex flex-wrap gap-2 text-base text-black lg:text-lg">
            <span className="font-medium">Phone number:</span>
            <span>+2347023459870</span>
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <MapPinIcon className="size-4 rounded-full bg-pry-50 p-px lg:size-6 lg:p-1" />
            <span className="text-base text-black lg:text-lg">Remote</span>
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <ClockIcon className="size-4 rounded-full bg-pry-50 p-px lg:size-6 lg:p-1" />
            <span className="text-base text-black lg:text-lg">
              <span className="mr-1">Application date</span>
              <span className="font-medium">Sept 2, 2024</span>
            </span>
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <BriefcaseIcon className="size-4 rounded-full bg-pry-50 p-px lg:size-6 lg:p-1" />
            <span className="text-base text-black lg:text-lg">
              Product manager
            </span>
          </li>
        </ul>
        <div className="mt-8">
          <h2 className="mb-4 font-inter text-2xl font-medium text-grey-500">
            Cover Letter:
          </h2>
          <p className="mb-8 text-base text-grey-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id estlaborum.
          </p>
          <h3 className="mb-4 font-inter text-2xl font-medium text-grey-500">
            Skills:
          </h3>
          <ul className="mb-8 flex flex-wrap gap-4 text-base text-grey-900">
            <li className="rounded-md bg-grey-50 px-2 py-1">Skill</li>
          </ul>
        </div>
        <div className="my-6 flex flex-row gap-4">
          <button className="btn btn-sec--outline">View CV</button>
          <button className="btn btn-sec">Schedule for Interview</button>
        </div>
        {/* Add Notes on interviewing stage? */}
        {/* <form>
          <div className="">
            <label
              htmlFor="notes"
              className="mb-6 flex flex-row items-center gap-2 font-inter text-xl font-bold text-pry-500 lg:mb-8 lg:text-2xl"
            >
              <PencilIcon className="size-5 text-pry-500 lg:size-6" />
              Add Notes
            </label>
            <textarea
              id="notes"
              rows="4"
              className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
              placeholder="Type your notes"
            />
          </div>
          <button
            type="submit"
            className="btn btn-pry ml-auto mt-4 w-full sm:w-fit lg:mt-6"
          >
            Save Notes
          </button>
        </form> */}
      </main>
      <aside className="col-start-1 col-end-2 row-start-2 row-end-3 h-full p-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:px-4 lg:py-0">
        <ul
          className="flex h-full w-full flex-col items-start gap-4 overflow-y-scroll"
          style={{
            maxHeight: window.innerWidth >= 1024 ? mainHeight : "none",
          }}
        >
          <li>
            <Application />
          </li>
          <li>
            <Application />
          </li>
          <li>
            <Application />
          </li>
          <li>
            <Application />
          </li>
          <li>
            <Application />
          </li>
          <li>
            <Application />
          </li>
          <li>
            <Application />
          </li>
          <li>
            <Application />
          </li>
          <li>
            <Application />
          </li>
          <li>
            <Application />
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default JobApplications;
