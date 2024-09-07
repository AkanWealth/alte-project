import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

const UserCookies = ({
  open,
  handleCookieClose,
  handleCookieAccepted,
  handleCookieDeclined,
  handleCookiePreferences, 
}) => {
  
  return (
    <div
      open={open}
      onClose={handleCookieClose}
      disableScrollLock
      id="small-modal"
      tabIndex="1"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto ${
        open ? "" : "hidden"
      }`}
    >
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faCookieBite} className="text-sec-500 mt-1 size-10 md:size-6 lg:size-12 mr-4" />
          <h1 className="text-xl/tight md:text-2xl lg:text-3xl">Cookies</h1>
          <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="small-modal"
              onClick={handleCookieClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
        </div>
        <p className="mb-6 mt-3 font-raleway text-sm font-normal lg:mb-12 lg:mt-6 lg:max-w-[40ch] lg:text-xl">
          We at Alte use cookies to collect information about you for functional purposes, statistical marketing, and to manage your user experience. You may not give us your consent for certain purposes by selecting an option and you can withdraw your consent at any time via the cookie icon.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleCookieDeclined}
            className="flex items-center justify-center border border-sec-500 text-sec-600 font-semibold rounded-lg py-2 px-6 hover:bg-yellow-50"
          >
            Reject All Cookies <span className="ml-2">&rarr;</span>
          </button>
          <button
            onClick={handleCookieAccepted}
            className="flex items-center justify-center bg-sec-500 font-raleway font-semibold rounded-lg py-2 px-6 hover:bg-yellow-600"
          >
            Accept all cookies <span className="ml-2">&rarr;</span>
          </button>
        </div>
        <div className="mt-6 text-right">
          <a 
            href="/cookies-page" 
            onClick={handleCookiePreferences} 
            className="mt-3 font-raleway text-sm font-normal lg:mb-12 lg:mt-6 lg:max-w-[40ch] lg:text-xl underline"
          >
            Cookie Preferences
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCookies;
