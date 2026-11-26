"use client";

// ============================================================================
// INTERACTIVE "LATEST LEGAL NEWS" STRIP (MATCHED TO HERO DESIGN)
// ============================================================================

import { useState } from "react";
import Link from "next/link";
import SingleCard from "@/components/card/SingleCard";
import { LATEST_LEGAL_NEWS } from "@/data/news";

const FILTER_TABS = ["All", "Corporate Law", "Judgments", "Litigation", "International"];

export default function LatestNewsSection() {
  const [selectedTab, setSelectedTab] = useState("All");

  const visibleStories =
    selectedTab === "All"
      ? LATEST_LEGAL_NEWS.slice(0, 4)
      : LATEST_LEGAL_NEWS.filter((item) => item.category === selectedTab).slice(0, 4);

  return (
    <section className="site-container py-9 border-b border-outline-variant">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-outline-variant pb-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
          <h2 className="font-label text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface">
            Latest Legal Briefings
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setSelectedTab(tab)}
              className={`px-3 py-1 rounded-full font-label text-[11px] font-bold transition-colors ${
                selectedTab === tab
                  ? "bg-primary text-white shadow-sm"
                  : "bg-surface-container-low border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
          <Link
            href="/news"
            className="ml-2 font-label text-[11.5px] font-bold text-accent-dark hover:text-breaking transition-colors"
          >
            All Stories →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {visibleStories.map((article) => (
          <SingleCard key={article.slug} article={article} showSummary={true} />
        ))}
      </div>
    </section>
  );
}
