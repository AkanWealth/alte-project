import { useState } from "react";
import { useModalContext } from "../../../contexts/ModalContext";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import ToastNotification, { ToastMessage } from "../../../ui/ToastNotification";
import { XMarkIcon } from "@heroicons/react/24/outline";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    policy: false,
    selectedServices: [],
  });

  const [errors, setErrors] = useState({});
  const { setModalComponent } = useModalContext();
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...files]);
  };

  const serviceOptions = [
    "Website & Software Development",
    "Mobile App Development",
    "Product Discovery",
    "Pitch Deck Creation",
    "Product Design",
    "Research and Analysis",
    "Business Plan Development",
    "Low Code App Development",
    "Others",
  ];

  const handleServiceChange = (service) => {
    setFormData((prevData) => {
      const updatedServices = prevData.selectedServices.includes(service)
        ? prevData.selectedServices.filter((s) => s !== service)
        : [...prevData.selectedServices, service];
      return { ...prevData, selectedServices: updatedServices };
    });
  };


  //const navigate = useNavigate();
  const validate = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    // Business Name validation
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[0-9]{11}$/;

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 11-digit phone number";
    }
    if (!formData.policy) {
      newErrors.policy = "You must agree to the terms and privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type: inputType } = e.target;
    setFormData({
      ...formData,
      [name]: inputType === "checkbox" ? checked : value,
    });
  };

  const submitForm = async () => {
    try {
      const response = await axios.post(
        "https://alte-backend.onrender.com/api/Alte/request-quote",
        formData
      );
      console.log("Success:", response.data);
  
      if (response.data.success) {
        toast.success(
          <ToastMessage
            title="Success!"
            message={response.data.message || "Your request has been received. A representative will contact you shortly with a quote."}
          />
        );
      } else {
        toast.error(
          <ToastMessage
            title="Request Failed"
            message={response.data.message || "There was an issue with your request. Please try again."}
          />
        );
      }
      setModalComponent(null);
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        <ToastMessage
          title="Error"
          message="An error occurred while submitting your request. Please try again later."
        />
      );
    }
  };
  const handleValidation = async (event) => {
    event.preventDefault();

    const isValid = validate();

    if (!isValid) {
      setAlertVisible(true);
    } else {
      setAlertVisible(false);
      await submitForm();
    }
  };

  return (
    <div className="relative mx-auto max-h-[75vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-lg sm:p-8 lg:max-w-2xl lg:p-10">
      <button
        onClick={() => setModalComponent(null)}
        className="text-gray-500 hover:text-gray-800 absolute right-4 top-4"
      >
        <XMarkIcon className="size-7" />
      </button>

      {alertVisible && (
        <div className="mb-4 flex items-start justify-between rounded-md border border-[#DC6662] bg-[#FAE8E8] p-4 text-black">
          <div className="flex items-start">
            <img
              src="/images/freelancer/error.png"
              alt="Error Logo"
              className="mr-2 h-6 w-6"
            />{" "}
            {/* Logo */}
            <div className="font-raleway">
              <strong>Error</strong>
              <p>Complete all fields and try again.</p>
            </div>
          </div>
          <button onClick={() => setAlertVisible(false)}>✖️</button>
        </div>
      )}
      {/* Modal Header */}
      <ToastNotification />

      <h2 className="mb-4 font-raleway text-2xl font-semibold">
        Request a Free Quote
      </h2>

      {/* Modal Form */}
      <form className="space-y-6" onSubmit={handleValidation}>
        <div>
          <h3 className="mb-2 font-raleway font-semibold">
            1 of 3 - Personal Details
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name*"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`w-full rounded-md border p-2 ${
                errors.fullName ? "border-[#DC6662]" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-sm text-[#DC6662]">{errors.fullName}</p>
            )}

            <input
              type="text"
              name="businessName"
              placeholder="Business Name*"
              className={`w-full rounded-md border p-2 ${
                errors.businessName ? "border-[#DC6662]" : "border-gray-300"
              }`}
              value={formData.businessName}
              onChange={handleInputChange}
            />
            {errors.businessName && (
              <p className="text-sm text-[#DC6662]">{errors.businessName}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              className={`w-full rounded-md border p-2 ${
                errors.email ? "border-[#DC6662]" : "border-gray-300"
              }`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-sm text-[#DC6662]">{errors.email}</p>
            )}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number*"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Prevent non-numeric input
              }}
              className={`w-full rounded-md border p-2 ${
                errors.phoneNumber ? "border-[#DC6662]" : "border-gray-300"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-sm text-[#DC6662]">{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-raleway font-semibold">
            2 of 3 - Your Request
          </h3>
          <p className="mb-2">Which Services are you interested in?*</p>
          <div className="grid grid-cols-1 gap-2 font-raleway text-sm sm:grid-cols-2 lg:grid-cols-3">
            {serviceOptions.map((service) => (
              <div key={service} className="rounded-sm border border-black p-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={formData.selectedServices.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  {service}
                </label>
              </div>
            ))}
          </div>
          {errors.selectedServices && (
            <p className="text-sm text-[#DC6662]">{errors.selectedServices}</p>
          )}
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
                src="/icons/cloud-icon.svg"
                alt="upload-image"
                className="h-10 w-auto rounded-lg shadow-md"
              />
            </div>
            <input
              type="file"
              accept=".jpeg,.png,.gif,.mp4,.pdf,.psd,.ai,.doc,.ppt"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <p className="mb-2">
                Drag & drop files or{" "}
                <a className="text-grey-400 underline">Browse</a>
              </p>
            </label>
            <p className="text-xs">
              Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
            </p>
          </div>

          {selectedFiles.length > 0 && (
            <div className="mt-4">
              <h4>Uploaded Files:</h4>
              <ul>
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-start space-x-2 font-raleway">
          <input
            type="checkbox"
            name="policy"
            className="mt-1"
            checked={formData.policy}
            onChange={handleInputChange}
          />

          <label className="font-raleway text-sm">
            By submitting this form, you agree to our{" "}
            <Link to="/policies/privacy-policy" className="text-sec-500">
              Privacy policy
            </Link>
          </label>
          {errors.policy && (
            <p className="text-sm text-[#DC6662]">{errors.policy}</p>
          )}
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
