const QuoteSuccessPage = () => {
  return (
    <div className="bg-gray-100 flex h-screen flex-col items-center justify-center">
      <div className="mb-3 w-full max-w-lg rounded-lg bg-white p-2 text-center">
        <img
          src="/images/freelancer/verify-email.png"
          alt="Verify Email"
          className="mx-auto mb-4 h-40"
        />
        <h1 className="mb-2 font-raleway text-3xl font-bold text-grey-900">
          Your Request Has Been Received
        </h1>

        <p className="mb-12 font-raleway text-grey-600">
          A representative will contact me shortly with a quote.
        </p>

        <p className="font-raleway text-sm text-grey-500">
          Didn’t receive the email? Check your spam folder
        </p>
      </div>
    </div>
  );
};

export default QuoteSuccessPage;
