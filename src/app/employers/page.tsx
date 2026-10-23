import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { EmployerInteractiveSections } from "@/components/employers/employer-interactive-sections";
import { employerFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Employers — Post a Job & meet relevant candidates faster",
  description:
    "Publish transparent job briefs, compare Starter, Growth, and Scale plans, and try the interactive Surhires Post a Job demo form.",
  alternates: { canonical: "/employers" },
  openGraph: {
    title: "Meet the people who move your business forward | Surhires",
    description:
      "Connect your team with skilled candidates using structured briefs, collaborative shortlists, and clear plans.",
    url: "/employers",
  },
};

const employerPillars = [
  {
    title: "Structured briefs that self-qualify",
    body: "Clear prompts around outcomes, work style, and pay bands help strong-fit candidates step forward immediately.",
    tileStyle: "bg-[#EDE9FE] text-[#6D28D9]",
    badge: "Clarity first",
  },
  {
    title: "Shared team shortlists",
    body: "Keep recruiter notes, hiring manager scorecards, and stage decisions organized in one calm workspace.",
    tileStyle: "bg-[#CCFBF1] text-[#0F766E]",
    badge: "Zero thread chaos",
  },
  {
    title: "Respectful candidate updates",
    body: "Timely automated status nudges protect your employer reputation with every person who applies.",
    tileStyle: "bg-[#FFE4DE] text-[#C2410C]",
    badge: "Brand trust",
  },
  {
    title: "Actionable hiring velocity insights",
    body: "Understand funnel health, response speed, and offer acceptance without exporting spreadsheets.",
    tileStyle: "bg-[#FEF9C3] text-[#A16207]",
    badge: "Live metrics",
  },
];

export default function EmployersPage() {
  return (
    <>
      {/* Employer Hero */}
      <section
        aria-labelledby="employers-hero-heading"
        className="bg-employer-wash relative overflow-hidden border-b border-[#E5E7EB]/80 py-14 sm:py-18 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none select-none absolute -top-20 right-10 size-72 rounded-full bg-[#0D9488]/14 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-12 left-10 size-52 rounded-full bg-[#F97360]/14 blur-3xl"
        />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <Badge tone="violet" dot className="animate-fade-up">
                For growing hiring teams
              </Badge>

              <h1
                id="employers-hero-heading"
                className="heading-hero mt-5 text-[#172554]"
              >
                Meet the people who move your business forward
              </h1>

              <p className="animate-fade-up delay-75 mt-5 max-w-[58ch] text-base leading-relaxed text-[#596579] sm:text-lg">
                Publish a structured role brief once and connect with motivated
                candidates across engineering, design, data, and operations —
                without drowning in mismatched applications.
              </p>

              <div className="animate-fade-up delay-150 mt-8 flex flex-col gap-3.5 sm:flex-row">
                <ButtonLink href="#post-a-job" variant="primary" size="lg">
                  Post a Job
                </ButtonLink>
                <ButtonLink href="#pricing" variant="secondary" size="lg">
                  Explore Plans
                </ButtonLink>
              </div>
            </div>

            {/* Right column: Hiring Funnel Snapshot Card */}
            <div className="animate-fade-up delay-150 rounded-[26px] border border-white/85 bg-white/85 p-6 shadow-[0_24px_54px_-26px_rgba(23,37,84,0.3)] backdrop-blur-md sm:p-7">
              <div className="flex items-center justify-between gap-2 border-b border-[#E5E7EB] pb-4">
                <div>
                  <p className="text-xs font-semibold text-[#7C3AED]">
                    Illustrative hiring funnel
                  </p>
                  <p className="mt-0.5 text-lg font-bold text-[#172554]">
                    Active shortlist snapshot
                  </p>
                </div>
                <Badge tone="teal">Sample metrics</Badge>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-4">
                {[
                  {
                    value: "11 days",
                    label: "Median kick-off to offer",
                    accent: "text-[#7C3AED]",
                  },
                  {
                    value: "4.2x",
                    label: "Stronger shortlist fit",
                    accent: "text-[#0F766E]",
                  },
                  {
                    value: "6 mins",
                    label: "Average brief setup time",
                    accent: "text-[#172554]",
                  },
                  {
                    value: "94%",
                    label: "Candidate reply satisfaction",
                    accent: "text-[#C2410C]",
                  },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-[#E5E7EB] bg-[#FFFCF7] p-4"
                  >
                    <dt className="text-xs font-medium text-[#596579]">
                      {metric.label}
                    </dt>
                    <dd
                      className={`mt-1 text-2xl font-extrabold ${metric.accent}`}
                    >
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Hire on Surhires */}
      <section
        id="why-surhires"
        aria-labelledby="why-surhires-heading"
        className="scroll-mt-24 py-16 lg:py-24"
      >
        <Container>
          <SectionHeading
            eyebrow="Why teams choose Surhires"
            eyebrowTone="coral"
            headingId="why-surhires-heading"
            title="Designed around clarity, speed, and candidate trust"
            description="Every workflow removes friction between busy hiring managers and skilled people exploring their next role."
          />

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {employerPillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className="flex flex-col rounded-[22px] border border-[#E5E7EB] bg-white p-7 shadow-[0_8px_30px_-18px_rgba(23,37,84,0.12)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    aria-hidden="true"
                    className={`grid size-11 place-items-center rounded-2xl text-sm font-extrabold ${pillar.tileStyle}`}
                  >
                    0{index + 1}
                  </span>
                  <span className="rounded-full bg-[#F4F3FF] px-3 py-1 text-xs font-semibold text-[#172554]">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-[1.25rem] font-bold text-[#172554]">
                  {pillar.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[#596579]">
                  {pillar.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Synced Pricing Plans + Post a Job Form */}
      <EmployerInteractiveSections />

      {/* Employer FAQ */}
      <section
        id="employer-faq"
        aria-labelledby="employer-faq-heading"
        className="scroll-mt-24 border-t border-[#E5E7EB]/80 bg-[#F4F3FF] py-16 lg:py-24"
      >
        <Container className="max-w-[860px]">
          <SectionHeading
            eyebrow="Employer FAQ"
            eyebrowTone="teal"
            headingId="employer-faq-heading"
            title="Common questions from hiring teams"
            description="Clear answers on plan flexibility, brief setup, and how this frontend demonstration works."
          />

          <div className="mt-10">
            <FaqAccordion items={employerFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
