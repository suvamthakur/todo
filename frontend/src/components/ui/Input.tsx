import React, { useId } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  labelClassName?: string;
  label?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  type?: string;
  required?: boolean;
  error?: string;
};

export default function Input({
  type,
  className = "",
  labelClassName = "",
  label,
  leftElement,
  rightElement,
  required,
  error,
  ...props
}: InputProps) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={`block text-muted mb-1.5 text-sm md:text-base ${labelClassName}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div
        className={`border border-gray-300 rounded-sm flex items-center gap-4 py-2 px-4 w-full ${className} ${
          error ? "border-red-500" : ""
        }`}
      >
        {leftElement && <div>{leftElement}</div>}

        <input
          id={id}
          type={type}
          className={`border-none outline-none flex-1`}
          {...props}
        />

        {rightElement && <div>{rightElement}</div>}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
