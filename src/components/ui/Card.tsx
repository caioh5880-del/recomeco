import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "marian" | "gold" | "subtle";
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  const variantStyles = {
    default: "bg-white border border-[#e5dfd3] shadow-sm",
    marian: "bg-[#0d1527] border border-[#1e3a8a]/60 text-white shadow-lg",
    gold: "bg-gradient-to-b from-[#fffcf2] to-[#fbf7eb] border border-[#d4af37]/40 shadow-sm",
    subtle: "bg-[#f7f3ea]/70 border border-[#e8e0ce]"
  };

  return (
    <div
      className={twMerge(
        clsx("rounded-2xl p-5 md:p-6 transition-all duration-200", variantStyles[variant], className)
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={twMerge(clsx("flex flex-col gap-1.5 mb-3", className))} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={twMerge(clsx("text-lg md:text-xl font-bold tracking-tight text-inherit", className))}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={twMerge(clsx("text-xs md:text-sm text-inherit/70 leading-relaxed", className))}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={twMerge(clsx("space-y-3", className))} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(clsx("flex items-center justify-between pt-4 mt-2 border-t border-inherit/10", className))}
      {...props}
    />
  );
}
