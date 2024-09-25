import { createContext, useContext, useEffect, useReducer } from "react";
import { useCookies } from "react-cookie";

const CookiesContext = createContext();

export const useCookiesContext = () => useContext(CookiesContext);

const initialUserCookies = {
  initiated: false,
  preferences: {
    essential: true,
    performance: false,
    functionality: false,
    advertising: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "initiate_cookies":
      return {
        ...state,
        initiated: true,
      };
    case "set_essential":
      return {
        ...state,
        preferences: { ...state.preferences, essential: action.payload },
      };
    case "set_performance":
      return {
        ...state,
        preferences: { ...state.preferences, performance: action.payload },
      };
    case "set_functionality":
      return {
        ...state,
        preferences: { ...state.preferences, functionality: action.payload },
      };
    case "set_advertising":
      return {
        ...state,
        preferences: { ...state.preferences, advertising: action.payload },
      };
    case "accept_all":
      return {
        ...state,
        preferences: {
          essential: true,
          performance: true,
          functionality: true,
          advertising: true,
        },
      };
    case "reject_non_essential":
      return {
        ...state,
        preferences: {
          essential: true,
          performance: false,
          functionality: false,
          advertising: false,
        },
      };
    case "reject_all":
      return {
        ...state,
        preferences: {
          essential: false,
          performance: false,
          functionality: false,
          advertising: false,
        },
      };
  }
};

export const CookiesProvider = ({ children }) => {
  const [cookies, setCookies] = useCookies(["userCookies"]);
  const [userCookies, dispatch] = useReducer(
    reducer,
    cookies.userCookies || initialUserCookies,
  );

  useEffect(() => {
    if (!userCookies.initiated) return;
    setCookies("userCookies", JSON.stringify(userCookies));
  }, [userCookies, setCookies]);

  return (
    <CookiesContext.Provider
      value={{
        cookiesInitiated: userCookies.initiated,
        cookiesPreferences: userCookies.preferences,
        dispatch,
      }}
    >
      {children}
    </CookiesContext.Provider>
  );
};

export default CookiesContext;
