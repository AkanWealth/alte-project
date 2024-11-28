import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// Auth
import useFreelancerAuth from "../auth/useFreelancerAuth";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";

const SignUp = () => {
  const { isLoggedIn, signup } = useFreelancerAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleForm = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords must match",
        });
        return;
      }

      const auth = await signup({
        name: data.fullName,
        email: data.email,
        password: data.password,
      });

      if (auth) {
        reset();
        clearErrors();
        navigate("/freelancer/verify-email");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        <ToastMessage
          title="Sign Up Failed"
          message={error.message || "Something went wrong"}
        />,
      );
    }
  };

  if (isLoggedIn) return <Navigate to="/freelancer/dashboard" />;

  return (
    <main className="min-h-screen w-full px-4 pt-14 lg:p-6">
      <section className="inner grid grid-cols-1 grid-rows-1 justify-between gap-24 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit(handleForm)}
          className="mx-auto w-full max-w-lg lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:m-auto"
        >
          <img
            src="/images/freelancer/alte-logo.png"
            alt=""
            className="mb-4 size-16 lg:mb-6"
          />
          <h1 className="font-inter text-2xl font-bold text-grey-900">
            Sign up as a Freelancer
          </h1>
          <p className="mt-2 font-inter text-xs font-normal">
            Register to get started on Alte Platform
          </p>
          <div className="my-6 lg:mt-9">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
                placeholder="Enter your full Name"
                aria-invalid={errors.fullName ? true : false}
                {...register("fullName", {
                  required: "FullName is required",
                })}
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-error-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
                placeholder="Enter your email address"
                aria-invalid={errors.email ? true : false}
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-error-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
                  placeholder="*************"
                  aria-invalid={errors.password ? true : false}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                      message:
                        "Password must include at least one uppercase letter, one digit, and one special character",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 mr-2 h-full"
                >
                  {showPassword ? (
                    <EyeIcon className="size-6" />
                  ) : (
                    <EyeSlashIcon className="size-6" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-error-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="">
              <label
                htmlFor="confirmPassword"
                className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
                  placeholder="*************"
                  aria-invalid={errors.confirmPassword ? true : false}
                  {...register("confirmPassword", {
                    required: "Must be the same with password",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 mr-2 h-full"
                >
                  {showPassword ? (
                    <EyeIcon className="size-6" />
                  ) : (
                    <EyeSlashIcon className="size-6" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-error-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <label
            htmlFor="privacy-policy"
            className="mb-4 block font-inter text-base font-normal text-black lg:mb-10"
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
                I agree to Alte's
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
            Create Account
          </button>
          <p className="mt-4 text-center font-raleway text-base font-normal lg:mt-10">
            Already have an account?
            <Link to="/freelancer/login" className="ml-1 text-sec-500">
              Log in
            </Link>
          </p>
        </form>
        <img
          src="/images/freelancer/freelancer-signup.png"
          alt=""
          className="hidden h-full lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:block"
        />
      </section>
    </main>
  );
};

export default SignUp;
