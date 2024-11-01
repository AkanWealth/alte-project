import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import ToastNotification, { ToastMessage } from "../../../ui/ToastNotification";

// Validation Schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  about: yup.string().required("About me is required"),
  role: yup.string().required("Role is required"),
  skills: yup
    .array()
    .of(yup.string().required("Skill is required"))
    .min(2, "At least two skills are required"),
  rate: yup.string().required("Rate is required"),
  language: yup
    .array()
    .of(yup.string().required("Language is required"))
    .min(1, "At least one language is required"),
  linkedIn: yup.string().url("Invalid URL"),
  portfolio: yup.string().url("Invalid URL"),
});

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [skills, setSkills] = useState([]);
  const [skillsInput, setSkillsInput] = useState("");
  const [languages, setLanguages] = useState([]);
  const [languageInput, setLanguageInput] = useState("");

  useEffect(() => {
    setValue("skills", skills);
  }, [skills, setValue]);

  const handleSkillsKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && skillsInput.trim()) {
      e.preventDefault();
      setSkills([...skills, skillsInput.trim()]);
      setSkillsInput("");
    }
  };

  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  const handleLanguageKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && languageInput.trim()) {
      e.preventDefault();
      setLanguages([...languages, languageInput.trim()]);
      setLanguageInput("");
    }
  };

  const removeLanguage = (indexToRemove) => {
    setLanguages(languages.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      skills,
      language: languages,
    };
    console.log(formData);
    toast.success(
      <ToastMessage
        title="Profile Saved"
        message="Your profile details has been successfully created"
      />,
    );
    reset();
    setSkills([]);
    setLanguages([]);
  };

  return (
    <div className="container mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-0 mt-[1rem] w-full rounded-lg bg-[#FBFFFE] p-6 px-4 sm:px-8 md:ml-0 lg:-ml-24 lg:px-16"
      >
        <ToastNotification />
        <div className="mb-2 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="mb-4">
            <label className="text-gray-700 mb-1 block">Full name*</label>
            <input
              type="text"
              {...register("fullName")}
              className={`w-full border p-2 ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {errors.fullName && (
              <p className="text-sm text-error-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-gray-700 mb-1 block">Email Address*</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full border p-2 ${errors.email ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {errors.email && (
              <p className="text-sm text-error-400">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4 md:col-span-2">
            <label className="text-gray-700 mb-1 block">About me*</label>
            <textarea
              {...register("about")}
              className={`w-full border p-2 ${errors.about ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {errors.about && (
              <p className="text-sm text-error-400">{errors.about.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-gray-700 mb-1 block">Role*</label>
            <select
              {...register("role")}
              className={`w-full border p-2 ${errors.role ? "border-red-500" : "border-gray-300"} rounded`}
            >
              <option value="">Select your role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
            {errors.role && (
              <p className="text-sm text-error-400">{errors.role.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-gray-700 mb-1 block">Rate*</label>
            <select
              {...register("rate")}
              className={`w-full border p-2 ${errors.rate ? "border-red-500" : "border-gray-300"} rounded`}
            >
              <option value="">Select your price fee</option>
              <option value="hourly">Hourly</option>
              <option value="fixed">Fixed</option>
            </select>
            {errors.rate && (
              <p className="text-sm text-error-400">{errors.rate.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="text-gray-700 mb-2 block">Add Language</label>
            <div className="flex flex-wrap items-center gap-2 rounded border p-2">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-success-50 px-2 py-1"
                >
                  <span>{language}</span>
                  <button
                    type="button"
                    onClick={() => removeLanguage(index)}
                    className="hover:text-red-700 text-error-400"
                  >
                    &times;
                  </button>
                </div>
              ))}
              <input
                type="text"
                value={languageInput}
                onChange={(e) => setLanguageInput(e.target.value)}
                onKeyDown={handleLanguageKeyDown}
                className="flex-1 p-1 outline-none"
              />
              {errors.language && (
                <p className="text-sm text-error-400">
                  {errors.language.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-700 mb-2 block">Skills*</label>
            <div className="flex flex-wrap items-center gap-2 rounded border p-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-md bg-success-50 px-2 py-1"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="hover:text-red-700 text-error-400"
                  >
                    &times;
                  </button>
                </div>
              ))}
              <input
                type="text"
                value={skillsInput}
                onChange={(e) => setSkillsInput(e.target.value)}
                onKeyDown={handleSkillsKeyDown}
                className="flex-1 p-1 outline-none"
                placeholder="Type a skill and press Enter"
              />
            </div>
            {/* Show validation error for skills */}
            {errors.skills && (
              <p className="text-sm text-error-400">{errors.skills.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-gray-700 mb-1 block">Time zone</label>
            <select
              {...register("timezone")}
              className={`w-full border p-2 ${errors.timezone ? "border-red-500" : "border-gray-300"} rounded`}
            >
              <option value="">Select your preferred time zone</option>
              <option value="utc-0">UTC-0</option>
              <option value="utc-1">UTC-1</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-gray-700 mb-1 block">
              Available for work
            </label>
            <select
              {...register("availability")}
              className={`w-full border p-2 ${errors.availability ? "border-red-500" : "border-gray-300"} rounded`}
            >
              <option value="">Select your availability</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-gray-700 mb-1 block">
              LinkedIn Profile URL
            </label>
            <input
              type="text"
              {...register("linkedIn")}
              className={`w-full border p-2 ${errors.linkedIn ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {errors.linkedIn && (
              <p className="text-sm text-error-400">
                {errors.linkedIn.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-gray-700 mb-1 block">
              Portfolio Profile URL
            </label>
            <input
              type="text"
              {...register("portfolio")}
              className={`w-full border p-2 ${errors.portfolio ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {errors.portfolio && (
              <p className="text-sm text-error-400">
                {errors.portfolio.message}
              </p>
            )}
          </div>
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
  );
};

export default EditProfile;
