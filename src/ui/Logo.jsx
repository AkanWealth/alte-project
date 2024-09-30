import { Link } from "react-router-dom";

const Logo = ({
  relativeStyles,
  img = "/logo.png",
  link = "/",
  clickHandler,
}) => {
  return (
    <Link
      to={link}
      aria-label="Alte Consulting home"
      className="w-fit"
      onClick={clickHandler}
    >
      <img
        src={img}
        alt="Alto Consulting logo"
        className={`${
          relativeStyles || "max-h-[55.88px] w-full max-w-20 lg:max-w-[120px]"
        }`}
      />
    </Link>
  );
};

export default Logo;
