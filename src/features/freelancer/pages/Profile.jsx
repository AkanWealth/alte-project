import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import WorkExperienceSection from "./WorkExperienceSection";
import DocumentSection from "./DocumentSection";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personalDetails");

  return (
    <main>
      <div className="w-full">
        <h3 className="mb-4 font-raleway text-grey-900">
          Manage your personal information on your Alte account
        </h3>
        <div className="flex justify-start">
          <div className="border-gray-300 flex w-full max-w-md rounded-md border md:text-xs">
            {/* Personal Details Tab */}
            <div
              className={`w-full px-4 py-2 text-sm font-medium ${
                activeTab === "personalDetails"
                  ? "rounded-md bg-sec-400 text-black"
                  : "text-gray-600 bg-white"
              }`}
              onClick={() => setActiveTab("personalDetails")}
            >
              Personal details
            </div>
            <div className="border-gray-300 border-l" />
            
            {/* Work Experience Tab */}
            <div
              className={`w-full px-4 py-2 text-sm font-medium ${
                activeTab === "workExperience"
                  ? "rounded-md bg-sec-400 text-black"
                  : "text-gray-600 bg-white"
              }`}
              onClick={() => setActiveTab("workExperience")}
            >
              Work Experience
            </div>
            <div className="border-gray-300 border-l" />
            
            {/* Documents Tab */}
            <div
              className={`w-full px-4 py-2 text-sm font-medium ${
                activeTab === "documents"
                  ? "rounded-md bg-sec-400 text-black"
                  : "text-gray-600 bg-white"
              }`}
              onClick={() => setActiveTab("documents")}
            >
              Documents
            </div>
          </div>
        </div>

        {/* Content based on the active tab */}
        <div className="mt-4">
          {activeTab === "personalDetails" && <ProfileSection />}
          {activeTab === "workExperience" && <WorkExperienceSection />}
          {activeTab === "documents" && <DocumentSection />}
        </div>
      </div>
    </main>
  );
};

export default Profile;