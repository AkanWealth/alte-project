import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// Auth
import useAdminAuth from "../auth/useAdminAuth";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";

const AdminLogin = () => {
  const { isLoggedIn, login } = useAdminAuth();
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
      const { username, password } = data;
      const auth = await login({ username, password });

      if (auth) {
        reset();
        clearErrors();
        toast.success(
          <ToastMessage
            title="Congratulations"
            message="You have successfully logged in"
          />,
        );
        setTimeout(() => navigate("/admin"), 3000);
      }
    } catch (error) {
      console.log(error);
      setError("username", {
        type: "manual",
        message: error.response?.data?.message || "Login Failed",
      });
      setError("password", {
        type: "manual",
        message: error.response?.data?.message || "Login Failed",
      });
      toast.error(
        <ToastMessage
          title="Login Failed"
          message={
            error.response?.data?.message ||
            "Incorrect username or password. Please try again."
          }
        />,
      );
    }
  };

  if (isLoggedIn) return <Navigate to="/admin" />;

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
            Log In to the Admin Dashboard
          </h1>
          <p className="mt-2 font-inter text-xs font-normal">
            Kindly change your password after your first login
          </p>
          <div className="my-6 lg:mt-9">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
                placeholder="Enter your username"
                aria-invalid={errors.username ? true : false}
                {...register("username", {
                  required: "Username is required",
                })}
              />
              {errors.username && (
                <p className="mt-2 text-sm text-error-500">
                  {errors.username.message}
                </p>
              )}
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
                  aria-invalid={errors.password ? true : false}
                  {...register("password", {
                    required: "Password is required",
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
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-pry w-full"
          >
            Log In
          </button>
        </form>
        <img
          src="/images/admin/login.png"
          alt=""
          className="hidden lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:block"
        />
      </section>
    </main>
  );
};

export default AdminLogin;
