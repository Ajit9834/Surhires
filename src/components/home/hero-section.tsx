import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink, buttonClasses } from "@/components/ui/button";
import { jobLocations } from "@/data/sample-jobs";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-hero-wash relative overflow-hidden border-b border-[#E5E7EB]/80 py-14 sm:py-18 lg:py-24"
    >
      {/* Decorative ambient color shapes kept safely behind content */}
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none select-none absolute -top-20 -right-16 size-80 rounded-full bg-[#7C3AED]/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float-gentle pointer-events-none select-none absolute top-1/2 -left-20 size-72 rounded-full bg-[#0D9488]/14 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-1/3 bottom-6 size-28 rounded-full bg-[#FACC15]/20 blur-2xl"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          {/* Left column: Reading order -> Eyebrow, Headline, Copy, CTAs, Compact Search */}
          <div className="animate-fade-up">
            <Badge tone="violet" dot>
              A better way to find your next opportunity
            </Badge>

            <h1 id="hero-heading" className="heading-hero mt-5 text-[#172554]">
              Good people.{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#0D9488] bg-clip-text text-transparent">
                Great opportunities.
              </span>
            </h1>

            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-[#596579] sm:text-lg">
              Surhires connects thoughtful candidates with teams that are
              building meaningful work — with upfront salary bands, clear role
              expectations, and timely human updates.
            </p>

            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <ButtonLink href="/jobs" variant="primary" size="lg">
                Find a Job
              </ButtonLink>
              <ButtonLink href="/employers" variant="secondary" size="lg">
                Hire Faster
              </ButtonLink>
            </div>

            {/* Progressive-enhancement compact job search bar */}
            <form
              action="/jobs"
              method="get"
              aria-label="Quick job search"
              className="mt-8 rounded-[20px] border border-[#E5E7EB] bg-white/95 p-3 shadow-[0_18px_40px_-24px_rgba(23,37,84,0.28)] backdrop-blur-xs"
            >
              <div className="grid gap-2.5 sm:grid-cols-[1.15fr_1fr_auto] sm:items-end">
                <div>
                  <label
                    htmlFor="hero-keyword"
                    className="block px-1.5 text-xs font-semibold text-[#172554]"
                  >
                    Keyword or role
                  </label>
                  <input
                    id="hero-keyword"
                    name="keyword"
                    type="search"
                    placeholder="Frontend, Design, Data..."
                    className="mt-1 min-h-11 w-full rounded-[12px] border border-[#E5E7EB] bg-[#FFFCF7] px-3.5 py-2 text-sm text-[#172033] placeholder:text-[#6B7280] focus:border-[#7C3AED] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-location"
                    className="block px-1.5 text-xs font-semibold text-[#172554]"
                  >
                    Location
                  </label>
                  <select
                    id="hero-location"
                    name="location"
                    defaultValue=""
                    className="mt-1 min-h-11 w-full rounded-[12px] border border-[#E5E7EB] bg-[#FFFCF7] px-3 py-2 text-sm text-[#172033] focus:border-[#7C3AED] focus:bg-white"
                  >
                    <option value="">All locations</option>
                    {jobLocations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className={buttonClasses("primary", "md", "w-full sm:w-auto")}
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right column: Original Composed Candidate & Opportunity UI Stack */}
          <div className="animate-fade-up delay-150 relative mx-auto w-full max-w-[520px] lg:max-w-none">
            {/* Decorative geometric accents behind card composition */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-5 -right-3 size-20 rounded-full border-8 border-[#FACC15]/55"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -left-4 size-24 rounded-[28px] bg-[#FFE4DE]"
            />

            <div className="relative flex flex-col gap-4 rounded-[26px] border border-white/80 bg-white/75 p-5 shadow-[0_26px_60px_-28px_rgba(23,37,84,0.32)] backdrop-blur-md sm:p-6">
              {/* Top status chip row */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-semibold text-[#15803D]">
                  <span aria-hidden="true" className="size-2 rounded-full bg-[#15803D]" />
                  96% skill match ready
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF9C3] px-3 py-1 text-xs font-semibold text-[#854D0E]">
                  <Sparkles aria-hidden="true" className="size-3.5 text-[#CA8A04]" />
                  <span>Verified salary bands</span>
                </span>
              </div>

              {/* Composed Card 1: Candidate Profile Preview */}
              <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-4.5 shadow-2xs">
                <div className="flex items-center gap-3.5">
                  <div
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-sm font-bold text-white"
                  >
                    PN
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-base font-bold text-[#172554]">
                        Priya Nair
                      </p>
                      <span className="rounded-full bg-[#EDE9FE] px-2.5 py-0.5 text-xs font-semibold text-[#5B21B6]">
                        Open to roles
                      </span>
                    </div>
                    <p className="text-sm text-[#596579]">
                      Senior UI Engineer · 6 yrs experience
                    </p>
                  </div>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {["Next.js", "TypeScript", "Design Systems", "WCAG AA"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-[#F4F3FF] px-2.5 py-1 text-xs font-medium text-[#172554]"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Composed Card 2: Matched Role Card */}
              <div className="rounded-[20px] border border-[#99F6E4] bg-gradient-to-br from-white to-[#CCFBF1]/35 p-4.5 shadow-2xs">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-[#0F766E]">
                      Matched opening · Northbeam Labs
                    </p>
                    <p className="mt-0.5 text-base font-bold text-[#172554]">
                      Frontend Engineer
                    </p>
                  </div>
                  <span className="rounded-full bg-[#FFE4DE] px-2.5 py-1 text-xs font-semibold text-[#9A3412]">
                    ₹18L – ₹26L
                  </span>
                </div>

                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-[#E5E7EB]/80 pt-3 text-xs text-[#596579]">
                  <span>Bengaluru · Hybrid (2 days)</span>
                  <span className="font-semibold text-[#115E59]">
                    Interview invite sent →
                  </span>
                </div>
              </div>

              {/* Compact Metrics Footer inside composition */}
              <dl className="grid grid-cols-3 gap-3 rounded-2xl bg-[#FFFCF7] p-3.5 text-center ring-1 ring-[#E5E7EB]">
                <div>
                  <dt className="text-xs text-[#596579]">Sample roles</dt>
                  <dd className="text-lg font-extrabold text-[#172554]">12+</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#596579]">Median reply</dt>
                  <dd className="text-lg font-extrabold text-[#7C3AED]">
                    4 days
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#596579]">Salary clarity</dt>
                  <dd className="text-lg font-extrabold text-[#0F766E]">
                    100%
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
