export type JobType = "Full-time" | "Part-time" | "Contract" | "Remote";

export type AccentTone = "violet" | "teal" | "coral" | "sunshine";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  category: string;
  salaryRange: string;
  postedLabel: string;
  description: string;
  highlights: string[];
  accent: AccentTone;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceLabel: string;
  priceNote: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
  accent: AccentTone;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  audience: "Job seeker" | "Employer";
  surfaceAccent?: "white" | "violet" | "teal";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
