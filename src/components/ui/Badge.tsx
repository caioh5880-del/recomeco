import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "marian" | "gold" | "outline" | "success";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "bg-[#0d1527]/10 text-[#0d1527] border border-[#0d1527]/15",
    marian: "bg-[#1e3a8a]/20 text-[#1e3a8a] border border-[#1e3a8a]/30",
    gold: "bg-[#d4af37]/15 text-[#997a15] border border-[#d4af37]/35",
    outline: "border border-current text-inherit",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200"
  };

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase",
          variantStyles[variant],
          className
        )
      )}
      {...props}
    />
  );
}
