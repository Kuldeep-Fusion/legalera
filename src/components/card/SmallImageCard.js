// ============================================================================
// SMALL IMAGE CARD (COMPACT THUMBNAIL-LEFT STORY ROW — LIGHT & DARK)
// ============================================================================

import Link from "next/link";
import HeroBookmarkButton from "@/components/ui/HeroBookmarkButton";

export default function SmallImageCard({
  article,
  theme = "light",
  showFooter = true,
}) {
  const isDark = theme === "dark";

  return (
    <article className="py-3.5 first:pt-1 last:pb-1 flex items-start gap-3 group">
      {article.image && (
        <Link
          href={`/news/${article.slug}`}
          className={
            isDark
              ? "w-20 h-14 rounded-lg overflow-hidden bg-secondary ring-1 ring-white/15 shrink-0 block mt-0.5"
              : "w-16 h-16 img-thumb shrink-0 block mt-0.5"
          }
        >
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        </Link>
      )}

      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <span
          className={`self-start px-2 py-0.5 rounded-sm font-label text-[9.5px] font-bold uppercase tracking-wider ${
            isDark
              ? "bg-accent/20 border border-accent/35 text-accent"
              : "bg-accent-container text-on-accent-container"
          }`}
        >
          {article.eyebrow || article.category}
        </span>

        <h3
          className={`font-headline text-[14px] leading-[1.34] font-bold group-hover:underline underline-offset-2 line-clamp-2 transition-colors ${
            isDark
              ? "text-white/95 group-hover:text-accent"
              : "text-on-surface group-hover:text-primary"
          }`}
        >
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </h3>

        {article.summary && (
          <p
            className={`font-body text-[12px] leading-[1.45] line-clamp-2 ${
              isDark ? "text-sky-100/80" : "text-on-surface-variant"
            }`}
          >
            {article.summary}
          </p>
        )}

        {showFooter && (
          <div className="flex items-center justify-between pt-1 gap-2">
            <span
              className={
                isDark
                  ? "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/10 border border-white/15 font-mono text-[10.5px] font-semibold text-accent whitespace-nowrap shrink-0 tabular-nums"
                  : "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-primary/[0.07] border border-primary/15 font-mono text-[10.5px] font-semibold text-primary whitespace-nowrap shrink-0 tabular-nums"
              }
            >
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  isDark ? "bg-accent" : "bg-accent-dark"
                }`}
                aria-hidden="true"
              />
              {article.timeAgo || article.date || "24 Nov 2026"}
            </span>
            <HeroBookmarkButton article={article} theme={theme} />
          </div>
        )}
      </div>
    </article>
  );
}
