import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Contexts
import { useCookiesContext } from "../contexts/CookiesContext";

const Cookies = ({ relativeStyles }) => {
  const [toShow, setToShow] = useState("cookies");
  const { cookiesInitiated, cookiesPreferences, dispatch } =
    useCookiesContext();
  const { pathname } = useLocation();

  if (cookiesInitiated || pathname === "/policies/cookies-policy") return null;

  return (
    <div
      className={`${relativeStyles} z-10 max-h-[calc(100vh-105px)] w-[calc(100%-16px-10px)] max-w-[655px] overflow-y-auto rounded-md bg-white px-10 py-8 font-inter shadow-[5px_15px_20px_0px_rgba(0,0,0,0.25)] lg:max-h-[calc(100vh-104px-10px)]`}
    >
      {toShow === "cookies" && (
        <div className="flex flex-col items-start gap-5">
          <h3 className="text-3xl font-semibold text-pry-500">
            <img
              src="/images/cookies.png"
              alt=""
              className="mr-4 inline size-10"
            />
            Cookies
          </h3>
          <p className="text-sm font-normal text-grey-400">
            We at Alte use cookies to collect information about you for
            functional purposes, statistical marketing and to manage your user
            experience.
          </p>
          <p className="text-sm font-normal text-grey-400">
            You can choose which types of cookies you allow by selecting
            preferences below
          </p>
          <div className="flex w-full flex-wrap justify-between gap-3">
            <button
              className="btn btn-sec--outline"
              onClick={() => {
                dispatch({ type: "reject_all" });
                dispatch({ type: "initiate_cookies" });
              }}
            >
              Decline Non-Essential Cookies
            </button>
            <button
              className="btn btn-pry"
              onClick={() => {
                dispatch({ type: "accept_all" });
                dispatch({ type: "initiate_cookies" });
              }}
            >
              Accept All Cookies
            </button>
          </div>
          <button
            onClick={() => setToShow("preferences")}
            className="text-btn text-btn--underline text-btn-pry self-end"
          >
            Cookie Preferences
          </button>
        </div>
      )}
      {toShow === "preferences" && (
        <div className="flex flex-col items-start gap-5">
          <h3 className="text-3xl font-semibold">
            Customize your cookie Preferences
          </h3>
          <p className="text-sm font-normal text-grey-400">
            This website uses cookies.
            <span className="block">
              We use cookies to enhance your experience and understand how our
              site is used.
            </span>
          </p>
          <ul className="list-disc pl-4 text-sm font-normal text-grey-400">
            <li>By clicking Accept all you agree to use all cookies.</li>
            <li>
              By clicking confirm my choices, you agree only to the categories
              you have selected
            </li>
          </ul>
          <p className="text-sm font-normal text-grey-400">
            You can find further information in our
            <Link to="/policies/cookies-policy" className="ml-1 text-sec-500">
              Cookies Policy
            </Link>
          </p>
          <div className="flex flex-wrap gap-6">
            <label
              htmlFor="essential"
              className="flex flex-row items-center gap-2 text-base font-normal"
            >
              <input
                type="checkbox"
                name=""
                id="essential"
                checked={cookiesPreferences.essential}
                onChange={() =>
                  dispatch({
                    type: "set_essential",
                    payload: !cookiesPreferences.essential,
                  })
                }
                className="relative size-6 appearance-none overflow-hidden rounded-md border border-[hsla(210,10%,58%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-pry-500 checked:bg-pry-500 checked:after:inline"
              />
              Essential Cookies
            </label>
            <label
              htmlFor="performance"
              className="flex flex-row items-center gap-2 text-base font-normal"
            >
              <input
                type="checkbox"
                name=""
                id="performance"
                checked={cookiesPreferences.performance}
                onChange={() =>
                  dispatch({
                    type: "set_performance",
                    payload: !cookiesPreferences.performance,
                  })
                }
                className="relative size-6 appearance-none overflow-hidden rounded-md border border-[hsla(210,10%,58%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-pry-500 checked:bg-pry-500 checked:after:inline"
              />
              Performance Cookies
            </label>
            <label
              htmlFor="functionality"
              className="flex flex-row items-center gap-2 text-base font-normal"
            >
              <input
                type="checkbox"
                name=""
                id="functionality"
                checked={cookiesPreferences.functionality}
                onChange={() =>
                  dispatch({
                    type: "set_functionality",
                    payload: !cookiesPreferences.functionality,
                  })
                }
                className="relative size-6 appearance-none overflow-hidden rounded-md border border-[hsla(210,10%,58%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-pry-500 checked:bg-pry-500 checked:after:inline"
              />
              Functionality Cookies
            </label>
            <label
              htmlFor="advertising"
              className="flex flex-row items-center gap-2 text-base font-normal"
            >
              <input
                type="checkbox"
                name=""
                id="advertising"
                checked={cookiesPreferences.advertising}
                onChange={() =>
                  dispatch({
                    type: "set_advertising",
                    payload: !cookiesPreferences.advertising,
                  })
                }
                className="relative size-6 appearance-none overflow-hidden rounded-md border border-[hsla(210,10%,58%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-pry-500 checked:bg-pry-500 checked:after:inline"
              />
              Targeting/Advertising Cookies
            </label>
          </div>
          <div className="flex w-full flex-wrap justify-between gap-3">
            <button
              className="text-btn text-btn-pry"
              onClick={() => {
                dispatch({ type: "reject_all" });
                dispatch({ type: "initiate_cookies" });
              }}
            >
              Reject all
            </button>
            <button
              className="btn btn-sec--outline"
              onClick={() => {
                dispatch({ type: "accept_all" });
                dispatch({ type: "initiate_cookies" });
              }}
            >
              Accept All
            </button>
            <button
              className="btn btn-pry"
              onClick={() => dispatch({ type: "initiate_cookies" })}
            >
              Confirm my Choices
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookies;
