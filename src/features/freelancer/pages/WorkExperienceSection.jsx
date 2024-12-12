import React, { useEffect, useState } from "react";
import { MinusIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ToastNotification, { ToastMessage } from "../../../ui/ToastNotification";
import "react-datepicker/dist/react-datepicker.css";
import useFreelancerAuth from "../auth/useFreelancerAuth";
import { API } from "../../../config";
import axios from "axios";


const WorkExperienceSection = () => {
  const [experiences, setExperiences] = useState([{}]);
  const { user } = useFreelancerAuth();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      try {
        const userId = user?.id; // Replace with user retrieval method
        if (!userId) return;

        const response = await axios.get(`${API}/api/Alte/WorkExperiences/freelancer/${userId}`);
        console.log("fetchedData", response.data);
        const fetchedExperiences = response.data;

        if (fetchedExperiences.length > 0) {
          setExperiences(fetchedExperiences);
          fetchedExperiences.forEach((exp, index) => {
            // Set values for each experience
            setValue(`experiences.${index}.jobTitle`, exp.jobTitle);
            setValue(`experiences.${index}.company`, exp.companyName);

            // Format dates for input
            if (exp.startDate) {
              setValue(`experiences.${index}.startDate`,
                new Date(exp.startDate).toISOString().split('T')[0]
              );
            }

            if (exp.endDate) {
              setValue(`experiences.${index}.endDate`,
                new Date(exp.endDate).toISOString().split('T')[0]
              );
            }

            // Set current job checkbox
            setValue(`experiences.${index}.currentJob`, exp.isCurrentJob);
          });
        } else {
          // If no experiences exist, show an empty input
          setExperiences([{}]);
        }
      } catch (error) {
        console.error("Error fetching work experiences:", error);
        toast.error(
          <ToastMessage title="Error" message="Failed to load work experiences" />
        );
      }
    };

    fetchWorkExperiences();
  }, [user, setValue]);

  const addExperience = () => {
    setExperiences([...experiences, {}]);
  };
  const deleteWorkExperience = async (index) => {
    try {
      const userId = user?.id;
      if (!userId) {
        toast.error(<ToastMessage title="Error" message="User not found" />);
        return;
      }
      const experienceToDelete = experiences[index];
      console.log("id", experienceToDelete.id);

      if (experienceToDelete && experienceToDelete.id) {
        await axios.delete(`${API}/api/Alte/WorkExperiences/freelancer/${userId}/${experienceToDelete.id}`);
      }
      // If the experience is a new, unsaved experience
      if (experienceToDelete.id) {
        removeExperience(index);
        return;
      }

      // Call the delete endpoint


      // Remove the experience from the state
      const updatedExperiences = experiences.filter((_, i) => i !== index);
      setExperiences(updatedExperiences);

      // Reset form values
      const currentFormValues = { experiences: updatedExperiences };
      reset(currentFormValues);

      // Success toast
      toast.success(
        <ToastMessage
          title="Experience Deleted"
          message="Your work experience has been successfully deleted"
        />
      );
    } catch (error) {
      console.error("Error deleting work experience:", error);
      toast.error(
        <ToastMessage
          title="Error"
          message={error.response?.data || "Failed to delete work experience"}
        />
      );
    }
  };
  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
    toast.success(
      <ToastMessage message="Your work experience has been removed." />,
    );

  };

  const onSubmit = async (data) => {
    try {
      // Assuming you have the user ID from somewhere (e.g., context, prop, or state)
      const userId = user?.id; // Replace with actual user ID retrieval method

      // Separate out the experiences from the form data
      const { experiences } = data;

      // Prepare the experiences data
      const formattedExperiences = experiences.map(exp => ({
        jobTitle: exp.jobTitle,
        companyName: exp.company,
        startDate: exp.startDate ? new Date(exp.startDate).toISOString() : null,
        endDate: exp.endDate ? new Date(exp.endDate).toISOString() : null, // Make endDate nullable for current job
        isCurrentJob: exp.currentJob || false
      }));

      let response;
      if (experiences.length === 1) {
        // // If only one experience, use the single endpoint
        // response = await axios.post(`${API}/api/Alte/WorkExperiences/single/${userId}`, 
        //   formattedExperiences[0],
        //   {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     }
        //   }
        // );
        const existingExperiencesResponse = await axios.get(`${API}/api/Alte/WorkExperiences/freelancer/${userId}`);
        const existingExperiences = existingExperiencesResponse.data;
        console.log("existing", existingExperiencesResponse.data)

        if (existingExperiences[0]) {
          // If there's a single existing experience, update it
          response = await axios.put(
            `${API}/api/Alte/WorkExperiences/freelancer/${userId}`,
            formattedExperiences[0],
            {
              headers: {
                'Content-Type': 'application/json',
              }
            }
          );} else{
            response = await axios.post(`${API}/api/Alte/WorkExperiences/single/${userId}`, 
                formattedExperiences[0],
                {
                  headers: {
                    'Content-Type': 'application/json',
                  }
                }
              );
          }
        } else {
          // If multiple experiences, use the multiple endpoint
          response = await axios.post(`${API}/api/Alte/WorkExperiences/freelancer/${userId}`,
            {
              experiences: formattedExperiences
            },
            {
              headers: {
                'Content-Type': 'application/json',
              }
            }
          );
        }


        // Success toast
        toast.success(
          <ToastMessage
            title="Work Experience Saved"
            message="Your work experience has been successfully created"
          />
        );

        // Reset the form
        reset();
      } catch (error) {
        // Error toast
        toast.error(
          <ToastMessage
            title="Error"
            message={error.message || "Failed to save work experiences"}
          />
        );
      }
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
                  onClick={() => deleteWorkExperience(index)}
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
