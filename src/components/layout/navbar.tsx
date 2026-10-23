"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Find Jobs" },
  { href: "/employers", label: "Employers" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isRouteActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/85 bg-[#FFFCF7]/92 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-1.5">
              {navItems.map((item) => {
                const active = isRouteActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex min-h-11 items-center rounded-xl px-4 py-2 text-[0.9375rem] font-semibold transition-colors duration-150",
                        active
                          ? "bg-[#EDE9FE] text-[#6D28D9]"
                          : "text-[#172033] hover:bg-[#F4F3FF] hover:text-[#1E3A8A]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA group */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/jobs"
              className="inline-flex min-h-11 items-center rounded-xl px-3.5 py-2 text-sm font-semibold text-[#115E59] transition-colors hover:bg-[#CCFBF1]/60"
            >
              12 open roles
            </Link>
            <Link
              href="/employers#post-a-job"
              className={buttonClasses("primary", "md")}
            >
              Post a Job
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Trigger */}
          <button
            ref={toggleButtonRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-panel"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-sm font-semibold text-[#172554] shadow-2xs transition-colors duration-150 hover:border-[#7C3AED]/45 hover:bg-[#F4F3FF] md:hidden"
          >
            <span className="sr-only">
              {isOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>
            <span aria-hidden="true" className="relative block h-3.5 w-4.5">
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-4.5 rounded-full bg-current transition-transform duration-180",
                  isOpen ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-1.5 left-0 block h-0.5 w-4.5 rounded-full bg-current transition-opacity duration-180",
                  isOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-4.5 rounded-full bg-current transition-transform duration-180",
                  isOpen ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
            <span aria-hidden="true">{isOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Panel */}
      {isOpen ? (
        <div
          id="mobile-navigation-panel"
          className="animate-scale-in border-t border-[#E5E7EB] bg-white shadow-[0_18px_36px_-18px_rgba(23,37,84,0.22)] md:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const active = isRouteActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                          active
                            ? "bg-[#EDE9FE] text-[#6D28D9]"
                            : "text-[#172033] hover:bg-[#F4F3FF]",
                        )}
                      >
                        <span>{item.label}</span>
                        <span aria-hidden="true" className="text-sm opacity-60">
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 grid gap-2.5 border-t border-[#E5E7EB] pt-4 sm:grid-cols-2">
                <Link
                  href="/jobs"
                  onClick={() => setIsOpen(false)}
                  className={buttonClasses("secondary", "md", "w-full")}
                >
                  Find a Job
                </Link>
                <Link
                  href="/employers#post-a-job"
                  onClick={() => setIsOpen(false)}
                  className={buttonClasses("primary", "md", "w-full")}
                >
                  Post a Job
                </Link>
                <ThemeToggle
                  withLabel
                  className="w-full justify-center sm:col-span-2"
                />
              </div>
            </nav>
          </Container>
        </div>
      ) : (
        <div id="mobile-navigation-panel" hidden />
      )}
    </header>
  );
}
