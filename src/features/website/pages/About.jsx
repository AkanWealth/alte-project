import { ArrowRightIcon } from "@heroicons/react/20/solid";

// Contexts
import { useModalContext } from "../../../contexts/ModalContext";

// UIs
import QuoteForm from "../ui/QuoteForm";
import { SparklesIcon } from "@heroicons/react/24/outline";

const About = () => {
  const { setModalComponent } = useModalContext();
  return (
    <main>
      <section className="grid min-h-[450px] place-content-center bg-pry-500 bg-[url('/images/hero-bg.png')] bg-cover bg-right bg-no-repeat px-5 py-8 md:py-12 lg:px-10">
        <div className="inner flex flex-col-reverse gap-12 py-8 md:py-12">
          <div className="flex flex-col text-left text-white lg:items-center lg:text-center">
            <h1 className="font-raleway text-4xl/tight font-bold lg:max-w-[18ch] lg:text-7xl/tight">
              Your <span className="text-sec-500">strategic partner</span> for
              business innovation and growth.
            </h1>
            <p className="mb-10 mt-6 max-w-prose font-inter text-lg font-normal lg:text-xl">
              Our expertise spans across a comprehensive range of services
              designed to elevate your business to new heights. Whether
              it&apos;s developing cutting-edge websites, software, and mobile
              apps, conducting product discovery, or creating intuitive and
              user-friendly designs, we have you covered.
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
            src="/images/about-us/hero-img-mobile.png"
            alt=""
            className="lg:hidden"
          />
        </div>
      </section>
      <div className="hidden bg-sec-50 py-9 lg:block">
        <img
          src="/images/about-us/hero-img.png"
          alt=""
          className="inner w-full"
        />
      </div>
      <section className="px-5 py-16 lg:px-10 lg:py-20">
        <h2 className="sr-only">About Us</h2>
        <div className="inner">
          <div className="overflow-hidden rounded-md border-2 border-pry-500">
            <div className="grid grid-rows-2 md:grid-cols-[0.96fr,1.04fr] md:grid-rows-1 md:justify-between">
              <img
                src="/images/about-us/vision-img-1.png"
                alt=""
                className="mx-auto w-full max-w-[554px] p-6"
              />
              <div className="flex flex-col items-center justify-center bg-pry-500 p-6 text-center text-white md:items-start md:rounded-tl-md md:p-10 md:text-start lg:p-20">
                <h3 className="mb-4 font-raleway text-2xl font-bold md:text-4xl lg:text-5xl">
                  Our Vision
                </h3>
                <p className="font-inter text-xl font-normal md:max-w-[20ch] lg:text-3xl">
                  To be the leading force in digital transformation
                </p>
              </div>
            </div>
            <div className="-mt-1 grid grid-rows-2 md:m-0 md:grid-cols-[0.96fr,1.04fr] md:grid-rows-1 md:justify-between">
              <img
                src="/images/about-us/vision-img-2.png"
                alt=""
                className="mx-auto w-full max-w-[554px] p-6"
              />
              <div className="flex flex-col items-center justify-center bg-pry-500 p-6 text-center text-white md:items-start md:rounded-bl-md md:p-10 md:text-start lg:p-20">
                <h3 className="mb-4 font-raleway text-2xl font-bold md:text-4xl lg:text-5xl">
                  Our Mission
                </h3>
                <p className="font-inter text-xl font-normal md:max-w-[20ch] lg:text-3xl">
                  Our mission is to empower businesses with innovative Solutions
                  that foster growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sec-50 px-5 py-8 md:py-10 lg:px-10 lg:py-12 xl:py-20">
        <div className="inner">
          <div className="rounded-2xl border-2 border-pry-500 bg-white p-6 md:p-10 lg:px-12 lg:py-14">
            <h2 className="mb-8 font-raleway text-2xl font-bold text-pry-500 md:mb-10 md:text-4xl lg:mb-14 lg:text-5xl">
              Core Values
            </h2>
            <div className="grid grid-rows-3 gap-6 md:grid-cols-3 md:grid-rows-1 lg:gap-14">
              <div className="rounded-2xl bg-sec-200 px-6 py-8 font-inter text-pry-500">
                <img
                  src="/images/home/innovation.png"
                  alt=""
                  className="size-8 lg:size-12"
                />
                <h3 className="mb-2 mt-4 text-2xl font-medium lg:text-3xl">
                  Integrity
                </h3>
                <p className="text-base font-normal md:text-lg">
                  We uphold the highest standard of professionalism and ethics.
                </p>
              </div>
              <div className="rounded-2xl bg-sec-200 px-6 py-10 font-inter text-pry-500">
                <img
                  src="/images/home/expertise.png"
                  alt=""
                  className="size-8 lg:size-12"
                />
                <h3 className="mb-2 mt-4 text-2xl font-medium lg:text-3xl">
                  Collaboration
                </h3>
                <p className="text-base font-normal md:text-lg">
                  We work together to achieve common goals
                </p>
              </div>
              <div className="rounded-2xl bg-sec-200 px-6 py-8 font-inter text-pry-500">
                <img
                  src="/images/home/partnership.png"
                  alt=""
                  className="size-8 lg:size-12"
                />
                <h3 className="mb-2 mt-4 text-2xl font-medium lg:text-3xl">
                  Excellence
                </h3>
                <p className="text-base font-normal md:text-lg">
                  We are committed to delivering superior quality in everything
                  we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pry-500 px-5 py-6 md:py-10 lg:px-10 lg:py-14">
        <div className="inner">
          <div className="rounded-2xl border-2 border-sec-500 bg-white p-6 md:p-10 lg:px-14 lg:py-14 xl:px-28">
            <h2 className="mb-5 font-raleway text-2xl font-bold text-pry-500 md:text-4xl lg:mb-10 lg:text-5xl">
              Our Process
            </h2>
            <ol className="flex flex-col gap-6 *:grid *:grid-cols-[auto_1fr] *:gap-4 *:lg:gap-8">
              <li>
                <span className="mt-1 grid size-5 place-content-center rounded-full bg-pry-500 lg:size-10">
                  <SparklesIcon className="size-3 text-sec-500 lg:size-6" />
                </span>
                <p className="font-inter text-base font-normal text-black">
                  <span className="mb-1 block text-xl font-semibold text-pry-500 lg:mb-2 lg:text-3xl">
                    Initial Contact
                  </span>
                  Send us an email outlining your project goals and
                  requirements.
                </p>
              </li>
              <li>
                <span className="mt-1 grid size-5 place-content-center rounded-full bg-pry-500 lg:size-10">
                  <SparklesIcon className="size-3 text-sec-500 lg:size-6" />
                </span>
                <p className="font-inter text-base font-normal text-black">
                  <span className="mb-1 block text-xl font-semibold text-pry-500 lg:mb-2 lg:text-3xl">
                    Discovery Call
                  </span>
                  We schedule a personalized discovery call to delve deeper into
                  your needs and aspirations.
                </p>
              </li>
              <li>
                <span className="mt-1 grid size-5 place-content-center rounded-full bg-pry-500 lg:size-10">
                  <SparklesIcon className="size-3 text-sec-500 lg:size-6" />
                </span>
                <p className="font-inter text-base font-normal text-black">
                  <span className="mb-1 block text-xl font-semibold text-pry-500 lg:mb-2 lg:text-3xl">
                    Proposal and Agreement
                  </span>
                  Receive a comprehensive proposal and basic contract,detailing
                  the scope of work and payment terms
                </p>
              </li>
              <li>
                <span className="mt-1 grid size-5 place-content-center rounded-full bg-pry-500 lg:size-10">
                  <SparklesIcon className="size-3 text-sec-500 lg:size-6" />
                </span>
                <p className="font-inter text-base font-normal text-black">
                  <span className="mb-1 block text-xl font-semibold text-pry-500 lg:mb-2 lg:text-3xl">
                    Collaborative Development
                  </span>
                  Stay involved as we develop your project, with regular updates
                  and opportunities for your feedback.
                </p>
              </li>
              <li>
                <span className="mt-1 grid size-5 place-content-center rounded-full bg-pry-500 lg:size-10">
                  <SparklesIcon className="size-3 text-sec-500 lg:size-6" />
                </span>
                <p className="font-inter text-base font-normal text-black">
                  <span className="mb-1 block text-xl font-semibold text-pry-500 lg:mb-2 lg:text-3xl">
                    Final Delivery
                  </span>
                  Receive the final deliverables, meticulously crafted to exceed
                  your expectations.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
