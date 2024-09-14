import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define variant styles for different button types and color schemes
const variantStyles = {
  pry: {
    light: "bg-sec-500 text-pry-900",
    dark: "bg-pry-500 text-white",
  },
  sec: {
    light: "bg-[transparent] border border-sec-500",
    dark: "bg-[transparent] border border-pry-500 text-pry-500",
  },
};

// Define base styles common to all buttons
const baseStyles = `
  w-fit rounded-lg px-3 lg:px-4 py-2 lg:py-3 
  text-center font-inter text-base lg:text-lg font-medium 
  disabled:opacity-40
`;

// Main Button component
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
  // Combine all classes
  const buttonClass = `${className} ${variantStyles[variant][color]} ${baseStyles}`;

  // Handle click event
  const handleClick = () => {
    if (clickHandler && typeof clickHandler === "function") {
      clickHandler();
    }
  };

  // Render link if 'link' prop is provided
  if (link) {
    // Internal link
    if (link.startsWith("/")) {
      return (
        <Link
          to={link}
          className={buttonClass}
          {...props}
          onClick={handleClick}
        >
          {children}
        </Link>
      );
    }
    // External link
    return (
      <a
        href={link}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={buttonClass}
        {...props}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  // Render regular button
  return (
    <button className={buttonClass} {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

// Button with icons
export const IconButton = ({
  children,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) => (
  <Button
    className={`flex flex-row items-center gap-3 ${className}`}
    {...props}
  >
    {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
    {children}
    {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
  </Button>
);

// Button with only an icon
export const IconOnlyButton = ({ icon, ...props }) => (
  <Button className="flex items-center justify-center" {...props}>
    <FontAwesomeIcon icon={icon} />
  </Button>
);

// New TextButton component
export const TextButton = ({
  children,
  link,
  target,
  rel,
  className = "",
  clickHandler,
  ...props
}) => {
  const textButtonClass = `
    inline-block cursor-pointer 
    ${className}
  `;

  const handleClick = () => {
    if (clickHandler && typeof clickHandler === "function") {
      clickHandler();
    }
  };

  if (link) {
    if (link.startsWith("/")) {
      return (
        <Link
          to={link}
          className={textButtonClass}
          {...props}
          onClick={handleClick}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={link}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={textButtonClass}
        {...props}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={textButtonClass} {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
