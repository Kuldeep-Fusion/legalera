"use client";

// ============================================================================
// WAITLIST PROMO CARD (HERO RIGHT-RAIL BRIEFING / MEMBERSHIP CARD)
// ============================================================================

import { useState } from "react";
import Link from "next/link";

export default function WaitlistCard() {
  const [joined, setJoined] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");

  function handleJoin(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
    setShowInput(false);
    setEmail("");
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-white p-5 shadow-md ring-1 ring-white/10">
      <div
        className="pointer-events-none absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-accent/25 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(92,196,242,0.55) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-3">
        <Link href="/membership" className="group inline-flex items-center gap-1">
          <h3 className="font-headline text-[21px] leading-tight font-bold text-white group-hover:text-accent transition-colors">
            Join the Legal Brief &gt;
          </h3>
        </Link>

        <p className="font-body text-[13px] leading-relaxed text-sky-100/85">
          Get daily 7:30 AM IST Supreme Court digests, IBC rulings &amp; M&amp;A deal alerts straight to your inbox.
        </p>

        {joined ? (
          <div className="rounded-lg bg-white/15 border border-accent/40 px-3 py-2 text-[12.5px] font-medium text-accent">
            You&apos;re in! Daily Brief starts at 7:30 AM IST.
          </div>
        ) : showInput ? (
          <form onSubmit={handleJoin} className="flex flex-col gap-2 pt-1">
            <input
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="counsel@firm.com"
              className="w-full px-3 py-2 rounded-lg bg-white text-on-surface font-body text-[13px] focus:outline-none ring-1 ring-white/20"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-accent text-on-accent hover:bg-white font-label text-[12px] font-bold uppercase tracking-wider transition-colors"
            >
              Confirm Free Access
            </button>
          </form>
        ) : (
          <div className="pt-1 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowInput(true)}
              className="px-4 py-2 rounded-lg bg-accent text-on-accent hover:bg-white font-label text-[12px] font-bold tracking-wide shadow-sm transition-all duration-150"
            >
              Join Now
            </button>
            <Link
              href="/membership"
              className="px-3 py-2 rounded-lg text-[12px] font-semibold text-sky-100 hover:text-white transition-colors"
            >
              Plans →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
