"use client";

// ============================================================================
// WITHIN THE CIRCLE & EXCLUSIVE INTERVIEWS (TIMES OF INDIA SECTION LAYOUT)
// ============================================================================
// Matches your screenshot layout:
// - Left 8 Cols:
//   * Top: Overlay Lead Card (left) + 5 Bulleted Headlines (right)
//   * Bottom: 4 Compact Photo-Top Story Cards
// - Right 4 Cols:
//   * Interactive Tabs ("MOST READ" | "INTERVIEWS" | "OPINIONS")
//   * 6 Thumbnail-Left + Headline-Right Stories
// ============================================================================

import { useState } from "react";
import Link from "next/link";
import {
  ADR_STORIES,
  DEAL_STREET,
  FROM_THE_COURTS,
  INTERVIEWS_AND_OPINIONS,
  LATEST_LEGAL_NEWS,
  TRENDING_NEWS,
  WITHIN_THE_CIRCLE,
  ZOOM_IN,
} from "@/data/news";

export default function WithinCircleSection() {
  const [activeTab, setActiveTab] = useState("MOST READ");

  // Top-left overlay lead story
  const leadStory = WITHIN_THE_CIRCLE.lead;

  // Top-center 5 bulleted headlines
  const bulletStories = [
    ...WITHIN_THE_CIRCLE.subCards,
    ...WITHIN_THE_CIRCLE.rightGrid.slice(0, 3),
  ];

  // Bottom 4 photo-top cards
  const bottomFour = [
    INTERVIEWS_AND_OPINIONS[0],
    INTERVIEWS_AND_OPINIONS[1],
    WITHIN_THE_CIRCLE.rightGrid[3] || DEAL_STREET[0],
    ZOOM_IN[0],
  ];

  // Right rail 6 stories per tab
  const tabLists = {
    "MOST READ": [...TRENDING_NEWS, FROM_THE_COURTS[0]].slice(0, 6),
    INTERVIEWS: [
      ...INTERVIEWS_AND_OPINIONS,
      ...WITHIN_THE_CIRCLE.subCards,
      ...DEAL_STREET.slice(0, 2),
    ].slice(0, 6),
    OPINIONS: [
      INTERVIEWS_AND_OPINIONS[1],
      ...ZOOM_IN,
      ...ADR_STORIES.slice(0, 2),
    ].slice(0, 6),
  };

  const rightStories = tabLists[activeTab] || tabLists["MOST READ"];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-white border-y border-white/10 py-10 md:py-12">
      {/* Subtle glowing dot-grid & ambient ocean glow */}
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(92,196,242,0.55) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 site-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-0 items-start">
          {/* ==============================================================
              LEFT 8 COLUMNS: LEAD OVERLAY + 5 BULLETS + 4 BOTTOM CARDS
              ============================================================== */}
          <div className="xl:col-span-8 xl:pr-7 flex flex-col gap-6 min-w-0">
            {/* Section Title + Chevron */}
            <div className="flex items-center justify-between">
              <Link
                href="/news?category=Interviews"
                className="inline-flex items-center gap-1.5 group"
              >
                <h2 className="font-display text-[20px] md:text-[22px] font-bold text-white group-hover:text-accent transition-colors">
                  Within The Circle &amp; Exclusive Interviews
                </h2>
                <span className="text-accent text-xl leading-none font-bold group-hover:translate-x-0.5 transition-transform">
                  &rsaquo;
                </span>
              </Link>
            </div>

            {/* Top Half: Overlay Lead Card (6 cols) + 5 Bulleted Headlines (6 cols) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Overlay Lead Card */}
              <Link
                href={`/news/${leadStory.slug}`}
                className="md:col-span-6 relative aspect-[16/10] md:aspect-auto md:min-h-[235px] rounded-xl overflow-hidden bg-secondary ring-1 ring-white/15 shadow-lg group block"
              >
                <img
                  src={leadStory.image}
                  alt={leadStory.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-0.5 mb-1.5 rounded-sm bg-breaking text-white font-label text-[9.5px] font-bold uppercase tracking-wider">
                    {leadStory.eyebrow || "Within The Circle"}
                  </span>
                  <h3 className="font-headline text-[16px] md:text-[17px] leading-[1.3] font-bold text-white line-clamp-2 group-hover:text-accent transition-colors">
                    {leadStory.title}
                  </h3>
                </div>
              </Link>

              {/* 5 Bulleted Headlines with Dashed Dividers */}
              <ul className="md:col-span-6 flex flex-col justify-between divide-y divide-dashed divide-white/20">
                {bulletStories.map((item) => (
                  <li key={item.slug} className="py-2.5 first:pt-0 last:pb-0">
                    <Link
                      href={`/news/${item.slug}`}
                      className="flex items-start gap-2.5 group"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full border border-accent shrink-0 group-hover:bg-accent transition-colors"
                        aria-hidden="true"
                      />
                      <span className="font-body text-[13.5px] leading-[1.4] font-medium text-sky-50/90 group-hover:text-accent line-clamp-2 transition-colors">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Half: 4 Equal Photo-Top Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              {bottomFour.map((card) => (
                <Link
                  key={card.slug}
                  href={`/news/${card.slug}`}
                  className="group flex flex-col gap-2 min-w-0"
                >
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-secondary ring-1 ring-white/15">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                  </div>
                  <h3 className="font-body text-[13px] leading-[1.35] font-semibold text-white/95 group-hover:text-accent line-clamp-3 transition-colors">
                    {card.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

          {/* ==============================================================
              RIGHT 4 COLUMNS: TABBED FEED (MOST READ | INTERVIEWS | OPINIONS)
              ============================================================== */}
          <aside className="xl:col-span-4 xl:pl-7 xl:border-l xl:border-white/15 flex flex-col gap-4 min-w-0">
            {/* 3 Interactive Tabs */}
            <div className="flex items-center justify-between gap-3 border-b border-white/15">
              {["MOST READ", "INTERVIEWS", "OPINIONS"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2.5 font-label text-[11px] font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? "border-breaking text-white"
                      : "border-transparent text-sky-100/60 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* 6 Compact Thumbnail-Left + Headline-Right Rows */}
            <div className="flex flex-col gap-3.5">
              {rightStories.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-20 h-14 rounded-lg overflow-hidden bg-secondary ring-1 ring-white/15 shrink-0">
                    <img
                      src={item.image || LATEST_LEGAL_NEWS[0].image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                  </div>
                  <h4 className="font-body text-[13px] leading-[1.38] font-medium text-sky-50/90 group-hover:text-accent line-clamp-2 transition-colors">
                    {item.title}
                  </h4>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
