"use client";

// ============================================================================
// ADVERTISE & SPONSORSHIPS PAGE ("/advertise")
// ============================================================================

import { useState } from "react";

export default function AdvertisePage() {
  const [selectedSlot, setSelectedSlot] = useState("970 × 90 Leaderboard");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex-1 site-container py-10 flex flex-col gap-10">
      <section className="bg-secondary text-white rounded-xl p-8 md:p-10 border-t-4 border-accent flex flex-col gap-3">
        <span className="font-label text-label-md uppercase tracking-widest text-accent">
          Media Kit &amp; Sponsorships
        </span>
        <h1 className="font-display text-display-md-mobile md:text-display-lg text-white">
          Advertise With LEGAL ERA
        </h1>
        <p className="font-body text-body-lg text-sky-100/90 max-w-2xl">
          Connect directly with Managing Partners, General Counsel, Senior Advocates, and legal-tech decision makers across India and global corridors.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            slot: "970 × 90 Leaderboard",
            place: "Homepage Top & Mid-Page",
            desc: "High-visibility banner seen across breaking legal news and Supreme Court coverage.",
          },
          {
            slot: "300 × 250 Medium Rectangle",
            place: "Trending & Article Sidebars",
            desc: "Targeted placement beside high-intent judgment digests and corporate law briefs.",
          },
          {
            slot: "Morning Legal Brief Sponsor",
            place: "7:30 AM IST Daily Newsletter",
            desc: "Exclusive brand header inside our daily briefing delivered to 85,000+ subscribers.",
          },
        ].map((item) => (
          <div
            key={item.slot}
            className={`p-6 rounded-xl border flex flex-col justify-between gap-4 ${
              selectedSlot === item.slot
                ? "border-breaking bg-breaking-container/40"
                : "border-outline-variant bg-surface"
            }`}
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-mono-sm text-accent-dark">{item.place}</span>
              <h2 className="font-headline text-headline-sm text-primary">{item.slot}</h2>
              <p className="font-body text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedSlot(item.slot)}
              className={`py-2 rounded font-label text-label-md uppercase ${
                selectedSlot === item.slot
                  ? "bg-breaking text-white"
                  : "border border-primary text-primary hover:bg-primary-container"
              }`}
            >
              {selectedSlot === item.slot ? "Selected Slot" : "Select Slot"}
            </button>
          </div>
        ))}
      </section>

      <section className="bg-surface-container-low border border-outline-variant rounded-xl p-6 md:p-8">
        <h2 className="font-headline text-headline-md text-primary mb-4">
          Request Rate Card for: <span className="text-breaking">{selectedSlot}</span>
        </h2>
        {submitted ? (
          <div className="p-4 rounded bg-white border-l-4 border-success font-body text-body-md text-on-surface">
            Request received! Our partnerships desk will send the 2026–27 Media Kit to your inbox.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <input
              type="text"
              required
              placeholder="Firm / Company Name"
              className="px-4 py-2.5 rounded border border-outline bg-white font-body text-body-md"
            />
            <input
              type="email"
              required
              placeholder="marketing@firm.com"
              className="px-4 py-2.5 rounded border border-outline bg-white font-body text-body-md"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded bg-primary text-white hover:bg-secondary font-label text-label-md uppercase tracking-wider"
            >
              Request Media Kit
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
