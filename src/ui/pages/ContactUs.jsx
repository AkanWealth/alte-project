import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../../components/Button";
import SocialLinks from "../../components/SocialLinks";
import Faq from "../Faq";

const ContactUs = () => {
  return (
    <main>
      <section className="grid min-h-[380px] bg-pry-500 bg-[url('/images/hero-bg.png')] bg-cover bg-right bg-no-repeat px-5 pb-2 pt-8 lg:px-10">
        <div className="inner flex flex-col-reverse gap-12">
          <div className="flex flex-col text-left text-white lg:items-center lg:text-center">
            <h1 className="font-raleway text-4xl/tight font-bold lg:max-w-[18ch] lg:text-7xl/tight">
              Get <span className="text-sec-500">in Touch</span> With Us
            </h1>
            <p className="mb-10 mt-6 max-w-[66ch] font-inter text-lg font-normal lg:text-xl">
              Whether you are forging ahead with concrete projects or exploring
              new possibilities, we are eager to hear from you. Share your ideas
              and let us shape your digital future together.
            </p>
          </div>
          <img
            src="/images/contact-us/hero-img-mobile.png"
            alt=""
            className="lg:hidden"
          />
        </div>
      </section>
      <div className="hidden bg-sec-50 py-9 lg:block">
        <img
          src="/images/contact-us/hero-img.png"
          alt=""
          className="inner w-full"
        />
      </div>
      <section className="px-5 py-8 md:py-12 lg:px-10 lg:py-14 xl:py-20">
        <div className="inner text-center">
          <h2 className="mb-2 font-raleway text-3xl font-bold text-pry-500 md:text-5xl">
            Join Us in Creating Something Great
          </h2>
          <p className="mx-auto mb-6 max-w-[62ch] text-center font-inter text-lg font-normal md:mb-10 md:text-xl lg:mb-20">
            The easiest way to reach out is by filling out the form. We strive
            to respond within a few working hours.
          </p>
          <div className="grid grid-rows-[auto_auto] gap-5 md:gap-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-14">
            <form className="flex flex-col gap-5 text-start lg:gap-8">
              <div className="group">
                <label
                  htmlFor="name"
                  className="mb-2 block font-inter text-sm font-medium after:ml-0.5 group-has-[:required]:after:content-['*'] lg:text-xl"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm"
                  placeholder="Enter your first and last name"
                  required
                />
              </div>
              <div className="group">
                <label
                  htmlFor="number"
                  className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 group-has-[:required]:after:content-['*'] lg:text-xl"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="group">
                <label
                  htmlFor="email"
                  className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 group-has-[:required]:after:content-['*'] lg:text-xl"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="group">
                <label
                  htmlFor="company"
                  className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 group-has-[:required]:after:content-['*'] lg:text-xl"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="subject"
                  className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 group-has-[:required]:after:content-['*'] lg:text-xl"
                >
                  How can we help you?
                </label>
                <textarea
                  id="subject"
                  rows="4"
                  className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm"
                  placeholder="Subject"
                ></textarea>
              </div>
              <p className="font-inter text-base font-normal text-black">
                By submitting this form, you agree to our{" "}
                <span className="font-semibold text-sec-500">
                  Privacy policy
                </span>
              </p>
              <IconButton rightIcon={faArrowRight}>Send Message</IconButton>
            </form>
            <div className="bg- flex min-h-80 flex-col items-start justify-start gap-5 rounded-2xl bg-pry-900 bg-[url('/images/contact-us/letter.png')] bg-[length:40%] bg-[right_bottom_-3rem] bg-no-repeat p-6 text-start font-inter text-xl font-medium text-white md:gap-8 md:p-10 lg:gap-12 lg:rounded-l-none lg:bg-[right_bottom_-6rem] lg:pb-16 lg:pt-28 lg:text-3xl">
              <p>
                Contact
                <a
                  href="mailto: info@alteconsulting.com"
                  className="mt-2 block text-sm font-normal underline md:mt-3 lg:mt-4"
                >
                  info@alteconsulting.com
                </a>
              </p>
              <p>
                Open Time
                <span className="mt-2 block text-sm font-normal md:mt-3 lg:mt-4">
                  Mondays, 8am - Fridays 7pm
                </span>
              </p>
              <div className="mt-auto text-xl">
                <p className="mb-2 md:mb-3 lg:mb-4 lg:text-3xl">
                  Stay Connected
                </p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pry-500 px-5 py-8 md:py-12 lg:px-10 lg:py-14 xl:py-20">
        <div className="inner text-center">
          <h2 className="mb-4 font-raleway text-3xl font-bold text-white md:mb-8 md:text-4xl lg:mb-10">
            Frequently Asked Questions
          </h2>
          <Faq />
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
