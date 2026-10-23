import Link from "next/link";
import { cn } from "@/lib/utils";

/** Original geometric spark mark + wordmark crafted specifically for Surhires. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      aria-label="Surhires — Go to homepage"
      className={cn(
        "group inline-flex min-h-11 items-center gap-2.5 rounded-xl py-1 text-[1.25rem] font-extrabold tracking-tight transition-opacity hover:opacity-95",
        isLight ? "text-white focus-visible:outline-white" : "text-[#172554]",
      )}
    >
      <span
        aria-hidden="true"
        className="relative grid size-9 shrink-0 place-items-center rounded-[11px] bg-gradient-to-br from-[#7C3AED] to-[#0D9488] text-white shadow-[0_8px_18px_-6px_rgba(124,58,237,0.6)] transition-transform duration-200 group-hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <path
            d="M7 15.5c1.8 1.5 4.6 1.5 6.4 0 1.4-1.2 1.2-3.1-.6-3.7l-2.1-.7c-1.8-.6-2-2.5-.6-3.7 1.8-1.5 4.6-1.5 6.4 0"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="18.2" cy="6.2" r="1.8" fill="#FACC15" />
        </svg>
      </span>
      <span>
        Sur
        <span className={isLight ? "text-[#5EEAD4]" : "text-[#7C3AED]"}>
          hires
        </span>
      </span>
    </Link>
  );
}
