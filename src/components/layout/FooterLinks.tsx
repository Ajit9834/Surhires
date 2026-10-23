"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { BriefcaseBusiness, ChevronRight } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";

interface FooterLinkGroup {
  heading: string;
  accentColor: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    heading: "For Job Seekers",
    accentColor: "group-hover:text-[#0F766E]",
    links: [
      { label: "Browse Jobs", href: "/jobs" },
      { label: "Career Resources", href: "/#how-it-works" },
      { label: "Job Search Tips", href: "/#testimonials" },
      { label: "Frequently Asked Questions", href: "/#faq" },
    ],
  },
  {
    heading: "For Employers",
    accentColor: "group-hover:text-[#7C3AED]",
    links: [
      { label: "Hire Talent", href: "/employers" },
      { label: "Post a Job", href: "/employers#post-a-job" },
      { label: "Pricing Plans", href: "/employers#pricing" },
      { label: "Employer Resources", href: "/employers#employer-faq" },
    ],
  },
  {
    heading: "Company",
    accentColor: "group-hover:text-[#0F766E]",
    links: [
      { label: "About Surhires", href: "/#how-it-works" },
      { label: "Contact Us", href: "/employers#post-a-job" },
      { label: "Privacy Policy", href: "#footer-legal-notice" },
      { label: "Terms of Service", href: "#footer-legal-notice" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.44,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function FooterLinks() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-12 lg:py-16"
    >
      {/* Column 1 — Brand */}
      <motion.div variants={columnVariants} className="max-w-sm">
        <Link
          href="/"
          aria-label="Surhires — Return to homepage"
          className="group inline-flex min-h-11 items-center gap-3 rounded-xl py-1 text-[1.35rem] font-extrabold tracking-tight text-[#172554] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
        >
          <span
            aria-hidden="true"
            className="relative grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#0D9488] text-white shadow-[0_10px_22px_-6px_rgba(124,58,237,0.5)] transition-transform duration-200 group-hover:scale-105"
          >
            <BriefcaseBusiness className="size-5" />
            <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-[#FACC15] ring-2 ring-white" />
          </span>

          <span>
            Sur<span className="text-[#7C3AED]">hires</span>
          </span>
        </Link>

        <p className="mt-4 text-[0.95rem] leading-relaxed text-[#596579]">
          Connecting ambitious people with teams building the future.
        </p>

        <SocialLinks />
      </motion.div>

      {/* Columns 2, 3, 4 — Navigation Columns */}
      {footerLinkGroups.map((group) => (
        <motion.nav
          key={group.heading}
          variants={columnVariants}
          aria-label={group.heading}
        >
          <h2 className="text-[0.9375rem] font-bold tracking-tight text-[#172554]">
            {group.heading}
          </h2>

          <ul className="mt-4 flex flex-col gap-1.5">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex min-h-10 items-center gap-1.5 rounded-lg py-1.5 text-[0.9375rem] text-[#596579] transition-colors duration-180 hover:text-[#172554] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                >
                  <ChevronRight
                    aria-hidden="true"
                    className={`size-3.5 -ml-0.5 text-[#94A3B8] transition-all duration-180 group-hover:translate-x-0.5 ${group.accentColor}`}
                  />
                  <span
                    className={`font-medium transition-colors duration-180 ${group.accentColor}`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      ))}
    </motion.div>
  );
}
