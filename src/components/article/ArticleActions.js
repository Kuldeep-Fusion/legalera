"use client";

// ============================================================================
// ARTICLE SHARE & PERSISTENT BOOKMARK BUTTONS
// ============================================================================
// Saves bookmarks into localStorage so the "Saved" drawer in the header
// remembers your articles even when you refresh or switch pages!
// ============================================================================

import { useEffect, useState } from "react";
import { BookmarkIcon } from "@/components/ui/Icons";

export default function ArticleActions({ article }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("legalera_saved_articles");
      const list = raw ? JSON.parse(raw) : [];
      setBookmarked(list.some((a) => a.slug === article.slug));
    } catch {}
  }, [article.slug]);

  function toggleBookmark() {
    try {
      const raw = localStorage.getItem("legalera_saved_articles");
      const list = raw ? JSON.parse(raw) : [];
      let next;
      if (list.some((a) => a.slug === article.slug)) {
        next = list.filter((a) => a.slug !== article.slug);
        setBookmarked(false);
      } else {
        next = [
          {
            slug: article.slug,
            title: article.title,
            category: article.category || "Legal News",
            date: article.date || "24 Nov 2026",
          },
          ...list,
        ];
        setBookmarked(true);
      }
      localStorage.setItem("legalera_saved_articles", JSON.stringify(next));
      window.dispatchEvent(new Event("legalera-bookmarks-updated"));
    } catch {}
  }

  function handleShare(platform) {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setCopiedLabel(`Link copied for ${platform}!`);
    setTimeout(() => setCopiedLabel(""), 2500);
  }

  return (
    <div className="flex flex-col items-start sm:items-end gap-1">
      <div className="flex items-center gap-2">
        <span className="font-label text-label-sm uppercase text-on-surface-variant mr-1">
          Share:
        </span>
        <button
          type="button"
          onClick={() => handleShare("LinkedIn")}
          aria-label={`Share ${article.title} on LinkedIn`}
          className="px-2.5 py-1.5 rounded border border-outline-variant text-primary hover:bg-surface-container-low font-label text-label-md"
        >
          LinkedIn
        </button>
        <button
          type="button"
          onClick={() => handleShare("X")}
          aria-label={`Share ${article.title} on X`}
          className="px-2.5 py-1.5 rounded border border-outline-variant text-primary hover:bg-surface-container-low font-label text-label-md"
        >
          X
        </button>
        <button
          type="button"
          onClick={toggleBookmark}
          aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
          className={`inline-flex items-center gap-1.5 px-2.5 h-9 rounded border transition-colors font-label text-label-md ${
            bookmarked
              ? "border-breaking bg-breaking-container text-breaking"
              : "border-outline-variant text-primary hover:bg-surface-container-low"
          }`}
        >
          <BookmarkIcon filled={bookmarked} className="w-4 h-4" />
          <span>{bookmarked ? "Saved" : "Save"}</span>
        </button>
      </div>
      {copiedLabel && <span className="font-mono text-mono-sm text-success">{copiedLabel}</span>}
    </div>
  );
}
