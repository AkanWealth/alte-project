import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variantStyles = {
  pry: {
    light: "bg-sec-500 text-pry-900",
    dark: "bg-pry-500 text-white",
  },
  sec: {
    light: "bg-[transparent] border border-sec-500 text-white",
    dark: "bg-[transparent] border border-pry-500 text-pry-500",
  },
};

const baseStyles =
  "w-fit rounded-lg px-4 py-3 text-center font-inter text-lg font-medium disabled:opacity-40";

const Button = ({
  children,
  variant = "pry",
  color = "light",
  link,
  target,
  rel,
  className = "",
  disable,
  clickHandler,
  ...props
}) => {
  const buttonClass = `${variantStyles[variant][color]} ${baseStyles} ${className}`;

  if (link) {
    if (link.startsWith("/")) {
      return (
        <Link
          to={link}
          className={buttonClass}
          {...props}
          onClick={() => clickHandler()}
        >
          {children}
        </Link>
      );
    } else {
      return (
        <a
          href={link}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={buttonClass}
          {...props}
          onClick={() => clickHandler()}
        >
          {children}
        </a>
      );
    }
  }

  return (
    <button className={buttonClass} {...props} onClick={() => clickHandler()}>
      {children}
    </button>
  );
};

export const IconButton = ({
  children,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) => {
  return (
    <Button
      className={`flex flex-row items-center gap-3 ${className}`}
      {...props}
    >
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      {children}
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </Button>
  );
};

export const IconOnlyButton = ({ icon, ...props }) => {
  return (
    <Button className="flex items-center justify-center" {...props}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export default Button;
