// ============================================================================
// SINGLE EDITORIAL CARD (LIGHT & DARK SECTION VARIANTS)
// ============================================================================
// - theme="light" (default): Crisp white bordered card with hover lift/shadow
// - theme="dark": Seamless transparent card matching Within The Circle's
//   deep-navy aesthetic (ringed thumbnail, white headline, accent date pill)
// ============================================================================

import Link from "next/link";
import HeroBookmarkButton from "@/components/ui/HeroBookmarkButton";

const PILL_VARIANTS = {
  Judgments: "bg-breaking text-white",
  "Corporate Law": "bg-primary text-white",
  Litigation: "bg-indigo-50 text-indigo-800 border border-indigo-200/80",
  International: "bg-sky-50 text-sky-900 border border-sky-200/80",
  "Law Firms": "bg-emerald-50 text-emerald-800 border border-emerald-200/80",
  India: "bg-accent-container text-on-accent-container border border-accent/30",
};

const DARK_PILL_VARIANTS = {
  Judgments: "bg-breaking text-white",
  "Corporate Law": "bg-accent text-on-accent",
  Opinions: "bg-sky-400/20 text-accent border border-accent/40",
  Litigation: "bg-indigo-400/25 text-indigo-100 border border-indigo-300/35",
  International: "bg-sky-400/20 text-sky-100 border border-sky-300/35",
  "Law Firms": "bg-emerald-400/20 text-emerald-100 border border-emerald-300/35",
};

export default function SingleCard({
  article,
  showSummary = true,
  showMeta = true,
  pillClassName,
  theme = "light",
}) {
  const isDark = theme === "dark";
  const pillStyle =
    pillClassName ||
    (isDark
      ? DARK_PILL_VARIANTS[article.category] || "bg-breaking text-white"
      : PILL_VARIANTS[article.category] ||
        "bg-accent-container text-on-accent-container border border-accent/30");

  return (
    <article
      className={
        isDark
          ? "group h-full flex flex-col justify-between gap-2.5 min-w-0"
          : "group h-full bg-white border border-outline-variant rounded-2xl p-3.5 shadow-[0_1px_3px_rgba(12,35,59,0.05)] hover:border-primary/40 hover:shadow-[0_14px_30px_-10px_rgba(12,35,59,0.16)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between gap-3"
      }
    >
      <div className="flex flex-col gap-2.5">
        {article.image && (
          <Link
            href={`/news/${article.slug}`}
            className={
              isDark
                ? "aspect-[16/10] w-full rounded-lg overflow-hidden bg-secondary ring-1 ring-white/15 shadow-md block"
                : "aspect-[16/10] w-full rounded-xl overflow-hidden bg-surface-container block"
            }
          >
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-300 ease-out"
            />
          </Link>
        )}

        {showMeta && (
          <div className="flex items-center justify-between gap-2 pt-0.5">
            <span
              className={`px-2 py-0.5 rounded-sm font-label text-[9.5px] font-bold uppercase tracking-wider truncate max-w-full ${pillStyle}`}
            >
              {article.eyebrow || article.category}
            </span>
          </div>
        )}

        <h3
          className={`font-headline text-[15.5px] leading-[1.34] font-bold group-hover:underline underline-offset-2 line-clamp-3 transition-colors ${
            isDark
              ? "text-white/95 group-hover:text-accent"
              : "text-on-surface group-hover:text-primary"
          }`}
        >
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </h3>

        {showSummary && article.summary && (
          <p
            className={`font-body text-[12.5px] leading-[1.52] line-clamp-2 ${
              isDark ? "text-sky-100/80" : "text-on-surface-variant"
            }`}
          >
            {article.summary}
          </p>
        )}
      </div>

      {showMeta && (
        <div
          className={`flex items-center justify-between pt-2.5 mt-auto border-t gap-2 ${
            isDark ? "border-white/15" : "border-outline-variant/70"
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            {article.date && (
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
                {article.date}
              </span>
            )}
            {article.footer && (
              <span
                className={`font-label text-[10.5px] font-medium truncate ${
                  isDark ? "text-sky-100/75" : "text-on-surface-variant"
                }`}
              >
                {article.footer}
              </span>
            )}
          </div>
          <HeroBookmarkButton article={article} theme={theme} />
        </div>
      )}
    </article>
  );
}
