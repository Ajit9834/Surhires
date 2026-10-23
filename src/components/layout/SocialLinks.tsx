"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SocialItem {
  id: "linkedin" | "instagram" | "x";
  name: string;
  href?: string;
  hoverClasses: string;
  icon: ReactNode;
}

const socialItems: SocialItem[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || undefined,
    hoverClasses:
      "hover:border-[#7C3AED] hover:bg-[#EDE9FE] hover:text-[#6D28D9] hover:shadow-[0_10px_22px_-8px_rgba(124,58,237,0.4)]",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4.5"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || undefined,
    hoverClasses:
      "hover:border-[#F97360] hover:bg-[#FFE4DE] hover:text-[#C2410C] hover:shadow-[0_10px_22px_-8px_rgba(249,115,96,0.4)]",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4.5"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "x",
    name: "X",
    href: process.env.NEXT_PUBLIC_X_URL || undefined,
    hoverClasses:
      "hover:border-[#0D9488] hover:bg-[#CCFBF1] hover:text-[#0F766E] hover:shadow-[0_10px_22px_-8px_rgba(13,148,136,0.4)]",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const sharedButtonClasses =
  "grid size-11 cursor-pointer place-items-center rounded-xl border border-[#E5E7EB] bg-[#FFFCF7] text-[#172554] " +
  "transition-all duration-200 ease-out " +
  "hover:-translate-y-0.5 hover:scale-105 active:scale-95 " +
  "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]";

export function SocialLinks() {
  const [activePlaceholder, setActivePlaceholder] = useState<string | null>(
    null,
  );

  return (
    <div className="mt-6">
      <ul
        className="flex flex-wrap items-center gap-3"
        aria-label="Surhires social media channels"
      >
        {socialItems.map((item) => (
          <li key={item.id}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Surhires on ${item.name}`}
                className={cn(sharedButtonClasses, item.hoverClasses)}
              >
                {item.icon}
              </a>
            ) : (
              <button
                type="button"
                aria-label={`${item.name} profile placeholder (demo site — external social URL not configured)`}
                onClick={() =>
                  setActivePlaceholder((prev) =>
                    prev === item.name ? null : item.name,
                  )
                }
                className={cn(sharedButtonClasses, item.hoverClasses)}
              >
                {item.icon}
              </button>
            )}
          </li>
        ))}
      </ul>

      <div aria-live="polite" className="min-h-5 pt-2">
        {activePlaceholder ? (
          <p className="text-xs text-[#596579]">
            <span className="font-semibold text-[#6D28D9]">
              {activePlaceholder}:
            </span>{" "}
            Placeholder button — live profile URLs are not connected in this demo.
          </p>
        ) : null}
      </div>
    </div>
  );
}
