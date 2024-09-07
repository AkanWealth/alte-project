import { Link } from "react-router-dom";
import { IconButton } from "./Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CaseStudyListing = ({ studyCase }) => {
  return (
    <div className="inner flex flex-col gap-5 rounded-3xl bg-pry-100 p-6 md:gap-8 md:p-10 lg:flex-row lg:items-center lg:gap-10 lg:p-14">
            <img src={studyCase.image} alt="C-suite Executive" />
            <div> 
              <h3 className="mb-4 font-inters text-xl font-semibold md:text-3xl lg:text-4xl">
                {studyCase.snippet}
              </h3>
              <ul className="mb-6 font-inter text-2xl font-semibold text-pry-500">
                <li>
                  Client
                  <span className="block text-sm font-normal text-black md:text-base lg:text-lg">
                    {studyCase.client}
                  </span>
                </li>
                <li>
                  Challenge
                  <span className="block text-sm font-normal text-black md:text-base lg:text-lg">
                    {studyCase.challenge.title}
                  </span>
                </li>
                <li>
                  Solution
                  <span className="block text-sm font-normal text-black md:text-base lg:text-lg">
                    {studyCase.solution.head}
                  </span>
                </li>
                <li>
                  Result
                  <span className="block text-sm font-normal text-black md:text-base lg:text-lg">
                    {studyCase.result.head}
                  </span>
                </li>
              </ul>
              
              <Link to={`/case-study/${studyCase.id}`}>
                <IconButton rightIcon={faArrowRight}>View Case</IconButton>
              </Link>
              
            </div>
          </div>
  )
}

export default CaseStudyListing