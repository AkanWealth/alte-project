import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Auths
import useFreelancerAuth from "../../../auth/useFreelancerAuth";

// Components
import Button from "../../../components/Button";

// UIs
import ProtectedRoute from "../../../ui/ProtectedRoute";
import { ToastMessage } from "../../../ui/ToastNotification";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoggedIn, login } = useFreelancerAuth();
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
    const { email, password } = data;

    const userData = {
      username: email,
      password: password,
    };

    const valid = await login(userData);

    if (valid) {
      reset();
      clearErrors();
      toast.success(
        <ToastMessage
          title="Congratulations"
          message="You have successfully logged in"
        />,
      );
      setTimeout(() => navigate("/freelancer/dashboard"), 3000);
    } else {
      setError("email");
      setError("password");
      toast.error(
        <ToastMessage
          title="Login Failed"
          message="Incorrect email or password. Please try again."
        />,
      );
    }
  };

  return (
    <ProtectedRoute
      isAllowed={!isLoggedIn}
      redirectPath={"/freelancer/dashboard"}
    >
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
              Login your Alte account
            </h1>
            <p className="mt-2 font-inter text-xs font-normal">
              Enter your Account Correct LogIn details below
            </p>
            <div className="my-6 lg:mt-9">
              <div className="mb-4">
                <label
                  htmlFor="name"
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
                    required: true,
                  })}
                />
              </div>
              <div className="">
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
                    aria-invalid={errors.email ? true : false}
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 mr-2 h-full"
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="size-6"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-row items-center justify-between gap-4 lg:mb-10">
              <label
                htmlFor="remember"
                className="font-inter text-base font-normal text-black"
              >
                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-pry-500 checked:bg-pry-500 checked:after:inline [&[aria-invalid=true]]:border-error-500"
                    {...register("remember")}
                  />
                  <span>Remember me</span>
                </div>
              </label>
              <Link to="/" className="font-inter text-sm text-pry-500">
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center"
            >
              Log In
            </Button>
            <p className="mt-4 text-center font-raleway text-base font-normal lg:mt-10">
              Don’t have an account?
              <Link to="/freelancer/register" className="ml-1 text-sec-500">
                Sign up
              </Link>
            </p>
          </form>
          <img
            src="/images/freelancer/login-banner.png"
            alt=""
            className="hidden lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:block"
          />
        </section>
      </main>
    </ProtectedRoute>
  );
};

export default Login;
