import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { EmployerLogos } from "@/components/home/employer-logos";
import { HowItWorks } from "@/components/home/how-it-works";
import { FeaturedRoles } from "@/components/home/featured-roles";
import { Testimonials } from "@/components/home/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { homeFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Surhires — Good people. Great opportunities.",
  description:
    "Discover curated roles with transparent salary ranges, or connect your hiring team with skilled candidates faster on Surhires.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Surhires — Good people. Great opportunities.",
    description:
      "A modern, welcoming way to explore roles or publish transparent job briefs that attract the right talent.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EmployerLogos />
      <HowItWorks />
      <FeaturedRoles />
      <Testimonials />

      <section
        id="faq"
        aria-labelledby="home-faq-heading"
        className="scroll-mt-24 border-t border-[#E5E7EB]/80 bg-[#F4F3FF] py-16 lg:py-24"
      >
        <Container className="max-w-[860px]">
          <SectionHeading
            eyebrow="Frequently asked questions"
            eyebrowTone="teal"
            headingId="home-faq-heading"
            title="Helpful answers before you dive in"
            description="Everything candidates and visitors ask most about how Surhires works and how this demo is built."
          />

          <div className="mt-10">
            <FaqAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
