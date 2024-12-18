import React, { useState,useMemo } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { XMarkIcon,EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import toast from "react-hot-toast";
import { API } from "../../../config";
import { ToastMessage } from "../../../ui/ToastNotification";



const PasswordResetSuccessModal = () => {
    const navigate = useNavigate();
    const { setModalComponent } = useModalContext(); 

    return (
        <div className="relative mx-4 flex w-full max-w-[750px] flex-col items-center rounded-2xl bg-white px-5 py-10 text-center lg:px-44">
            <img
                src="/joblist-checked.png"
                alt=""
                className="mb-20 w-full max-w-64"
            />
            <h3 className="mb-4 font-inter text-lg font-semibold text-black lg:text-2xl">
                Password Reset Successful!
            </h3>
            <p className="mb-8 w-full max-w-[40ch] text-center font-inter text-base font-normal">
                Congratulations, your password has been successfully reset! You can now log in.
            </p>
            <button
                type="button"
                onClick={() => {
                    setModalComponent(null);
                    navigate("/freelancer/login");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Log In
            </button>
            <button
                type="button"
                className="absolute right-5 top-5"
                onClick={() => {
                    setModalComponent(null);
                    navigate("/freelancer/login");
                }}
            >
                <XMarkIcon className="size-6" />
            </button>
        </div>
    );
};

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // Parse URL parameters
    // const queryParams = new URLSearchParams(location.search);
    // const userId = queryParams.get('userId');
    // const token = queryParams.get('token');
    const params = useMemo(() => {
        const userId = searchParams.get("userId");
        const token = searchParams.get("token");
        
        // Additional validation
        if (!userId || !token) {
            console.error("Missing userId or token in URL");
        }
    
        return {
            userId,
            token,
            newPassword: password
        };
    }, [searchParams, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Password complexity check
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must be 8-12 characters with uppercase, lowercase, numbers, and symbols');
            return;
        }
        console.log("Token Details:", {
            userId: searchParams.get("userId"),
            token: searchParams.get("token"),
            tokenLength: params.token?.length
        });

        try {
            setIsLoading(true);
            const response = await axios.post(`${API}/api/Alte/reset-password`, {
                userId: searchParams.get("userId"),
                token: searchParams.get("token"),
                newPassword: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            console.log("Full response:", response);
            console.log("Response data:", response.data);
            // Show success modal or redirect
            setModalComponent(<PasswordResetSuccessModal />);
        } catch (err) {
            // Handle error
            console.error("Full error:", err);
        
        // More detailed error logging
        if (err.response) {
            
            console.error("Error response data:", err.response.data);
            console.error("Error status:", err.response.status);
            
           
            toast.error(
                <ToastMessage
                  title="Reset Failed"
                  message={err.response.data.message || "Failed to reset password. Please try again."}
                />,
            );
        } else if (err.request) {
            
            console.error("No response received:", err.request);
            toast.error(
                <ToastMessage
                  title="Network Error"
                  message="No response from server. Please check your internet connection."
                />,
            );
        } else {
           
            console.error("Error setting up request:", err.message);
            toast.error(
                <ToastMessage
                  title="Error"
                  message="An unexpected error occurred. Please try again."
                />,
            );
        }
    } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100 px-6 py-6">
            <div className="flex-1 hidden lg:block">
                <img
                    src="/images/freelancer/reset_password.png"
                    alt="Freelancer working"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-28 h-28 bg-blue-100 rounded-full mb-2">
                            <img
                                src="/images/freelancer/Group.png"
                                alt="Logo"
                                className="w-full h-full mb-10"
                            />
                        </div>
                        <h2 className="text-3xl font-raleway font-bold mb-2">Email Verified</h2>
                        <p className="text-gray-700 font-raleway text-xl font-medium">
                            Congratulations, your email has been <br />verified! You can now reset your password.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {error && (
                            <div className="mb-4 text-error-500 text-sm text-center">
                                {error}
                            </div>
                        )}
                        <div className="mb-4 relative">
                    <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
                        Password*
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center px-3"
                        >
                            {showPassword ? (
                                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                            ) : (
                                <EyeIcon className="h-5 w-5 text-gray-500" />
                            )}
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 font-raleway">
                        Must be 8-12 Characters (Upper case, lower case, Numbers and symbols)
                    </p>
                </div>
                <div className="mb-12 relative">
                    <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-700 mb-2">
                        Confirm Password*
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 flex items-center px-3"
                        >
                            {showConfirmPassword ? (
                                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                            ) : (
                                <EyeIcon className="h-5 w-5 text-gray-500" />
                            )}
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 font-raleway">
                        Must be the same
                    </p>
                </div>
                        <div className="mb-6 bg-sec-500 rounded-lg w-full h-full flex justify-center p-3">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-full text-center flex justify-center items-center"
                            >
                                {isLoading ? 'Resetting...' : 'Confirm'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;