import studylists from "../../case-studies.json"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "./Button";
import CaseStudyListing from "./CaseStudyListing";
const CaseStudyListings = () => {

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
              <IconButton rightIcon={faArrowRight}>
                Book a Discovery Call
              </IconButton>
              <IconButton variant="sec" rightIcon={faArrowRight}>
                Request a Quote
              </IconButton>
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
        {studylists.map((studyCase) =>(
        <div className={`px-5 py-8 md:py-12 lg:px-10 lg:py-14 xl:py-20 ${studyCase.bgColor ? 'bg-white' : 'bg-pry-500'}`}>
                <CaseStudyListing 
                key={studyCase.id} 
                studyCase={studyCase}
                />
        </div>
         ))}
      </section>
      
      <section className="bg-sec-500 px-5 py-12 md:px-12 lg:py-20 xl:py-28">
        <div className="inner">
          <div className="mx-auto flex max-w-[1192px] flex-col items-center rounded-[32px] bg-pry-500 bg-[url('/images/backgrounds/letter.png')] bg-right-bottom bg-no-repeat p-8 md:p-12 lg:p-16">
            <h2 className="mb-5 max-w-[40ch] text-center font-raleway text-2xl/[24px] font-bold text-white lg:mb-10 lg:text-4xl/[48px]">
              Discover How Alte Can Help{" "}
              <span className="text-sec-200">
                Ready to Elevate Your Business?
              </span>
            </h2>
            <IconButton rightIcon={faArrowRight}>
              Book a Discovery Call
            </IconButton>
          </div>
        </div>
      </section>
    </main>
    )
  }
  
  export default CaseStudyListings