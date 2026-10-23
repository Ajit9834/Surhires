import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const workflowSteps = [
  {
    number: "01",
    title: "Discover opportunities",
    description:
      "Search curated roles with honest salary bands, work-style clarity, and zero vague buzzwords.",
    tileBg: "bg-[#EDE9FE] text-[#6D28D9]",
    badgeText: "text-[#5B21B6] bg-[#EDE9FE]/80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Connect with teams",
    description:
      "Share a focused profile with hiring managers who review matched shortlists in one collaborative space.",
    tileBg: "bg-[#CCFBF1] text-[#0F766E]",
    badgeText: "text-[#115E59] bg-[#CCFBF1]/80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 20v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Make your next move",
    description:
      "Receive timely feedback at every stage and step into a role aligned with how you do your best work.",
    tileBg: "bg-[#FFE4DE] text-[#C2410C]",
    badgeText: "text-[#9A3412] bg-[#FFE4DE]/80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-24 py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="How Surhires works"
          eyebrowTone="teal"
          headingId="how-it-works-heading"
          title="Three clear steps from first look to signed offer"
          description="Whether you are exploring your next role or building out a growing team, every step stays transparent and human."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {workflowSteps.map((step) => (
            <li
              key={step.number}
              className="group relative flex flex-col rounded-[22px] border border-[#E5E7EB] bg-white p-7 shadow-[0_8px_30px_-18px_rgba(23,37,84,0.12)] transition-all duration-200 hover:-translate-y-1 hover:border-[#7C3AED]/35 hover:shadow-[0_18px_38px_-18px_rgba(124,58,237,0.2)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  aria-hidden="true"
                  className={`grid size-13 place-items-center rounded-[16px] transition-transform duration-200 group-hover:scale-105 ${step.tileBg}`}
                >
                  {step.icon}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${step.badgeText}`}
                >
                  Step {step.number}
                </span>
              </div>

              <h3 className="mt-6 text-[1.25rem] font-bold text-[#172554]">
                {step.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-[#596579]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
