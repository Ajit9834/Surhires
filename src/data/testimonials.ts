import type { Testimonial } from "@/types";

/**
 * Illustrative sample testimonials written for the Surhires frontend assignment.
 * Names and roles are generic sample personas and do not represent verified endorsements.
 */
export const testimonials: Testimonial[] = [
  {
    id: "aarti",
    quote:
      "Every role showed the real salary band, reporting line, and location expectations right up front. I applied to three matched openings on Sunday and booked two first-round chats by Wednesday.",
    name: "Aarti Menon",
    role: "Senior Product Designer · Sample candidate story",
    initials: "AM",
    audience: "Job seeker",
    surfaceAccent: "white",
  },
  {
    id: "devesh",
    quote:
      "Writing a structured brief took under ten minutes and immediately improved applicant quality. Our engineering leads finally reviewed shortlists in one calm workspace instead of scattered threads.",
    name: "Devesh Kulkarni",
    role: "VP of Engineering · Sample hiring lead story",
    initials: "DK",
    audience: "Employer",
    surfaceAccent: "violet",
  },
  {
    id: "meera",
    quote:
      "Even when a role filled with another candidate, I received a clear update within a week. That kind of respect makes you want to come back whenever you are ready for your next move.",
    name: "Meera Subramanian",
    role: "Lifecycle Marketer · Sample candidate story",
    initials: "MS",
    audience: "Job seeker",
    surfaceAccent: "white",
  },
];
