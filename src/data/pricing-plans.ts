import type { PricingPlan } from "@/types";

/**
 * Sample pricing tiers for the Employers page.
 * Indicative demo pricing only — no checkout or billing occurs on this site.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    priceLabel: "₹4,999",
    priceNote: "per job post · live for 30 days",
    description:
      "Ideal for early teams filling an important single vacancy without monthly commitments.",
    accent: "teal",
    ctaLabel: "Start with Starter",
    features: [
      "1 active job post live for 30 days",
      "Structured salary and skills brief template",
      "Organized applicant inbox with CSV export",
      "Automatic candidate status updates",
      "Email support within 2 business days",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    priceLabel: "₹18,999",
    priceNote: "per month · cancel anytime",
    description:
      "Built for growing teams hiring steadily across engineering, product, design, and operations.",
    featured: true,
    accent: "violet",
    ctaLabel: "Choose Growth plan",
    features: [
      "Up to 5 active job posts at any time",
      "Featured placement badge for 7 days per role",
      "Collaborative team shortlisting & scorecards",
      "Smart skill-match highlights on every applicant",
      "Priority chat and email support within 8 hours",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    priceLabel: "Custom",
    priceNote: "annual partnership for multi-team hiring",
    description:
      "For high-velocity talent teams running multiple departments with custom workflows.",
    accent: "coral",
    ctaLabel: "Enquire about Scale",
    features: [
      "Unlimited active job posts and team seats",
      "Dedicated Surhires talent advisory partner",
      "Branded company hub and ATS webhook sync",
      "Quarterly compensation & funnel benchmarks",
      "Dedicated SLA with 2-hour response target",
    ],
  },
];
