import React, { useState, useEffect } from "react";
import {
  CloudArrowDownIcon,
  DocumentIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import ToastNotification, { ToastMessage } from "../../../ui/ToastNotification";
import { API } from "../../../config";
import useFreelancerAuth from "../auth/useFreelancerAuth";
import axios from "axios";


const DocumentSection = () => {
  const { user } = useFreelancerAuth(); 
  const [resumeFiles, setResumeFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [certificateFiles, setCertificateFiles] = useState([]);
  const [isUploadingCertificate, setIsUploadingCertificate] = useState(false);

  useEffect(() => {
    console.log("Current resume files:", resumeFiles);
  }, [resumeFiles]);

  // useEffect(() => {
  //   console.log("Current certificate files:", certificateFiles);
  // }, [certificateFiles]);

  // Handle multiple resume uploads
  const handleResumeUpload = (e) => {
    const files = Array.from(e.target.files);
    setResumeFiles((prevFiles) => [...prevFiles, ...files]); // Add new resumes to the existing list
  };
  const uploadResume = async () => {
    // Validate files
    console.log("Upload Resume initiated");
    console.log("Current resume files:", resumeFiles);

    // Comprehensive file validation
    if (!resumeFiles || resumeFiles.length === 0) {
      console.error("No files found for upload");
      toast.error('Please select a resume to upload');
      return;
    }

    // Get the first file
    const resumeFile = resumeFiles[0];
    console.log("File to be uploaded:", resumeFile);

    // Validate file type
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const fileExtension = '.' + resumeFile.name.split('.').pop()?.toLowerCase();
    
    if (!allowedExtensions.includes(fileExtension)) {
      toast.error('Invalid file type. Only PDF and Word documents are allowed.');
      return;
    }

    // Create FormData
    const formData = new FormData();
    formData.append('Resume', resumeFile);

    try {
      setIsUploading(true);
      
      
      const userId = user?.id; 
      
      
      const response = await axios.post(`${API}/api/Alte/WorkExperiences/resume/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Current resume files:", response);
      // Success handling
      toast.success(response.data.message);
      
      
      setResumeFiles([]);
    } catch (error) {
      // Error handling
      const errorMessage = error.response?.data || 'Failed to upload resume';
      toast.error(errorMessage);
    } finally {
      setIsUploading(false);
      
    }
  };

  // Handle multiple certificate uploads
  const handleCertificateUpload = (e) => {
    const files = Array.from(e.target.files);
    setCertificateFiles((prevFiles) => [...prevFiles, ...files]); // Add new files to the existing list
  };

  // Handle drag and drop for resume uploads
  const handleResumeDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setResumeFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Handle drag and drop for certificate uploads
  const handleCertificateDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setCertificateFiles((prevFiles) => [...prevFiles, ...files]);
  };
  const allowedCertificateExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];

  // Create a file validation function for certificates
  const validateCertificateFileType = (file) => {
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    return allowedCertificateExtensions.includes(fileExtension);
  };
  useEffect(() => {
    console.log("Current certificate files:", certificateFiles);
  }, [certificateFiles]);
  
  const uploadCertificate = async () => {
    console.log("Upload Resume initiated");
    console.log("Current resume files:", certificateFiles);
    if (certificateFiles.length === 0) {
      toast.error('Please select a certificate to upload');
      return;
    }

    const certificateFile = certificateFiles[0];
    if (!validateCertificateFileType(certificateFile)) {
      toast.error('Invalid file type. Only PDF and Word documents are allowed.');
      return;
    }

    const formData = new FormData();
    formData.append('Certificate', certificateFile);

    try {
      setIsUploadingCertificate(true);
      const userId = user?.id;

      if (!userId) {
        throw new Error('User ID not found');
      }

      const response = await axios.post(
        `${API}/api/Alte/WorkExperiences/certificate/${userId}`, 
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      toast.success(response.data.message || 'Certificate uploaded successfully');
      setCertificateFiles([]);
    } catch (error) {
      const errorMessage = error.response?.data || error.message || 'Failed to upload certificate';
      toast.error(errorMessage);
    } finally {
      setIsUploadingCertificate(false);
    }
  };

  // Remove individual resume file
  const removeResumeFile = (index) => {
    setResumeFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    toast.success(<ToastMessage message="Your resume has been removed." />);
  };

  // Remove individual certificate file
  const removeCertificateFile = (index) => {
    setCertificateFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    toast.success(
      <ToastMessage message="Your certificate has been removed." />,
    );
  };

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-[#FBFFFE] p-6">
      <ToastNotification />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Resume Upload Section */}
        <div>
          <h3 className="mb-1 text-xl font-semibold">Resume</h3>
          <p className="text-gray-600 mb-3 text-sm">
            PDF (Preferred), DOCX, DOX, RTF, TXT up to 1mb
          </p>
          <div
            className="border-green-700 bg-gray-100 cursor-pointer rounded-lg border-2 border-dashed bg-pry-50 p-6 text-center"
            onDrop={handleResumeDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              id="resumeUpload"
              className="hidden"
              onChange={handleResumeUpload}
              multiple
            />
            <label htmlFor="resumeUpload" className="cursor-pointer">
              <CloudArrowDownIcon className="text-gray-700 mx-auto mb-2 h-8 w-8" />
              <p className="text-gray-700">
                Drag or{" "}
                <span className="cursor-pointer font-semibold text-sec-600">
                  upload
                </span>{" "}
                Resume
              </p>
            </label>
          </div>

          {/* Display uploaded resume and remove button */}
          {resumeFiles.map((file, index) => (
            <div
              key={index}
              className="mt-3 flex items-center justify-between rounded-md border bg-white p-2"
            >
              <div className="flex items-center space-x-2">
                <DocumentIcon className="text-gray-500 h-6 w-6" />
                <p className="text-gray-700 truncate text-base md:text-xl">
                  {file.name}
                </p>{" "}
              </div>
              <button
                className="text-red-500 font-semibold"
                onClick={() => removeResumeFile(index)}
              >
                <XCircleIcon className="h-6 w-6 text-error-400" />
              </button>
            </div>
          ))}
          {/* Upload Button */}
          {resumeFiles.length > 0 && (
            <button 
              onClick={uploadResume}
              disabled={isUploading}
              className="mt-4 btn btn-pry w-full"
            >
              {isUploading ? 'Uploading...' : 'Upload Resume'}
            </button>
          )}
        </div>

        {/* Certificate Upload Section */}
        <div>
          <h3 className="mb-1 text-xl font-semibold">Certificate</h3>
          <p className="text-gray-600 mb-3 text-sm">
            Upload your certifications
          </p>
          <div
            className="border-green-700 bg-gray-100 cursor-pointer rounded-lg border-2 border-dashed bg-pry-50 p-6 text-center"
            onDrop={handleCertificateDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              id="certificateUpload"
              className="hidden"
              onChange={handleCertificateUpload}
              multiple
            />
            <label htmlFor="certificateUpload" className="cursor-pointer">
              <CloudArrowDownIcon className="text-gray-700 mx-auto mb-2 h-8 w-8" />
              <p className="text-gray-700">
                Drag or{" "}
                <span className="cursor-pointer font-semibold text-sec-600">
                  upload
                </span>{" "}
                Certificate
              </p>
            </label>
          </div>

          {/* Display uploaded certificate and remove button */}
          {certificateFiles.map((file, index) => (
            <div
              key={index}
              className="bg-gray-100 mt-3 flex items-center justify-between rounded-md border p-2"
            >
              <div className="flex items-center">
                <DocumentIcon className="text-gray-500 mr-2 h-6 w-6" />
                <p className="text-gray-700 truncate text-xl">{file.name}</p>
              </div>
              <button
                className="text-red-500 ml-4 font-semibold"
                onClick={() => removeCertificateFile(index)}
              >
                <XCircleIcon className="h-6 w-6 text-error-400" />
              </button>
            </div>
          ))}

{/* Certificate Upload Button */}
{certificateFiles.length > 0 && (
            <button 
              onClick={uploadCertificate}
              disabled={isUploadingCertificate}
              className="mt-4 btn btn-pry w-full"
            >
              {isUploadingCertificate ? 'Uploading...' : 'Upload Certificate'}
            </button>
          )}
         
          {/* <button 
            onClick={uploadResume}
            disabled={isUploading}
            className="btn btn-pry w-full"
          >
            {isUploading ? 'Uploading...' : 'Upload Resume'}
          </button> */}

        </div>
      </div>
    </div>
  );
};

export default DocumentSection;
