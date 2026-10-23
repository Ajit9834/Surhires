"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Light/dark switch. The initial class is applied before paint by the inline
 * script in `layout.tsx`; this button only reads that state and flips it.
 */
export function ThemeToggle({
  className,
  withLabel = false,
}: {
  className?: string;
  withLabel?: boolean;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      window.localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Private mode / storage disabled — the class change still applies.
    }
  }

  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={cn(
        "inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#172554] shadow-2xs transition-colors duration-150 hover:border-[#7C3AED]/45 hover:bg-[#F4F3FF] hover:text-[#5B21B6] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]",
        className,
      )}
    >
      {isDark ? (
        <Sun aria-hidden="true" className="h-4.5 w-4.5" />
      ) : (
        <Moon aria-hidden="true" className="h-4.5 w-4.5" />
      )}
      {withLabel ? <span>{isDark ? "Light mode" : "Dark mode"}</span> : null}
    </button>
  );
}
