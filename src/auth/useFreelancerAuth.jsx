import { createContext, useContext, useReducer } from "react";

const FreelancerAuthContext = createContext();

const initialData = {
  isLoggedIn: false,
  isRegistered: false,
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
    case "register/user":
      return {
        ...state,
        isRegistered: true,
      };
  }
};

export const FreelancerRouteProvider = ({ children }) => {
  const [{ isLoggedIn, isRegistered }, dispatch] = useReducer(
    reducer,
    initialData,
  );

  const login = async (userData) => {
    const { username, password } = userData;

    //   FOR DEMO ONLY
    const valid = username === "user@test.com" && password === "1234";

    if (valid) dispatch({ type: "login/user" });

    return valid;
  };

  const logout = () => {
    dispatch({ type: "logout/user" });
  };

  const register = (userData) => {
    dispatch({ type: "register/user" });
  };

  return (
    <FreelancerAuthContext.Provider
      value={{ isLoggedIn, isRegistered, login, logout, register }}
    >
      {children}
    </FreelancerAuthContext.Provider>
  );
};

const useFreelancerAuth = () => useContext(FreelancerAuthContext);

export default useFreelancerAuth;
