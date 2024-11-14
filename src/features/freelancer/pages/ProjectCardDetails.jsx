import { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  BookmarkIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ApplyProjectForm from "./ApplyProjectForm";
import { useModalContext } from "../../../contexts/ModalContext";

const ProjectCardDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setModalComponent } = useModalContext();

  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const handleDownloadPDF = () => {
    const input = document.getElementById("pdf-content");

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("project-brief.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  return (
    <div className="bg-gray-50 mt-8 min-h-screen p-4">
      <Link to="/freelancer/dashboard/projects">
        <ArrowLeftIcon className="ml-4 h-8 w-8" />
      </Link>

      <div className="rounded-lg bg-white p-4 shadow-sm lg:p-6">
        {/* Alert for errors */}
        {isModalOpen && (
          <div className="fixed right-4 top-4 mb-4 flex rounded-md border border-[#104CD8] bg-[#EFF4FF] p-4 text-black">
            <div className="flex items-start">
              <img
                src="/images/freelancer/logo_blue.png"
                alt="Error Logo"
                className="mr-2 h-6 w-6"
              />{" "}
              {/* Logo */}
              <div className="font-raleway">
                <strong>Complete Your Profile To Apply</strong>
                <p>
                  Update and complete your profile to boost your chances of
                  securing top opportunities.
                </p>
                <div className="mt-6">
                  <Link to="/freelancer/dashboard/profile">
                    <button className="hover:bg-yellow-600 w-full rounded-lg bg-sec-500 py-2 font-medium text-grey-500">
                      Update Profile Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <button onClick={() => setIsModalOpen(false)}>✖️</button>
          </div>
        )}
        {/* Header */}
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            className="border-gray-100 text-gray-700 hover:bg-gray-50 flex w-auto items-center space-x-2 rounded-md border px-4 py-2"
            onClick={handleDownloadPDF}
          >
            <span className="text-sm lg:text-base">Download Brief</span>
            <ArrowDownTrayIcon className="h-5 w-5" />
          </button>
        </div>

        <div id="pdf-content">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-gray-900 text-xl font-semibold lg:text-2xl">
                Frontend Developer for E-commerce Website
              </h2>
              <div className="text-gray-500 mt-1 text-sm">
                Posted 5 days ago
              </div>
            </div>
            <div className="border-gray-300 rounded-lg border p-1">
              <BookmarkIcon className="h-5 w-5 text-grey-400" />
            </div>
          </div>

          {/* Job Duration and Salary */}
          <div className="mt-4 flex flex-wrap items-center gap-4 whitespace-nowrap">
            <div className="text-gray-500 flex items-center">
              <ClockIcon className="mr-1 h-5 w-5" />
              <span className="text-sm lg:text-base">3 months</span>
            </div>
            <div className="text-gray-500 flex items-center">
              <MapPinIcon className="h-5 w-5" />
              <span className="text-sm lg:text-base">Remote</span>
            </div>
            <div className="text-green-800 whitespace-nowrap rounded-full bg-success-50 px-3 py-1 text-sm lg:text-base">
              $2,000 - $4,000
            </div>
          </div>

          {/* Job Overview */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Overview</h3>
            <p className="text-gray-600 mt-2 text-justify text-sm lg:text-base">
              We are seeking a skilled frontend developer to create a responsive
              and user-friendly e-commerce platform. The ideal candidate should
              be proficient in HTML, CSS, and JavaScript, with experience in
              building modern web applications using frameworks like React. You
              will work closely with our design team to implement UI/UX best
              practices and ensure a seamless user experience.
            </p>
          </div>

          {/* Project Requirements */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Project Requirements</h3>
            <h4 className="text-md mt-4 font-medium">Responsibilities</h4>
            <ul className="mt-2 list-none space-y-2">
              {[
                "Develop and maintain the front end of the e-commerce website.",
                "Collaborate with the backend team for integration.",
                "Ensure mobile responsiveness and accessibility.",
              ].map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <CheckCircleIcon className="h-5 w-5" />
                  </span>
                  <span className="text-gray-700 text-sm lg:text-base">
                    {responsibility}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Required */}
          <div className="mt-6">
            <h4 className="text-md font-medium">Skills Required</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "HTML, CSS, JavaScript",
                "Version control with Git",
                "Knowledge of RESTful APIs",
                "Sprint Planning",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="text-gray-700 rounded-full bg-grey-50 px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Application Instructions */}
          <div className="mt-6 rounded-md bg-[#FADFFF] p-4">
            <h4 className="text-md text-purple-800 font-medium">
              Application Instructions
            </h4>
            <p className="text-purple-700 mt-2 text-justify text-sm lg:text-base">
              To apply for this project, please ensure your profile is complete
              and up-to-date. Include your resume and a portfolio of previous
              work that demonstrates your expertise in frontend development.
              Applications without a portfolio will not be considered.
            </p>
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-6">
          <button
            onClick={() => setModalComponent(<ApplyProjectForm />)} 
            className="hover:bg-yellow-600 w-full rounded-lg bg-sec-500 py-2 font-medium text-grey-500"
          >
            Apply for this project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardDetails;
