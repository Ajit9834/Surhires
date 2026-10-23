"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField, inputControlClasses } from "@/components/ui/form-field";
import { Badge } from "@/components/ui/badge";
import { jobTypes } from "@/data/sample-jobs";
import { pricingPlans } from "@/data/pricing-plans";
import { cn } from "@/lib/utils";

interface PostJobValues {
  contactName: string;
  contactEmail: string;
  companyName: string;
  jobTitle: string;
  location: string;
  jobType: string;
  salaryRange: string;
  description: string;
  acceptsDemoTerms: boolean;
}

type FormErrors = Partial<Record<keyof PostJobValues, string>>;

const emptyValues: PostJobValues = {
  contactName: "",
  contactEmail: "",
  companyName: "",
  jobTitle: "",
  location: "",
  jobType: "",
  salaryRange: "",
  description: "",
  acceptsDemoTerms: false,
};

const samplePrefillValues: PostJobValues = {
  contactName: "Rohan Deshmukh",
  contactEmail: "rohan@northbeamlabs.example.com",
  companyName: "Northbeam Labs",
  jobTitle: "Senior Product Engineer",
  location: "Bengaluru · Hybrid (2 days/wk)",
  jobType: "Full-time",
  salaryRange: "₹24L – ₹32L / yr",
  description:
    "Lead frontend architecture across customer analytics dashboards, mentoring two engineers and partnering directly with product design.",
  acceptsDemoTerms: true,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateForm(values: PostJobValues): FormErrors {
  const errors: FormErrors = {};

  if (values.contactName.trim().length < 2) {
    errors.contactName = "Please enter your full name (at least 2 characters).";
  }
  if (!emailRegex.test(values.contactEmail.trim())) {
    errors.contactEmail =
      "Enter a valid work email address, such as hiring@company.com.";
  }
  if (values.companyName.trim().length < 2) {
    errors.companyName = "Enter your company or team name.";
  }
  if (values.jobTitle.trim().length < 3) {
    errors.jobTitle = "Enter a specific role title (at least 3 characters).";
  }
  if (values.location.trim().length < 2) {
    errors.location = "Specify a city or write “Remote (India)”.";
  }
  if (!values.jobType) {
    errors.jobType = "Select an employment type from the list.";
  }
  if (values.description.trim().length < 40) {
    errors.description =
      "Write at least 40 characters describing key responsibilities and skills.";
  }
  if (!values.acceptsDemoTerms) {
    errors.acceptsDemoTerms =
      "Confirm that you understand this is a frontend-only demonstration form.";
  }

  return errors;
}

export function PostJobForm({
  selectedPlan,
  onSelectPlan,
}: {
  selectedPlan: string;
  onSelectPlan: (planId: string) => void;
}) {
  const [values, setValues] = useState<PostJobValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const successCardRef = useRef<HTMLDivElement>(null);

  function updateField<K extends keyof PostJobValues>(
    field: K,
    value: PostJobValues[K],
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    const invalidKeys = Object.keys(validationErrors) as Array<
      keyof PostJobValues
    >;
    if (invalidKeys.length > 0) {
      document.getElementById(invalidKeys[0])?.focus();
      return;
    }

    setSubmitted(true);
    requestAnimationFrame(() => {
      successCardRef.current?.focus();
    });
  }

  function controlStateClasses(field: keyof PostJobValues) {
    return cn(
      inputControlClasses,
      errors[field]
        ? "border-[#B91C1C] bg-[#FEE2E2]/20"
        : "border-[#E5E7EB]",
    );
  }

  const chosenPlanObject =
    pricingPlans.find((plan) => plan.id === selectedPlan) ?? pricingPlans[1];

  if (submitted) {
    return (
      <div
        ref={successCardRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="animate-scale-in rounded-[24px] border-2 border-[#15803D]/40 bg-gradient-to-br from-[#DCFCE7]/55 via-white to-[#CCFBF1]/45 p-7 shadow-[0_20px_48px_-24px_rgba(21,128,61,0.3)] sm:p-9"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#DCFCE7] px-3.5 py-1 text-xs font-bold text-[#15803D]">
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clipRule="evenodd"
              />
            </svg>
            Demo job brief validated locally
          </span>
          <Badge tone="violet">{chosenPlanObject.name} plan</Badge>
        </div>

        <h3 className="mt-4 text-2xl font-bold text-[#172554]">
          Thank you, {values.contactName.trim()} — your sample brief is ready
        </h3>

        <p className="mt-2.5 max-w-[62ch] leading-relaxed text-[#172033]">
          Your role brief for{" "}
          <strong>{values.jobTitle.trim()}</strong> at{" "}
          <strong>{values.companyName.trim()}</strong> passed all client-side
          checks.{" "}
          <strong className="text-[#15803D]">
            Because Surhires is a frontend-only demonstration, this submission
            was processed locally in your browser and no live job listing was
            published or sent to a backend.
          </strong>
        </p>

        <dl className="mt-6 grid gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-5 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium text-[#596579]">Hiring contact</dt>
            <dd className="mt-0.5 font-semibold text-[#172554]">
              {values.contactName.trim()} ({values.contactEmail.trim()})
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#596579]">Role &amp; type</dt>
            <dd className="mt-0.5 font-semibold text-[#172554]">
              {values.jobTitle.trim()} · {values.jobType}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#596579]">Location</dt>
            <dd className="mt-0.5 font-semibold text-[#172554]">
              {values.location.trim()}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#596579]">Compensation</dt>
            <dd className="mt-0.5 font-semibold text-[#172554]">
              {values.salaryRange.trim() || "Discussed during intake"}
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button
            type="button"
            variant="primary"
            onClick={() => {
              setValues(emptyValues);
              setErrors({});
              setSubmitted(false);
            }}
          >
            Draft another demo role
          </Button>
          <Button
            type="button"
            variant="subtle"
            onClick={() => setSubmitted(false)}
          >
            Edit this brief
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_46px_-26px_rgba(23,37,84,0.22)] sm:p-9"
    >
      {/* Top notice + convenient sample prefill trigger */}
      <div className="flex flex-col justify-between gap-3 rounded-2xl border border-[#DDD6FE] bg-[#F4F3FF] p-4 sm:flex-row sm:items-center">
        <p className="text-sm text-[#172033]">
          <strong className="font-semibold text-[#172554]">
            Frontend demo form:
          </strong>{" "}
          Validates all fields in your browser without sending data to a server.
        </p>

        <button
          type="button"
          onClick={() => {
            setValues(samplePrefillValues);
            setErrors({});
          }}
          className="inline-flex min-h-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[#7C3AED]/35 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#5B21B6] transition-colors hover:bg-[#EDE9FE]"
        >
          Fill sample brief
        </button>
      </div>

      {/* Selected plan radio group */}
      <fieldset className="mt-6 border-0 p-0">
        <legend className="text-[0.875rem] font-semibold text-[#172554]">
          Choose a posting plan
        </legend>
        <div className="mt-2.5 grid gap-3 sm:grid-cols-3">
          {pricingPlans.map((plan) => {
            const active = selectedPlan === plan.id;
            return (
              <label
                key={plan.id}
                htmlFor={`form-plan-${plan.id}`}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-2xl border p-3.5 text-sm transition-all duration-150",
                  active
                    ? "border-[#7C3AED] bg-[#EDE9FE]/55 shadow-2xs"
                    : "border-[#E5E7EB] bg-white hover:border-[#7C3AED]/45",
                )}
              >
                <input
                  id={`form-plan-${plan.id}`}
                  type="radio"
                  name="selectedPlan"
                  value={plan.id}
                  checked={active}
                  onChange={() => onSelectPlan(plan.id)}
                  className="mt-1 size-4 accent-[#7C3AED]"
                />
                <span>
                  <span className="block font-bold text-[#172554]">
                    {plan.name}
                  </span>
                  <span className="block text-xs text-[#596579]">
                    {plan.priceLabel}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FormField
          id="contactName"
          label="Your name"
          required
          error={errors.contactName}
        >
          <input
            id="contactName"
            name="contactName"
            type="text"
            autoComplete="name"
            placeholder="e.g. Rohan Deshmukh"
            value={values.contactName}
            onChange={(event) => updateField("contactName", event.target.value)}
            aria-invalid={Boolean(errors.contactName) || undefined}
            aria-describedby={
              errors.contactName ? "contactName-error" : undefined
            }
            className={controlStateClasses("contactName")}
          />
        </FormField>

        <FormField
          id="contactEmail"
          label="Work email"
          required
          error={errors.contactEmail}
        >
          <input
            id="contactEmail"
            name="contactEmail"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="hiring@company.com"
            value={values.contactEmail}
            onChange={(event) =>
              updateField("contactEmail", event.target.value)
            }
            aria-invalid={Boolean(errors.contactEmail) || undefined}
            aria-describedby={
              errors.contactEmail ? "contactEmail-error" : undefined
            }
            className={controlStateClasses("contactEmail")}
          />
        </FormField>

        <FormField
          id="companyName"
          label="Company"
          required
          error={errors.companyName}
        >
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            placeholder="e.g. Northbeam Labs"
            value={values.companyName}
            onChange={(event) => updateField("companyName", event.target.value)}
            aria-invalid={Boolean(errors.companyName) || undefined}
            aria-describedby={
              errors.companyName ? "companyName-error" : undefined
            }
            className={controlStateClasses("companyName")}
          />
        </FormField>

        <FormField
          id="jobTitle"
          label="Role title"
          required
          error={errors.jobTitle}
        >
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            placeholder="e.g. Senior Frontend Engineer"
            value={values.jobTitle}
            onChange={(event) => updateField("jobTitle", event.target.value)}
            aria-invalid={Boolean(errors.jobTitle) || undefined}
            aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
            className={controlStateClasses("jobTitle")}
          />
        </FormField>

        <FormField
          id="location"
          label="Job location"
          required
          error={errors.location}
        >
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. Bengaluru · Hybrid or Remote (India)"
            value={values.location}
            onChange={(event) => updateField("location", event.target.value)}
            aria-invalid={Boolean(errors.location) || undefined}
            aria-describedby={errors.location ? "location-error" : undefined}
            className={controlStateClasses("location")}
          />
        </FormField>

        <FormField
          id="jobType"
          label="Job type"
          required
          error={errors.jobType}
        >
          <select
            id="jobType"
            name="jobType"
            value={values.jobType}
            onChange={(event) => updateField("jobType", event.target.value)}
            aria-invalid={Boolean(errors.jobType) || undefined}
            aria-describedby={errors.jobType ? "jobType-error" : undefined}
            className={controlStateClasses("jobType")}
          >
            <option value="">Select job type</option>
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <div className="mt-5">
        <FormField
          id="salaryRange"
          label="Compensation band (recommended)"
          hint="Roles that display a clear salary band receive higher-intent applications."
        >
          <input
            id="salaryRange"
            name="salaryRange"
            type="text"
            placeholder="e.g. ₹18L – ₹26L / yr"
            value={values.salaryRange}
            onChange={(event) => updateField("salaryRange", event.target.value)}
            aria-describedby="salaryRange-hint"
            className={controlStateClasses("salaryRange")}
          />
        </FormField>
      </div>

      <div className="mt-5">
        <FormField
          id="description"
          label="Job description"
          required
          hint={`${values.description.trim().length} / 40 minimum characters`}
          error={errors.description}
        >
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Share key outcomes for the first six months, team structure, and two or three core skills."
            value={values.description}
            onChange={(event) => updateField("description", event.target.value)}
            aria-invalid={Boolean(errors.description) || undefined}
            aria-describedby={
              errors.description ? "description-error" : "description-hint"
            }
            className={controlStateClasses("description")}
          />
        </FormField>
      </div>

      <div className="mt-6">
        <div className="flex items-start gap-3">
          <input
            id="acceptsDemoTerms"
            name="acceptsDemoTerms"
            type="checkbox"
            checked={values.acceptsDemoTerms}
            onChange={(event) =>
              updateField("acceptsDemoTerms", event.target.checked)
            }
            aria-invalid={Boolean(errors.acceptsDemoTerms) || undefined}
            aria-describedby={
              errors.acceptsDemoTerms ? "acceptsDemoTerms-error" : undefined
            }
            className="mt-1 size-4.5 shrink-0 cursor-pointer accent-[#7C3AED]"
          />
          <label
            htmlFor="acceptsDemoTerms"
            className="cursor-pointer text-sm text-[#172033]"
          >
            I understand that this is a frontend-only demo form and no live job
            vacancy will be published or stored.{" "}
            <span className="text-[#B91C1C]" aria-hidden="true">
              *
            </span>
          </label>
        </div>

        {errors.acceptsDemoTerms ? (
          <p
            id="acceptsDemoTerms-error"
            role="alert"
            className="mt-1.5 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-[#B91C1C]"
          >
            <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
            <span>{errors.acceptsDemoTerms}</span>
          </p>
        ) : null}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E7EB] pt-6">
        <Button type="submit" variant="primary" size="lg">
          Submit job brief (Demo)
        </Button>

        <p className="text-xs text-[#596579]">
          Fields marked <span className="font-bold text-[#B91C1C]">*</span> are
          required.
        </p>
      </div>
    </form>
  );
}
