import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { JobsExplorer } from "@/components/jobs/jobs-explorer";
import { jobLocations, jobTypes } from "@/data/sample-jobs";

export const metadata: Metadata = {
  title: "Find Jobs — Explore curated roles with transparent pay",
  description:
    "Search and filter sample openings across engineering, design, data, and people operations by keyword, location, and job type.",
  alternates: { canonical: "/jobs" },
  openGraph: {
    title: "Find work that moves you forward | Surhires",
    description:
      "Filter curated sample roles with upfront salary bands, clear location expectations, and instant client-side search.",
    url: "/jobs",
  },
};

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string; location?: string; type?: string }>;
}) {
  const params = await searchParams;
  const initialKeyword = (params.keyword ?? "").slice(0, 80);
  const initialLocation = jobLocations.includes(params.location ?? "")
    ? (params.location ?? "")
    : "";
  const initialType = (jobTypes as string[]).includes(params.type ?? "")
    ? (params.type ?? "")
    : "";

  return (
    <>
      <section
        aria-labelledby="jobs-page-heading"
        className="bg-hero-wash relative overflow-hidden border-b border-[#E5E7EB]/80 py-12 sm:py-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-16 right-8 size-64 rounded-full bg-[#7C3AED]/10 blur-3xl"
        />

        <Container className="relative z-10">
          <div className="animate-rise max-w-[700px]">
            <Badge tone="teal" dot>
              12 sample openings across India &amp; remote
            </Badge>

            <h1
              id="jobs-page-heading"
              className="heading-hero mt-4 text-[#172554]"
            >
              Find work that moves you forward
            </h1>

            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[#596579] sm:text-lg">
              Every card below displays compensation ranges, location rules, and
              role highlights up front. Filter in real time or open any listing
              to preview the full brief.
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Job listings directory" className="py-12 lg:py-16">
        <Container>
          <JobsExplorer
            key={`${initialKeyword}-${initialLocation}-${initialType}`}
            initialKeyword={initialKeyword}
            initialLocation={initialLocation}
            initialType={initialType}
          />

          <aside
            aria-label="Hiring callout"
            className="mt-14 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-[#DDD6FE] bg-[#F4F3FF] p-6 sm:flex-row sm:items-center sm:p-8"
          >
            <div>
              <h2 className="text-xl font-bold text-[#172554]">
                Hiring for your own team instead?
              </h2>
              <p className="mt-1.5 max-w-[58ch] text-sm leading-relaxed text-[#596579] sm:text-base">
                Compare Surhires posting plans or try our interactive frontend
                “Post a Job” brief builder on the Employers page.
              </p>
            </div>

            <ButtonLink
              href="/employers#post-a-job"
              variant="primary"
              className="shrink-0"
            >
              Post a Job →
            </ButtonLink>
          </aside>
        </Container>
      </section>
    </>
  );
}
