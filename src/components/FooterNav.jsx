import { Link } from "react-router-dom";
import { useCookiesContext } from "../contexts/CookiesContext";
import { TextButton } from "./Button";

const FooterNav = ({ relativeStyles }) => {
  const { setDisplayCookies, setToShow } = useCookiesContext();

  return (
    <div
      className={`${relativeStyles} flex flex-row flex-wrap-reverse gap-6 font-inter text-white`}
    >
      <div className="flex shrink grow flex-col gap-1 lg:gap-3">
        <h3 className="text-base font-semibold uppercase lg:text-lg">
          Contact Us
        </h3>
        <p className="text-sm font-normal lg:text-base">
          <a href="mailto:info@alto.com">hello@Alte.com</a>
        </p>
        <p className="text-sm font-normal lg:text-base">
          <a href="tel:+12345678900">+234 5876 446 239</a>
        </p>
      </div>
      <nav className="flex shrink grow flex-row flex-wrap justify-between gap-6">
        <div className="flex flex-col gap-1 lg:gap-3">
          <h3 className="text-base font-semibold uppercase lg:text-lg">
            Pages
          </h3>
          <ul className="flex flex-col gap-1 text-sm font-normal lg:gap-3 lg:text-base">
            <Link to="/about-us">About us</Link>
            <Link to="our-services">Services</Link>
            <Link to="/case-studies">Case studies</Link>
            <Link to="/jobseekers">Career</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact-us">Contact Us</Link>
            <TextButton
              clickHandler={() => {
                setDisplayCookies(true);
                setToShow("preferences");
              }}
            >
              Cookie policy
            </TextButton>
          </ul>
        </div>
        <div className="flex flex-col gap-1 lg:gap-3">
          <h3 className="text-base font-semibold uppercase lg:text-lg">
            Services
          </h3>
          <ul className="flex flex-col gap-1 text-sm font-normal lg:gap-3 lg:text-base">
            <Link to="/our-services/#website-and-software-development">
              Web Development
            </Link>
            <Link to="/our-services/#research-and-analysis">
              Research and Analysis
            </Link>
            <Link to="/our-services/#mobile-app-development">
              Mobile App Development
            </Link>
            <Link to="/our-services/#product-design">Product Design</Link>
            <Link to="/our-services/#pitch-deck-creation">
              Pitch Desk Creation
            </Link>
            <Link to="/our-services/#product-discovery">Product Discovery</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FooterNav;
