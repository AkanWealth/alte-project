const EmailVerified = () => {
  return (
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

        <button className="mb-8 w-full rounded-lg bg-sec-500 px-4 py-2 font-raleway text-grey-500 transition-colors">
          Login
        </button>
      </div>
    </div>
  );
};

export default EmailVerified;
