import { Link } from "react-router-dom";

// UIs
import SocialLinks from "./SocialLinks";
import Logo from "../../../ui/Logo";
import Copyright from "./Copyright";

const FooterNav = ({ relativeStyles }) => {
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
            <Link to="/policies/privacy-policy">Privacy policy</Link>
            <Link to="/policies/cookies-policy">Cookies policy</Link>
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

const Newsletter = ({ relativeStyles }) => {
  return (
    <div
      className={`${relativeStyles} flex flex-wrap items-start justify-between gap-6`}
    >
      <div className="grow font-inter text-white">
        <h3 className="mb-2 text-xl font-semibold uppercase lg:text-3xl">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-sm font-medium lg:text-base">
          Sign Up and enjoy our services better
        </p>
      </div>
      <form className="grid shrink grow-0 basis-[410px] grid-cols-[auto_auto] grid-rows-1">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="col-start-1 col-end-3 row-start-1 row-end-2 rounded-[4px] bg-white px-4 py-3 font-inter text-sm font-normal text-grey-400"
        />
        <button
          type="submit"
          className="col-start-2 col-end-3 row-start-1 row-end-2 ml-auto w-fit rounded-[4px] bg-sec-500 p-4 font-inter text-sm font-normal"
        >
          Send
        </button>
      </form>
    </div>
  );
};

const Footer = ({ relativeStyles }) => {
  return (
    <footer
      className={`${relativeStyles} grid min-h-[664px] bg-pry-900 pt-8 lg:pt-10`}
    >
      <div className="mb-9 flex flex-col gap-10 px-5 lg:gap-28 lg:px-10">
        <section className="inner flex flex-wrap justify-between gap-10">
          <Newsletter relativeStyles="shrink grow-0 basis-[1000px]" />
          <SocialLinks relativeStyles="shrink-0 grow-0" />
        </section>
        <section className="inner grid grid-rows-[auto_auto] gap-14 md:grid-cols-[auto_auto] md:grid-rows-1">
          <Logo relativeStyles="w-32 lg:w-56 xl:w-80" />
          <FooterNav relativeStyles="flex-shrink flex-grow basis-1/2" />
        </section>
      </div>
      <Copyright relativeStyles="mt-auto" />
    </footer>
  );
};

export default Footer;
