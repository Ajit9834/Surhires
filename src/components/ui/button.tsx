import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "teal" | "white" | "subtle";
export type ButtonSize = "md" | "lg";

const baseStyles =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[13px] font-semibold " +
  "transition-all duration-180 ease-out select-none cursor-pointer " +
  "hover:-translate-y-0.5 active:translate-y-0 " +
  "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED] " +
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55 disabled:transform-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#7C3AED] text-white shadow-[0_10px_24px_-8px_rgba(124,58,237,0.55)] " +
    "hover:bg-[#6D28D9] hover:shadow-[0_14px_28px_-8px_rgba(124,58,237,0.65)] active:bg-[#5B21B6]",
  secondary:
    "border-2 border-[#0D9488]/35 bg-white text-[#115E59] shadow-xs " +
    "hover:border-[#0D9488] hover:bg-[#CCFBF1]/45 active:bg-[#CCFBF1]",
  teal:
    "bg-[#0F766E] text-white shadow-[0_10px_24px_-8px_rgba(13,148,136,0.45)] " +
    "hover:bg-[#115E59] active:bg-[#134E4A]",
  white:
    "bg-white text-[#172554] shadow-[0_12px_28px_-10px_rgba(15,23,42,0.3)] " +
    "hover:bg-[#F4F3FF] hover:text-[#5B21B6] active:bg-[#EDE9FE]",
  subtle:
    "border border-[#E5E7EB] bg-white text-[#172554] " +
    "hover:border-[#7C3AED]/45 hover:bg-[#F4F3FF] hover:text-[#5B21B6] active:bg-[#EDE9FE]",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-6 py-3.5 text-base",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonClasses(variant, size, className)}
    >
      {children}
    </Link>
  );
}
