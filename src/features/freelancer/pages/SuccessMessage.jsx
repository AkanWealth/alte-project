import { Link } from "react-router-dom"
const SuccessMessage = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="max-w-screen-md w-full bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="flex justify-center mb-28">
              <div className="relative">
                <img src="/images/freelancer/success.png" className="h-64 w-84" />
                
              </div>
            </div>
    
            <h2 className="text-xl font-semibold font-raleway text-gray-800 mb-2">
              Application Submitted Successfully!
            </h2>
            <p className="text-gray-600 font-raleway mb-6">
              Thank you for applying for the UX Designer position. We have received
              your application and will review it shortly. You will receive an email
              confirmation shortly.
            </p>
    
            <button
              className="bg-sec-500 text-grey-500 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
              onClick={onClose}
            >
                <Link to="/freelancer/dashboard/projects">
                Return to projects
                </Link>
            </button>
          </div>
        </div>
      )
}

export default SuccessMessage;