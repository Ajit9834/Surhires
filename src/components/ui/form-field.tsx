import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const inputControlClasses =
  "mt-2 min-h-11 w-full rounded-[12px] border bg-white px-3.5 py-2.5 text-base text-[#172033] " +
  "transition-colors duration-150 placeholder:text-[#6B7280] " +
  "hover:border-[#7C3AED]/60 focus:border-[#7C3AED]";

export function FormField({
  id,
  label,
  required = false,
  hint,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={id}
        className="text-[0.875rem] font-semibold text-[#172554]"
      >
        {label}
        {required ? (
          <span className="ml-1 text-[#B91C1C]" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>

      {children}

      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[0.8125rem] text-[#596579]">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 inline-flex items-start gap-1.5 text-[0.8125rem] font-medium text-[#B91C1C]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mt-0.5 size-4 shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              clipRule="evenodd"
            />
          </svg>
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}
