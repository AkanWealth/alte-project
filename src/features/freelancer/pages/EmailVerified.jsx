import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../../config";
import { ToastMessage } from "../../../ui/ToastNotification";
import toast from "react-hot-toast";

const EmailVerified = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);

  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId");
  const token = queryParams.get("token");

  useEffect(() => {
    if (!userId || !token) {
      navigate("/freelancer/verify-email");
      return;
    }

    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `${API}/confirm-email`,
          { userId, token }
          
        );
        console.log(response)
        toast.success(
          <ToastMessage
            title="Success"
            message="You have successfully verified your email"
          />
        );

        if (response.data.success) {
          setIsValid(true);
        } else {
          toast.error(
            <ToastMessage
              title="Confirm Email Failed"
              message="Incorrect userId & token."
            />
          );

          navigate("/freelancer/verify-email");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        navigate("/error");
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
