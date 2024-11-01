import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon}    from '@heroicons/react/24/solid';
import toast from "react-hot-toast";
import ToastNotification, { ToastMessage } from "../../../ui/ToastNotification";

const ProjectCard = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {

      setIsBookmarked((prev) => !prev);
      toast.success(
        <ToastMessage
          title="Project saved successfully"
          message="Find it in your saved projects."
        />,
      );

    };
  return (
      <div className="bg-white mt-8 border border-grey-50 rounded-lg p-6 shadow-sm">
        <ToastNotification />

        <div className="flex justify-between items-start">
          {/* Job Title */}
          <div>
          <Link to="/freelancer/dashboard/projects/project-details">

            <h3 className="text-xl font-semibold text-gray-900">
              Frontend Developer for E-commerce Website
            </h3>
            </Link>
            <p className="text-grey-600 text-justify mt-4">
              Seeking a skilled frontend developer to create a responsive and
              user-friendly e-commerce platform. Must be proficient in HTML, CSS,
              and JavaScript.
            </p>
          </div>
          {/* Bookmark Icon */}
          <div
            className={` ${isBookmarked ? 'bg-success-50' : 'border-gray-300'} p-1 rounded-lg cursor-pointer`}
            onClick={(e) => {
              e.preventDefault(); // Prevent the parent link from being triggered
              toggleBookmark();
            }}
          >
            <BookmarkIcon
              className={`w-5 h-5 ${isBookmarked ? 'text-success-600' : ''}`}
            />
          </div>
        
        </div>

        {/* Skills Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["Jira", "Node.js", "MongoDB", "Sprint Planning"].map((skill) => (
            <span
              key={skill}
              className="text-sm bg-grey-50 text-gray-700 px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Job Details */}
        <div className="mt-4 flex justify-between items-center">
          {/* Duration and Salary */}
          <div className="flex items-center gap-4">
            {/* Duration */}
            <div className="flex items-center text-grey-500 whitespace-nowrap">
              <ClockIcon className="w-5 h-5 mr-1" />
              <span>3 months</span>
            </div>
            {/* Salary Range */}
            <div className="text-grey-500 bg-success-50 px-3 py-1 rounded-full whitespace-nowrap">
              $2,000 - $4,000
            </div>
          </div>
        </div>

        {/* Posted Date */}
        <div className="mt-4 text-gray-400 text-sm text-right">Posted 5 days ago</div>
      </div>
   
  );
};

export default ProjectCard;
