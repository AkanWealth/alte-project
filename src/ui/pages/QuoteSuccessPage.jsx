import React from 'react'

const QuoteSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg  p-2 mb-3 w-full max-w-lg text-center">
        <img
          src="/images/freelancer/verify-email.png"
          alt="Verify Email"
          className="mx-auto mb-4 h-40"
        />
        <h1 className="text-3xl font-raleway font-bold text-grey-900 mb-2">Your Request Has Been Received</h1>

        <p className="text-grey-600 font-raleway mb-12">
        A representative will contact me shortly with a quote.
        </p>

        <p className="text-sm text-grey-500 font-raleway">
          Didn’t receive the email? Check your spam folder
        </p>
      </div>
    </div>
  )
}

export default QuoteSuccessPage