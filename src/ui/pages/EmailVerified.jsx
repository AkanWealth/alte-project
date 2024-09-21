import React from 'react'

const EmailVerified = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className="bg-white rounded-lg  p-4 w-full max-w-lg text-center">
      <img
        src="/images/freelancer/email-verified.png"
        alt="Email Verified"
        className="mx-auto mb-4 h-40"
      />
      
      <h1 className="text-3xl font-raleway font-bold text-grey-900 mb-2">Email Verified!</h1>

      <p className="text-lg font-raleway text-grey-700 mb-6">You are all set!</p>
      <p className="text-grey-600 font-raleway mb-12">
      Your email has been successfully verified. You can now access your account and start exploring opportunities.
      </p>

      <button className="bg-sec-500 font-raleway  text-grey-500 py-2 px-4 rounded-lg transition-colors w-full mb-8">
        Login
      </button>


    </div>
  </div>
    
  )
}

export default EmailVerified