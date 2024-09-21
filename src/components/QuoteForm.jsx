import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useModalContext } from "../contexts/ModalContext";

const QuoteForm = () => {
  const { setModalComponent } = useModalContext();
  return (
    <div className="relative mx-auto max-h-[75vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-lg sm:p-8 lg:max-w-2xl lg:p-10">
      <button
        onClick={() => setModalComponent(null)}
        className="text-gray-500 hover:text-gray-800 absolute right-4 top-4"
      >
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </button>

      {/* Modal Header */}
      <h2 className="mb-4 font-raleway text-2xl font-semibold">
        Request a Free Quote
      </h2>

      {/* Modal Form */}
      <form className="space-y-6">
        <div>
          <h3 className="mb-2 font-raleway font-semibold">
            1 of 3 - Personal Details
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full rounded-md border p-2"
            />
            <input
              type="text"
              placeholder="Business Name*"
              className="w-full rounded-md border p-2"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full rounded-md border p-2"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full rounded-md border p-2"
            />
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-raleway font-semibold">
            2 of 3 - Your Request
          </h3>
          <p className="mb-2">Which Services are you interested in?*</p>
          <div className="grid grid-cols-1 gap-2 font-raleway text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-sm border border-black p-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Website & Software Development
              </label>
            </div>
            <div className="rounded-sm border border-black p-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Mobile App Development
              </label>
            </div>
            <div className="rounded-sm border border-black p-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Product Discovery
              </label>
            </div>
            <div className="rounded-sm border border-black p-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Pitch Deck Creation
              </label>
            </div>
            <div className="rounded-sm border border-black p-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Product Design
              </label>
            </div>
            <div className="rounded-sm border border-black p-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Research and Analysis
              </label>
            </div>
            <div className="rounded-sm border border-black p-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Business Plan Development
              </label>
            </div>
            <div className="rounded-sm border border-black p-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Low Code App Development
              </label>
            </div>
            <div className="rounded-sm border border-black p-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Others
              </label>
            </div>
          </div>
          <textarea
            placeholder="Specify your Request"
            className="mt-4 w-full rounded-md border p-2"
            rows="2"
          ></textarea>

          <textarea
            placeholder="Tell us about your business"
            className="mt-4 w-full rounded-md border p-2"
            rows="2"
          ></textarea>
        </div>

        <div className="font-raleway">
          <h3 className="mb-2 font-semibold">3 of 3 - Upload Documents</h3>
          <div className="border-gray-300 rounded-md border-2 border-dashed p-4 text-center">
            <div className="mb-3 flex h-full items-center justify-center">
              <img
                src="/icons/cloud-icon.png"
                alt="upload-image"
                className="h-10 w-auto rounded-lg shadow-md"
              />
            </div>
            <p className="mb-2">
              Drag & drop files or{" "}
              <a href="#" className="text-pry-500">
                Browse
              </a>
            </p>
            <p className="text-xs">
              Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-start space-x-2 font-raleway">
          <input type="checkbox" className="mt-1" />
          <label className="text-sm">
            I agree to the terms of service and privacy policy.
          </label>
        </div>

        <div className="flex justify-end space-x-4 font-raleway">
          <button
            type="button"
            onClick={() => setModalComponent(null)}
            className="hover:bg-gray-100 rounded-md border border-black px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="hover:bg-green-700 rounded-md bg-pry-600 px-4 py-2 text-white"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
