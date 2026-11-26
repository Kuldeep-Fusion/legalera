"use client";

// ============================================================================
// INTERACTIVE SEARCH CLIENT
// ============================================================================
// Filters all LegalEra articles in real time by keyword, type, and sort order!
// ============================================================================

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroBookmarkButton from "@/components/ui/HeroBookmarkButton";
import { SearchIcon } from "@/components/ui/Icons";

const POPULAR_SEARCHES = [
  "IBC",
  "SEBI",
  "DPDP",
  "AI",
  "Arbitration",
  "Supreme Court",
  "Khaitan",
];

const FILTER_TABS = ["All", "Judgments", "Corporate Law", "Litigation", "Law Firms"];

export default function SearchClient({ initialQuery, articles }) {
  const [query, setQuery] = useState(initialQuery || "IBC");
  const [activeTab, setActiveTab] = useState("All");
  const [sortBy, setSortBy] = useState("relevant");

  useEffect(() => {
    if (initialQuery) setQuery(initialQuery);
  }, [initialQuery]);

  // Step 1: Match by typed words
  const cleanQuery = query.trim().toLowerCase();
  let results = articles.filter((item) => {
    if (!cleanQuery) return true;
    const textToSearch = `${item.title} ${item.summary || ""} ${item.category || ""} ${item.author || ""} ${item.eyebrow || ""}`.toLowerCase();
    return textToSearch.includes(cleanQuery);
  });

  // Step 2: Filter by tab
  if (activeTab !== "All") {
    results = results.filter((item) => item.category === activeTab);
  }

  // Step 3: Sort
  if (sortBy === "newest") {
    results = [...results].reverse();
  }

  return (
    <main className="flex-1 site-container py-8">
      {/* Search Bar & Filters Header */}
      <div className="bg-surface-container-low border border-outline-variant rounded-md p-6 mb-8 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h1 className="font-display text-headline-lg text-primary">
            Search Results {cleanQuery ? `for “${query}”` : ""}
          </h1>
          <span className="font-mono text-mono-sm text-on-surface-variant">
            About {results.length} matching results
          </span>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 flex items-center">
            <SearchIcon className="w-5 h-5 text-on-surface-variant absolute left-3.5 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search judgments, acts, law firms..."
              className="w-full pl-11 pr-4 py-3 rounded border border-outline bg-surface text-on-surface font-body text-body-md focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded bg-primary text-on-primary hover:bg-secondary font-label text-label-lg"
          >
            Search Archive
          </button>
        </form>

        {/* Filter Tabs & Sort */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-outline-variant">
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded font-label text-label-md transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-on-primary"
                    : "bg-surface border border-outline-variant text-on-surface hover:bg-surface-container"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-label text-label-sm uppercase text-on-surface-variant">Sort by:</span>
            <select
              aria-label="Sort results"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded border border-outline-variant bg-surface px-3 py-1.5 font-body text-body-sm text-on-surface"
            >
              <option value="relevant">Most Relevant</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results List + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col divide-y divide-outline-variant border border-outline-variant rounded-md bg-surface">
          {results.length === 0 ? (
            <div className="p-8 text-center flex flex-col items-center gap-3">
              <p className="font-headline text-headline-sm text-primary">No matching legal stories found.</p>
              <p className="font-body text-body-md text-on-surface-variant">
                Try searching for &ldquo;IBC&rdquo;, &ldquo;SEBI&rdquo;, &ldquo;Supreme Court&rdquo;, or click one of the popular topics.
              </p>
            </div>
          ) : (
            results.map((item) => (
              <article
                key={item.slug}
                className="p-6 flex flex-col sm:flex-row gap-5 items-start hover:bg-surface-container-low transition-colors"
              >
                <Link href={`/news/${item.slug}`} className="w-full sm:w-44 aspect-video img-card shrink-0 block">
                  <img
                    src={item.image || "/images/hero_supreme_court.jpg"}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300 ease-out"
                  />
                </Link>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-sm bg-accent-container text-on-accent-container font-label text-label-sm uppercase">
                        {item.category || "Legal News"}
                      </span>
                      <span className="font-mono text-mono-sm text-on-surface-variant tabular-nums">
                        {item.date || "24 Nov 2026"}
                      </span>
                    </div>
                    <HeroBookmarkButton article={item} />
                  </div>
                  <h2 className="font-headline text-headline-sm text-on-surface hover:text-primary">
                    <Link href={`/news/${item.slug}`}>{item.title}</Link>
                  </h2>
                  {item.summary && (
                    <p className="font-body text-body-md text-on-surface-variant">{item.summary}</p>
                  )}
                  <span className="font-body text-body-sm text-on-surface-variant">
                    By {item.author || "LegalEra Desk"} · {item.eyebrow || item.category}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Right Sidebar: Popular Legal Searches */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-low border border-outline-variant rounded-md p-6 flex flex-col gap-4">
            <h2 className="font-headline text-headline-md text-primary border-b-2 border-primary pb-2">
              Popular Legal Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 rounded bg-surface border border-outline-variant font-label text-label-md text-primary hover:bg-primary-container transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
