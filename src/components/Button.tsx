import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  fullWidth,
  type = "button",
  disabled,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00C2FF] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white shadow-sm hover:shadow-md",
    secondary: "bg-[#0D1F5C] hover:bg-[#0051CC] text-white shadow-sm hover:shadow-md",
    outline: "border-2 border-[#0D1F5C] text-[#0D1F5C] hover:bg-[#0D1F5C] hover:text-white",
    ghost: "text-[#0D1F5C] hover:bg-[#EEF2FF]",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const classes = clsx(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
