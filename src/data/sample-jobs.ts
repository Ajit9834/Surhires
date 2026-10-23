import type { Job, JobType } from "@/types";

/**
 * Local mock dataset for the frontend-only Surhires demo.
 * All companies, compensation bands, and openings are illustrative.
 */
export const sampleJobs: Job[] = [
  {
    id: "frontend-engineer-northbeam",
    title: "Frontend Engineer",
    company: "Northbeam Labs",
    location: "Bengaluru, India",
    type: "Full-time",
    category: "Engineering",
    salaryRange: "₹18L – ₹26L / yr",
    postedLabel: "Posted 2 days ago",
    accent: "violet",
    description:
      "Build responsive TypeScript and React workflows for a supply-chain visibility platform used daily by 420 operations teams.",
    highlights: [
      "Ship accessible UI components in Next.js, TypeScript, and Tailwind CSS",
      "Partner directly with product designers from discovery wireframes to release",
      "Hybrid 2 days a week in Indiranagar with flexible core hours",
    ],
  },
  {
    id: "product-designer-tidewater",
    title: "Product Designer",
    company: "Tidewater Studio",
    location: "Remote (India)",
    type: "Remote",
    category: "Design",
    salaryRange: "₹15L – ₹23L / yr",
    postedLabel: "Posted 3 days ago",
    accent: "teal",
    description:
      "Design clear savings and onboarding journeys for a consumer finance app serving 1.2 million monthly active members.",
    highlights: [
      "Own end-to-end flows across mobile web, iOS, and shared Figma tokens",
      "Run bi-weekly usability sessions alongside a dedicated user researcher",
      "100% remote within India with quarterly team retreats",
    ],
  },
  {
    id: "backend-engineer-kestrel",
    title: "Backend Engineer (Node.js)",
    company: "Kestrel Pay",
    location: "Pune, India",
    type: "Full-time",
    category: "Engineering",
    salaryRange: "₹20L – ₹30L / yr",
    postedLabel: "Posted yesterday",
    accent: "coral",
    description:
      "Architect reliable settlement APIs and event pipelines processing over 6 million merchant payouts each month.",
    highlights: [
      "Design idempotent REST and webhook services backed by PostgreSQL",
      "Improve latency telemetry, automated integration suites, and runbooks",
      "Clear two-round technical process with zero unpaid take-home projects",
    ],
  },
  {
    id: "talent-partner-brightfold",
    title: "Senior Talent Partner",
    company: "Brightfold Group",
    location: "Mumbai, India",
    type: "Full-time",
    category: "People & Talent",
    salaryRange: "₹12L – ₹17L / yr",
    postedLabel: "Posted 4 days ago",
    accent: "sunshine",
    description:
      "Lead structured hiring across product and commercial teams, coaching hiring managers from intake brief through signed offer.",
    highlights: [
      "Manage 6–8 active searches at a sustainable, quality-first pace",
      "Introduce structured scorecards that keep candidate feedback timely",
      "Hybrid schedule in BKC with full health cover for dependents",
    ],
  },
  {
    id: "data-analyst-meridian",
    title: "Product Data Analyst",
    company: "Meridian Retail",
    location: "Hyderabad, India",
    type: "Contract",
    category: "Data",
    salaryRange: "₹1.25L / month",
    postedLabel: "Posted 3 days ago",
    accent: "teal",
    description:
      "Six-month contract building inventory forecasting models and self-serve SQL dashboards for a 240-store retail network.",
    highlights: [
      "Translate merchandising questions into clean dbt models and dashboards",
      "Present weekly demand insights to regional operations leads",
      "6-month initial contract with option to convert to full-time",
    ],
  },
  {
    id: "customer-success-lumen",
    title: "Customer Success Manager",
    company: "Lumen Desk",
    location: "Remote (India)",
    type: "Remote",
    category: "Customer Success",
    salaryRange: "₹13L – ₹18L / yr",
    postedLabel: "Posted 5 days ago",
    accent: "violet",
    description:
      "Guide 35 mid-market software teams through onboarding, quarterly business reviews, and multi-team expansion.",
    highlights: [
      "Own onboarding playbooks and healthy renewal outcomes across accounts",
      "Surface product feedback directly into monthly roadmap planning",
      "Async-friendly remote culture with home-office stipend",
    ],
  },
  {
    id: "content-marketer-fernhill",
    title: "Lifecycle Marketing Associate",
    company: "Fernhill Foods",
    location: "Delhi NCR, India",
    type: "Part-time",
    category: "Marketing",
    salaryRange: "₹50K / month",
    postedLabel: "Posted 5 days ago",
    accent: "coral",
    description:
      "Plan and write retention email campaigns, launch stories, and customer spotlights for a fast-growing pantry brand (24 hrs/wk).",
    highlights: [
      "Four mornings or three full days per week — choose the rhythm that fits",
      "Own A/B subject testing, customer interviews, and seasonal launches",
      "Ideal for marketers looking for focused part-time ownership",
    ],
  },
  {
    id: "qa-automation-harborline",
    title: "QA Automation Engineer",
    company: "Harborline Systems",
    location: "Chennai, India",
    type: "Full-time",
    category: "Engineering",
    salaryRange: "₹14L – ₹20L / yr",
    postedLabel: "Posted 1 week ago",
    accent: "teal",
    description:
      "Expand end-to-end Playwright coverage across checkout, invoicing, and accessibility checks for a B2B billing platform.",
    highlights: [
      "Integrate fast parallel Playwright runs into every pull request",
      "Pair with frontend engineers on automated WCAG contrast & keyboard checks",
      "Generous learning budget for testing conferences and certifications",
    ],
  },
  {
    id: "cloud-platform-arclight",
    title: "Cloud Platform Engineer",
    company: "Arclight Cloud",
    location: "Remote (Global)",
    type: "Contract",
    category: "Engineering",
    salaryRange: "₹2.2L – ₹2.8L / month",
    postedLabel: "Posted 6 days ago",
    accent: "violet",
    description:
      "Harden Terraform modules, CI deployment pipelines, and observability dashboards across multi-region Kubernetes clusters.",
    highlights: [
      "Nine-month remote contract working alongside four senior platform engineers",
      "Zero graveyard pager shifts thanks to follow-the-sun team coverage",
      "Transparent monthly retainer paid on a bi-weekly invoice cycle",
    ],
  },
  {
    id: "ux-writer-penrose",
    title: "UX Content Designer",
    company: "Penrose Health",
    location: "Bengaluru, India",
    type: "Part-time",
    category: "Design",
    salaryRange: "₹65K / month",
    postedLabel: "Posted 1 week ago",
    accent: "sunshine",
    description:
      "Craft calm, plain-language interface copy, appointment reminders, and help guides for a digital clinic platform.",
    highlights: [
      "20 hours per week collaborating with product design and clinical advisors",
      "Maintain voice, tone, and terminology guidelines across patient apps",
      "Remote-first with optional co-working passes in Bengaluru",
    ],
  },
  {
    id: "account-executive-stonebridge",
    title: "Mid-Market Account Executive",
    company: "Stonebridge SaaS",
    location: "Gurugram, India",
    type: "Full-time",
    category: "Sales",
    salaryRange: "₹12L base + ₹8L variable",
    postedLabel: "Posted 4 days ago",
    accent: "coral",
    description:
      "Run consultative product demos and close new-business partnerships with HR and finance leaders across 100–1,000 person companies.",
    highlights: [
      "Warm inbound pipeline supported by a dedicated SDR partner",
      "Uncapped quarterly commission with transparent quota attainment",
      "Hybrid 3 days a week near CyberHub with commuter allowance",
    ],
  },
  {
    id: "people-ops-ashgrove",
    title: "People Operations Coordinator",
    company: "Ashgrove Studio",
    location: "Remote (India)",
    type: "Remote",
    category: "People & Talent",
    salaryRange: "₹8L – ₹11L / yr",
    postedLabel: "Posted 9 days ago",
    accent: "teal",
    description:
      "Coordinate welcoming onboarding weeks, HRIS records, and clear team handbooks for a distributed 95-person creative studio.",
    highlights: [
      "Design thoughtful day-one experiences for hires across six states",
      "Streamline leave, equipment, and benefits documentation",
      "Clear growth path into People Partner within 18 months",
    ],
  },
];

export const jobTypes: JobType[] = ["Full-time", "Part-time", "Contract", "Remote"];

export const jobLocations: string[] = Array.from(
  new Set(sampleJobs.map((job) => job.location)),
).sort((a, b) => a.localeCompare(b));

export const featuredJobs: Job[] = sampleJobs.slice(0, 6);
