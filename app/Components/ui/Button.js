import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles = "px-4 py-2 rounded";

  const variants = {
    primary:
      "bg-primary border-2 border-primary hover:bg-hoverButtonPrimary text-white",
    secondary: "bg-secondary hover:bg-hoverButtonSecondary text-white",
    tertiary: "border-2 border-inside border-primary bg-white text-primary ",
    third: " text-primary  backdrop-blur-md hover:underline",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]}  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
