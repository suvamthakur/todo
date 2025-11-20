export default function Button({
  children,
  className = "",
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  props?: React.HTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <button
      className={`inline-block bg-primary hover:bg-secondary transition-all duration-300 text-primary-foreground px-4 py-2.5 cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
