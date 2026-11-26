"use client";

// ============================================================================
// MAGAZINE & PUBLICATIONS PAGE ("/magazine")
// ============================================================================
// Shows the Featured Nov 2026 Digital Magazine, plus Previous Editions with
// working year filter buttons (All, 2026, 2025, Special Reports) and a
// preview popup when you click "Read".
// ============================================================================

import { useState } from "react";
import { ARCHIVE_ISSUES, FEATURED_ISSUE } from "@/data/magazine";
import { BookIcon, CloseIcon, DownloadIcon } from "@/components/ui/Icons";

const YEARS = ["All", "2026", "2025", "Special Reports"];

export default function MagazinePage() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [previewIssue, setPreviewIssue] = useState(null);
  const [downloadNotice, setDownloadNotice] = useState("");

  const visibleArchive =
    selectedYear === "All"
      ? ARCHIVE_ISSUES
      : ARCHIVE_ISSUES.filter((issue) => issue.year === selectedYear);

  function handleDownload(issueTitle) {
    setDownloadNotice(`Preparing PDF download for "${issueTitle}"...`);
    setTimeout(() => setDownloadNotice(""), 3000);
  }

  return (
    <main className="flex-1 site-container py-8 flex flex-col gap-10">
      {downloadNotice && (
        <div className="bg-primary text-on-primary px-4 py-3 rounded border-l-4 border-accent font-body text-body-md">
          {downloadNotice}
        </div>
      )}

      {/* Featured Current Issue Hero */}
      <section className="bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-on-primary rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md ring-1 ring-white/10">
        <div className="lg:col-span-4 flex justify-center">
          <div className="w-64 aspect-[3/4] rounded-xl overflow-hidden border-2 border-accent shadow-xl">
            <img
              src={FEATURED_ISSUE.coverImage}
              alt={FEATURED_ISSUE.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-sm bg-accent text-on-accent font-label text-label-md uppercase">
              {FEATURED_ISSUE.badge}
            </span>
            <span className="font-mono text-mono-sm text-primary-container">{FEATURED_ISSUE.volume}</span>
          </div>

          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary text-balance">
            {FEATURED_ISSUE.title}
          </h1>

          <p className="font-body text-body-lg text-primary-container max-w-2xl text-pretty">
            {FEATURED_ISSUE.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-3 border-y border-secondary font-body text-body-sm text-primary-container">
            {FEATURED_ISSUE.highlights.map((item) => {
              const [num, ...rest] = item.split(" ");
              return (
                <div key={item}>
                  <strong className="text-accent">{num}</strong> {rest.join(" ")}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() =>
                setPreviewIssue({
                  title: FEATURED_ISSUE.title,
                  monthVol: `${FEATURED_ISSUE.badge} · ${FEATURED_ISSUE.volume}`,
                  coverImage: FEATURED_ISSUE.coverImage,
                })
              }
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-accent text-on-accent hover:bg-accent-container font-label text-label-lg"
            >
              <BookIcon className="w-4 h-4" />
              <span>Read Digital Edition</span>
            </button>
            <button
              type="button"
              onClick={() => handleDownload(FEATURED_ISSUE.title)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-primary-container text-on-primary hover:bg-secondary font-label text-label-lg"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download PDF ({FEATURED_ISSUE.pdfSize})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Previous Editions Archive */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-primary pb-3">
          <h2 className="font-headline text-headline-lg text-primary">Previous Magazine Editions</h2>
          <div className="flex flex-wrap items-center gap-2">
            {YEARS.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`px-3.5 py-1.5 rounded font-label text-label-md transition-colors ${
                  selectedYear === year
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {visibleArchive.map((issue) => (
            <article
              key={issue.id}
              className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col gap-3 h-full hover:shadow-md transition-shadow"
            >
              <div className="w-full aspect-[3/4] img-card">
                <img
                  src={issue.coverImage}
                  alt={issue.title}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300 ease-out"
                />
              </div>
              <span className="font-mono text-mono-sm text-accent-dark">{issue.monthVol}</span>
              <h3 className="font-headline text-headline-sm text-on-surface flex-1">{issue.title}</h3>
              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant">
                <button
                  type="button"
                  onClick={() => setPreviewIssue(issue)}
                  className="flex-1 py-2 rounded bg-primary text-on-primary hover:bg-secondary font-label text-label-md"
                >
                  Read
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload(issue.title)}
                  aria-label={`Download PDF for ${issue.title}`}
                  className="px-3 py-2 rounded border border-outline-variant text-primary hover:bg-surface-container-low"
                >
                  <DownloadIcon className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Simple Reader Preview Modal */}
      {previewIssue && (
        <div className="fixed inset-0 z-50 bg-primary/70 flex items-center justify-center p-4">
          <div className="bg-surface rounded-md max-w-lg w-full p-6 flex flex-col gap-4 border border-outline-variant shadow-xl">
            <div className="flex items-center justify-between border-b border-outline-variant pb-3">
              <div>
                <span className="font-mono text-mono-sm text-accent-dark">{previewIssue.monthVol}</span>
                <h2 className="font-headline text-headline-md text-primary">{previewIssue.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setPreviewIssue(null)}
                aria-label="Close magazine preview"
                className="text-on-surface-variant hover:text-primary"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex gap-4 items-start">
              <img
                src={previewIssue.coverImage}
                alt={previewIssue.title}
                className="w-28 aspect-[3/4] object-cover rounded border border-outline-variant shrink-0"
              />
              <p className="font-body text-body-md text-on-surface-variant">
                This digital edition includes full Managing Partner interviews, deal league tables, and annotated Supreme Court judgment summaries formatted for desktop and tablet reading.
              </p>
            </div>
            <div className="flex justify-end gap-3 pt-2 border-t border-outline-variant">
              <button
                type="button"
                onClick={() => setPreviewIssue(null)}
                className="px-4 py-2 rounded border border-outline-variant text-on-surface font-label text-label-md"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDownload(previewIssue.title);
                  setPreviewIssue(null);
                }}
                className="px-4 py-2 rounded bg-primary text-on-primary font-label text-label-md"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
