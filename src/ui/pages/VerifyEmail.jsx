import React from 'react'

const VerifyEmail = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg  p-4 w-full max-w-lg text-center">
        <img
          src="/images/freelancer/verify-email.png"
          alt="Verify Email"
          className="mx-auto mb-4 h-40"
        />
        
        <h1 className="text-3xl font-raleway font-bold text-grey-900 mb-2">Verify Your Email</h1>

        <p className="text-lg font-raleway text-grey-700 mb-6">One Last Step!</p>
        <p className="text-grey-600 font-raleway mb-12">
          We’ve sent a verification link to your email: <span className="font-semibold text-[#104CD8]"> user@example.com</span>. <br />
          Please check your inbox and click the link to verify your email address.
        </p>

        <button className="bg-sec-500 font-raleway  text-grey-500 py-2 px-4 rounded-lg transition-colors w-full mb-4">
          Resend Verification Email
        </button>

        <p className="text-sm text-grey-500 font-raleway">
          Didn’t receive the email? Check your spam folder or click the button above to resend.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
