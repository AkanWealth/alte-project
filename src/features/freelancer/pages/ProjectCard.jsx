import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import ToastNotification, { ToastMessage } from "../../../ui/ToastNotification";
import { API } from "../../../config";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [bookmarks, setBookmarks] = useState({});
  const navigate = useNavigate(); 

  // Fetch projects from API
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${API}/api/Alte/freelancer/project-cards`
      );
      setProjects(response.data);
      console.log("project details", response.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
      setError("Failed to load projects. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle bookmark toggle
  const toggleBookmark = (projectId) => {
    setBookmarks((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
    toast.success(
      <ToastMessage
        title="Project saved successfully"
        message="Find it in your saved projects."
      />
    );
  };


  const navigateToProjectDetails = async (projectId) => {
    try {
      // Fetch project details using the endpoint you mentioned
      const response = await axios.get(`${API}/api/Alte/freelancer/project-card/${projectId}`);
      
      const createUrlFriendlyTitle = (title) => {
        // Remove special characters and replace multiple spaces
        const cleanedTitle = title
          .replace(/[^\w\s-]/g, '') // Remove special characters
          .replace(/\s+/g, ' ') // Replace multiple spaces with single space
          .trim();
        
        // Convert to lowercase and replace spaces with hyphens
        const urlFriendlyTitle = cleanedTitle
          .toLowerCase()
          .replace(/\s+/g, '-');
        
        return urlFriendlyTitle;
      };
  
      const urlTitle = createUrlFriendlyTitle(response.data.title);
      

      // Navigate to project details page with project data
      navigate(`/freelancer/dashboard/projects/project-details/${urlTitle}`, { 
        state: { 
          projectDetails: response.data, 
          projectId: projectId
        } 
      });
    } catch (err) {
      console.error("Failed to fetch project details:", err);
      toast.error("Unable to fetch project details. Please try again.");
    }
  };

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  const getDaysSincePosted = (postedDate) => {
    const today = new Date();
    const posted = new Date(postedDate);
    const diffTime = Math.abs(today.getTime() - posted.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 w-full mt-2">
      <ToastNotification />

      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white border border-grey-50 rounded-lg p-6 shadow-sm basis-full lg:basis-1/2"
        >
          <div className="flex justify-between items-start">
            {/* Job Title */}
            <div>
            <div 
                onClick={() => navigateToProjectDetails(project.id)}
                className="cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                  {project.title}
                </h3>
              </div>
              <p className="text-grey-600 text-justify mt-4">
                {project.overview}
              </p>
            </div>

            {/* Bookmark Icon */}
            <div
              className={`${
                bookmarks[project.id] ? "bg-success-50" : "border-gray-300"
              } p-1 rounded-lg cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                toggleBookmark(project.id);
              }}
            >
              <BookmarkIcon
                className={`w-5 h-5 ${
                  bookmarks[project.id] ? "text-success-600" : ""
                }`}
              />
            </div>
          </div>

          {/* Skills Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
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
            <div className="flex items-center gap-4">
              <div className="flex items-center text-grey-500 whitespace-nowrap">
                <ClockIcon className="w-5 h-5 mr-1" />
                <span>{project.duration}</span>
              </div>
              <div className="text-grey-500 bg-success-50 px-3 py-1 rounded-full whitespace-nowrap">
              {project.salaryRange} 
              </div>
            </div>
          </div>

          <div className="mt-4 text-gray-400 text-sm text-right">
            Posted {getDaysSincePosted(project.postedDate)} days ago
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
