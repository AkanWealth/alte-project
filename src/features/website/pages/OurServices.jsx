import { useLocation } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { servicesContent } from "../../../contents/services";

// Contexts
import { useModalContext } from "../../../contexts/ModalContext";

// Hooks
import useScrollToAnchor from "../../../hooks/useScrollToAnchor";

// UIs
import QuoteForm from "../ui/QuoteForm";

// Utils
import { toSlug } from "../../../utils";

const ServiceItem = ({ id, img, title, subtitle, description, isReversed }) => {
  const bgColor = isReversed ? "bg-pry-500" : "bg-white";
  return (
    <article
      id={id}
      className={`px-5 py-8 md:py-12 lg:px-10 lg:py-14 xl:py-20 ${bgColor}`}
    >
      <div
        className={`inner flex flex-col items-start gap-6 ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center lg:gap-14 xl:gap-20`}
      >
        <img src={img} alt="" className="w-full max-w-96" />
        <div className="text-start font-raleway">
          <h3
            className={`text-3xl font-bold md:text-4xl ${bgColor === "bg-white" ? "text-black" : "text-white"}`}
          >
            {title}
          </h3>
          <p
            className={`mt-4 text-base font-normal md:text-lg lg:mt-9 ${bgColor === "bg-white" ? "" : "text-white"}`}
          >
            <span
              className={`mb-2 block text-xl font-semibold md:text-2xl lg:mb-4 ${bgColor === "bg-white" ? "text-pry-500" : "text-sec-500"}`}
            >
              {subtitle}
            </span>
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

const OurServices = () => {
  const { hash } = useLocation();
  useScrollToAnchor({ hash });
  const { setModalComponent } = useModalContext();

  return (
    <main>
      <section className="grid min-h-[450px] place-content-center bg-pry-500 bg-[url('/images/hero-bg.png')] bg-cover bg-right bg-no-repeat px-5 py-8 md:py-12 lg:px-10">
        <div className="inner flex flex-col-reverse gap-12">
          <div className="flex flex-col text-left text-white lg:items-center lg:text-center">
            <h1 className="font-raleway text-4xl/tight font-bold lg:max-w-[18ch] lg:text-7xl/tight">
              The <span className="text-sec-500">Best Solutions</span> for your
              Business
            </h1>
            <p className="mb-10 mt-6 max-w-prose font-inter text-lg font-normal lg:text-xl">
              At Alte, we excel in a diverse range of digital services tailored
              to meet your specific needs. Our team of specialists leverages
              deep industry knowledge to deliver solutions that not only solve
              problems but also propel your business forward.
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
            src="/images/our-services/hero-img-mobile.png"
            alt=""
            className="lg:hidden"
          />
        </div>
      </section>
      <div className="inner hidden py-8 lg:block">
        <img
          src="/images/our-services/hero-img.png"
          alt=""
          className="w-full"
        />
      </div>
      <section className="flex flex-col">
        {servicesContent.map((content, index) => (
          <ServiceItem
            {...content}
            id={toSlug(content.title)}
            isReversed={++index % 2 === 0}
            key={content.title}
          />
        ))}
      </section>
    </main>
  );
};

export default OurServices;
