import { Container } from "@/components/ui/container";
import { FooterAmbientGlow } from "@/components/layout/FooterAmbientGlow";
import { FooterCTA } from "@/components/layout/FooterCTA";
import { FooterNewsletter } from "@/components/layout/FooterNewsletter";
import { FooterLinks } from "@/components/layout/FooterLinks";
import { FooterBottomBar } from "@/components/layout/FooterBottomBar";

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="relative overflow-hidden border-t border-[#E5E7EB] bg-white text-[#172033]"
    >
      {/* Crisp top multi-accent hairline */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-[#7C3AED] via-[#0D9488] to-[#F97360]"
      />

      {/* Subtle light-mode ambient glows & architectural grid */}
      <FooterAmbientGlow />

      <Container className="relative z-10 pt-14 sm:pt-18 lg:pt-20">
        {/* Top Prominent CTA Panel */}
        <FooterCTA />

        {/* Compact Animated Newsletter Subscription Card */}
        <FooterNewsletter />

        {/* Main 4-Column Responsive Footer Grid */}
        <FooterLinks />

        {/* Bottom Copyright, Tagline, Privacy Notice & Back-to-top */}
        <FooterBottomBar />
      </Container>
    </footer>
  );
}
