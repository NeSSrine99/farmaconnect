import React from 'react';

const Button = ({
  children,
  type = 'button',
  variant = 'primary', // primary, secondary, danger...
  className = '',
}) => {
  const baseStyles = 'px-4 py-2 rounded-xl';
  
  const variants = {
    primary: 'bg-primary hover:bg-hoverButtonPrimary text-white',
    secondary: 'bg-secondary hover:bg-hoverButtonSecondary text-white',
    tertiary: 'border-2 border-primary bg-white text-primary '
    
  };


  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]}  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
