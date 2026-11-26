"use client";

// ============================================================================
// ABOUT US & CONTACT US PAGE ("/about")
// ============================================================================

import { useState } from "react";

export default function AboutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleContactSubmit(e) {
    e.preventDefault();
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="flex-1 site-container py-10 flex flex-col gap-12">
      {/* Hero */}
      <section className="bg-primary text-white rounded-xl p-8 md:p-10 border-t-4 border-breaking flex flex-col gap-4">
        <span className="font-label text-label-md uppercase tracking-widest text-accent">
          Legal Media Group
        </span>
        <h1 className="font-display text-display-md-mobile md:text-display-lg text-white">
          About LEGAL ERA
        </h1>
        <p className="font-body text-body-lg text-sky-100/90 max-w-3xl">
          LEGAL ERA is India&apos;s premier legal news, corporate affairs, and legal media platform serving advocates, general counsel, law firm partners, and policy leaders across Mumbai, New Delhi, London, and Singapore.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { number: "85,000+", label: "Daily Morning Brief Readers" },
          { number: "15 Years", label: "Legal Awards & Conclaves" },
          { number: "400+", label: "General Counsel Network" },
          { number: "4 Cities", label: "Mumbai · Delhi · London · SG" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-surface-container-low border border-outline-variant rounded-xl p-5 text-center flex flex-col gap-1"
          >
            <span className="font-display text-headline-lg text-breaking">{stat.number}</span>
            <span className="font-body text-body-sm text-on-surface-variant">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-3">
          <h2 className="font-headline text-headline-lg text-primary border-b-2 border-primary pb-2">
            Contact Editorial &amp; Desk
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            Have a landmark judgment tip, deal update, press release, or membership question? Write directly to our newsroom.
          </p>
          <div className="mt-2 flex flex-col gap-2 font-body text-body-sm text-on-surface">
            <span><strong>Editorial Desk:</strong> editorial@legaleraonline.com</span>
            <span><strong>Events &amp; Awards:</strong> events@legaleraonline.com</span>
            <span><strong>Headquarters:</strong> Nariman Point, Mumbai · Connaught Place, New Delhi</span>
          </div>
        </div>

        <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant rounded-xl p-6">
          {sent ? (
            <div className="p-5 rounded-lg bg-surface border-l-4 border-success text-on-surface font-body text-body-md">
              Thank you for reaching out! Our editorial team will reply within 1 business day.
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1">
                  <span className="font-label text-label-md uppercase text-primary">Your Name</span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ananya Deshmukh"
                    className="px-3.5 py-2.5 rounded border border-outline bg-white font-body text-body-md"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="font-label text-label-md uppercase text-primary">Work Email</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="counsel@firm.com"
                    className="px-3.5 py-2.5 rounded border border-outline bg-white font-body text-body-md"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1">
                <span className="font-label text-label-md uppercase text-primary">Message</span>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your deal update, tip, or inquiry..."
                  className="px-3.5 py-2.5 rounded border border-outline bg-white font-body text-body-md"
                />
              </label>
              <button
                type="submit"
                className="self-start px-6 py-2.5 rounded bg-breaking text-white hover:bg-breaking-dark font-label text-label-md uppercase tracking-wider"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
