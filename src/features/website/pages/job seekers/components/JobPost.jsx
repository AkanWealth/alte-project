import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

// Utils
import { convertToTitleCase } from "../../../../../utils";

const JobPost = ({ data }) => {
  const {
    id,
    companyLogo,
    position,
    location,
    category,
    type,
    level,
    active,
    skills,
    datePosted,
  } = data;
  return (
    <article className="flex w-full max-w-80 flex-col justify-between rounded-2xl bg-white px-6 py-6 font-inter font-normal shadow-[0px_1px_3px_0px_hsla(0,0%,0%,0.1)] lg:px-8 lg:py-6">
      <figure>
        <img
          src={companyLogo}
          alt={`${position} logo`}
          className="mb-6 size-16 rounded-xl"
        />
      </figure>

      <h3 className="mb-3 text-lg font-semibold">{position}</h3>

      <div className="mb-3 flex flex-wrap items-center gap-4">
        <p className="inline-flex items-center text-sm text-grey-400">
          <MapPinIcon className="mr-2 size-4" />
          {location}
        </p>
        <p className="text-sm font-medium text-grey-400">
          <span className="mr-2 inline-block size-2 rounded-full bg-grey-200"></span>
          {category}
        </p>
      </div>

      <ul className="mb-6 flex flex-wrap gap-4 text-xs">
        <li className="rounded-md bg-grey-50 px-2 py-1">
          {convertToTitleCase(type)}
        </li>
        <li className="rounded-md bg-grey-50 px-2 py-1">{level}</li>
        <li
          className={`rounded-2xl px-2 py-1 ${active ? "bg-success-50 text-success-700" : "bg-error-50 text-error-700"}`}
        >
          <span
            className={`mr-2 inline-block size-2 rounded-full ${active ? "bg-success-500" : "bg-error-500"}`}
          ></span>
          {active ? "Active" : "Inactive"}
        </li>
      </ul>

      <ul className="mb-6 flex flex-wrap gap-3 text-white *:rounded *:bg-pry-500 *:p-1 *:text-xs">
        {skills.slice(0, 3).map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
        {skills.length > 3 && <li>+{skills.length - 3}</li>}
      </ul>

      <Link to={`/jobseekers/${id}`} className="btn btn-pry">
        View job
      </Link>

      <time
        className="mt-6 flex items-center text-xs"
        dateTime={new Date(datePosted).toISOString()}
      >
        <ClockIcon className="mr-2 size-4 text-grey-200" />
        {formatDistanceToNow(new Date(datePosted), { addSuffix: true })}
      </time>
    </article>
  );
};

export default JobPost;
