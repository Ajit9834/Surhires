"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { jobLocations, jobTypes } from "@/data/sample-jobs";
import { inputControlClasses } from "@/components/ui/form-field";

export interface JobFilterValues {
  keyword: string;
  location: string;
  type: string;
}

export function JobFilters({
  values,
  onChange,
  onReset,
  isDirty,
}: {
  values: JobFilterValues;
  onChange: (next: Partial<JobFilterValues>) => void;
  onReset: () => void;
  isDirty: boolean;
}) {
  const [mobileExpanded, setMobileExpanded] = useState(true);

  const activeChips: Array<{
    key: keyof JobFilterValues;
    label: string;
    chipClass: string;
  }> = [];

  if (values.keyword.trim()) {
    activeChips.push({
      key: "keyword",
      label: `Keyword: “${values.keyword.trim()}”`,
      chipClass: "bg-[#EDE9FE] text-[#5B21B6] border-[#DDD6FE]",
    });
  }
  if (values.location) {
    activeChips.push({
      key: "location",
      label: `Location: ${values.location}`,
      chipClass: "bg-[#CCFBF1] text-[#115E59] border-[#99F6E4]",
    });
  }
  if (values.type) {
    activeChips.push({
      key: "type",
      label: `Type: ${values.type}`,
      chipClass: "bg-[#FFE4DE] text-[#9A3412] border-[#FECACA]",
    });
  }

  return (
    <form
      role="search"
      aria-labelledby="job-filters-heading"
      onSubmit={(event) => event.preventDefault()}
      className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_14px_38px_-22px_rgba(23,37,84,0.18)] sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2
            id="job-filters-heading"
            className="text-lg font-bold text-[#172554]"
          >
            Search and filter roles
          </h2>
          <p className="text-sm text-[#596579]">
            Filter sample openings by keyword, location, or work arrangement.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-expanded={mobileExpanded}
            aria-controls="filter-select-group"
            onClick={() => setMobileExpanded((prev) => !prev)}
            className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-[#FFFCF7] px-3.5 py-2 text-xs font-semibold text-[#172554] md:hidden"
          >
            {mobileExpanded ? "Hide extra filters" : "More filters"}
          </button>

          {isDirty ? (
            <Button
              type="button"
              variant="subtle"
              onClick={onReset}
              className="min-h-10 px-4 py-2 text-sm"
            >
              Clear filters
            </Button>
          ) : null}
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <label
            htmlFor="keyword"
            className="block text-sm font-semibold text-[#172554]"
          >
            Keyword, role, or company
          </label>
          <input
            id="keyword"
            name="keyword"
            type="search"
            autoComplete="off"
            placeholder="e.g. Frontend, Design, Northbeam..."
            value={values.keyword}
            onChange={(event) => onChange({ keyword: event.target.value })}
            className={`${inputControlClasses} border-[#E5E7EB]`}
          />
        </div>

        <div
          id="filter-select-group"
          className={`${mobileExpanded ? "contents" : "hidden md:contents"}`}
        >
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-[#172554]"
            >
              Location
            </label>
            <select
              id="location"
              name="location"
              value={values.location}
              onChange={(event) => onChange({ location: event.target.value })}
              className={`${inputControlClasses} border-[#E5E7EB]`}
            >
              <option value="">All locations</option>
              {jobLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="type"
              className="block text-sm font-semibold text-[#172554]"
            >
              Job type
            </label>
            <select
              id="type"
              name="type"
              value={values.type}
              onChange={(event) => onChange({ type: event.target.value })}
              className={`${inputControlClasses} border-[#E5E7EB]`}
            >
              <option value="">All job types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Removable active filter chips */}
      {activeChips.length > 0 ? (
        <div
          aria-label="Active filters"
          className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#E5E7EB] pt-4"
        >
          <span className="text-xs font-semibold text-[#596579]">
            Active filters:
          </span>

          {activeChips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={() => onChange({ [chip.key]: "" })}
              aria-label={`Remove ${chip.label}`}
              className={`inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-opacity hover:opacity-85 ${chip.chipClass}`}
            >
              <span>{chip.label}</span>
              <span aria-hidden="true" className="text-sm leading-none">
                ×
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </form>
  );
}
