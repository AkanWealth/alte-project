import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "./Button";

const CaseStudyListing = ({ data, bgColor }) => {
  return (
    <div className={`${bgColor} px-5 py-8 md:py-12 lg:px-10 lg:py-14 xl:py-20`}>
      <div
        className={`${data.snippet.containerBg} inner flex flex-col gap-5 rounded-3xl p-6 md:gap-8 md:p-10 lg:flex-row lg:items-center lg:gap-10 lg:p-14`}
      >
        <img src={data.snippet.img} alt="" />
        <div>
          <h3 className="mb-4 font-inter text-xl font-semibold md:text-3xl lg:text-4xl">
            {data.snippet.title}
          </h3>
          <ul className="mb-6 font-inter text-2xl font-semibold text-pry-500">
            <li>
              Client
              <span className="block text-sm font-normal text-black md:text-base lg:text-lg">
                {data.client.name}
              </span>
            </li>
            <li>
              Challenge
              <span className="block text-sm font-normal text-black md:text-base lg:text-lg">
                {data.snippet.challenge}
              </span>
            </li>
            <li>
              Solution
              <span className="block text-sm font-normal text-black md:text-base lg:text-lg">
                {data.snippet.solution}
              </span>
            </li>
            <li>
              Result
              <span className="block text-sm font-normal text-black md:text-base lg:text-lg">
                {data.snippet.result}
              </span>
            </li>
          </ul>
          <IconButton
            link={`/case-studies/${data.id}`}
            rightIcon={faArrowRight}
          >
            View Case
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyListing;
