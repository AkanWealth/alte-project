import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../components/Button";
import { useForm } from "react-hook-form";
import { isMobilePhone } from "validator";
import isEmail from "validator/lib/isEmail";
import toast from "react-hot-toast";
import { ToastMessage } from "./ToastNotification";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
    reset();
    toast.success(
      <ToastMessage
        title="Success"
        message="Message sent successfully! We’ll get back to you soon."
      />,
    );
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
          className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
          placeholder="Enter your full name"
          aria-invalid={errors.fullName ? true : false}
          {...register("fullName", { required: "Name is required" })}
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
        <div className="flex flex-row items-start gap-4">
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
            <span className="ml-1 font-semibold text-sec-500">
              Privacy policy
            </span>
          </span>
        </div>
        {errors.privacyChecked && (
          <p className="mt-2 font-inter text-xs font-normal text-error-500">
            {errors.privacyChecked.message}
          </p>
        )}
      </label>
      <IconButton
        type="submit"
        rightIcon={faArrowRight}
        className="flex w-full items-center justify-center"
        disabled={isSubmitting}
      >
        Send Message
      </IconButton>
    </form>
  );
};
