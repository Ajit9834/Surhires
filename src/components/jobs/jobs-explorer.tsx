"use client";

import { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { Job } from "@/types";
import { JobFilters, type JobFilterValues } from "@/components/jobs/job-filters";
import { JobCard } from "@/components/jobs/job-card";
import { EmptyState } from "@/components/jobs/empty-state";

const JobPreviewModal = dynamic(() => import("@/components/jobs/job-preview-modal").then((mod) => mod.JobPreviewModal), {
  ssr: false,
});
import { sampleJobs } from "@/data/sample-jobs";
import { normalise } from "@/lib/utils";

const emptyFilters: JobFilterValues = {
  keyword: "",
  location: "",
  type: "",
};

const quickCategories = ["Engineering", "Design", "Data", "People & Talent"];

export function JobsExplorer({
  initialKeyword = "",
  initialLocation = "",
  initialType = "",
}: {
  initialKeyword?: string;
  initialLocation?: string;
  initialType?: string;
}) {
  const [filters, setFilters] = useState<JobFilterValues>({
    keyword: initialKeyword,
    location: initialLocation,
    type: initialType,
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const isDirty =
    filters.keyword.trim() !== "" ||
    filters.location !== "" ||
    filters.type !== "";

  const filteredJobs = useMemo(() => {
    const query = normalise(filters.keyword);

    return sampleJobs.filter((job) => {
      const matchesKeyword =
        query === "" ||
        [job.title, job.company, job.category, job.description]
          .map(normalise)
          .some((field) => field.includes(query));

      const matchesLocation =
        filters.location === "" || job.location === filters.location;
      const matchesType =
        filters.type === "" || job.type === filters.type;

      return matchesKeyword && matchesLocation && matchesType;
    });
  }, [filters]);

  function handleChange(next: Partial<JobFilterValues>) {
    setFilters((current) => ({ ...current, ...next }));
  }

  function handleReset() {
    setFilters(emptyFilters);
  }

  function handleSelect(job: Job, triggerEl: HTMLButtonElement) {
    lastTriggerRef.current = triggerEl;
    setSelectedJob(job);
  }

  function handleCloseModal() {
    setSelectedJob(null);
    requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  }

  return (
    <div className="flex flex-col gap-8">
      <JobFilters
        values={filters}
        onChange={handleChange}
        onReset={handleReset}
        isDirty={isDirty}
      />

      {/* Quick category filter pills + live results count */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          className="text-[0.9375rem] font-semibold text-[#172554]"
        >
          Showing{" "}
          <span className="text-[#7C3AED]">{filteredJobs.length}</span> of{" "}
          {sampleJobs.length} sample roles
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-[#596579]">
            Popular searches:
          </span>
          {quickCategories.map((cat) => {
            const selected = normalise(filters.keyword) === normalise(cat);
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={selected}
                onClick={() =>
                  handleChange({ keyword: selected ? "" : cat })
                }
                className={`min-h-9 cursor-pointer rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                  selected
                    ? "border-[#7C3AED] bg-[#7C3AED] text-white"
                    : "border-[#E5E7EB] bg-white text-[#172554] hover:border-[#7C3AED]/45 hover:bg-[#F4F3FF]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {filteredJobs.length > 0 ? (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <li key={job.id}>
              <JobCard job={job} onSelect={handleSelect} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState onReset={handleReset} />
      )}

      <JobPreviewModal
        key={selectedJob?.id ?? "closed"}
        job={selectedJob}
        onClose={handleCloseModal}
      />
    </div>
  );
}
