"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingPlans } from "@/components/employers/pricing-plans";

const PostJobForm = dynamic(() => import("@/components/employers/post-job-form").then((mod) => mod.PostJobForm), {
  ssr: false,
});

export function EmployerInteractiveSections() {
  const [selectedPlan, setSelectedPlan] = useState<string>("growth");

  return (
    <>
      <PricingPlans
        selectedPlan={selectedPlan}
        onChoosePlan={setSelectedPlan}
      />

      <section
        id="post-a-job"
        aria-labelledby="post-a-job-heading"
        className="scroll-mt-24 py-16 lg:py-24"
      >
        <Container className="max-w-[900px]">
          <SectionHeading
            eyebrow="Post a Job"
            eyebrowTone="teal"
            headingId="post-a-job-heading"
            title="Share your role brief in minutes"
            description="Test validation by submitting empty fields, or fill in a role brief to preview the confirmation experience."
          />

          <div className="mt-10">
            <PostJobForm
              selectedPlan={selectedPlan}
              onSelectPlan={setSelectedPlan}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
