"use client";

import { motion } from "framer-motion";
import { ArrowUp, ShieldCheck, Sparkles } from "lucide-react";

export function FooterBottomBar() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }

  return (
    <div className="border-t border-[#E5E7EB] pt-6 pb-10">
      {/* Transparent Privacy & Terms notice anchored for Column 4 links */}
      <div
        id="footer-legal-notice"
        className="mb-6 scroll-mt-28 flex items-start gap-2.5 rounded-xl border border-[#E5E7EB] bg-[#FFFCF7] px-4 py-3 text-xs leading-relaxed text-[#596579] target:border-[#7C3AED] target:bg-[#F4F3FF]"
      >
        <ShieldCheck
          aria-hidden="true"
          className="mt-0.5 size-4 shrink-0 text-[#0F766E]"
        />
        <p>
          <strong className="font-semibold text-[#172554]">
            Privacy &amp; Terms Notice:
          </strong>{" "}
          Surhires is a frontend-only marketing showcase using local sample
          data. No tracking cookies, personal emails, or real job applications
          are transmitted or stored.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-sm text-[#596579] md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Surhires. All rights reserved.</p>

        <p className="inline-flex items-center gap-1.5 font-semibold text-[#172554]">
          <Sparkles aria-hidden="true" className="size-3.5 text-[#CA8A04]" />
          <span>Made for people and possibilities.</span>
        </p>

        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#FFFCF7] px-4 py-2 text-xs font-semibold text-[#172554] transition-colors duration-150 hover:border-[#7C3AED] hover:bg-[#EDE9FE] hover:text-[#5B21B6] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
        >
          <span>Back to top</span>
          <ArrowUp aria-hidden="true" className="size-3.5 text-[#7C3AED]" />
        </motion.button>
      </div>
    </div>
  );
}
