import { Check } from "lucide-react";
import type { PricingPlan } from "@/types";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";
import { pricingPlans } from "@/data/pricing-plans";
import { cn } from "@/lib/utils";

export function PricingPlans({
  selectedPlan,
  onChoosePlan,
}: {
  selectedPlan: string;
  onChoosePlan: (planId: string) => void;
}) {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 border-y border-[#E5E7EB]/80 bg-[#F4F3FF] py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Transparent plans"
          eyebrowTone="violet"
          headingId="pricing-heading"
          title="Straightforward plans for every hiring stage"
          description="Sample pricing created for this frontend assignment — selecting a plan pre-fills the demo job brief form below with zero checkout."
        />

        <ul className="mt-12 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
          {pricingPlans.map((plan: PricingPlan) => {
            const isRecommended = Boolean(plan.featured);
            const isSelected = selectedPlan === plan.id;

            return (
              <li
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-[24px] bg-white p-7 transition-all duration-200 hover:-translate-y-1 sm:p-8",
                  isRecommended
                    ? "border-2 border-[#7C3AED] shadow-[0_22px_50px_-24px_rgba(124,58,237,0.38)]"
                    : "border border-[#E5E7EB] shadow-[0_10px_32px_-20px_rgba(23,37,84,0.14)]",
                )}
              >
                <div className="flex min-h-7 items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-[#172554]">
                    {plan.name}
                  </h3>
                  {isRecommended ? (
                    <Badge tone="violet">Recommended</Badge>
                  ) : isSelected ? (
                    <Badge tone="teal">Selected below</Badge>
                  ) : null}
                </div>

                <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#596579]">
                  {plan.description}
                </p>

                <div className="mt-6 rounded-2xl bg-[#FFFCF7] p-4 ring-1 ring-[#E5E7EB]">
                  <p className="text-3xl font-extrabold tracking-tight text-[#172554]">
                    {plan.priceLabel}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#596579]">
                    {plan.priceNote}
                  </p>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[0.9375rem] text-[#172033]"
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          isRecommended
                            ? "bg-[#EDE9FE] text-[#6D28D9]"
                            : "bg-[#CCFBF1] text-[#0F766E]",
                        )}
                      >
                        <Check className="size-3.5 stroke-[2.5]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <a
                    href="#post-a-job"
                    onClick={() => onChoosePlan(plan.id)}
                    className={buttonClasses(
                      isRecommended ? "primary" : "secondary",
                      "lg",
                      "w-full",
                    )}
                  >
                    {plan.ctaLabel}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
