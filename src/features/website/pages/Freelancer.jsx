import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Freelancer = () => {
  return (
    <main>
      <section className="grid min-h-[450px] place-content-center bg-pry-500 bg-[url('/images/hero-bg.png')] bg-cover bg-right bg-no-repeat px-5 py-8 md:py-12 lg:px-10 lg:py-14 xl:py-20">
        <div className="inner flex flex-col-reverse gap-12">
          <div className="flex flex-col text-left text-white lg:items-center lg:text-center">
            <h1 className="font-raleway text-4xl/tight font-bold lg:max-w-[18ch] lg:text-7xl/tight">
              Empower Your{" "}
              <span className="text-sec-500">Freelance Career</span>
            </h1>
            <p className="mb-10 mt-6 max-w-prose font-inter text-lg font-normal lg:text-xl">
              If you're a freelancer eager to take on exciting projects and
              create meaningful impact, we're here to connect you with
              opportunities that match your passion and skills.
            </p>
            <div className="flex flex-row flex-wrap gap-3 lg:gap-6">
              <Link to="/freelancer/register" className="btn btn-pry">
                Register As a Freelancer
                <ArrowRightIcon className="size-6" />
              </Link>
              <Link to="/freelancer/login" className="btn btn-pry--outline">
                Freelancer Login
                <ArrowRightIcon className="size-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAF5E1] px-4 py-10 md:px-10">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/images/freelancer/freelancer-hero.png"
              alt="freelancer hero"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-5 py-8 md:py-12 lg:px-10 lg:py-14 xl:py-20">
        <div className="inner text-center">
          <h2 className="mb-12 font-raleway text-3xl font-bold text-pry-500 md:text-5xl">
            Why freelance with us?
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-[#FFEFFB] p-6 shadow-md">
              <img
                src="/images/freelancer/why-icon-1.png"
                alt="Icon"
                className="mb-4 h-10 w-10"
              />
              <h3 className="text-xl font-semibold text-black">
                Exciting Projects
              </h3>
              <p className="text-gray-700 mt-2">
                Work on diverse and innovative projects that challenge and
                inspire you.
              </p>
            </div>

            <div className="rounded-lg bg-[#EEFFF5] p-6 shadow-md">
              <img
                src="/images/freelancer/why-icon-2.png"
                alt="Icon"
                className="mb-4 h-10 w-10"
              />
              <h3 className="text-xl font-semibold text-black">
                Collaborative Environment
              </h3>
              <p className="text-gray-700 mt-2">
                Be a part of a supportive and collaborative team that values
                your expertise.
              </p>
            </div>

            <div className="rounded-lg bg-[#F8FFDC] p-6 shadow-md">
              <img
                src="/images/freelancer/why-icon-3.png"
                alt="Icon"
                className="mb-4 h-10 w-10"
              />
              <h3 className="text-xl font-semibold text-black">
                Flexible Work Schedule
              </h3>
              <p className="text-gray-700 mt-2">
                Enjoy the freedom to work on your own terms and schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pry-500 px-4 py-16 md:px-10">
        <div className="inner text-center">
          <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-lg border-r-4 border-t-4 border-dashed border-[#FFBA00]">
                <img
                  src="/images/freelancer/how-to-apply.png"
                  alt="How to Apply Image"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <section className="bg-green-900 py-8">
              <div className="container mx-auto px-4 md:px-8">
                <h2 className="mb-6 text-center text-3xl font-bold text-white md:text-left">
                  How to Apply
                </h2>
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg bg-sec-500 p-2">
                      <img
                        src="/images/freelancer/check.png"
                        alt="Check Icon"
                        className="h-6 w-6"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-left text-xl font-semibold text-white">
                        Complete the Application form
                      </h3>
                      <p className="text-left text-white">
                        Provide us with your details and portfolio showcasing
                        your best work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="rounded-lg bg-sec-500 p-2">
                      <img
                        src="/images/freelancer/Icon-save.png"
                        alt="Submit Icon"
                        className="h-6 w-6"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-left text-xl font-semibold text-white">
                        Submit Your Application
                      </h3>
                      <p className="text-left text-white">
                        Send us your completed form and any relevant documents.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="rounded-lg bg-sec-500 p-2">
                      <img
                        src="/images/freelancer/thumb-down.png"
                        alt="Review Icon"
                        className="h-6 w-6"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-left text-xl font-semibold text-white">
                        We Review Your Application
                      </h3>
                      <p className="text-left text-white">
                        Our team will review your application and get in touch
                        with potential opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row flex-wrap gap-3 lg:gap-6">
                    <Link to="/freelancer/register" className="btn btn-pry">
                      Register Today
                      <ArrowRightIcon className="size-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Freelancer;
