import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useCookies } from "react-cookie";

const CookiesContext = createContext();

export const useCookiesContext = () => useContext(CookiesContext);

const initialPreference = {
  necessary: true,
  preferences: false,
  statistics: false,
  marketing: false,
  unclassified: false,
  functional: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_necessary":
      return { ...state, necessary: action.payload };
    case "set_preferences":
      return { ...state, preferences: action.payload };
    case "set_statistics":
      return { ...state, statistics: action.payload };
    case "set_marketing":
      return { ...state, marketing: action.payload };
    case "set_unclassified":
      return { ...state, unclassified: action.payload };
    case "set_functional":
      return { ...state, functional: action.payload };
    case "accept_all":
      return {
        necessary: true,
        preferences: true,
        statistics: true,
        marketing: true,
        unclassified: true,
        functional: true,
      };
    case "reject_all":
      return {
        necessary: false,
        preferences: false,
        statistics: false,
        marketing: false,
        unclassified: false,
        functional: false,
      };
  }
};

export const CookiesProvider = ({ children }) => {
  const [toShow, setToShow] = useState("cookies");
  const [displayCookies, setDisplayCookies] = useState(true);
  const [userCookies, setCookies] = useCookies(["cookiesPreference"]);
  const [cookiesPreference, dispatch] = useReducer(
    reducer,
    userCookies.cookiesPreference || initialPreference,
  );

  useEffect(() => {
    setCookies("cookiesPreference", JSON.stringify(cookiesPreference));
  }, [cookiesPreference, setCookies]);

  return (
    <CookiesContext.Provider
      value={{
        displayCookies,
        setDisplayCookies,
        toShow,
        setToShow,
        cookiesPreference,
        dispatch,
      }}
    >
      {children}
    </CookiesContext.Provider>
  );
};

export default CookiesContext;
