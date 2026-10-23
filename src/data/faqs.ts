import type { FaqItem } from "@/types";

export const homeFaqs: FaqItem[] = [
  {
    id: "cost",
    question: "Is Surhires completely free for job seekers?",
    answer:
      "Yes. Browsing roles, filtering by location or work style, and exploring role details are completely free for candidates. Hiring teams fund the platform through transparent posting plans.",
  },
  {
    id: "matching",
    question: "How does Surhires keep job listings clear and relevant?",
    answer:
      "Every employer uses a structured brief that encourages upfront salary ranges, clear location rules, and focused must-have skills — helping candidates spot genuine matches in seconds.",
  },
  {
    id: "updates",
    question: "How quickly do hiring teams typically respond?",
    answer:
      "Teams on Surhires commit to sharing clear status updates within ten business days so candidates are never left guessing after sending an application.",
  },
  {
    id: "demo-scope",
    question: "Are the job listings on this site real live vacancies?",
    answer:
      "No. Surhires is a frontend-only portfolio demonstration created for a Next.js assignment. All roles, companies, and testimonials use local mock data, and no personal data is transmitted or stored.",
  },
];

export const employerFaqs: FaqItem[] = [
  {
    id: "plans-flexibility",
    question: "Can we switch or pause plans as our hiring needs change?",
    answer:
      "Yes. Teams can start with a single Starter post and upgrade to Growth or Scale anytime their hiring roadmap expands, or pause monthly renewals with one click.",
  },
  {
    id: "brief-time",
    question: "How long does it take to publish a job brief?",
    answer:
      "Most hiring managers finish their first brief in six to eight minutes. Helpful prompts guide you on role outcomes, location expectations, and compensation clarity.",
  },
  {
    id: "team-collaboration",
    question: "Can multiple interviewers review shortlisted candidates together?",
    answer:
      "Growth and Scale plans include shared shortlists, structured evaluation notes, and role-level permissions so recruiters and hiring leads stay aligned.",
  },
  {
    id: "form-demo-notice",
    question: "Does submitting the Post a Job form publish a live role?",
    answer:
      "No. This assignment is intentionally frontend-only. Submitting the form validates every field locally in your browser and displays a confirmation preview without sending data to a server.",
  },
];
