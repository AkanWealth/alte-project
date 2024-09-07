import { Link } from "react-router-dom";

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
          <ul className="lg:gap-3text-sm flex flex-col gap-1 font-normal lg:text-base">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Case studies</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Cookie policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1 lg:gap-3">
          <h3 className="text-base font-semibold uppercase lg:text-lg">
            Services
          </h3>
          <ul className="lg:gap-3text-sm flex flex-col gap-1 font-normal lg:text-base">
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Research and Analysis</a>
            </li>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
            <li>
              <a href="#">Product Design</a>
            </li>
            <li>
              <a href="#">Pitch Desk Creation</a>
            </li>
            <li>
              <a href="#">Product Discovery</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FooterNav;
