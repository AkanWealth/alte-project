import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "./Button";
import { toSlug } from "../utils";

const Service = ({ data }) => {
  return (
    <div className="grid w-full min-w-64 max-w-[400px] grid-rows-[auto_1fr] rounded-2xl bg-white shadow shadow-pry-200">
      <img
        src={data.snippetImg}
        alt=""
        className="w-full object-cover object-center"
      />
      <div className="flex flex-col px-6 py-4">
        <h3 className="font-raleway text-base font-bold md:text-xl">
          {data.shortTitle}
        </h3>
        <p className="pb-9 pt-3 font-raleway text-base font-normal">
          {data.snippet}
        </p>
        <IconButton
          link={`/our-services/#${toSlug(data.title)}`}
          className="mt-auto self-end"
          rightIcon={faArrowRight}
        >
          Read More
        </IconButton>
      </div>
    </div>
  );
};

export default Service;
