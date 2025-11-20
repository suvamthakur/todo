import React from "react";
import Card from "../../ui/Card";

export default function TaskCard({
  icon,
  title,
  noOfTask,
  className = "",
  variant,
}: {
  icon: React.ReactNode;
  title: string;
  noOfTask: number;
  className?: string;
  variant: "success" | "error";
}) {
  const variants = {
    success: {
      iconClassName: "text-secondary border-secondary bg-primary/40",
      bgColor: "bg-primary/15",
    },
    error: {
      iconClassName: "text-destructive border-destructive bg-destructive/40",
      bgColor: "bg-destructive/15",
    },
  };
  return (
    <Card className={`space-y-6 ${variants[variant].bgColor} ${className}`}>
      <div className="flex items-center gap-2 justify-center">
        <div
          className={`border md:border-2 md:p-1 rounded-md ${variants[variant].iconClassName}`}
        >
          {icon}
        </div>
        <p className="text-sm md:text-xl">{title}</p>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <span className="text-lg md:text-2xl font-semibold">{noOfTask}</span>
        <span className="text-xs md:text-base text-muted-foreground">
          This Week
        </span>
      </div>
    </Card>
  );
}
