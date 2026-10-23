import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-hero-wash py-24 lg:py-32">
      <Container className="text-center">
        <div className="mx-auto max-w-[540px] rounded-[26px] border border-[#E5E7EB] bg-white p-8 shadow-[0_20px_48px_-24px_rgba(23,37,84,0.2)] sm:p-12">
          <Badge tone="coral" dot>
            Page not found
          </Badge>
          <h1 className="heading-section mt-4 text-[#172554]">
            That page seems to have moved on
          </h1>
          <p className="mt-3 text-[#596579]">
            Head back to the homepage, browse all 12 sample roles, or explore
            how hiring works on Surhires.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" variant="primary">
              Back to Home
            </ButtonLink>
            <ButtonLink href="/jobs" variant="secondary">
              Find Jobs
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
