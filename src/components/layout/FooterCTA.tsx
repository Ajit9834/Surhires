"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function FooterCTA() {
  return (
    <div
      className="relative rounded-[26px] bg-gradient-to-r from-[#7C3AED]/75 via-[#0D9488]/70 to-[#F97360]/60 p-[1.5px] shadow-[0_22px_50px_-26px_rgba(124,58,237,0.28)]"
    >
      <div className="relative overflow-hidden rounded-[24.5px] bg-gradient-to-br from-[#F4F3FF] via-white to-[#CCFBF1]/45 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-11">
        {/* Soft corner glow accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-20 -right-16 size-64 rounded-full bg-[#7C3AED]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-24 left-1/3 size-60 rounded-full bg-[#0D9488]/10 blur-3xl"
        />

        <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[580px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DDD6FE] bg-white px-3.5 py-1 text-xs font-semibold text-[#5B21B6] shadow-2xs">
              <Sparkles
                aria-hidden="true"
                className="size-3.5 text-[#CA8A04]"
              />
              <span>Built for ambitious careers &amp; teams</span>
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#172554] sm:text-3xl lg:text-[2.15rem] lg:leading-[1.15]">
              Your next opportunity starts here.
            </h2>

            <p className="mt-2.5 max-w-[52ch] text-[0.96875rem] leading-relaxed text-[#596579] sm:text-base">
              Discover opportunities, connect with great teams, and take the
              next step in your career.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:shrink-0">
            <Link
              href="/jobs"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-[#7C3AED] px-6 py-3 text-[0.96875rem] font-semibold text-white shadow-[0_12px_28px_-8px_rgba(124,58,237,0.55)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:scale-[1.015] active:scale-[0.98] hover:bg-[#6D28D9] hover:shadow-[0_16px_34px_-6px_rgba(124,58,237,0.68)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED] sm:w-auto"
            >
              <span>Explore Jobs</span>
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/employers"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] border-2 border-[#0D9488]/40 bg-white px-6 py-3 text-[0.96875rem] font-semibold text-[#115E59] shadow-[0_10px_24px_-12px_rgba(13,148,136,0.3)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:scale-[1.015] active:scale-[0.98] hover:border-[#0D9488] hover:bg-[#0D9488] hover:text-white hover:shadow-[0_16px_32px_-8px_rgba(13,148,136,0.45)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED] sm:w-auto"
            >
              <span>Hire Talent</span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-[#0D9488] transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
