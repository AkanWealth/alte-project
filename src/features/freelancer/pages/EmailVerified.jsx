import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../../config";
import { ToastMessage } from "../../../ui/ToastNotification";
import toast from "react-hot-toast";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId || !token) {
      navigate("/freelancer/verify-email");
      return null;
    }

    const verifyEmail = async () => {
      try {
        const response = await axios.get(`${API}/confirm-email`, {
          params: { userId, token },
        });
        console.log(response);
        toast.success(
          <ToastMessage
            title="Success"
            message="You have successfully verified your email"
          />,
        );
        if (
          response.status === 200 &&
          response.data.message === "Thank you for confirming your email"
        ) {
          setIsValid(true);
          toast.success(
            <ToastMessage
              title="Success"
              message="You have successfully verified your email"
            />,
          );
        } else if (response.data.alreadyVerified) {
          toast.info(
            <ToastMessage
              title="Email Already Verified"
              message="Your email is already confirmed. Redirecting to login."
            />,
          );
          navigate("/freelancer/login");
        } else {
          toast.error(
            <ToastMessage
              title="Confirm Email Failed"
              message="Incorrect userId & token."
            />,
          );
          navigate("/freelancer/verify-email");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        toast.error(
          <ToastMessage
            title="Verification Error"
            message="Something went wrong. Please try again."
          />,
        );
        navigate("/freelancer/verify-email");
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [userId, token, navigate]);

  if (loading) return <div>Loading...</div>;

  return isValid ? (
    <div className="bg-gray-100 flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-lg rounded-lg bg-white p-4 text-center">
        <img
          src="/images/freelancer/email-verified.png"
          alt="Email Verified"
          className="mx-auto mb-4 h-40"
        />

        <h1 className="mb-2 font-raleway text-3xl font-bold text-grey-900">
          Email Verified!
        </h1>

        <p className="mb-6 font-raleway text-lg text-grey-700">
          You are all set!
        </p>
        <p className="mb-12 font-raleway text-grey-600">
          Your email has been successfully verified. You can now access your
          account and start exploring opportunities.
        </p>

        <button
          onClick={() => navigate("/freelancer/login")}
          className="mb-8 w-full rounded-lg bg-sec-500 px-4 py-2 font-raleway text-grey-500 transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  ) : null;
};

export default EmailVerified;
