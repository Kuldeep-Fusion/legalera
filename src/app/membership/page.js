"use client";

// ============================================================================
// MEMBERSHIP & SUBSCRIPTION PAGE ("/membership")
// ============================================================================
// Shows:
// 1. Hero with working Annual / Monthly billing toggle
// 2. 3 Membership Pricing Tiers
// 3. Member Benefits strip
// 4. Testimonials & FAQ Accordion
// ============================================================================

import { useState } from "react";
import {
  MEMBER_BENEFITS,
  MEMBERSHIP_FAQS,
  MEMBERSHIP_PLANS,
  TESTIMONIALS,
} from "@/data/membership";
import {
  BellIcon,
  BookIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  GavelIcon,
  TrophyIcon,
} from "@/components/ui/Icons";

function renderBenefitIcon(iconName) {
  if (iconName === "gavel") return <GavelIcon className="w-7 h-7 text-accent-dark" />;
  if (iconName === "menu_book") return <BookIcon className="w-7 h-7 text-accent-dark" />;
  if (iconName === "notifications_active") return <BellIcon className="w-7 h-7 text-accent-dark" />;
  return <TrophyIcon className="w-7 h-7 text-accent-dark" />;
}

export default function MembershipPage() {
  const [billingMode, setBillingMode] = useState("annual");
  const [selectedPlanMessage, setSelectedPlanMessage] = useState("");

  return (
    <main className="flex-1">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-on-primary border-b-4 border-accent py-12">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center flex flex-col items-center gap-4">
          <span className="px-3 py-1 rounded-sm bg-accent text-on-accent font-label text-label-md uppercase tracking-wider">
            LEGAL ERA Membership
          </span>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary text-balance">
            Authoritative Legal Intelligence for Counsel, Partners &amp; Leaders
          </h1>
          <p className="font-body text-body-lg text-primary-container max-w-2xl text-pretty">
            Get unlimited access to Supreme Court &amp; High Court judgment analyses, corporate deal trackers, the digital LEGAL ERA Magazine archive, and priority summit seating.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-3 inline-flex items-center p-1 rounded bg-secondary border border-outline">
            <button
              type="button"
              onClick={() => setBillingMode("annual")}
              className={`px-4 py-2 rounded-sm font-label text-label-md transition-colors ${
                billingMode === "annual"
                  ? "bg-accent text-on-accent"
                  : "text-primary-container hover:text-on-primary"
              }`}
            >
              Annual Billing (Save 20%)
            </button>
            <button
              type="button"
              onClick={() => setBillingMode("monthly")}
              className={`px-4 py-2 rounded-sm font-label text-label-md transition-colors ${
                billingMode === "monthly"
                  ? "bg-accent text-on-accent"
                  : "text-primary-container hover:text-on-primary"
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>
      </section>

      {/* Plan selection banner */}
      {selectedPlanMessage && (
        <div className="site-container pt-6">
          <div className="bg-surface-container-low border-l-4 border-success p-4 rounded flex items-center justify-between">
            <span className="font-body text-body-md text-on-surface">{selectedPlanMessage}</span>
            <button
              type="button"
              onClick={() => setSelectedPlanMessage("")}
              className="font-label text-label-md text-primary underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Pricing Tiers Grid */}
      <section className="site-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingMode === "annual" ? plan.annualPrice : plan.monthlyPrice;
            const period = billingMode === "annual" ? plan.annualPeriod : plan.monthlyPeriod;

            return (
              <article
                key={plan.id}
                className={`rounded-md p-8 flex flex-col justify-between gap-6 h-full ${
                  plan.highlighted
                    ? "bg-primary text-on-primary border-2 border-accent shadow-lg"
                    : "bg-surface border border-outline-variant"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <span
                        className={`font-label text-label-md uppercase ${
                          plan.highlighted ? "text-accent" : "text-accent-dark"
                        }`}
                      >
                        {plan.eyebrow}
                      </span>
                      <h2
                        className={`font-headline text-headline-md ${
                          plan.highlighted ? "text-on-primary" : "text-primary"
                        }`}
                      >
                        {plan.name}
                      </h2>
                    </div>
                    {plan.badge && (
                      <span className="px-2.5 py-1 rounded-sm bg-accent text-on-accent font-label text-label-sm uppercase shrink-0">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p
                    className={`font-body text-body-md ${
                      plan.highlighted ? "text-primary-container" : "text-on-surface-variant"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`py-4 border-y flex items-baseline gap-2 ${
                      plan.highlighted ? "border-secondary" : "border-outline-variant"
                    }`}
                  >
                    <span
                      className={`font-display text-display-md tabular-nums ${
                        plan.highlighted ? "text-on-primary" : "text-primary"
                      }`}
                    >
                      {price}
                    </span>
                    <span
                      className={`font-mono text-mono-sm ${
                        plan.highlighted ? "text-primary-container" : "text-on-surface-variant"
                      }`}
                    >
                      {period}
                    </span>
                  </div>

                  <ul
                    className={`flex flex-col gap-3 font-body text-body-md ${
                      plan.highlighted ? "text-on-primary" : "text-on-surface"
                    }`}
                  >
                    {plan.features.map((feat) => (
                      <li
                        key={feat.text}
                        className={`flex items-start gap-2.5 ${
                          !feat.included && !plan.highlighted ? "text-on-surface-variant" : ""
                        }`}
                      >
                        {feat.included ? (
                          <CheckCircleIcon
                            className={`w-5 h-5 mt-0.5 shrink-0 ${
                              plan.highlighted ? "text-accent" : "text-success"
                            }`}
                          />
                        ) : (
                          <span className="w-5 h-5 mt-0.5 shrink-0 text-center text-outline font-bold">—</span>
                        )}
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedPlanMessage(
                      `Selected "${plan.name}" (${price} ${period}). Ready for checkout integration!`
                    )
                  }
                  className={
                    plan.highlighted
                      ? "w-full py-3 rounded bg-accent text-on-accent hover:bg-accent-container font-label text-label-lg transition-colors"
                      : plan.id === "digital-reader"
                      ? "w-full py-3 rounded border border-primary bg-surface text-primary hover:bg-primary-container font-label text-label-lg transition-colors"
                      : "w-full py-3 rounded bg-primary text-on-primary hover:bg-secondary font-label text-label-lg transition-colors"
                  }
                >
                  {plan.buttonText}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Member Benefits Strip */}
      <section className="bg-surface-container-low border-y border-outline-variant py-12">
        <div className="site-container flex flex-col gap-8">
          <div className="border-b-2 border-primary pb-3 flex items-center justify-between">
            <h2 className="font-headline text-headline-lg text-primary">What Every Member Receives</h2>
            <span className="font-label text-label-md text-accent-dark uppercase">Built for Legal Practice</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {MEMBER_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-surface border border-outline-variant rounded-md p-5 flex flex-col gap-2"
              >
                {renderBenefitIcon(benefit.icon)}
                <h3 className="font-headline text-headline-sm text-primary">{benefit.title}</h3>
                <p className="font-body text-body-sm text-on-surface-variant">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials & FAQ */}
      <section className="site-container py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 flex flex-col gap-5">
          <h2 className="font-headline text-headline-md text-primary border-b-2 border-primary pb-2">
            Trusted by Legal Leaders
          </h2>
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="bg-surface-container-low border border-outline-variant rounded-md p-6 flex flex-col gap-4"
            >
              <p className="font-body text-body-md text-on-surface italic">{t.quote}</p>
              <footer className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-accent"
                />
                <div className="flex flex-col">
                  <strong className="font-body text-title-sm text-primary">{t.name}</strong>
                  <span className="font-body text-body-sm text-on-surface-variant">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="lg:col-span-7 flex flex-col gap-4">
          <h2 className="font-headline text-headline-md text-primary border-b-2 border-primary pb-2">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y divide-outline-variant border border-outline-variant rounded-md bg-surface">
            {MEMBERSHIP_FAQS.map((faq) => (
              <details key={faq.question} className="p-5 group" open={faq.defaultOpen}>
                <summary className="font-headline text-title-lg text-primary cursor-pointer flex items-center justify-between list-none gap-4">
                  <span>{faq.question}</span>
                  <ChevronDownIcon className="w-5 h-5 text-primary shrink-0" />
                </summary>
                <p className="font-body text-body-md text-on-surface-variant mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
