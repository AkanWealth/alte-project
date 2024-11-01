import React, { useState } from "react";
import { MinusIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ToastNotification, { ToastMessage } from "../../../ui/ToastNotification";
import "react-datepicker/dist/react-datepicker.css";

const WorkExperienceSection = () => {
  const [experiences, setExperiences] = useState([{}]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addExperience = () => {
    setExperiences([...experiences, {}]);
  };

  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    toast.success(
      <ToastMessage message="Your work experience has been removed." />,
    );
    setExperiences(updatedExperiences);
  };

  const onSubmit = (data) => {
    console.log(data);
    toast.success(
      <ToastMessage
        title="Work Experience Saved"
        message="Your work experience has been successfully created"
      />,
    ); // Handle form submission
    reset(); // Reset the form after submission
  };

  return (
    <div className="mt-[-3rem] bg-[#FBFFFE]">
      <ToastNotification />
      <div className="relative mx-auto -ml-8 mt-[3rem] max-w-4xl rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {experiences.map((_, index) => (
            <div key={index} className="relative mb-10 pb-6">
              <h2 className="mb-4 font-raleway text-xl font-semibold">
                Experience {index + 1}
              </h2>

              <button
                type="button"
                className="text-gray-600 hover:text-gray-900 absolute right-2 top-2"
                onClick={() => removeExperience(index)}
              >
                <MinusIcon
                  className="text-gray-600 mr-2 h-8 w-8"
                  aria-hidden="true"
                />
              </button>

              <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="text-gray-700 block text-sm font-medium"
                    htmlFor={`experiences[${index}].jobTitle`}
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    {...register(`experiences[${index}].jobTitle`, {
                      required: "Job title is required",
                    })}
                    placeholder="Enter your job title"
                    className={`border-gray-300 focus:ring-indigo-200 mt-1 block w-full rounded-md border p-2 shadow-sm focus:outline-none focus:ring ${errors.experiences?.[index]?.jobTitle ? "border-red-500" : ""}`}
                  />
                  {errors.experiences?.[index]?.jobTitle && (
                    <p className="text-sm text-error-500">
                      {errors.experiences[index].jobTitle.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="text-gray-700 block text-sm font-medium"
                    htmlFor={`experiences[${index}].company`}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    {...register(`experiences[${index}].company`, {
                      required: "Company name is required",
                    })}
                    placeholder="Enter your company name"
                    className={`border-gray-300 focus:ring-indigo-200 mt-1 block w-full rounded-md border p-2 shadow-sm focus:outline-none focus:ring ${errors.experiences?.[index]?.company ? "border-red-500" : ""}`}
                  />
                  {errors.experiences?.[index]?.company && (
                    <p className="text-sm text-error-500">
                      {errors.experiences[index].company.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="text-gray-700 block text-sm font-medium"
                    htmlFor={`experiences[${index}].startDate`}
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    {...register(`experiences[${index}].startDate`, {
                      required: "Start date is required",
                    })}
                    className={`border-gray-300 mt-1 block w-full border-b p-2 shadow-sm focus:border-b-sec-400 focus:outline-none ${errors.experiences?.[index]?.startDate ? "border-red-500" : ""}`}
                  />
                  {errors.experiences?.[index]?.startDate && (
                    <p className="text-sm text-error-500">
                      {errors.experiences[index].startDate.message}
                    </p>
                  )}
                </div>
                {index === 0 && (
                  <div className="mb-4 flex items-center">
                    <input
                      type="checkbox"
                      {...register(`experiences[${index}].currentJob`)}
                      className="h-5 w-5 text-pry-600 focus:ring focus:ring-pry-500"
                    />
                    <label
                      htmlFor={`experiences[${index}].currentJob`}
                      className="text-gray-700 ml-2 block text-xl font-medium"
                    >
                      Current Job
                    </label>
                  </div>
                )}

                {index >= 1 && (
                  <div>
                    <label
                      className="text-gray-700 block text-sm font-medium"
                      htmlFor={`experiences[${index}].endDate`}
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      {...register(`experiences[${index}].endDate`, {
                        required: "End date is required",
                      })}
                      className={`border-gray-300 mt-1 block w-full border-b p-2 shadow-sm focus:border-b-sec-400 focus:outline-none ${errors.experiences?.[index]?.endDate ? "border-red-500" : ""}`}
                    />
                    {errors.experiences?.[index]?.endDate && (
                      <p className="text-sm text-error-500">
                        {errors.experiences[index].endDate.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="col-span-3 flex items-center sm:col-span-2">
            <button
              type="button"
              className="text-gray-900 mt-4 flex items-center rounded-md bg-white px-4 py-2 font-raleway text-xl font-semibold"
              onClick={addExperience}
            >
              <PlusCircleIcon
                className="text-gray-600 mr-2 h-8 w-8"
                aria-hidden="true"
              />
              Add Experience
            </button>
          </div>

          <div className="mb-4 mt-6 flex gap-4">
            <button
              type="button"
              className="border-gray-100 text-gray-700 hover:bg-gray-50 w-full rounded-md border px-6 py-3"
              onClick={() => reset()}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full rounded-md bg-sec-500 px-6 py-3"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
