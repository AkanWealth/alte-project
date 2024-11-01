import React from "react";
import { Link } from "react-router-dom";

const ProfileReminderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
      <div className="fixed top-4 right-4 bg-[#EFF4FF] rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-sm font-semibold text-gray-900">Complete Your Profile To Apply</h2>
        <p className="mt-4 text-gray-700">
          Please complete your profile to increase your chances of getting hired.
        </p>
        <div className="mt-6">
          <Link to="/freelancer/dashboard/profile">
            <button className="w-full bg-sec-500 text-white rounded-lg py-2 hover:bg-blue-700">
              Complete Profile
            </button>
          </Link>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileReminderModal;
