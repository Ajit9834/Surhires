"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-[#E5E7EB] overflow-hidden rounded-[22px] border border-[#E5E7EB] bg-white shadow-[0_12px_34px_-22px_rgba(23,37,84,0.16)]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `${baseId}-${item.id}-trigger`;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div
            key={item.id}
            className={cn(
              "transition-colors duration-150",
              isOpen ? "bg-[#F4F3FF]/60" : "bg-white",
            )}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-5 py-4.5 text-left text-base font-semibold text-[#172554] transition-colors duration-150 hover:text-[#7C3AED] sm:px-7 sm:text-[1.0625rem]"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-200",
                    isOpen
                      ? "rotate-180 border-[#7C3AED] bg-[#7C3AED] text-white"
                      : "border-[#E5E7EB] bg-white text-[#172554]",
                  )}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.5 7.5 4.5 4.5 4.5-4.5"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              data-open={isOpen ? "true" : "false"}
              className="accordion-content"
            >
              <div className="accordion-inner">
                <div
                  hidden={!isOpen}
                  className="px-5 pb-5 text-[0.96875rem] leading-relaxed text-[#596579] sm:px-7 sm:pb-6"
                >
                  <p className="max-w-[68ch]">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
