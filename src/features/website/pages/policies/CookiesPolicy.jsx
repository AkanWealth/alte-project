// Contexts
import { useCookiesContext } from "../../../../contexts/CookiesContext";

const CookiesPolicy = () => {
  const { cookiesPreferences, dispatch } = useCookiesContext();

  return (
    <main className="font-inter text-base font-normal text-grey-500">
      <h1 className="font-raleway text-4xl font-bold text-pry-500 lg:text-6xl">
        Cookies Policy for Alte
      </h1>
      <time
        dateTime="2024-09-12"
        className="mb-10 mt-2 inline-block text-lg lg:text-xl"
      >
        12th Sept, 2024
      </time>
      <ol className="flex flex-col gap-8">
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            1. Introduction
          </h2>
          <p>
            This Cookie Policy explains what cookies are, how we use them on the
            Alte website, and your choices regarding cookies.
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            2. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help the website remember your preferences and enhance
            your browsing experience.
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            3. Types of Cookies We Use
          </h2>
          <p>We use the information collected for the following purposes:</p>
          <ul className="mt-2 flex flex-col gap-2">
            <li>
              <label
                htmlFor="essential"
                className="flex flex-row items-center gap-2 text-lg font-semibold"
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
              <p className="mt-2">
                These cookies are necessary for the website to function
                properly, such as logging in and accessing secure areas of the
                site.
              </p>
            </li>
            <li>
              <label
                htmlFor="performance"
                className="flex flex-row items-center gap-2 text-lg font-semibold"
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
              <p className="mt-2">
                These cookies collect information about how visitors use our
                site, such as which pages are visited most often. The data is
                used to improve website performance.
              </p>
            </li>
            <li>
              <label
                htmlFor="functionality"
                className="flex flex-row items-center gap-2 text-lg font-semibold"
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
              <p className="mt-2">
                These cookies remember your preferences and provide a more
                personalized experience, like saving your language settings or
                login details.
              </p>
            </li>
            <li>
              <label
                htmlFor="advertising"
                className="flex flex-row items-center gap-2 text-lg font-semibold"
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
              <p className="mt-2">
                These cookies track your browsing habits to display relevant
                advertisements based on your interests.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            4. How We Use Cookies
          </h2>
          <p>We use cookies to:</p>

          <ul className="mt-2 list-inside list-disc">
            <li>Provide core functionality (e.g., account login).</li>
            <li>
              Analyze how visitors use our site to improve the user experience.
            </li>
            <li>
              Deliver targeted advertisements that are relevant to your
              interests.
            </li>
            <li>Remember your settings and preferences.</li>
          </ul>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            5. Third-Party Cookies
          </h2>
          <p>
            We may use third-party services (such as analytics or advertising
            networks) that place cookies on your device. These third parties may
            collect information about your online activities over time and
            across different websites.
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            6. Managing Cookies
          </h2>
          <p>
            You can manage or disable cookies through your browser settings.
            However, if you choose to block essential cookies, some parts of the
            website may not function correctly.
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            7. Changes to this Cookie Policy
          </h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will
            be posted on this page with an updated &quot;Effective Date.&quot;
          </p>
        </li>
        <li>
          <h2 className="mb-4 text-2xl font-semibold text-grey-900">
            8. Contact Us
          </h2>
          <p>
            If you have any questions about our Cookie Policy, feel free to
            reach out to us at:
            <a
              href="mailto:info@alteconsulting.com"
              className="block text-sec-500 underline"
            >
              info@alteconsulting.com
            </a>
          </p>
        </li>
      </ol>
    </main>
  );
};

export default CookiesPolicy;
