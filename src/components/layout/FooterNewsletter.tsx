"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Mail, RotateCcw, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError("Please enter your email address before subscribing.");
      return;
    }

    if (!emailRegex.test(trimmed)) {
      setError("Enter a valid email address, such as you@domain.com.");
      return;
    }

    setError(null);
    setSubmittedEmail(trimmed);
  }

  function handleReset() {
    setSubmittedEmail(null);
    setEmail("");
    setError(null);
  }

  return (
    <div
      className="mt-6 rounded-[22px] border border-[#E5E7EB] bg-[#FFFCF7] p-6 shadow-[0_12px_34px_-22px_rgba(23,37,84,0.12)] sm:p-7"
    >
      <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_1.15fr]">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-2xl border border-[#99F6E4] bg-[#CCFBF1]/75 text-[#0F766E]"
          >
            <Mail className="size-5" />
          </span>

          <div>
            <h3 className="text-lg font-bold text-[#172554] sm:text-[1.1875rem]">
              Get career opportunities in your inbox.
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-[#596579]">
              Weekly highlights of transparent roles and hiring tips — demo
              preview only, zero spam.
            </p>
          </div>
        </div>

        <div aria-live="polite">
          {submittedEmail ? (
            <div
              key="newsletter-success"
              role="status"
              className="animate-scale-in flex flex-col justify-between gap-3 rounded-2xl border border-[#15803D]/35 bg-[#DCFCE7]/65 p-4 text-sm text-[#14532D] sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-2.5">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-[#15803D]"
                />
                <p className="leading-snug">
                  <strong className="font-semibold text-[#14532D]">
                    Demo preview active for {submittedEmail}:
                  </strong>{" "}
                  This frontend showcase does not store emails or send real
                  newsletters.
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#15803D]/30 bg-white px-3.5 py-2 text-xs font-semibold text-[#14532D] transition-colors hover:bg-[#DCFCE7] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
              >
                <RotateCcw aria-hidden="true" className="size-3.5" />
                <span>Reset</span>
              </button>
            </div>
          ) : (
            <form
              key="newsletter-form"
              noValidate
              onSubmit={handleSubmit}
              className="animate-scale-in"
            >
              <label
                htmlFor="footer-newsletter-email"
                className="block text-xs font-semibold tracking-wide text-[#172554]"
              >
                Email address
              </label>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  id="footer-newsletter-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError(null);
                  }}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={
                    error ? "footer-newsletter-error" : undefined
                  }
                  className={`min-h-11 w-full flex-1 rounded-xl border bg-white px-4 py-2.5 text-sm text-[#172033] transition-colors placeholder:text-[#6B7280] focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED] ${
                    error
                      ? "border-[#B91C1C] bg-[#FEE2E2]/25"
                      : "border-[#E5E7EB] hover:border-[#7C3AED]/60 focus:border-[#7C3AED]"
                  }`}
                />

                <button
                  type="submit"
                  className="inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#0D9488] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(124,58,237,0.45)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:scale-[1.015] active:scale-[0.98] hover:shadow-[0_14px_30px_-6px_rgba(13,148,136,0.5)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                >
                  <span>Subscribe</span>
                  <Send aria-hidden="true" className="size-4" />
                </button>
              </div>

              {error ? (
                <p
                  id="footer-newsletter-error"
                  role="alert"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#B91C1C]"
                >
                  <AlertCircle
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-[#B91C1C]"
                  />
                  <span>{error}</span>
                </p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
