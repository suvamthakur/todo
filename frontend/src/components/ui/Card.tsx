import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-card p-3 sm:p-4 md:p-6 ${className}`}>{children}</div>
  );
}
