"use client";

interface NovaIconProps {
  size?: number;
  className?: string;
  variant?: "dark" | "light" | "cyan" | "white";
}

export default function NovaIcon({ size = 32, className = "", variant = "dark" }: NovaIconProps) {
  const fills: Record<string, { bg: string; star: string }> = {
    dark: { bg: "#0D1F5C", star: "#FFFFFF" },
    light: { bg: "#FFFFFF", star: "#0D1F5C" },
    cyan: { bg: "#00C2FF", star: "#0D1F5C" },
    white: { bg: "#FFFFFF", star: "#060D1A" },
  };
  const { bg, star } = fills[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill={bg} />
      {/* 4-point star as negative space */}
      <path
        d="M16 5 C16 5 17 11 22 16 C17 21 16 27 16 27 C16 27 15 21 10 16 C15 11 16 5 16 5Z"
        fill={star}
      />
      <path
        d="M5 16 C5 16 11 15 16 10 C21 15 27 16 27 16 C27 16 21 17 16 22 C11 17 5 16 5 16Z"
        fill={star}
      />
    </svg>
  );
}
