import { IconButton } from "../../components/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { toSlug } from "../../utils";
import { servicesContent } from "../../contents/services";
import ServiceItem from "../../components/serviceItem";
import { useLocation } from "react-router-dom";
import useScrollToAnchor from "../../hooks/useScrollToAnchor";
import QuoteForm from "../../components/QuoteForm";
import { useModalContext } from "../../contexts/ModalContext";

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
