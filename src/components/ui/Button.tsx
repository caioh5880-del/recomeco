import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "gold" | "danger" | "marian";
  size?: "sm" | "md" | "lg" | "icon";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  className,
  variant = "default",
  size = "md",
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-5 py-3.5 gap-2.5 shadow-md",
    icon: "p-2.5 rounded-full"
  };

  const variantStyles = {
    default: "bg-[#0d1527] text-white hover:bg-[#172554] shadow-sm",
    marian: "bg-[#1e3a8a] text-white hover:bg-[#1d4ed8] shadow-md border border-[#3b82f6]/30",
    gold: "bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#ca8a04] text-[#0d1527] font-semibold hover:brightness-105 shadow-md shadow-[#d4af37]/20",
    secondary: "bg-[#f4f0e8] text-[#0d1527] hover:bg-[#eae3d2] border border-[#d8cfbe]",
    outline: "border border-[#0d1527]/20 text-[#0d1527] hover:bg-[#0d1527]/5",
    ghost: "text-[#0d1527] hover:bg-[#0d1527]/5",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm"
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
