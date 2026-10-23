import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  interactive = false,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "rounded-[22px] border border-[#E5E7EB] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(23,37,84,0.12)] sm:p-7",
        interactive &&
          "transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#7C3AED]/40 hover:shadow-[0_18px_38px_-18px_rgba(124,58,237,0.22)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
