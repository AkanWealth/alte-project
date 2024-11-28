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
      return {
        ...state,
        isLoggedIn: true,
      };
    case "logout/user":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export const FreelancerRouteProvider = ({ children }) => {
  const [{ isLoggedIn }, dispatch] = useReducer(reducer, initialData);
  const [cookies, setCookie, removeCookie] = useCookies(["freelancerSession"]);

  useEffect(() => {
    if (cookies.freelancerSession) {
      dispatch({ type: "login/user" });
    }
  }, [cookies]);

  const login = async (userData) => {
    try {
      const { status } = await axios.post(`${API}/login`, userData);

      if (status === 200) {
        // Todo: Get token form BE
        setCookie("freelancerSession", "token", cookiesOption);
        dispatch({ type: "login/user" });
        return true;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = () => {
    removeCookie("freelancerSession", { path: "/" });
    dispatch({ type: "logout/user" });
  };

  const signup = async (userData) => {
    try {
      const { status } = await axios.post(`${API}/register`, userData);

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

  return (
    <FreelancerAuthContext.Provider
      value={{ isLoggedIn, login, logout, signup }}
    >
      {children}
    </FreelancerAuthContext.Provider>
  );
};

const useFreelancerAuth = () => useContext(FreelancerAuthContext);

export default useFreelancerAuth;
