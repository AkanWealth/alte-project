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

const AdminAuthContext = createContext();

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

export const AdminRouteProvider = ({ children }) => {
  const [{ isLoggedIn }, dispatch] = useReducer(reducer, initialData);
  const [cookies, setCookie, removeCookie] = useCookies(["AdminSession"]);

  useEffect(() => {
    if (cookies.AdminSession) {
      dispatch({ type: "login/user" });
    }
  }, [cookies]);

  const login = async (userData) => {
    try {
      const { status } = await axios.post(`${API}/api/Alte/Admin/login`, userData);

      if (status === 200) {
        // Todo: Get token form BE
        setCookie("AdminSession", "token", cookiesOption);
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
    removeCookie("AdminSession", { path: "/" });
    dispatch({ type: "logout/user" });
  };

  return (
    <AdminAuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

const useAdminAuth = () => useContext(AdminAuthContext);

export default useAdminAuth;
