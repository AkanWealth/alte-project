import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { caseStudiesContent } from "../../../../contents/caseStudies";

// Contexts
import { useModalContext } from "../../../../contexts/ModalContext";

// UIs
import QuoteForm from "../../ui/QuoteForm";

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
          <Link to={`/case-studies/${data.id}`} className="btn btn-pry">
            View Case
            <ArrowRightIcon className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const { setModalComponent } = useModalContext();
  return (
    <main>
      <section className="grid min-h-[450px] place-content-center bg-pry-500 bg-[url('/images/hero-bg.png')] bg-cover bg-right bg-no-repeat px-5 py-8 md:py-12 lg:px-10 lg:py-14 xl:py-20">
        <div className="inner flex flex-col-reverse gap-12">
          <div className="flex flex-col text-left text-white lg:items-center lg:text-center">
            <h1 className="font-raleway text-4xl/tight font-bold lg:max-w-[18ch] lg:text-7xl/tight">
              Your <span className="text-sec-500">Digital Partner</span> for
              Success
            </h1>
            <p className="mb-10 mt-6 max-w-prose font-inter text-lg font-normal lg:text-xl">
              Discover how we&apos;ve helped our clients achieve their goals
              through innovative technology and strategic consulting.
            </p>
            <div className="flex flex-row flex-wrap gap-3 lg:gap-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00GcrPNO72R7ML0RTskXRADvJdJmiBJh_CP03IxNCaTERG0W5huuLvIC1gD9nUZCYDWjJR9qCo?gv=true"
                className="btn btn-pry"
              >
                Book a Discovery Call
                <ArrowRightIcon className="size-6" />
              </a>
              <button
                className="btn btn-pry--outline"
                onClick={() => setModalComponent(<QuoteForm />)}
              >
                Request a Quote
                <ArrowRightIcon className="size-6" />
              </button>
            </div>
          </div>
          <img
            src="/images/case-studies/hero-img-mobile.png"
            alt=""
            className="lg:hidden"
          />
        </div>
      </section>
      <div className="inner hidden py-8 lg:block">
        <img
          src="/images/case-studies/hero-img.png"
          alt=""
          className="w-full"
        />
      </div>
      <section className="bg-[hsl(0,0%,97%)]">
        <div className="bg-[url('/images/case-studies/our-case-study-bg.png')] px-5 py-8 md:py-12">
          <h2 className="text-center font-raleway text-2xl font-bold text-pry-600 md:text-4xl lg:text-5xl">
            Our Case Studies
          </h2>
        </div>
        {caseStudiesContent.map((caseStudy, index) => (
          <CaseStudyListing
            data={caseStudy}
            bgColor={index % 2 === 0 ? "bg-white" : "bg-pry-500"}
            key={caseStudy.id}
          />
        ))}
      </section>
    </main>
  );
};

export default CaseStudies;
