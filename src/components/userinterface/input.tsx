import * as React from 'react';


interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className, disabled, readOnly, autoFocus }) => {
  const defaultShadowStyle = 'shadow-md'; // Tailwind CSS class for shadow

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${defaultShadowStyle} ${className}`}
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
    />
  );
};

export default Input;