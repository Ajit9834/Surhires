import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Stories from both sides"
          eyebrowTone="coral"
          headingId="testimonials-heading"
          title="Clarity makes hiring better for everyone"
          description="Illustrative sample stories crafted for this assignment — showing how candidates and hiring managers experience transparent workflows."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => {
            const isHighlighted = item.surfaceAccent === "violet";
            const avatarStyles = [
              "bg-[#0F766E] text-white",
              "bg-[#7C3AED] text-white",
              "bg-[#C2410C] text-white",
            ][idx % 3];

            return (
              <li
                key={item.id}
                className={cn(
                  "flex h-full flex-col rounded-[22px] border p-7 transition-transform duration-200 hover:-translate-y-1",
                  isHighlighted
                    ? "border-[#DDD6FE] bg-gradient-to-b from-[#EDE9FE]/80 to-[#F4F3FF] shadow-[0_18px_40px_-22px_rgba(124,58,237,0.28)]"
                    : "border-[#E5E7EB] bg-white shadow-[0_8px_30px_-18px_rgba(23,37,84,0.12)]",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <Badge tone={item.audience === "Employer" ? "violet" : "teal"}>
                    {item.audience}
                  </Badge>
                  <span
                    aria-hidden="true"
                    className="font-serif text-3xl leading-none text-[#7C3AED]/35"
                  >
                    “
                  </span>
                </div>

                <blockquote className="mt-4 flex-1 text-[0.96875rem] leading-relaxed text-[#172033]">
                  <p>“{item.quote}”</p>
                </blockquote>

                <div className="mt-6 flex items-center gap-3.5 border-t border-[#E5E7EB]/85 pt-4">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "grid size-10 shrink-0 place-items-center rounded-full text-xs font-bold",
                      avatarStyles,
                    )}
                  >
                    {item.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#172554]">
                      {item.name}
                    </p>
                    <p className="text-xs font-medium text-[#596579]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
