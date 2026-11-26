"use client";

// ============================================================================
// EVENTS & LEGAL AWARDS PAGE ("/events")
// ============================================================================
// Shows the Flagship Indian Legal Awards Gala and upcoming summits.
// Clicking "Register Now" or "Submit Nomination" opens a simple form modal!
// ============================================================================

import { useState } from "react";
import { FLAGSHIP_EVENT, UPCOMING_EVENTS } from "@/data/events";
import { CloseIcon } from "@/components/ui/Icons";

export default function EventsPage() {
  const [selectedEventTitle, setSelectedEventTitle] = useState("");
  const [actionMode, setActionMode] = useState("Register");
  const [delegateName, setDelegateName] = useState("");
  const [delegateEmail, setDelegateEmail] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  function openRegistration(title, mode = "Register") {
    setSelectedEventTitle(title);
    setActionMode(mode);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setConfirmationMessage(
      `Thank you, ${delegateName}! Your ${actionMode.toLowerCase()} request for "${selectedEventTitle}" has been recorded.`
    );
    setSelectedEventTitle("");
    setDelegateName("");
    setDelegateEmail("");
  }

  return (
    <main className="flex-1 site-container py-8 flex flex-col gap-10">
      {confirmationMessage && (
        <div className="bg-surface-container-low border-l-4 border-success p-4 rounded text-on-surface font-body text-body-md flex items-center justify-between">
          <span>{confirmationMessage}</span>
          <button
            type="button"
            onClick={() => setConfirmationMessage("")}
            className="font-label text-label-md text-primary underline ml-4"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Flagship Gala Hero */}
      <section className="bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border-t-4 border-accent p-6 md:p-8 gap-8 items-center shadow-md">
        <div className="lg:col-span-6 flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-3">
            <span className="self-start px-2.5 py-1 rounded-sm bg-accent text-on-accent font-label text-[11px] font-bold uppercase tracking-wider">
              {FLAGSHIP_EVENT.badge}
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white text-balance">
              {FLAGSHIP_EVENT.title}
            </h1>
            <p className="font-body text-body-lg text-gray-300 text-pretty">
              {FLAGSHIP_EVENT.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openRegistration(FLAGSHIP_EVENT.title, "Delegate Registration")}
              className="px-5 py-3 rounded-sm bg-breaking text-white hover:bg-breaking-dark font-label text-label-md uppercase tracking-wider"
            >
              Register as Delegate
            </button>
            <button
              type="button"
              onClick={() => openRegistration(FLAGSHIP_EVENT.title, "Award Nomination")}
              className="px-5 py-3 rounded-sm border border-white/30 text-white hover:bg-white/10 font-label text-label-md uppercase tracking-wider"
            >
              Submit Nomination
            </button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="aspect-[16/10] w-full img-dark">
            <img
              src={FLAGSHIP_EVENT.image}
              alt={FLAGSHIP_EVENT.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Conferences & Summits */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b-2 border-primary pb-3">
          <h2 className="font-headline text-headline-lg text-primary">
            Upcoming Legal Summits &amp; Conferences
          </h2>
          <span className="font-mono text-mono-sm text-on-surface-variant">2026 – 2027 Calendar</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {UPCOMING_EVENTS.map((ev) => (
            <article
              key={ev.id}
              className="bg-surface border border-outline-variant rounded-md p-6 flex flex-col gap-4 h-full"
            >
              <header className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-accent-dark uppercase">{ev.tag}</span>
                <h3 className="font-headline text-headline-sm text-on-surface">{ev.title}</h3>
                <p className="font-mono text-mono-sm text-on-surface-variant tabular-nums">{ev.dateVenue}</p>
              </header>

              <p className="font-body text-body-md text-on-surface-variant flex-1">{ev.description}</p>

              <footer className="pt-3 border-t border-outline-variant flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openRegistration(ev.title, ev.buttonText)}
                  className={
                    ev.buttonStyle === "outlined"
                      ? "px-4 py-2 rounded border border-primary text-primary hover:bg-primary-container font-label text-label-md"
                      : "px-4 py-2 rounded bg-primary text-on-primary hover:bg-secondary font-label text-label-md"
                  }
                >
                  {ev.buttonText}
                </button>
                <span className="font-body text-body-sm text-on-surface-variant">{ev.statusText}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* Registration / Nomination Modal */}
      {selectedEventTitle && (
        <div className="fixed inset-0 z-50 bg-primary/60 flex items-center justify-center p-4">
          <div className="bg-surface rounded-md max-w-md w-full p-6 border border-outline-variant flex flex-col gap-4 shadow-xl">
            <div className="flex items-start justify-between border-b border-outline-variant pb-3">
              <div>
                <span className="font-label text-label-sm text-accent-dark uppercase">{actionMode}</span>
                <h3 className="font-headline text-headline-sm text-primary">{selectedEventTitle}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEventTitle("")}
                aria-label="Close registration modal"
                className="text-on-surface-variant hover:text-primary"
              >
                <CloseIcon />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
              <label className="flex flex-col gap-1">
                <span className="font-label text-label-md text-on-surface uppercase">Full Name</span>
                <input
                  type="text"
                  required
                  value={delegateName}
                  onChange={(e) => setDelegateName(e.target.value)}
                  placeholder="Adv. Priya Sharma"
                  className="px-3.5 py-2.5 rounded border border-outline bg-surface text-on-surface font-body text-body-md"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="font-label text-label-md text-on-surface uppercase">Work Email</span>
                <input
                  type="email"
                  required
                  value={delegateEmail}
                  onChange={(e) => setDelegateEmail(e.target.value)}
                  placeholder="priya@lawfirm.com"
                  className="px-3.5 py-2.5 rounded border border-outline bg-surface text-on-surface font-body text-body-md"
                />
              </label>

              <button
                type="submit"
                className="mt-2 py-2.5 rounded bg-primary text-on-primary hover:bg-secondary font-label text-label-lg"
              >
                Confirm {actionMode}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
