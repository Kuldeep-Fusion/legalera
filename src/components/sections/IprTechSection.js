"use client";

// ============================================================================
// IPR & TECH LAW — UNIFIED DARK-NAVY SHOWCASE
// ============================================================================
// - Single full-width header bar ("IPR & Tech Law ›   ALL IPR & TECH →")
// - Left 8 Cols:
//   * Top: 2 Featured SingleCards (dark theme)
//   * Bottom: 3-up infinite dotless CardCarousel (image + title only)
// - Right 4 Cols:
//   * Transparent dark SmallImageCards (image + label + title)
//   * Sidebar Rectangle AdBanner
// ============================================================================

import Link from "next/link";
import AdBanner from "@/components/ad/AdBanner";
import CardCarousel from "@/components/card/CardCarousel";
import SingleCard from "@/components/card/SingleCard";
import SmallImageCard from "@/components/card/SmallImageCard";
import { IPR_TECH_STORIES } from "@/data/news";

export default function IprTechSection() {
  const topPair = IPR_TECH_STORIES.slice(0, 2);
  const bottomCarousel = IPR_TECH_STORIES.slice(2, 7);
  const rightBriefs = IPR_TECH_STORIES.slice(7, 10);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-white border-y border-white/10 py-10 md:py-12">
      {/* Ambient Ocean Glow & Dot-Grid Pattern */}
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 -top-20 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl"
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
        {/* Single Unified Full-Width Section Header */}
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-3.5 mb-6">
          <Link
            href="/news?category=Corporate+Law"
            className="inline-flex items-center gap-1.5 group"
          >
            <h2 className="font-display text-[20px] md:text-[23px] font-bold text-white group-hover:text-accent transition-colors">
              IPR &amp; Tech Law
            </h2>
            <span className="text-accent text-xl leading-none font-bold group-hover:translate-x-0.5 transition-transform">
              &rsaquo;
            </span>
          </Link>
          <Link
            href="/news?category=Corporate+Law"
            className="font-label text-[11px] font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
          >
            All IPR &amp; Tech →
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-0 xl:divide-x xl:divide-white/15 items-start">
          {/* ==============================================================
              LEFT 8 COLS: 2 FEATURED CARDS + 3-UP DOTLESS SCROLL (IMAGE + TITLE)
              ============================================================== */}
          <div className="xl:col-span-8 xl:pr-7 flex flex-col gap-6 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {topPair.map((story) => (
                <SingleCard key={story.slug} article={story} showSummary={true} theme="dark" />
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 min-w-0">
              <CardCarousel
                items={bottomCarousel}
                desktopSlides={3}
                autoplayDelay={3400}
                showDots={false}
                renderCard={(story) => (
                  <SingleCard
                    article={story}
                    theme="dark"
                    showSummary={false}
                    showMeta={false}
                  />
                )}
              />
            </div>
          </div>

          {/* ==============================================================
              RIGHT 4 COLS: SMALL IMAGE CARDS (IMAGE + LABEL + TITLE) + AD
              ============================================================== */}
          <aside className="xl:col-span-4 xl:pl-7 flex flex-col gap-5 min-w-0">
            <div className="flex flex-col divide-y divide-dashed divide-white/15">
              {rightBriefs.map((story) => (
                <SmallImageCard
                  key={story.slug}
                  article={{ ...story, summary: undefined }}
                  theme="dark"
                  showFooter={false}
                />
              ))}
            </div>

            <AdBanner slot="sidebarRectangle" variant="rectangle" />
          </aside>
        </div>
      </div>
    </section>
  );
}
