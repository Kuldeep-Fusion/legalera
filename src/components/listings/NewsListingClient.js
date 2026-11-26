"use client";

// ============================================================================
// INTERACTIVE NEWS LISTING CLIENT
// ============================================================================
// Lets the user switch categories (All, Corporate Law, Judgments, etc.)
// and click through pages (Page 1, Page 2, ...) smoothly!
// ============================================================================

import { useEffect, useState } from "react";
import Link from "next/link";
import AdBanner from "@/components/ad/AdBanner";
import SingleCard from "@/components/card/SingleCard";
import SmallImageCard from "@/components/card/SmallImageCard";
import HeroBookmarkButton from "@/components/ui/HeroBookmarkButton";
import NewsletterBox from "@/components/sections/NewsletterBox";

const CATEGORIES = [
  "All",
  "Articles",
  "Corporate Law",
  "Judgments",
  "Litigation",
  "Law Firms",
  "Rankings",
  "Interviews",
  "Press Release",
  "India",
  "International",
  "Opinions",
];

const PAGE_SIZE = 6;

export default function NewsListingClient({ initialCategory, articles }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "All");
  const [currentPage, setCurrentPage] = useState(1);

  // If the user clicks a top nav link like "Corporate Law" while already on /news,
  // update the active filter automatically!
  useEffect(() => {
    setSelectedCategory(initialCategory || "All");
    setCurrentPage(1);
  }, [initialCategory]);

  const filtered =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => {
          const cat = selectedCategory.toLowerCase();
          if (cat === "articles") {
            return ["opinions", "corporate law", "india", "international"].includes(
              (a.category || "").toLowerCase()
            );
          }
          if (cat === "rankings") {
            return (
              (a.category || "").toLowerCase() === "law firms" ||
              (a.title || "").toLowerCase().includes("top")
            );
          }
          if (cat === "press release") {
            return ["law firms", "india", "corporate law"].includes(
              (a.category || "").toLowerCase()
            );
          }
          return (a.category || "").toLowerCase() === cat;
        });

  const leadStory = filtered[0];
  const gridStories = filtered.slice(1);
  const totalPages = Math.max(1, Math.ceil(gridStories.length / PAGE_SIZE));
  const paginatedStories = gridStories.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <main className="flex-1 site-container py-8">
      {/* Breadcrumb & Category Header */}
      <div className="border-b-2 border-on-surface pb-5 mb-8 flex flex-col gap-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body text-body-sm text-on-surface-variant">
          <Link href="/" className="hover:text-breaking">
            Home
          </Link>
          <span>/</span>
          <span className="text-on-surface font-bold">{selectedCategory === "All" ? "Latest News" : selectedCategory}</span>
        </nav>

        <div className="flex flex-col gap-4">
          <div>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-breaking">
              LegalEra Desk
            </span>
            <h1 className="font-display text-display-md-mobile md:text-display-md text-on-surface mt-0.5">
              {selectedCategory === "All"
                ? "Latest Legal News & Analysis"
                : `${selectedCategory} & Regulatory Affairs`}
            </h1>
            <p className="font-body text-body-md text-on-surface-variant mt-1">
              In-depth coverage of landmark rulings, M&amp;A transactions, SEBI directives, Insolvency (IBC), and policy updates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 rounded-full font-label text-[11px] font-bold uppercase tracking-wide transition-colors ${
                  selectedCategory === cat
                    ? "bg-on-surface text-white"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main 12-Column Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-0 xl:divide-x xl:divide-outline-variant items-start">
        {/* Left 8 Cols: Lead Story + 2-Column Grid */}
        <div className="xl:col-span-8 xl:pr-8 flex flex-col gap-8 min-w-0">
          {leadStory ? (
            <article className="pb-6 border-b border-outline-variant grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
              <Link href={`/news/${leadStory.slug}`} className="md:col-span-6 aspect-[16/10] img-hero block">
                <img
                  src={leadStory.image || "/images/news_corporate_boardroom.jpg"}
                  alt={leadStory.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                />
              </Link>
              <div className="md:col-span-6 flex flex-col gap-2.5">
                <span className="self-start px-2 py-0.5 rounded-sm bg-breaking text-white font-label text-[10px] font-bold uppercase tracking-wider">
                  {leadStory.featuredTag || leadStory.eyebrow || leadStory.category}
                </span>
                <h2 className="font-headline text-headline-md text-on-surface group-hover:text-primary group-hover:underline">
                  <Link href={`/news/${leadStory.slug}`}>{leadStory.title}</Link>
                </h2>
                {leadStory.summary && (
                  <p className="font-body text-body-md text-on-surface-variant">{leadStory.summary}</p>
                )}
                <div className="pt-2 flex items-center justify-between font-body text-[12px] text-on-surface-variant border-t border-outline-variant/70">
                  <span>By <strong className="text-on-surface">{leadStory.author || "LegalEra Desk"}</strong> · <span className="font-mono tabular-nums">{leadStory.date || "24 Nov 2026"}</span></span>
                  <HeroBookmarkButton article={leadStory} />
                </div>
              </div>
            </article>
          ) : (
            <div className="p-8 border border-outline-variant rounded-md bg-surface-container-low text-center">
              No stories found in this category yet.
            </div>
          )}

          {/* 2-Column Listing Grid */}
          {paginatedStories.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {paginatedStories.map((story) => (
                <SingleCard key={story.slug} article={story} showSummary={true} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <nav aria-label="Pagination" className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-outline-variant">
            <span className="font-body text-body-sm text-on-surface-variant">
              Showing page {currentPage} of {totalPages} ({filtered.length} total stories)
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded border border-outline-variant text-on-surface-variant disabled:opacity-50 font-label text-label-md"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1.5 rounded font-mono text-mono-sm ${
                    currentPage === pageNum
                      ? "bg-primary text-on-primary"
                      : "border border-outline-variant text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 rounded border border-outline-variant text-primary hover:bg-surface-container-low disabled:opacity-50 font-label text-label-md"
              >
                Next
              </button>
            </div>
          </nav>
        </div>

        {/* Right 4 Cols Sidebar */}
        <aside className="xl:col-span-4 xl:pl-8 flex flex-col gap-6 min-w-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 border-b border-outline-variant pb-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-breaking" aria-hidden="true" />
              <h2 className="font-label text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface">
                Most Read in LegalEra
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-outline-variant">
              {articles.slice(0, 4).map((item) => (
                <SmallImageCard key={item.slug} article={item} />
              ))}
            </div>
          </div>

          <NewsletterBox
            variant="sidebar"
            eyebrow="Daily Deal Alert"
            title="Get M&A & Regulatory Briefings"
            description="Curated by LegalEra's corporate desk every weekday."
          />

          <AdBanner slot="sidebarRectangle" variant="rectangle" />
        </aside>
      </div>
    </main>
  );
}
