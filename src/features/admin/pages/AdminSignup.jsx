import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const AdminSignup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    
      const [errors, setErrors] = useState({});
      const [alertVisible, setAlertVisible] = useState(false);
      const navigate = useNavigate();
      const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

    const validateForm = () => {
        let formErrors = {};
    
        if (!values.name) {
          formErrors.name = "Full name is required";
        }
    
        if (!values.email) {
          formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          formErrors.email = "Email address is invalid";
        }
    
        if (!values.password) {
          formErrors.password = "Password is required";
        } else if (values.password.length < 8) {
          formErrors.password =
            "Must be 8-12 characters (Upper case, Lower case, Numbers, and symbols)";
        }
    
        if (!values.confirm_password) {
          formErrors.confirm_password = "Enter Password Again";
        } else if (values.password !== values.confirm_password) {
          formErrors.confirm_password = "Passwords must match";
        }
    
        return formErrors;
      };
      const handleValidation = async (event) => {
        event.preventDefault();
    
        const validationErrors = validateForm();
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length > 0) {
          setAlertVisible(true);
        } else {
          setAlertVisible(false);
          await submitForm();
        }
      };

  return (
    <main>
      <section className="bg-[#FFFFFF] py-10">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/images/freelancer/freelancer-signup.png"
                  alt="freelancer signup"
                  className="hidden h-auto w-full max-w-[641px] shadow-md sm:block"
                />
              </div>
            </div>
            <div className="items-center bg-white lg:justify-start">
              {/* Alert for errors */}
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
              <div className="mb-6 flex text-left">
                <img
                  src="/images/freelancer/alte-logo.png"
                  alt="Logo"
                  className="h-16"
                />
              </div>
              <h2 className="mb-2 text-left font-raleway text-3xl font-bold text-grey-900">
                Sign up as an Admin
              </h2>
              <p className="mb-8 text-left font-raleway text-grey-500">
                Register to get started on Alte Platform
              </p>

              <form className="space-y-6" onSubmit={handleValidation}>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block font-raleway text-sm font-medium text-grey-700"
                  >
                    Full name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none ${
                      errors.fullName ? "border-[#DC6662]" : "border-gray-300"
                    }`}
                    placeholder="Enter your Full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-raleway text-sm font-medium text-grey-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none ${
                      errors.email ? "border-[#DC6662]" : "border-gray-300"
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block font-raleway text-sm font-medium text-grey-700"
                  >
                    Password*
                  </label>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 pr-10 shadow-sm focus:outline-none ${
                      errors.password ? "border-[#DC6662]" : "border-gray-300"
                    }`}
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-600 absolute inset-y-0 right-3 mt-4 flex items-center"
                  >
                    {showPassword ? (
                      <EyeIcon className="size-6" />
                    ) : (
                      <EyeSlashIcon className="size-6" />
                    )}
                  </button>

                  {/* Error Message */}
                  {errors.password && (
                    <p className="text-sm text-[#DC6662]">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <label
                    htmlFor="confirm_password"
                    className="block font-raleway text-sm font-medium text-grey-700"
                  >
                    Confirm Password*
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none ${
                      errors.confirm_password
                        ? "border-[#DC6662]"
                        : "border-gray-300"
                    }`}
                    placeholder="Confirm your password"
                  />
                  {/* Eye Icon Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-600 absolute inset-y-0 right-3 mt-4 flex items-center"
                  >
                    {showPassword ? (
                      <EyeIcon className="size-6" />
                    ) : (
                      <EyeSlashIcon className="size-6" />
                    )}
                  </button>
                  {errors.confirm_password && (
                    <p className="text-sm text-[#DC6662]">
                      {errors.confirm_password}
                    </p>
                  )}
                </div>

                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 font-raleway text-grey-700">
                      I agree to Alte{" "}
                      <Link
                        to="/policies/privacy-policy"
                        className="text-sec-500"
                      >
                        Terms of service and Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn btn-pry w-full">
                  Create Account
                </button>
              </form>

              <p className="text-gray-500 mt-4 text-center text-sm">
                Already have an account?{" "}
                <a
                  href="/admin/login"
                  className="font-medium text-sec-500 hover:underline"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AdminSignup