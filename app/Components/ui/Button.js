import React from "react";

const Button = ({
  children, //content of button
  type = "button",
  variant = "primary", // primary, secondary, danger...
  className = "", //to make class name variant
  onClick, // i need this function to view cardShopping cart when i click in the button of panier
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
