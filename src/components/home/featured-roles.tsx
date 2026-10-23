"use client";

import { useRef, useState } from "react";
import type { Job } from "@/types";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { JobCard } from "@/components/jobs/job-card";
import { JobPreviewModal } from "@/components/jobs/job-preview-modal";
import { featuredJobs } from "@/data/sample-jobs";

export function FeaturedRoles() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  function handleSelect(job: Job, triggerEl: HTMLButtonElement) {
    lastTriggerRef.current = triggerEl;
    setSelectedJob(job);
  }

  function handleClose() {
    setSelectedJob(null);
    requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  }

  return (
    <section
      id="featured-roles"
      aria-labelledby="featured-roles-heading"
      className="scroll-mt-24 border-y border-[#E5E7EB]/80 bg-[#F4F3FF] py-16 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Featured jobs"
            eyebrowTone="violet"
            headingId="featured-roles-heading"
            title="Curated openings worth your attention"
            description="Sample roles from teams that publish compensation ranges, clear location expectations, and thoughtful briefs."
          />

          <ButtonLink href="/jobs" variant="secondary" className="shrink-0 self-start md:self-auto">
            Explore all 12 jobs →
          </ButtonLink>
        </div>

        <ul className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <li key={job.id}>
              <JobCard
                job={job}
                onSelect={handleSelect}
              />
            </li>
          ))}
        </ul>

        <JobPreviewModal
          key={selectedJob?.id ?? "closed"}
          job={selectedJob}
          onClose={handleClose}
        />
      </Container>
    </section>
  );
}
