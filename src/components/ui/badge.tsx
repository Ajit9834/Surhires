import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeTone = "violet" | "teal" | "coral" | "sunshine" | "neutral";

const toneStyles: Record<BadgeTone, string> = {
  violet: "bg-[#EDE9FE] text-[#5B21B6] border-[#DDD6FE]",
  teal: "bg-[#CCFBF1] text-[#115E59] border-[#99F6E4]",
  coral: "bg-[#FFE4DE] text-[#9A3412] border-[#FECACA]",
  sunshine: "bg-[#FEF9C3] text-[#854D0E] border-[#FDE047]",
  neutral: "bg-white/90 text-[#172554] border-[#E5E7EB]",
};

export function Badge({
  children,
  tone = "violet",
  dot = false,
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[0.8125rem] font-semibold leading-snug",
        toneStyles[tone],
        className,
      )}
    >
      {dot ? (
        <span
          aria-hidden="true"
          className={cn(
            "size-2 rounded-full",
            tone === "violet" && "bg-[#7C3AED]",
            tone === "teal" && "bg-[#0D9488]",
            tone === "coral" && "bg-[#F97360]",
            tone === "sunshine" && "bg-[#EAB308]",
            tone === "neutral" && "bg-[#7C3AED]",
          )}
        />
      ) : null}
      {children}
    </span>
  );
}
