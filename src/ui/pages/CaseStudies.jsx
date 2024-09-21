import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../../components/Button";
import { caseStudiesContent } from "../../contents/caseStudies";
import CaseStudyListing from "../../components/CaseStudyListing";
import QuoteForm from "../../components/QuoteForm";
import { useModalContext } from "../../contexts/ModalContext";

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
              <IconButton
                rightIcon={faArrowRight}
                target="_blank"
                rel="noreferrer"
                link="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00GcrPNO72R7ML0RTskXRADvJdJmiBJh_CP03IxNCaTERG0W5huuLvIC1gD9nUZCYDWjJR9qCo?gv=true"
              >
                Book a Discovery Call
              </IconButton>
              <IconButton
                clickHandler={() => setModalComponent(<QuoteForm />)}
                variant="sec"
                rightIcon={faArrowRight}
              >
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
