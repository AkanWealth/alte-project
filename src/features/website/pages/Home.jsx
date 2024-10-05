import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { TestimonialsContent } from "../../../contents/testimonials";
import { servicesContent } from "../../../contents/services";

// Contexts
import { useModalContext } from "../../../contexts/ModalContext";

// Components
import Testimonial from "../components/Testimonial";

// UIs
import QuoteForm from "../ui/QuoteForm";
import Swipers from "../ui/Swipers";

// Utils
import { toSlug } from "../../../utils";

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
        <Link
          to={`/our-services/#${toSlug(data.title)}`}
          className="btn btn-pry mt-auto self-end"
        >
          Read More
          <ArrowRightIcon className="size-6" />
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const { setModalComponent } = useModalContext();
  return (
    <main>
      <section className="grid min-h-[450px] place-content-center bg-pry-500 bg-[url('/images/hero-bg.png')] bg-cover bg-right bg-no-repeat px-5 py-8 md:py-12 lg:px-10">
        <div className="inner flex flex-col-reverse gap-12">
          <div className="flex flex-col text-left text-white lg:items-center lg:text-center">
            <h1 className="font-raleway text-4xl/tight font-bold lg:max-w-[18ch] lg:text-7xl/tight">
              Transform your <span className="text-sec-500">ideas</span> into
              Digital Excellence
            </h1>
            <p className="mb-10 mt-6 max-w-prose font-inter text-lg font-normal lg:text-xl">
              At Alte Consulting, we offer a full spectrum of digital consulting
              services, from website and software development to mobile app
              creation, product discovery, intuitive design, and comprehensive
              business solutions.
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
            src="/images/home/hero-img-mobile.png"
            alt=""
            className="lg:hidden"
          />
        </div>
      </section>
      <div className="hidden bg-sec-50 py-8 lg:block">
        <img src="/images/home/hero-img.png" alt="" className="inner w-full" />
      </div>
      <section className="text-pry-500">
        <div className="inner px-5 py-16 lg:px-10 lg:py-20">
          <h2 className="sr-only">Stats</h2>
          <ul className="flex flex-col gap-8 lg:flex-row lg:gap-20">
            <li>
              <div className="text-center">
                <h3 className="font-raleway text-5xl/tight font-extrabold lg:text-7xl/tight">
                  50+
                  <span className="block text-xl font-semibold lg:text-2xl">
                    projects completed
                  </span>
                </h3>
                <p className="font-inter text-base font-normal lg:text-2xl">
                  Over 50+ Projects Completed
                </p>
              </div>
            </li>
            <li>
              <div className="text-center">
                <h3 className="font-raleway text-5xl/tight font-extrabold lg:text-7xl/tight">
                  3x
                  <span className="block text-xl font-semibold lg:text-2xl">
                    Delivery Timeline
                  </span>
                </h3>
                <p className="font-inter text-base font-normal lg:text-2xl">
                  Faster Delivery Process
                </p>
              </div>
            </li>
            <li>
              <div className="text-center">
                <h3 className="font-raleway text-5xl/tight font-extrabold lg:text-7xl/tight">
                  30+
                  <span className="block text-xl font-semibold lg:text-2xl">
                    Satisfied Clients
                  </span>
                </h3>
                <p className="font-inter text-base font-normal lg:text-2xl">
                  We have reached a wide audience
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col bg-gradient-to-b from-pry-800 to-[hsl(166,90%,17%)] px-5 py-6 md:py-10 lg:px-10 lg:py-14">
        <div className="inner flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-20">
          <div className="text-white">
            <h2 className="font-raleway text-2xl font-semibold lg:max-w-[22ch] lg:text-4xl">
              At Alte Consulting, we excel in a diverse range of digital
              services tailored to meet your specific needs.
            </h2>
            <p className="mb-6 mt-3 font-raleway text-sm font-normal lg:mb-12 lg:mt-6 lg:max-w-[40ch] lg:text-xl">
              Our team of specialists leverages deep industry knowledge to
              deliver solutions that not only solve problems but also propel
              your business forward.
            </p>
            <Link to="/our-services" className="btn btn-pry">
              LEARN MORE
              <ArrowRightIcon className="size-6" />
            </Link>
          </div>
          <img
            src="/images/home/section-3-consulting.png"
            alt=""
            className="w-full max-w-[641px] rounded-lg"
          />
        </div>
      </section>
      <section className="px-5 py-6 md:py-16 lg:px-10 lg:py-24">
        <div className="inner">
          <h2 className="mb-8 font-raleway text-2xl font-bold text-pry-500 md:mb-10 md:text-4xl lg:mb-14 lg:text-5xl">
            Why Choose Us?
          </h2>
          <div className="flex flex-col gap-6 md:flex-row lg:gap-14">
            <div className="rounded-2xl bg-sec-200 px-6 py-10 font-inter text-pry-500">
              <img
                src="/images/home/expertise.png"
                alt=""
                className="size-8 lg:size-12"
              />
              <h3 className="mb-2 mt-4 text-2xl font-medium lg:text-3xl">
                Expertise
              </h3>
              <p className="text-base font-normal md:text-lg">
                We are a team of seasoned professionals with deep industry
                knowledge.
              </p>
            </div>
            <div className="rounded-2xl bg-sec-200 px-6 py-8 font-inter text-pry-500">
              <img
                src="/images/home/innovation.png"
                alt=""
                className="size-8 lg:size-12"
              />
              <h3 className="mb-2 mt-4 text-2xl font-medium lg:text-3xl">
                Innovation
              </h3>
              <p className="text-base font-normal md:text-lg">
                We deliver state-of-the-art solutions tailored to your unique
                needs.
              </p>
            </div>
            <div className="rounded-2xl bg-sec-200 px-6 py-8 font-inter text-pry-500">
              <img
                src="/images/home/partnership.png"
                alt=""
                className="size-8 lg:size-12"
              />
              <h3 className="mb-2 mt-4 text-2xl font-medium lg:text-3xl">
                Partnership
              </h3>
              <p className="text-base font-normal md:text-lg">
                We employ a collaborative approach to ensure the success of your
                project.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sec-50 px-5 py-6 md:py-16 lg:px-10 lg:py-24">
        <div className="inner">
          <h2 className="mb-8 text-center font-raleway text-2xl font-bold text-pry-500 md:mb-10 md:text-4xl lg:mb-14 lg:text-5xl">
            Explore Our Services
          </h2>
          <Swipers>
            {servicesContent.map((data, index) => (
              <SwiperSlide className="grid h-full min-h-full" key={index}>
                {data.content}
                <Service data={data} />
              </SwiperSlide>
            ))}
          </Swipers>
        </div>
      </section>
      <section className="bg-pry-500 px-5 py-6 md:py-16 lg:px-10 lg:py-24">
        <div className="inner flex flex-col items-center">
          <h2 className="mb-8 text-center font-raleway text-2xl font-bold text-white md:mb-10 md:self-start md:text-start md:text-4xl lg:mb-14 lg:text-5xl">
            What Our Clients Say?
          </h2>
          <div className="grid grid-rows-[auto_auto_auto] items-center gap-6 md:grid-cols-3 md:grid-rows-1 lg:gap-12">
            {TestimonialsContent.map((testimonial) => (
              <Testimonial
                relativeStyles="h-full"
                data={testimonial}
                key={testimonial.name}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
