import React, { useId } from "react";

export default function Select({
  className = "",
  labelClassName = "",
  label,
  required,
  options,
  error,
  ...props
}: {
  className?: string;
  labelClassName?: string;
  label?: string;
  required?: boolean;
  error?: string;
  options: {
    value: string;
    label: string;
  }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
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

      <select
        id={id}
        {...props}
        className={` border border-gray-300 rounded-sm py-2 px-4 w-full ${className} ${
          error ? "border-red-500" : ""
        }`}
        disabled={props.disabled}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 mt-1 text-sm md:text-base">{error}</p>
      )}
    </div>
  );
}
