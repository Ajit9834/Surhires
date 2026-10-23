"use client";

import { memo } from "react";
import type { AccentTone, Job } from "@/types";
import { Badge, type BadgeTone } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const tileStyles: Record<AccentTone, string> = {
  violet: "bg-[#EDE9FE] text-[#6D28D9]",
  teal: "bg-[#CCFBF1] text-[#0F766E]",
  coral: "bg-[#FFE4DE] text-[#C2410C]",
  sunshine: "bg-[#FEF9C3] text-[#A16207]",
};

const typeBadgeTone: Record<Job["type"], BadgeTone> = {
  "Full-time": "violet",
  Remote: "teal",
  Contract: "coral",
  "Part-time": "sunshine",
};

const CategoryGlyph = memo(({ category }: { category: string }) => {
  if (category === "Engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12" />
      </svg>
    );
  }
  if (category === "Design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 0 0 0 18 2.5 2.5 0 0 0 2.5-2.5c0-.6-.2-1.2-.6-1.6a1.5 1.5 0 0 1 1.1-2.5H17a4 4 0 0 0 4-4c0-4.1-4-7.4-9-7.4Z" />
        <circle cx="8.5" cy="10.5" r="1" fill="currentColor" />
        <circle cx="12" cy="7.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (category === "Data") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M7 16v-5m5 5V6m5 10v-8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 19a8 8 0 0 1 16 0" />
    </svg>
  );
});

CategoryGlyph.displayName = "CategoryGlyph";

export const JobCard = memo(({
  job,
  onSelect,
}: {
  job: Job;
  onSelect: (job: Job, triggerEl: HTMLButtonElement) => void;
}) => {
  return (
    <article className="group flex h-full flex-col rounded-[22px] border border-[#E5E7EB] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(23,37,84,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#7C3AED]/45 hover:shadow-[0_20px_40px_-20px_rgba(124,58,237,0.24)]">
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-[14px] transition-transform duration-200 group-hover:scale-105",
            tileStyles[job.accent],
          )}
        >
          <CategoryGlyph category={job.category} />
        </span>

        <Badge tone={typeBadgeTone[job.type]}>{job.type}</Badge>
      </div>

      <div className="mt-4">
        <h3 className="text-[1.1875rem] font-bold leading-snug text-[#172554] transition-colors duration-150 group-hover:text-[#6D28D9]">
          {job.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#596579]">
          {job.company} · {job.category}
        </p>
      </div>

      <p className="mt-3.5 flex-1 text-[0.9375rem] leading-relaxed text-[#596579]">
        {job.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.875rem] font-medium text-[#172033]">
        <li className="inline-flex items-center gap-1.5">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="size-4 shrink-0 text-[#0D9488]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 17.5s5.5-4.4 5.5-9a5.5 5.5 0 1 0-11 0c0 4.6 5.5 9 5.5 9Z"
            />
            <circle cx="10" cy="8.5" r="2" />
          </svg>
          <span>
            <span className="sr-only">Location: </span>
            {job.location}
          </span>
        </li>
        <li className="inline-flex items-center gap-1.5">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="size-4 shrink-0 text-[#7C3AED]"
          >
            <rect x="2.5" y="4.5" width="15" height="11" rx="2.5" />
            <circle cx="10" cy="10" r="2.2" />
          </svg>
          <span>
            <span className="sr-only">Salary range: </span>
            {job.salaryRange}
          </span>
        </li>
      </ul>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#E5E7EB] pt-4">
        <span className="text-[0.8125rem] font-medium text-[#596579]">
          {job.postedLabel}
        </span>

        <button
          type="button"
          onClick={(event) => onSelect(job, event.currentTarget)}
          className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-[12px] bg-[#F4F3FF] px-4 py-2 text-[0.875rem] font-semibold text-[#5B21B6] transition-all duration-150 hover:bg-[#7C3AED] hover:text-white active:scale-[0.98]"
        >
          <span>View job</span>
          <span className="sr-only">
            : {job.title} at {job.company}
          </span>
          <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </div>
    </article>
  );
});

JobCard.displayName = "JobCard";
