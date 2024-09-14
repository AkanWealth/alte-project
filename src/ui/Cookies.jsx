import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton, TextButton } from "../components/Button";
import { useCookiesContext } from "../contexts/CookiesContext";
import { useState } from "react";

const Cookies = ({ relativeStyles }) => {
  const {
    displayCookies,
    setDisplayCookies,
    toShow,
    setToShow,
    cookiesPreference,
    dispatch,
  } = useCookiesContext();

  const handleSetCookies = () => {
    setDisplayCookies(false);
  };

  if (!displayCookies) return null;

  return (
    <div
      className={`${relativeStyles} z-10 max-h-[calc(100vh-95px)] w-[calc(100%-16px-10px)] max-w-[640px] overflow-y-auto rounded-md bg-white px-10 py-8 shadow-[5px_15px_20px_0px_rgba(0,0,0,0.25)] lg:max-h-[calc(100vh-104px-10px)]`}
    >
      {toShow === "cookies" && (
        <div className="flex flex-col items-start gap-5">
          <h3 className="font-raleway text-3xl font-bold">
            <img src="/images/cookies.png" alt="" className="mr-2 inline" />{" "}
            Cookies
          </h3>
          <p className="font-raleway text-sm font-normal">
            We at Alte use cookies to collect information about you for
            functional purposes, statistical marketing and to manage your user
            experience. You may not give us your consent for certain purposes by
            selecting an option and you can withdraw your consent at any time
            via the cookie icon.
          </p>
          <div className="flex flex-wrap gap-3">
            <IconButton
              variant="sec"
              className="text-sec-500"
              rightIcon={faArrowRight}
              clickHandler={() => {
                dispatch({ type: "reject_all" });
                handleSetCookies();
              }}
            >
              Reject All Cookies
            </IconButton>
            <IconButton
              rightIcon={faArrowRight}
              clickHandler={() => {
                dispatch({ type: "accept_all" });
                handleSetCookies();
              }}
            >
              Accept all cookies
            </IconButton>
          </div>
          <TextButton
            clickHandler={() => setToShow("preferences")}
            className="self-end text-right font-raleway text-sm font-normal underline"
          >
            Cookie Preferences
          </TextButton>
        </div>
      )}
      {toShow === "preferences" && (
        <div className="flex flex-col items-start gap-5">
          <h3 className="font-raleway text-3xl font-bold">
            Customize your cookie Preferences
          </h3>
          <div className="font-raleway text-sm font-normal underline">
            <p className="mb-4 block">This website uses cookies.</p>
            We use cookies to offer useful features and measure performance to
            imrpove your experience.
            <ul className="my-4 list-disc pl-4">
              <li>By clicking Accept all you agree to use all cookies.</li>
              <li>
                By clicking confirm my choices, you agree only to the categories
                you have selected
              </li>
            </ul>
            <p className="block">
              You can find further information in our Privacy Policy
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <label
              htmlFor="necessary"
              className="flex flex-row items-center gap-2 font-raleway text-sm font-semibold"
            >
              <input
                type="checkbox"
                name=""
                id="necessary"
                checked={cookiesPreference.necessary}
                onChange={() =>
                  dispatch({
                    type: "set_necessary",
                    payload: !cookiesPreference.necessary,
                  })
                }
                className="relative size-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-[hsla(0,0%,85%,1)] checked:bg-[hsla(0,0%,85%,1)] checked:after:inline"
              />
              Necessary
            </label>
            <label
              htmlFor="preferences"
              className="flex flex-row items-center gap-2 font-raleway text-sm font-semibold"
            >
              <input
                type="checkbox"
                name=""
                id="preferences"
                checked={cookiesPreference.preferences}
                onChange={() =>
                  dispatch({
                    type: "set_preferences",
                    payload: !cookiesPreference.preferences,
                  })
                }
                className="relative size-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-[hsla(0,0%,85%,1)] checked:bg-[hsla(0,0%,85%,1)] checked:after:inline"
              />
              Preferences
            </label>
            <label
              htmlFor="statistics"
              className="flex flex-row items-center gap-2 font-raleway text-sm font-semibold"
            >
              <input
                type="checkbox"
                name=""
                id="statistics"
                checked={cookiesPreference.statistics}
                onChange={() =>
                  dispatch({
                    type: "set_statistics",
                    payload: !cookiesPreference.statistics,
                  })
                }
                className="relative size-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-[hsla(0,0%,85%,1)] checked:bg-[hsla(0,0%,85%,1)] checked:after:inline"
              />
              Statistics
            </label>
            <label
              htmlFor="marketing"
              className="flex flex-row items-center gap-2 font-raleway text-sm font-semibold"
            >
              <input
                type="checkbox"
                name=""
                id="marketing"
                checked={cookiesPreference.marketing}
                onChange={() =>
                  dispatch({
                    type: "set_marketing",
                    payload: !cookiesPreference.marketing,
                  })
                }
                className="relative size-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-[hsla(0,0%,85%,1)] checked:bg-[hsla(0,0%,85%,1)] checked:after:inline"
              />
              Marketing
            </label>
            <label
              htmlFor="unclassified"
              className="flex flex-row items-center gap-2 font-raleway text-sm font-semibold"
            >
              <input
                type="checkbox"
                name=""
                id="unclassified"
                checked={cookiesPreference.unclassified}
                onChange={() =>
                  dispatch({
                    type: "set_unclassified",
                    payload: !cookiesPreference.unclassified,
                  })
                }
                className="relative size-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-[hsla(0,0%,85%,1)] checked:bg-[hsla(0,0%,85%,1)] checked:after:inline"
              />
              Unclassified
            </label>
            <label
              htmlFor="functional"
              className="flex flex-row items-center gap-2 font-raleway text-sm font-semibold"
            >
              <input
                type="checkbox"
                name=""
                id="functional"
                checked={cookiesPreference.functional}
                onChange={() =>
                  dispatch({
                    type: "set_functional",
                    payload: !cookiesPreference.functional,
                  })
                }
                className="relative size-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-[hsla(0,0%,85%,1)] checked:bg-[hsla(0,0%,85%,1)] checked:after:inline"
              />
              Functional
            </label>
          </div>
          <div className="flex flex-wrap gap-3">
            <IconButton
              rightIcon={faArrowRight}
              clickHandler={() => handleSetCookies()}
            >
              Confirm my Choices
            </IconButton>
            <IconButton
              variant="sec"
              className="text-sec-500"
              rightIcon={faArrowRight}
              clickHandler={() => {
                dispatch({ type: "accept_all" });
                handleSetCookies();
              }}
            >
              Accept All
            </IconButton>
          </div>
          <TextButton
            clickHandler={() => setToShow("info")}
            className="text-right font-raleway text-sm font-normal underline"
          >
            More info
          </TextButton>
        </div>
      )}
      {toShow === "info" && (
        <div className="flex flex-col items-start gap-5">
          <h3 className="flex w-full items-center justify-between font-raleway text-3xl font-bold">
            Manage Cookies
            <img src="/images/cookies.png" alt="" className="ml-2 inline" />
          </h3>
          <div className="font-raleway text-sm font-normal">
            Cookies are small text that can be used by websites to make the user
            experience more efficient. The law states that we may store cookies
            on your device if they are strictly necessaryfor the operation of
            this site. For all other types of cookies, we need your permission.
            This site uses various types of cookies. Some cookies are placed by
            third party services that appear on our pages.
            <div className="mt-4">
              Your permission applies to the following domains:
              <ul className="list-disc pl-4">
                <li>cookieinfo.net</li>
                <li>intranet.cookieinfo.net</li>
              </ul>
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="rounded-lg border-2 border-[hsla(235,14%,50%,1)] px-5 py-3">
              <label
                htmlFor="necessary"
                className="flex flex-col gap-2 font-raleway"
              >
                <div className="flex flex-row justify-between gap-2">
                  <span className="text-sm font-semibold">Necessary</span>
                  <input
                    type="checkbox"
                    name=""
                    id="necessary"
                    checked={cookiesPreference.necessary}
                    onChange={() =>
                      dispatch({
                        type: "set_necessary",
                        payload: !cookiesPreference.necessary,
                      })
                    }
                    className="relative size-5 appearance-none overflow-hidden rounded-md border-2 border-[hsla(235,14%,50%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check-black.svg')] after:bg-[50%] after:bg-no-repeat checked:after:inline"
                  />
                </div>
                <p className="text-sm font-normal">
                  Necessary cookies help make a website usable by enabing basic
                  functions like page navigation and access to secure of the
                  website. The website cannot function properly without these
                  cookies.
                </p>
              </label>
            </li>
            <li className="rounded-lg border-2 border-[hsla(235,14%,50%,1)] px-5 py-3">
              <label
                htmlFor="preferences"
                className="flex flex-col gap-2 font-raleway"
              >
                <div className="flex flex-row justify-between gap-2">
                  <span className="text-sm font-semibold">Preferences</span>
                  <input
                    type="checkbox"
                    name=""
                    id="preferences"
                    checked={cookiesPreference.preferences}
                    onChange={() =>
                      dispatch({
                        type: "set_preferences",
                        payload: !cookiesPreference.preferences,
                      })
                    }
                    className="relative size-5 appearance-none overflow-hidden rounded-md border-2 border-[hsla(235,14%,50%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check-black.svg')] after:bg-[50%] after:bg-no-repeat checked:after:inline"
                  />
                </div>
                <p className="text-sm font-normal">
                  Preferences cookies enable a website to remember information
                  that changes the way the website behaves or looks, like your
                  referred langueage or region that you are in.
                </p>
              </label>
            </li>
            <li className="rounded-lg border-2 border-[hsla(235,14%,50%,1)] px-5 py-3">
              <label
                htmlFor="statistics"
                className="flex flex-col gap-2 font-raleway"
              >
                <div className="flex flex-row justify-between gap-2">
                  <span className="text-sm font-semibold">Statistics</span>
                  <input
                    type="checkbox"
                    name=""
                    id="statistics"
                    checked={cookiesPreference.statistics}
                    onChange={() =>
                      dispatch({
                        type: "set_statistics",
                        payload: !cookiesPreference.statistics,
                      })
                    }
                    className="relative size-5 appearance-none overflow-hidden rounded-md border-2 border-[hsla(235,14%,50%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check-black.svg')] after:bg-[50%] after:bg-no-repeat checked:after:inline"
                  />
                </div>
                <p className="text-sm font-normal">
                  Statistics cookies help website owners to understand how
                  visitors interact wtih websites by collecting and reporting
                  information anonymously.
                </p>
              </label>
            </li>
            <li className="rounded-lg border-2 border-[hsla(235,14%,50%,1)] px-5 py-3">
              <label
                htmlFor="marketing"
                className="flex flex-col gap-2 font-raleway"
              >
                <div className="flex flex-row justify-between gap-2">
                  <span className="text-sm font-semibold">Marketing</span>
                  <input
                    type="checkbox"
                    name=""
                    id="marketing"
                    checked={cookiesPreference.marketing}
                    onChange={() =>
                      dispatch({
                        type: "set_marketing",
                        payload: !cookiesPreference.marketing,
                      })
                    }
                    className="relative size-5 appearance-none overflow-hidden rounded-md border-2 border-[hsla(235,14%,50%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check-black.svg')] after:bg-[50%] after:bg-no-repeat checked:after:inline"
                  />
                </div>
                <p className="text-sm font-normal">
                  Marketing cookies are used to track visitors across websites.
                  The interntion is to display ads that are relevant and
                  engaging for the individual user and thereby more valueable
                  for publishers and third party advertisers.
                </p>
              </label>
            </li>
            <li className="rounded-lg border-2 border-[hsla(235,14%,50%,1)] px-5 py-3">
              <label
                htmlFor="unclassified"
                className="flex flex-col gap-2 font-raleway"
              >
                <div className="flex flex-row justify-between gap-2">
                  <span className="text-sm font-semibold">Unclassified</span>
                  <input
                    type="checkbox"
                    name=""
                    id="unclassified"
                    checked={cookiesPreference.unclassified}
                    onChange={() =>
                      dispatch({
                        type: "set_unclassified",
                        payload: !cookiesPreference.unclassified,
                      })
                    }
                    className="relative size-5 appearance-none overflow-hidden rounded-md border-2 border-[hsla(235,14%,50%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check-black.svg')] after:bg-[50%] after:bg-no-repeat checked:after:inline"
                  />
                </div>
                <p className="text-sm font-normal">
                  Unclassified cookies are cookies that we are in the process of
                  classifying, together with the providers of individual
                  cookies.
                </p>
              </label>
            </li>
            <li className="rounded-lg border-2 border-[hsla(235,14%,50%,1)] px-5 py-3">
              <label
                htmlFor="functional"
                className="flex flex-col gap-2 font-raleway"
              >
                <div className="flex flex-row justify-between gap-2">
                  <span className="text-sm font-semibold">Functional</span>
                  <input
                    type="checkbox"
                    name=""
                    id="functional"
                    checked={cookiesPreference.functional}
                    onChange={() =>
                      dispatch({
                        type: "set_functional",
                        payload: !cookiesPreference.functional,
                      })
                    }
                    className="relative size-5 appearance-none overflow-hidden rounded-md border-2 border-[hsla(235,14%,50%,1)] bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check-black.svg')] after:bg-[50%] after:bg-no-repeat checked:after:inline"
                  />
                </div>
                <p className="text-sm font-normal">
                  Necessary cookies help make a website usable by enabing basic
                  functions like page navigation and access to secure of the
                  website. The website cannot function properly without these
                  cookies.
                </p>
              </label>
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-3 self-end">
            <TextButton
              clickHandler={() => setToShow("preferences")}
              className="font-raleway text-sm font-semibold text-sec-500"
            >
              Back
            </TextButton>
            <IconButton
              variant="sec"
              className="text-sec-500"
              rightIcon={faArrowRight}
              clickHandler={() => {
                dispatch({ type: "reject_all" });
                handleSetCookies();
              }}
            >
              Decline
            </IconButton>
            <IconButton
              rightIcon={faArrowRight}
              clickHandler={() => {
                dispatch({ type: "accept_all" });
                handleSetCookies();
              }}
            >
              Accept all cookies
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookies;
