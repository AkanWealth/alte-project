import { Link } from "react-router-dom";

const Logo = ({ relativeStyles }) => {
  return (
    <Link to="/" aria-label="Alte Consulting home" className="w-fit">
      <img
        src="/logo.png"
        alt="Alto Consulting logo"
        className={`${
          relativeStyles || "max-h-[55.88px] w-full max-w-20 lg:max-w-[120px]"
        }`}
      />
    </Link>
  );
};

export default Logo;
