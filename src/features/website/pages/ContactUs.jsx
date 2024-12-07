import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { isEmail, isMobilePhone } from "validator";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

// Configs
import { API } from "../../../config";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";
import SocialLinks from "../ui/SocialLinks";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleForm = async (data) => {
    try {
      console.log('Sending data to:', `${API}/contact`);
      console.log('Data:', data);
      
      const { status } = await axios.post(`${API}/api/Alte/contact`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (status === 200) {
        reset();
        toast.success(
          <ToastMessage
            title="Success"
            message="Message sent successfully! We’ll get back to you soon."
          />,
        );
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error(
        <ToastMessage
          title="Error"
          message="An Error occurred while sending your request. Please check your email and try again"
        />,
      );
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex flex-col gap-5 text-start lg:gap-8"
    >
      <div className="">
        <label
          htmlFor="name"
          className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
        >
          Full name
        </label>
        <input
          type="text"
          id="name"
          className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
          placeholder="Enter your full name"
          aria-invalid={errors.fullName ? true : false}
          {...register("fullName", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters long",
            },
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: "Name can only contain letters and spaces",
            },
          })}
        />
        {errors.fullName && (
          <p className="mt-2 font-inter text-xs font-normal text-error-500">
            {errors.fullName.message}
          </p>
        )}
      </div>
      <div className="">
        <label
          htmlFor="number"
          className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="number"
          className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 invalid:border-error-500 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
          placeholder="Enter your phone number with country code"
          aria-invalid={errors.phoneNumber ? true : false}
          {...register("phoneNumber", {
            required: "Phone Number is required",
            validate: (value) =>
              isMobilePhone(value) || "Provide a valid Phone Number",
          })}
        />
        {errors.phoneNumber && (
          <p className="mt-2 font-inter text-xs font-normal text-error-500">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
      <div className="">
        <label
          htmlFor="email"
          className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
          placeholder="Enter a valid email address"
          aria-invalid={errors.email ? true : false}
          {...register("email", {
            required: "Email is required",
            validate: (value) => isEmail(value) || "Invalid Email Format",
          })}
        />
        {errors.email && (
          <p className="mt-2 font-inter text-xs font-normal text-error-500">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="">
        <label
          htmlFor="company"
          className="mb-2 block font-inter text-sm font-medium text-black lg:text-xl"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company"
          className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm"
          placeholder="Enter your company name"
          {...register("companyName")}
        />
      </div>
      <div className="">
        <label
          htmlFor="message"
          className="mb-2 block font-inter text-sm font-medium text-black after:ml-0.5 after:content-['*'] lg:text-xl"
        >
          How can we help you?
        </label>
        <textarea
          id="message"
          rows="4"
          className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
          placeholder="Enter your message"
          aria-invalid={errors.message ? true : false}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="mt-2 font-inter text-xs font-normal text-error-500">
            {errors.message.message}
          </p>
        )}
      </div>
      <label
        htmlFor="privacy-policy"
        className="font-inter text-base font-normal text-black"
      >
        <div className="flex flex-row items-start gap-3">
          <input
            type="checkbox"
            name=""
            id="privacy-policy"
            className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-pry-500 checked:bg-pry-500 checked:after:inline [&[aria-invalid=true]]:border-error-500"
            aria-invalid={errors.privacyChecked ? true : false}
            {...register("privacyChecked", {
              required: "Please check this field if you want to proceed",
            })}
          />
          <span>
            By submitting this form, you agree to our
            <Link
              to="/policies/privacy-policy"
              className="ml-1 font-semibold text-sec-500"
            >
              Privacy policy
            </Link>
          </span>
        </div>
        {errors.privacyChecked && (
          <p className="mt-2 font-inter text-xs font-normal text-error-500">
            {errors.privacyChecked.message}
          </p>
        )}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-pry w-full"
      >
        Send Message
        <ArrowRightIcon className="size-6" />
      </button>
    </form>
  );
};

const Details = ({ title, text }) => {
  return (
    <details className="group z-[1] rounded-xl bg-sec-100 px-7 py-8 text-start font-inter">
      <summary className="relative list-none text-lg font-semibold text-grey-900 after:absolute after:right-0 after:top-0 after:size-5 after:translate-y-1/3 after:bg-[url('/icons/plus.svg')] after:bg-cover after:bg-no-repeat group-open:after:bg-[url('/icons/minus.svg')] md:text-2xl">
        <span className="block w-[calc(100%-30px)]">{title}</span>
      </summary>
      <p className="w-[calc(100%-30px)] pt-4 text-sm font-normal text-grey-500 md:text-base lg:pt-8">
        {text}
      </p>
    </details>
  );
};

const Faq = () => {
  return (
    <div className="">
      <ul className="relative flex flex-col gap-5 lg:gap-8">
        <li>
          <Details
            title="What industries does Alte specialize in?"
            text="Alte serves a wide range of industries including technology, healthcare, finance, e-commerce, and more. Our versatile expertise allows us to tailor solutions to fit your industry-specific needs."
          />
        </li>
        <li>
          <Details
            title="Can Alte assist with existing projects or only new development?"
            text="We can support both existing projects that needs optimization or enhancement, as well as new project from ideation to execution."
          />
        </li>
        <li>
          <Details
            title="How does Alte ensure data security and confidentiality?"
            text="At Alte, we prioritize data security and confidentiality. We implement industry best practices, secure technologies, and strict internal policies to safeguard your sensitive information.
"
          />
        </li>
        <li>
          <Details
            title="What are the typical timelines for project completion with Alte?"
            text="Project timelines vary based on scope and complexity. We work closely with clients to establish realistic timelines and milestones, ensuring timely delivery while maintaining quality standards."
          />
        </li>
        <li>
          <Details
            title="How does Alte handle changes or revisions during the product lifecycle?"
            text="We have a flexible approach to accommodate changes and revisions. Our team maintains open communication and adapts the project plan as needed to meet evolving requirements"
          />
        </li>
        <li>
          <Details
            title="What sets Alte apart from other digital consulting agencies?"
            text="Alte stands out for our commitment to innovation, client-centric approach, and proven track record of delivering successful digital solutions that drive business growth."
          />
        </li>
        <li>
          <Details
            title="How can I stay updated with the latest news and insights from Alte?"
            text="Subscribe to our newsletter or follow us on social media to receive updates on industry trends, company news, and insightful articles from our blog."
          />
        </li>
        <li>
          <Details
            title="Does Alte offer customized training or workshops for our team after project implementation?"
            text="Yes, we provide tailored training sessions and workshops to ensure your team is equipped to effectively use and manage the new digital solutions we implement."
          />
        </li>
        <li>
          <Details
            title="What geographical regions does Alte serve?"
            text="Alte provides services globally, with a client base spanning across various countries and regions."
          />
        </li>
      </ul>
    </div>
  );
};

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
            <Form />
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
                Opening Times
                <span className="mt-2 block text-sm font-normal md:mt-3 lg:mt-4">
                  Mondays - Fridays 8am-5pm
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
