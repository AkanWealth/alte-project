import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// Configs
import { API } from "../../../config";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";

const EmailVerified = () => {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      userId: searchParams.get("userId"),
      token: searchParams.get("token"),
    };
  }, [searchParams]);

  useEffect(() => {
    if (!params.userId || !params.token) {
      navigate("/freelancer/verify-email");
      return;
    }

    const verifyEmail = async () => {
      try {
        const { status } = await axios.get(`${API}/confirm-email`, {
          params,
        });

        if (status === 200) {
          setIsValid(true);
        }
      } catch (error) {
        console.error(error);
        setIsValid(false);
        toast.error(
          <ToastMessage
            title="Verification Failed"
            message="Your email verification link is invalid or expired. Please try again."
          />,
        );
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [navigate, params]);

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
        <Link to="/freelancer/login" className="btn btn-pry mb-8 w-full">
          Login
        </Link>
      </div>
    </div>
  ) : (
    <div className="bg-gray-100 flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-lg rounded-lg bg-white p-4 text-center">
        <h1 className="text-red-600 mb-2 font-raleway text-3xl font-bold">
          Verification Failed!
        </h1>
        <p className="mb-6 font-raleway text-lg text-grey-700">
          We could not verify your email. Please try again.
        </p>
        <Link to="/freelancer/verify-email" className="btn btn-pry mb-8 w-full">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default EmailVerified;
