import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useCookies } from "react-cookie";

// Configs
import { API } from "../../../config";


// Variables
const cookiesOption = {
  path: "/",
  maxAge: 7 * 24 * 60 * 60,
  secure: true,
  sameSite: "strict",
};

const FreelancerAuthContext = createContext();

const initialData = {
  isLoggedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login/user":
      console.log("Login action payload:", action.payload);
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "logout/user":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
      case "update/availability":  // Add this new case
      return {
        ...state,
        user: {
          ...state.user,
          isAvailable: action.payload
        }
      };
    default:
      return state;
  }
};

export const FreelancerRouteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const [cookies, setCookie, removeCookie] = useCookies(["freelancerSession"]);

  useEffect(() => {
    console.log("Current state in provider:", state);
  }, [state]);

  useEffect(() => {
    if (cookies.freelancerSession) {
      // Try to retrieve user data from localStorage or make an API call
      const storedUser = localStorage.getItem('userData');
      if (storedUser) {
        dispatch({ 
          type: "login/user", 
          payload: JSON.parse(storedUser) 
        });
      }
    }
  }, [cookies]);
  const login = async (userData) => {
    try {
      // const { status } = await axios.post(`${API}/api/Alte/login`, userData);

      const response = await axios.post(`${API}/api/Alte/login`, userData,{
        withCredentials: true,
      });
      
      if (response.status === 200) {
        const { users } = response.data; 
        console.log(response.data);
        // Todo: Get token form BE
        localStorage.setItem('userData', JSON.stringify(users));
        setCookie("freelancerSession", "token", cookiesOption);
        dispatch({ type: "login/user", payload: users  });
        return response.data;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error status
        throw new Error( 
          "Incorrect email or password"
        );
      } else if (error.request) {
        // Request was made but no response received
        throw new Error("No response from server. Please check your connection.");
      } else {
        // Something else went wrong
        throw new Error("Login failed. Please try again.");
      }
    }
    
  };

  const logout = () => {
    removeCookie("freelancerSession", { path: "/" });
    dispatch({ type: "logout/user" });
  };

  const signup = async (userData) => {
    try {
      const { status } = await axios.post(`${API}/api/Alte/register`, userData);

      if (status === 200) {
        setCookie("userEmail", userData.email, {
          ...cookiesOption,
          maxAge: 24 * 60 * 60,
        });
        return true;
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  const updateUserAvailability = async (isAvailable) => {
    try {
      const userId = state.user?.id;
      
      if (!userId) {
        console.error("No user ID found");
        return false;
      }

      const response = await axios.put(
        `${API}/api/Alte/availability/${userId}`, 
        { isAvailable },
        { withCredentials: true }
      );

      if (response.status === 200) {
        // Update local storage
        const updatedUser = {
          ...state.user,
          isAvailable
        };
        localStorage.setItem('userData', JSON.stringify(updatedUser));

        // Dispatch action to update state
        dispatch({
          type: "update/availability",
          payload: isAvailable
        });

        return true;
      }

      return false;
    } catch (error) {
      console.error("Error updating availability:", error);
      return false;
    }
  };

  const fetchUserProfile = () => {
    return state.user; // Returns the current user object
  };

  return (
    <FreelancerAuthContext.Provider
      value={{ 
        isLoggedIn: state.isLoggedIn, 
        user: state.user,  
        login, 
        logout, 
        signup,
        updateUserAvailability,
        fetchUserProfile}}
    >
      {children}
    </FreelancerAuthContext.Provider>
  );
};

const useFreelancerAuth = () => {
  const context = useContext(FreelancerAuthContext);
  console.log("Complete context:", context);
  return context;
};

export default useFreelancerAuth;
