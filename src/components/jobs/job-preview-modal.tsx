"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import type { Job } from "@/types";
import { Badge, type BadgeTone } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";

const typeBadgeTone: Record<Job["type"], BadgeTone> = {
  "Full-time": "violet",
  Remote: "teal",
  Contract: "coral",
  "Part-time": "sunshine",
};

export function JobPreviewModal({
  job,
  onClose,
}: {
  job: Job | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [appliedDemo, setAppliedDemo] = useState(false);

  useEffect(() => {
    if (!job) return;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [job, onClose]);

  if (!job) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#172554]/55 p-4 backdrop-blur-xs"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="job-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="animate-scale-in max-h-[90vh] w-full max-w-[600px] overflow-y-auto rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_28px_60px_-20px_rgba(23,37,84,0.45)] sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={typeBadgeTone[job.type]}>{job.type}</Badge>
              <Badge tone="neutral">{job.category}</Badge>
            </div>
            <h2
              id="job-modal-title"
              className="mt-3 text-2xl font-bold text-[#172554]"
            >
              {job.title}
            </h2>
            <p className="mt-1 text-[0.96875rem] font-medium text-[#596579]">
              {job.company} · {job.location}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close job preview dialog"
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl border border-[#E5E7EB] text-[#172554] transition-colors hover:bg-[#F4F3FF] hover:text-[#7C3AED]"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-3 rounded-2xl bg-[#FFFCF7] p-4 ring-1 ring-[#E5E7EB]">
          <div className="flex-1 basis-40">
            <p className="text-xs font-medium text-[#596579]">Compensation</p>
            <p className="mt-0.5 text-sm font-bold text-[#172554]">
              {job.salaryRange}
            </p>
          </div>
          <div className="flex-1 basis-40">
            <p className="text-xs font-medium text-[#596579]">Listing status</p>
            <p className="mt-0.5 text-sm font-bold text-[#115E59]">
              {job.postedLabel}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-base font-bold text-[#172554]">Role overview</h3>
          <p className="mt-2 leading-relaxed text-[#596579]">{job.description}</p>
        </div>

        <div className="mt-5">
          <h3 className="text-base font-bold text-[#172554]">
            What makes this role stand out
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {job.highlights.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-[0.9375rem] text-[#172033]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#CCFBF1] text-[#115E59]"
                >
                  <Check className="size-3.5 stroke-[2.5]" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {appliedDemo ? (
          <div
            role="status"
            aria-live="polite"
            className="animate-scale-in mt-6 rounded-2xl border border-[#15803D]/35 bg-[#DCFCE7]/65 p-4 text-sm text-[#14532D]"
          >
            <p className="font-bold">Demo application preview recorded locally</p>
            <p className="mt-1">
              Surhires is a frontend-only demonstration — no personal details
              were collected or sent to {job.company}.
            </p>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E7EB] pt-5">
            <Button
              type="button"
              variant="primary"
              onClick={() => setAppliedDemo(true)}
            >
              Quick apply (Demo)
            </Button>
            <ButtonLink
              href={`/jobs?keyword=${encodeURIComponent(job.category)}`}
              variant="subtle"
              onClick={onClose}
            >
              Similar {job.category} roles
            </ButtonLink>
          </div>
        )}
      </div>
    </div>
  );
}
