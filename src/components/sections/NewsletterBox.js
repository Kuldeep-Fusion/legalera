"use client";

// ============================================================================
// INTERACTIVE NEWSLETTER SIGNUP BOX (MATCHED TO HERO DESIGN)
// ============================================================================

import { useState } from "react";

export default function NewsletterBox({
  variant = "banner",
  eyebrow = "The Morning Legal Brief",
  title = "Stay Ahead of Every Landmark Ruling & Deal",
  description = "Join 85,000+ advocates, General Counsel, and policy makers receiving our curated 7:30 AM IST legal intelligence digest.",
}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  if (variant === "sidebar") {
    return (
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-white p-6 flex flex-col gap-3 shadow-md ring-1 ring-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(92,196,242,0.55) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col gap-3">
          <span className="font-label text-[10px] font-bold text-accent uppercase tracking-widest">
            {eyebrow}
          </span>
          <h3 className="font-headline text-headline-sm text-white">{title}</h3>
          <p className="font-body text-body-sm text-sky-100/85">{description}</p>
          {subscribed ? (
            <div className="p-3 rounded-lg bg-white/15 border border-accent/40 text-accent font-body text-body-sm">
              Subscribed! Watch your inbox at 7:30 AM IST.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="counsel@firm.com"
                className="w-full px-3.5 py-2 rounded-lg bg-white text-on-surface font-body text-body-sm focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-accent text-on-accent hover:bg-white font-label text-label-md uppercase tracking-wider transition-colors"
              >
                Subscribe Free
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="site-container py-10">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-white p-8 md:p-10 text-center flex flex-col items-center gap-3.5 shadow-md">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(92,196,242,0.5) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center gap-3 w-full">
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-accent font-label text-[10.5px] font-bold uppercase tracking-widest">
            {eyebrow}
          </span>
          <h2 className="font-display text-headline-lg md:text-display-md text-white text-balance">
            {title}
          </h2>
          <p className="font-body text-body-md text-sky-100/85 max-w-xl text-pretty">
            {description}
          </p>

          {subscribed ? (
            <div className="mt-2 px-6 py-3 rounded-lg bg-white/15 border border-accent/40 text-accent font-label text-label-lg">
              You are subscribed to The Morning Legal Brief!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="w-full max-w-lg flex flex-col sm:flex-row gap-2.5 mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email address"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white text-on-surface placeholder:text-on-surface-variant font-body text-body-md focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-accent text-on-accent hover:bg-white font-label text-label-md uppercase tracking-wider transition-colors shrink-0"
              >
                Subscribe Free
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
