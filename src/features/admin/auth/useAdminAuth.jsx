import { createContext, useContext, useReducer } from "react";
const AdminAuthContext = createContext();

const initialData = {
  isLoggedIn: false,
  isRegistered: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login/admin":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "logout/admin":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "register/admin":
      return {
        ...state,
        isRegistered: true,
      };
  }
};

export const AdminRouteProvider = ({ children }) => {
  const [{ isLoggedIn, isRegistered }, dispatch] = useReducer(
    reducer,
    initialData,
  );

  const login = async (userData) => {
    const { username, password } = userData;

    //   FOR DEMO ONLY
    const adminLogin =
      username === "alte_admin@test.com" && password === "1234@AdminAlte";

    if (adminLogin) dispatch({ type: "login/admin" });

    return adminLogin;
  };

  const logout = () => {
    dispatch({ type: "logout/admin" });
  };

  const register = (userData) => {
    dispatch({ type: "register/admin" });
  };
  return (
    
    <AdminAuthContext.Provider
      value={{ isLoggedIn, isRegistered, login, logout, register }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

const useAdminAuth = () => useContext(AdminAuthContext);

export default useAdminAuth;
