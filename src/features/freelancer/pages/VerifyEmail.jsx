import { useEffect, useState } from "react";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    console.log("Retrieved email from localStorage:", storedEmail);
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

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

        <button className="mb-4 w-full rounded-lg bg-sec-500 px-4 py-2 font-raleway text-grey-500 transition-colors">
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
