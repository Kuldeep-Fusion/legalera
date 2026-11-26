"use client";

// ============================================================================
// HERO BOOKMARK BUTTON
// ============================================================================
// Lets readers save any front-page story with 1 click!
// Syncs automatically with the "Saved" drawer in the top Header.
// ============================================================================

import { useEffect, useState } from "react";
import { BookmarkIcon } from "@/components/ui/Icons";

export default function HeroBookmarkButton({ article, theme = "light" }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    function sync() {
      try {
        const raw = localStorage.getItem("legalera_saved_articles");
        const list = raw ? JSON.parse(raw) : [];
        setSaved(list.some((a) => a.slug === article.slug));
      } catch {}
    }
    sync();
    window.addEventListener("legalera-bookmarks-updated", sync);
    return () => window.removeEventListener("legalera-bookmarks-updated", sync);
  }, [article.slug]);

  function handleToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      const raw = localStorage.getItem("legalera_saved_articles");
      const list = raw ? JSON.parse(raw) : [];
      const next = saved
        ? list.filter((a) => a.slug !== article.slug)
        : [
            {
              slug: article.slug,
              title: article.title,
              category: article.category || article.eyebrow || "Legal News",
              date: article.date || "24 Nov 2026",
            },
            ...list,
          ];
      localStorage.setItem("legalera_saved_articles", JSON.stringify(next));
      setSaved(!saved);
      window.dispatchEvent(new Event("legalera-bookmarks-updated"));
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={saved ? "Remove from saved stories" : "Save story for later"}
      title={saved ? "Saved" : "Save story"}
      className={`p-1.5 rounded-md transition-all duration-150 ${
        theme === "dark"
          ? saved
            ? "text-accent bg-white/15"
            : "text-sky-100/75 hover:text-accent hover:bg-white/10"
          : saved
          ? "text-breaking bg-breaking-container"
          : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
      }`}
    >
      <BookmarkIcon filled={saved} className="w-4 h-4" />
    </button>
  );
}
