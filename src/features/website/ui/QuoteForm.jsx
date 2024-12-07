import { useState } from "react";
import { useModalContext } from "../../../contexts/ModalContext";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import ToastNotification, { ToastMessage } from "../../../ui/ToastNotification";
import { XMarkIcon } from "@heroicons/react/24/outline";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    CompanyName: "",
    Email: "",
    PhoneNumber: "",
    SelectedServices: [],
    Document: null // For file upload
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
      const updatedServices = prevData.SelectedServices.includes(service)
        ? prevData.SelectedServices.filter((s) => s !== service)
        : [...prevData.SelectedServices, service];
      return { ...prevData, SelectedServices: updatedServices };
    });
  };


  //const navigate = useNavigate();
  const validate = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.FullName.trim()) {
      newErrors.FullName = "Full Name is required";
    }

    // Business Name validation
    if (!formData.CompanyName.trim()) {
      newErrors.CompanyName = "Business Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!emailRegex.test(formData.Email)) {
      newErrors.Email = "Enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[0-9]{11}$/;

    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Phone Number is required";
    } else if (!phoneRegex.test(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "Enter a valid 11-digit phone number";
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
      const formDataToSubmit = new FormData();
    
      // Add text fields
      formDataToSubmit.append('FullName', formData.FullName);
      formDataToSubmit.append('CompanyName', formData.CompanyName);
      formDataToSubmit.append('Email', formData.Email);
      formDataToSubmit.append('PhoneNumber', formData.PhoneNumber);
      
      // Add services
      formData.SelectedServices.forEach((service, index) => {
        formDataToSubmit.append(`SelectedServices[${index}]`, service);
      });
  
      // Add file if exists
      if (selectedFiles.length > 0) {
        formDataToSubmit.append('Document', selectedFiles[0]);
      }
  
      const response = await axios.post(
        "https://alte-backend.onrender.com/api/Alte/request-quote",
        formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data);
  
      if (response.status === 200) {
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
              name="FullName"
              value={formData.FullName}
              onChange={handleInputChange}
              className={`w-full rounded-md border p-2 ${
                errors.FullName ? "border-[#DC6662]" : "border-gray-300"
              }`}
            />
            {errors.FullName && (
              <p className="text-sm text-[#DC6662]">{errors.FullName}</p>
            )}

            <input
              type="text"
              name="CompanyName"
              placeholder="Business Name*"
              className={`w-full rounded-md border p-2 ${
                errors.CompanyName ? "border-[#DC6662]" : "border-gray-300"
              }`}
              value={formData.CompanyName}
              onChange={handleInputChange}
            />
            {errors.CompanyName && (
              <p className="text-sm text-[#DC6662]">{errors.CompanyName}</p>
            )}

            <input
              type="email"
              name="Email"
              placeholder="Email Address*"
              className={`w-full rounded-md border p-2 ${
                errors.email ? "border-[#DC6662]" : "border-gray-300"
              }`}
              value={formData.Email}
              onChange={handleInputChange}
            />
            {errors.Email && (
              <p className="text-sm text-[#DC6662]">{errors.Email}</p>
            )}
            <input
              type="tel"
              name="PhoneNumber"
              placeholder="Phone Number*"
              value={formData.PhoneNumber}
              onChange={handleInputChange}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Prevent non-numeric input
              }}
              className={`w-full rounded-md border p-2 ${
                errors.PhoneNumber ? "border-[#DC6662]" : "border-gray-300"
              }`}
            />
            {errors.PhoneNumber && (
              <p className="text-sm text-[#DC6662]">{errors.PhoneNumber}</p>
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
                    checked={formData.SelectedServices.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  {service}
                </label>
              </div>
            ))}
          </div>
          {errors.SelectedServices && (
            <p className="text-sm text-[#DC6662]">{errors.SelectedServices}</p>
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
