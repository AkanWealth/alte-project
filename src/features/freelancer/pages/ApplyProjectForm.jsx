import { useState } from "react";
import { useModalContext } from "../../../contexts/ModalContext";

const ApplyProjectForm = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [availability, setAvailability] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { setModalComponent } = useModalContext();

  const handleResumeSelection = (resume) => {
    setSelectedResume(resume);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the terms of service and privacy policy");
      return;
    }
    // Handle form submission logic
  };

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 rounded-lg bg-white p-6 shadow-md"
      >
        <h1 className="text-xl font-bold">
          Application- Frontend Developer for E-commerce Website
        </h1>

        <div className="space-y-4">
          <label className="text-gray-700 block">Resume</label>
          <p className="text-gray-500">Be sure to include an updated resume*</p>

          {/* Resume selection */}
          <div className="space-y-2">
            <div
              className={`flex items-center justify-between rounded-lg border p-4 ${selectedResume === "resume1" ? "border-green-500" : "border-gray-300"}`}
              onClick={() => handleResumeSelection("resume1")}
            >
              <span>Demilade Omotayo CV.pdf</span>
              <span className="text-gray-500 text-sm">
                Uploaded 3 weeks ago
              </span>
              <input
                type="radio"
                name="resume"
                checked={selectedResume === "resume1"}
                readOnly
                className="ml-2"
              />
            </div>

            <div
              className={`flex items-center justify-between rounded-lg border p-4 ${selectedResume === "resume2" ? "border-green-500" : "border-gray-300"}`}
              onClick={() => handleResumeSelection("resume2")}
            >
              <span>Demilade Omotayo CV.pdf</span>
              <span className="text-gray-500 text-sm">
                Uploaded 3 weeks ago
              </span>
              <input
                type="radio"
                name="resume"
                checked={selectedResume === "resume2"}
                readOnly
                className="ml-2"
              />
            </div>
          </div>

          {/* Upload new resume */}
          <div className="mt-4">
            <button className="border-green-500 text-green-500 rounded-lg border px-4 py-2">
              Upload your Resume
            </button>
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
            onChange={(e) => setAvailability(e.target.value)}
            className="border-gray-300 mt-2 w-full rounded-lg border p-2"
          />
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
          <label htmlFor="terms" className="text-gray-700">
            By checking this box, you confirm your profile submission and agree
            to our{" "}
            <a href="#" className="text-green-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-green-500">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Submit and Cancel buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2"
            onClick={() => setModalComponent(null)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-yellow-500 rounded-lg px-4 py-2 text-white"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyProjectForm;
