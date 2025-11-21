import { type ButtonHTMLAttributes, type ReactNode } from 'react';
// Import the CSS file for styles
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
  	variant?: 'primary' | 'secondary' | 'outline';
}

const Button = ({
  children,        // The content inside the button (text, icons, etc.)
  onClick,         // The function to run when clicked
  type = 'button', // Default HTML type ('submit', 'reset', or 'button')
  variant = 'primary', // Controls styling theme: 'primary' | 'secondary' | 'danger'
  disabled = false, // Is the button disabled?
  className = '',  // Allows appending extra classes from the parent if needed
  ...restProps     // Catches any other props (like id, aria-attributes)
}: ButtonProps) => {

  // We build the class string dynamically based on props.
  // We use a BEM-like naming convention (btn, btn--primary).
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  // Combine base, variant, and any custom classes passed in
  const finalClassName = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
      // Spread remaining props here (crucial for accessibility and flexibility)
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;