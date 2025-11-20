import React, { useId } from "react";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  labelClassName?: string;
  label?: string;
  error?: string;
};

export default function TextArea({
  className = "",
  labelClassName = "",
  label,
  error,
  ...props
}: TextAreaProps) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={`block text-muted mb-1.5 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`border border-gray-300 outline-none rounded-sm p-2 w-full ${className} ${
          error ? "border-red-500" : ""
        }`}
        style={{ resize: "none" }}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
