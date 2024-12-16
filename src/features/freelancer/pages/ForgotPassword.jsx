
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { API } from "../../../config";
import { ToastMessage } from "../../../ui/ToastNotification";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
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
    const { email } = data;
  
    const userData = { email };
  
    try {
      const response = await axios.post(`${API}/api/Alte/forgot-password`, userData);
  
      if (response.status === 200) {
        const successMessage = response.data.message;
        if (successMessage.includes("password reset link")) {
          reset();
          clearErrors();
          toast.success(
            <ToastMessage
              title="Success"
              message="You should receive an email for reset password instructions."
            />
          );

          

          return; 
        }
      }
      console.log(response)
  
      throw new Error(response.data.message || "Unexpected response from server");
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error.response?.data?.message || "Request to forgot password Failed",
      });
      toast.error(
        <ToastMessage
          title="Failed"
          message={error.response?.data?.message || "An error occurred. Please try again."}
        />
      );
    }
  };
  

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
          Change Password
          </h1>
          <p className="mt-2 font-inter text-xs font-normal">
          Forgot your password? Enter your email address below, and we will send you instructions to reset it.
          </p>
          <div className="my-6 lg:mt-9">
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
                <p className="mt-2 text-sm text-error-500">{errors.email.message}</p>
              )}
            </div>
            
          </div>
         
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-pry w-full"
          >
            Proceed
          </button>
          
        </form>
        <img
          src="/images/freelancer/reset_password.png"
          alt=""
          className="hidden lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:block"
        />
      </section>
    </main>
  );
};

export default ForgotPassword;