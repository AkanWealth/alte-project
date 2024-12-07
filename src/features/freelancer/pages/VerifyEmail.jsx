import axios from "axios";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";

// Configs
import { API } from "../../../config";

// Auths
import useFreelancerAuth from "../auth/useFreelancerAuth";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";

const VerifyEmail = () => {
  const { isLoggedIn } = useFreelancerAuth();
  const [cookies] = useCookies(["userEmail"]);
  const email = cookies.userEmail;

  if (isLoggedIn) return <Navigate to="/freelancer/dashboard" />;

  if (!email) return <Navigate to="/freelancer/register" replace />;

  const resendLink = async () => {
    try {
      const { status } = await axios.post(`${API}/api/Alte/resend-verification`, {
        email,
      });

      if (status === 200) {
        toast.success(
          <ToastMessage
            title="Link Resent"
            message="Your email verification link has been resent! Check your inbox or spam folder to confirm."
          />,
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(
        <ToastMessage
          title="Resend Failed"
          message="Your email verification link could not be resent. Please try again."
        />,
      );
    }
  };

  return (
    <div className="bg-gray-100 flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-lg rounded-lg bg-white p-4 text-center">
        <img
          src="/images/freelancer/verify-email.png"
          alt="Verify Email"
          className="mx-auto mb-4 h-40"
        />
        <h1 className="mb-2 font-raleway text-3xl font-bold text-grey-900">
          Verify Your Email
        </h1>
        <p className="mb-6 font-raleway text-lg text-grey-700">
          One Last Step!
        </p>
        <p className="mb-12 font-raleway text-grey-600">
          We’ve sent a verification link to your email:{" "}
          <span className="font-semibold text-[#104CD8]">
            {email || "your email address"}
          </span>
          . <br />
          Please check your inbox and click the link to verify your email
          address.
        </p>
        <button onClick={resendLink} className="btn btn-pry mb-4 w-full">
          Resend Verification Email
        </button>
        <p className="font-raleway text-sm text-grey-500">
          Didn’t receive the email? Check your spam folder or click the button
          above to resend.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
