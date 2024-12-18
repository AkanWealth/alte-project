import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDownTrayIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { useModalContext } from "../../../contexts/ModalContext";
import SuccessMessage from "./SuccessMessage";
import { API } from "../../../config";
import axios from 'axios';

import toast from "react-hot-toast";
import ToastNotification, { ToastMessage } from "../../../ui/ToastNotification";



const ApplyProjectForm = ({user, projectId}) => {
  // const { user } = useFreelancerAuth(); 
  const [selectedResume, setSelectedResume] = useState("resume1");
  const [documents, setDocuments] = useState([
    // { id: "resume1", name: "Demilade Omotayo CV.pdf", uploaded: "3 weeks ago" },
  ]);
  const [availability, setAvailability] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { setModalComponent } = useModalContext();
  const [newResume, setNewResume] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errors, setErrors] = useState({}); 
  const [isSubmitted, setIsSubmitted] = useState(false);



  useEffect(() => {
    const fetchUserResumes = async () => {
      try {
        // Replace with actual user ID retrieval method
        const userId = user?.id;
        const response = await axios.get(`${API}/api/Alte/WorkExperiences/resume/${userId}`);

        console.log(response.data)
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching resumes:', error);
        // Optional: Add error handling UI
      }
    };

    fetchUserResumes();
  }, []);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a preview object for the new resume
      const newResumePreview = {
        id: 'new-resume',
        originalFileName: file.name,
        uploadDate: new Date().toISOString(),
        isNewUpload: true
      };

      setNewResume(file);
      
      // Add the new resume to the documents list
      setDocuments(prevDocs => [
        ...prevDocs, 
        newResumePreview
      ]);

      // Select the new resume
      setSelectedResume(newResumePreview.id);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    processFiles(files);
  };

  const processFiles = (files) => {
    const uploadedFiles = [...files].map((file, index) => ({
      id: `resume${documents.length + index + 1}`,
      name: file.name,
      uploaded: "Just now",
    }));
    setDocuments([...documents, ...uploadedFiles]);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleResumeSelection = (resumeId) => {
    setSelectedResume(resumeId);
  };

  const validateForm = () => {
    const newErrors = {};
    if (documents.length === 0) {
      newErrors.documents = "Please upload at least one document.";
    }
    if (!availability) {
      newErrors.availability = "Please select your availability date.";
    } else {
      const selectedDate = new Date(availability);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.availability = "Availability date must be a future date.";
      }
    }
    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append('projectCardId', projectId);
      
      // If it's a new resume, append the file
      if (newResume && selectedResume === 'new-resume') {
        formData.append('NewResume', newResume);
      } else {
        // Otherwise, use the selected resume ID
        formData.append('SelectedResumeId', selectedResume);
      }
      
      formData.append('Availability', availability);

      // Submit application
      const response = await axios.post(
        `${API}/api/Alte/ProjectApplication/sumbitApplication/${user.id}`, 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      // Handle successful submission
      console.log(response.data.message)
      toast.success(response.data.message);
      // Close modal or redirect as needed

      setModalComponent(null)
    } catch (error) {
      console.error('Application submission error:', error);
      toast.error(error.response?.data?.message || 'Failed to submit application');
    }
  };


  const handleDownload = async (resumeId) => {
    try {
      const response = await axios.get(
        `${API}/api/Alte/WorkExperiences/resume/download/${user.id}/${resumeId}`, 
        {
          responseType: 'blob' // Important for file downloads
        }
      );
  
      // Create a link element to trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf'); // Or dynamically get filename
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Download failed:', error);
      toast.error('Failed to download resume');
    }
  };

  const handleCloseModal = () => {
    setIsSubmitted(false)
    setModalComponent(null)
  };
  const getDaysSincePosted = (postedDate) => {
    const today = new Date();
    const posted = new Date(postedDate);
    const diffTime = Math.abs(today.getTime() - posted.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 1) {
      return "just now";
    }

    return diffDays;
  };

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 rounded-lg bg-white p-6 shadow-md max-h-[90vh] overflow-y-auto"
      >
        <h1 className="text-xl font-bold">
          Application - Frontend Developer for E-commerce Website
        </h1>

        <div className="space-y-4">
          <label className="text-gray-700 block">Resume</label>
          <p className="text-gray-500">Be sure to include an updated resume*</p>

          {/* Resume selection */}
          <div className="space-y-2">
            {documents.map((doc) => (
              <div
                key={doc.resumeId}
                className={`flex items-center justify-between rounded-lg border p-4 ${
                  selectedResume === doc.resumeId
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                onClick={() => handleResumeSelection(doc.resumeId)}
              >
                <img src="/images/freelancer/pdf.png" className="h-8 w-8" />
                <span>
                  <h3>{doc.originalFileName}</h3>
                  <h6>{`Uploaded ${getDaysSincePosted(doc.uploadDate)} days ago`}</h6>
                </span>
                <ArrowDownTrayIcon className="h-5 w-5"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering row selection
                  handleDownload(doc.resumeId);
                }}  />
                {!doc.isNewUpload && (
                  <input
                    type="radio"
                    name="resume"
                    checked={selectedResume === doc.resumeId}
                    readOnly
                    className="ml-2"
                  />
                )}
              </div>
            ))}
          </div>
          {errors.documents && (
            <p className="text-sm text-error-300">{errors.documents}</p>
          )}

          {/* Upload new resume */}
          <div className="mt-4">
            <h3 className="text-center">
              You can upload a new resume tailored to this project.
            </h3>
            <div
              className="flex justify-center p-4"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <label
                htmlFor="file-upload"
                className="border-green-500 text-green-500 flex w-fit cursor-pointer items-center gap-2 rounded-lg border px-4 py-2"
              >
                <PaperClipIcon className="h-5 w-5" />
                <span>Upload Your Resume</span>
                <input
                  type="file"
                  accept=".jpeg,.png,.gif,.mp4,.pdf,.psd,.ai,.doc,.ppt"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div>
          <label htmlFor="availability" className="text-gray-700 block">
            Availability*
          </label>
          <input
            type="date"
            id="availability"
            value={availability}
            placeholder="When can you start?"
            onChange={(e) => setAvailability(e.target.value)}
            className="border-grey-300 mt-1 block w-full border-b p-2 shadow-sm focus:border-b-sec-400 focus:outline-none"
          />
          {errors.availability && (
            <p className="text-sm text-error-300">{errors.availability}</p>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="h-4 w-4"
          />
          <label htmlFor="terms" className="text-sm text-grey-600">
            By checking this box, you confirm your profile submission and agree
            to our{" "}
            <a href="#" className="text-sec-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <Link to="/policies/privacy-policy" className="text-sec-500">
              Privacy policy
            </Link>
          </label>
          {errors.terms && (
            <p className="text-sm text-error-300">{errors.terms}</p>
          )}
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            className="border-gray-100 text-gray-700 hover:bg-gray-50 w-full rounded-md border px-3 py-2 md:py-3"
            onClick={() => setModalComponent(null)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full whitespace-nowrap rounded-md bg-sec-500 px-4 py-2 md:py-3"
          >
            Submit Application
          </button>
        </div>
      </form>
      
      {/* Success Modal */}
      {isSubmitted && <SuccessMessage onClose={handleCloseModal} />}
    </div>
  );
};

export default ApplyProjectForm;
