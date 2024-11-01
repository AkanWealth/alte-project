import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import EditProfile from "./EditProfile";

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="relative rounded-lg bg-[#FBFFFE] p-8 shadow-sm">
      {!isEditing && (
        <div className="absolute right-3 top-4">
          <button
            onClick={handleEditClick}
            className="border-gray-300 flex items-center rounded-md border px-4 py-2 text-sm"
          >
            Edit Profile
            <span className="ml-2">
              <PencilIcon
                className="text-gray-600 mr-2 h-5 w-5"
                aria-hidden="true"
              />
            </span>
          </button>
        </div>
      )}

      {isEditing ? (
        <EditProfile className="w-full" />
      ) : (
        <div className="mt-12 flex flex-col md:flex-row">
          {/* Left Column - Display Picture & Name */}
          <div className="ml-8 flex flex-col items-center md:w-1/3 md:items-start">
            {/* Display Picture */}
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-black text-5xl text-white">
              PO
            </div>
            <h2 className="mt-4 text-center text-xl font-semibold md:text-left">
              Patricia Oko
            </h2>
          </div>

          <div className="flex justify-center">
            <div
              className="border-gray-300 mx-8 hidden border-l md:block"
              style={{ height: "400px" }}
            ></div>
          </div>

          {/* Right Column - Role & About Me */}
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="font-medium text-grey-100">ROLE</h3>
              <p className="mt-1">-</p>
            </div>
            <div>
              <h3 className="font-medium text-grey-500">ABOUT ME</h3>
              <p className="mt-1">-</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
