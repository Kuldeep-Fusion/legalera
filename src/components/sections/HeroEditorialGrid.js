// ============================================================================
// HERO EDITORIAL GRID (3-COLUMN MODERN MAGAZINE-NEWSPAPER LAYOUT)
// ============================================================================
// Matches the clean 3-column screenshot structure:
// - Left Column  (3 cols): "• LATEST NEWS" feed with pill badges & bookmarks
// - Center Column(6 cols): Big hero photo story + 2 visual cards underneath
// - Right Column (3 cols): Visual story + Dark "Join the Legal Brief" card
//                          + Compact thumbnail story at the bottom
// ============================================================================

import Link from "next/link";
import HeroBookmarkButton from "@/components/ui/HeroBookmarkButton";
import WaitlistCard from "@/components/card/WaitlistCard";
import {
  DEAL_STREET,
  HERO_LEAD_STORY,
  HERO_MEDIUM_STORIES,
  HERO_MINI_HEADLINES,
  LATEST_LEGAL_NEWS,
  TRENDING_NEWS,
} from "@/data/news";

// Clean pastel pill styles matched to LegalEra's Blue & Crimson palette
const PILL_STYLES = [
  "bg-emerald-50 text-emerald-800 border border-emerald-200/80",
  "bg-accent-container text-on-accent-container border border-accent/30",
  "bg-indigo-50 text-indigo-800 border border-indigo-200/80",
  "bg-sky-50 text-sky-900 border border-sky-200/80",
  "bg-breaking-container text-breaking border border-breaking/20",
];

function CircleArrowIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5 text-primary shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 12h5m-2-2l2 2-2 2" />
    </svg>
  );
}

export default function HeroEditorialGrid() {
  // Left rail: 5 crisp latest stories
  const leftFeed = [
    ...HERO_MINI_HEADLINES.map((item) => ({
      ...item,
      summary:
        item.summary ||
        "Key regulatory and courtroom developments tracked by LegalEra's legal intelligence desk.",
      readTime: item.readTime || "4 Min Read",
    })),
    ...LATEST_LEGAL_NEWS.slice(0, 2).map((item) => ({
      ...item,
      readTime: "5 Min Read",
    })),
  ];

  // Center bottom: 2 medium visual stories
  const centerPair = HERO_MEDIUM_STORIES.slice(0, 2);

  // Right rail: 1 top visual story + Dark Brief Promo + 1 compact thumbnail story
  const rightTopStory = LATEST_LEGAL_NEWS[2] || DEAL_STREET[0];
  const rightBottomStory = TRENDING_NEWS[0];

  return (
    <section className="site-container pt-6 pb-10 md:pt-8 md:pb-12 border-b border-outline-variant">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-7 items-start">
        {/* ================================================================
            LEFT COLUMN (3 cols on xl): "• LATEST NEWS" FEED
            ================================================================ */}
        <aside className="order-2 xl:order-1 lg:col-span-5 xl:col-span-3 flex flex-col min-w-0">
          <div className="flex items-center justify-between border-b border-outline-variant pb-2.5 mb-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-breaking" aria-hidden="true" />
              <h2 className="font-label text-[11.5px] font-bold uppercase tracking-[0.08em] text-on-surface">
                Latest News
              </h2>
            </div>
            <Link
              href="/news"
              className="font-label text-[11px] font-bold text-accent-dark hover:text-breaking transition-colors"
            >
              All →
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-outline-variant">
            {leftFeed.map((item, idx) => (
              <article key={item.slug} className="py-4 first:pt-3 last:pb-1 flex flex-col gap-2 group">
                <span
                  className={`self-start px-2 py-0.5 rounded-sm font-label text-[9.5px] font-bold uppercase tracking-wider ${
                    PILL_STYLES[idx % PILL_STYLES.length]
                  }`}
                >
                  {item.eyebrow || item.category}
                </span>

                <h3 className="font-body text-[14.5px] leading-[1.35] font-bold text-on-surface group-hover:text-primary transition-colors">
                  <Link href={`/news/${item.slug}`} className="inline">
                    <CircleArrowIcon />
                    <span className="group-hover:underline underline-offset-2">{item.title}</span>
                  </Link>
                </h3>

                <p className="font-body text-[12.5px] leading-[1.5] text-on-surface-variant line-clamp-2">
                  {item.summary}
                </p>

                <div className="flex items-center justify-between pt-0.5">
                  <span className="font-mono text-[11px] text-on-surface-variant tabular-nums">
                    {item.date || "24 Nov 2026"} · {item.readTime || "4 Min Read"}
                  </span>
                  <HeroBookmarkButton article={item} />
                </div>
              </article>
            ))}
          </div>
        </aside>

        {/* ================================================================
            CENTER COLUMN (6 cols on xl): BIG LEAD STORY + 2 VISUAL CARDS
            ================================================================ */}
        <div className="order-1 xl:order-2 lg:col-span-7 xl:col-span-6 flex flex-col gap-7 min-w-0">
          {/* Big Visual Feature */}
          <article className="group flex flex-col gap-3.5 pb-6 border-b border-outline-variant">
            <Link
              href={`/news/${HERO_LEAD_STORY.slug}`}
              className="aspect-[16/10] w-full img-hero block"
            >
              <img
                src={HERO_LEAD_STORY.image}
                alt={HERO_LEAD_STORY.imageAlt}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
              />
            </Link>

            <h1 className="font-display text-[26px] md:text-[34px] leading-[1.15] font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
              <Link href={`/news/${HERO_LEAD_STORY.slug}`}>{HERO_LEAD_STORY.title}</Link>
            </h1>

            <p className="font-body text-[15px] leading-[1.6] text-on-surface-variant">
              {HERO_LEAD_STORY.summary}
            </p>

            <div className="flex items-center justify-between gap-3 pt-1">
              <div className="flex items-center flex-wrap gap-2.5">
                <span className="px-2.5 py-0.5 rounded-sm bg-breaking text-white font-label text-[10px] font-bold uppercase tracking-wider">
                  {HERO_LEAD_STORY.subcategory || "Supreme Court"}
                </span>
                <span className="font-mono text-[11.5px] text-on-surface-variant tabular-nums">
                  {HERO_LEAD_STORY.date} · {HERO_LEAD_STORY.readTime}
                </span>
              </div>
              <HeroBookmarkButton article={HERO_LEAD_STORY} />
            </div>
          </article>

          {/* 2 Equal Cards Underneath */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {centerPair.map((story, idx) => (
              <article key={story.slug} className="group flex flex-col gap-2.5 h-full">
                <Link
                  href={`/news/${story.slug}`}
                  className="aspect-[16/10] w-full img-card block"
                >
                  <img
                    src={story.image}
                    alt={story.imageAlt || story.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                  />
                </Link>

                <h3 className="font-headline text-[18px] leading-[1.3] font-bold text-on-surface group-hover:text-primary group-hover:underline underline-offset-2">
                  <Link href={`/news/${story.slug}`}>{story.title}</Link>
                </h3>

                <p className="font-body text-[13px] leading-[1.5] text-on-surface-variant line-clamp-2 flex-1">
                  {story.summary}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-outline-variant/70">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`px-2 py-0.5 rounded-sm font-label text-[9.5px] font-bold uppercase tracking-wider shrink-0 ${
                        idx === 0 ? "bg-primary text-white" : "bg-accent-container text-on-accent-container"
                      }`}
                    >
                      {story.eyebrow || story.category}
                    </span>
                    <span className="font-mono text-[11px] text-on-surface-variant truncate tabular-nums">
                      {story.date}
                    </span>
                  </div>
                  <HeroBookmarkButton article={story} />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================================================================
            RIGHT COLUMN (3 cols on xl): VISUAL CARD + DARK BRIEF + COMPACT
            ================================================================ */}
        <aside className="order-3 lg:col-span-12 xl:col-span-3 grid grid-cols-1 md:grid-cols-3 xl:flex xl:flex-col gap-6 min-w-0">
          {/* Top Right Visual Card */}
          <article className="group flex flex-col gap-2.5 pb-5 xl:border-b border-outline-variant">
            <Link
              href={`/news/${rightTopStory.slug}`}
              className="aspect-[16/10] w-full img-card block"
            >
              <img
                src={rightTopStory.image}
                alt={rightTopStory.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
              />
            </Link>

            <h3 className="font-headline text-[17px] leading-[1.3] font-bold text-on-surface group-hover:text-primary group-hover:underline underline-offset-2">
              <Link href={`/news/${rightTopStory.slug}`}>{rightTopStory.title}</Link>
            </h3>

            <p className="font-body text-[13px] leading-[1.5] text-on-surface-variant line-clamp-2">
              {rightTopStory.summary}
            </p>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-sm bg-primary text-white font-label text-[9.5px] font-bold uppercase tracking-wider">
                  {rightTopStory.eyebrow || rightTopStory.category}
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant tabular-nums">
                  {rightTopStory.date}
                </span>
              </div>
              <HeroBookmarkButton article={rightTopStory} />
            </div>
          </article>

          {/* Dark Interactive Brief / Membership Card */}
          <WaitlistCard />

          {/* Bottom Compact Thumbnail Card */}
          <article className="group flex items-start gap-3 pt-1">
            <Link
              href={`/news/${rightBottomStory.slug}`}
              className="w-14 h-14 img-thumb shrink-0 block mt-0.5"
            >
              <img
                src={rightBottomStory.image}
                alt={rightBottomStory.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
            </Link>

            <div className="flex-1 flex flex-col gap-1.5 min-w-0">
              <span className="self-start px-2 py-0.5 rounded-sm bg-accent-dark text-white font-label text-[9.5px] font-bold uppercase tracking-wider">
                {rightBottomStory.category}
              </span>

              <h3 className="font-headline text-[14.5px] leading-[1.32] font-bold text-on-surface group-hover:text-primary group-hover:underline underline-offset-2">
                <Link href={`/news/${rightBottomStory.slug}`}>{rightBottomStory.title}</Link>
              </h3>

              <p className="font-body text-[12px] leading-[1.45] text-on-surface-variant line-clamp-2">
                {rightBottomStory.meta} — Full courtroom breakdown &amp; legal implications.
              </p>

              <div className="flex items-center justify-between pt-0.5">
                <span className="font-mono text-[11px] text-on-surface-variant tabular-nums">
                  {rightBottomStory.date}
                </span>
                <HeroBookmarkButton article={rightBottomStory} />
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
