"use client";

// ============================================================================
// INFINITE SCROLL ARTICLE FEED
// ============================================================================
// How it keeps the app fast while giving infinite reading:
// 1. Starts with ONLY 1 post (rendered fast on the server).
// 2. Watches a small invisible marker at the bottom with IntersectionObserver.
// 3. When you finish reading and scroll near the bottom, it fetches ONLY 1
//    next post from /api/articles?slug=... and appends it right below!
// 4. Automatically updates the browser URL & page title as you scroll into
//    each new post (just like Times of India).
// ============================================================================

import { useCallback, useEffect, useRef, useState } from "react";
import SingleArticleView from "@/components/article/SingleArticleView";

export default function InfiniteArticleFeed({
  initialArticle,
  initialNextSlug,
  initialNextTitle,
  related = [],
}) {
  const [articles, setArticles] = useState([initialArticle]);
  const [nextSlug, setNextSlug] = useState(initialNextSlug);
  const [nextTitle, setNextTitle] = useState(initialNextTitle);
  const [loading, setLoading] = useState(false);

  const sentinelRef = useRef(null);
  const isFetchingRef = useRef(false);
  const containerRef = useRef(null);

  // Fetch ONLY 1 next post at a time
  const loadNextArticle = useCallback(async () => {
    if (isFetchingRef.current || !nextSlug) return;
    isFetchingRef.current = true;
    setLoading(true);

    try {
      const res = await fetch(`/api/articles?slug=${encodeURIComponent(nextSlug)}`);
      if (!res.ok) throw new Error("Failed to load next article");
      const data = await res.json();

      // Give each appended instance a unique renderKey so infinite looping never clashes React keys
      const loadedArticle = {
        ...data.article,
        _renderKey: `${data.article.slug}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      };

      setArticles((prev) => [...prev, loadedArticle]);
      setNextSlug(data.nextSlug);
      setNextTitle(data.nextTitle);
    } catch (err) {
      console.error(err);
    } finally {
      isFetchingRef.current = false;
      setLoading(false);
    }
  }, [nextSlug]);

  // Trigger loading the next post when scrolling near the bottom sentinel
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextArticle();
        }
      },
      {
        rootMargin: "250px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadNextArticle]);

  // Sync browser URL & tab title to whichever article you are currently reading
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const articleNodes = root.querySelectorAll("article[data-article-slug]");
    const urlObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const slug = entry.target.getAttribute("data-article-slug");
            const title = entry.target.getAttribute("data-article-title");
            if (slug && window.location.pathname !== `/news/${slug}`) {
              window.history.replaceState(null, "", `/news/${slug}`);
            }
            if (title) {
              document.title = `${title} — LEGAL ERA`;
            }
          }
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0.05,
      }
    );

    articleNodes.forEach((node) => urlObserver.observe(node));
    return () => urlObserver.disconnect();
  }, [articles]);

  return (
    <div ref={containerRef} className="flex flex-col">
      {articles.map((art, index) => (
        <SingleArticleView
          key={art._renderKey || art.slug}
          article={art}
          related={index === 0 ? related : []}
          isFirst={index === 0}
          postNumber={index + 1}
        />
      ))}

      {/* Bottom Scroll Trigger / Next Story Loader */}
      <div
        ref={sentinelRef}
        className="mt-10 p-6 rounded-xl border border-dashed border-outline bg-surface-container-low text-center flex flex-col items-center gap-3"
      >
        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-breaking">
          {loading ? "Loading Next Story..." : "Up Next on Scroll"}
        </span>

        {nextTitle && (
          <p className="font-headline text-headline-sm text-primary max-w-xl">
            {nextTitle}
          </p>
        )}

        {loading ? (
          <div className="flex items-center gap-2 text-on-surface-variant font-body text-body-sm">
            <span className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            <span>Fetching article...</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={loadNextArticle}
            className="px-4 py-2 rounded bg-primary text-white hover:bg-secondary font-label text-label-md uppercase tracking-wider transition-colors"
          >
            Load Next Story Now ↓
          </button>
        )}
      </div>
    </div>
  );
}
