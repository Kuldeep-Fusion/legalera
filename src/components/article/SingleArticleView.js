// ============================================================================
// SINGLE ARTICLE VIEW
// ============================================================================
// Renders one full news article (used both for the first post and for every
// next post loaded automatically on scroll!).
// ============================================================================

import Link from "next/link";
import ArticleActions from "@/components/article/ArticleActions";
import ArticleReaderBody from "@/components/article/ArticleReaderBody";
import { HERO_LEAD_STORY } from "@/data/news";

export default function SingleArticleView({ article, related = [], isFirst = false, postNumber = 1 }) {
  const sections = article.sections || [];
  const citationText =
    article.citationText ||
    article.citation ||
    `LegalEra Legal Intelligence Archive · ${article.category || "Legal News"} · ${article.date || "24 Nov 2026"}`;

  return (
    <article
      data-article-slug={article.slug}
      data-article-title={article.title}
      className={`flex flex-col gap-6 ${!isFirst ? "article-perf pt-10 mt-10 border-t-4 border-primary" : ""}`}
    >
      {/* Next Story Divider Label for scrolled posts */}
      {!isFirst && (
        <div className="flex items-center justify-between gap-3 bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-sm bg-breaking text-white font-label text-[10px] font-bold uppercase tracking-wider">
              Up Next · Story #{postNumber}
            </span>
            <span className="font-mono text-[11px] text-on-surface-variant">
              Auto-loaded as you scroll
            </span>
          </div>
          <Link
            href={`/news/${article.slug}`}
            className="font-label text-[11px] font-bold text-primary hover:text-breaking"
          >
            Open Standalone →
          </Link>
        </div>
      )}

      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded-sm bg-breaking text-white font-label text-[10px] font-bold uppercase tracking-wider">
            {article.eyebrow || article.category} · Report
          </span>
          <span className="font-mono text-mono-sm text-on-surface-variant tabular-nums">
            {article.readTime || "5 min read"}
          </span>
        </div>

        {isFirst ? (
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-surface text-balance">
            {article.title}
          </h1>
        ) : (
          <h2 className="font-display text-display-md-mobile md:text-display-md text-on-surface text-balance">
            {article.title}
          </h2>
        )}

        <p className="font-body text-body-lg text-on-surface-variant text-pretty">
          {article.summary || HERO_LEAD_STORY.summary}
        </p>

        {/* Author Profile & Share / Save */}
        <div className="py-4 border-y border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={article.authorImage || "/images/portrait_gc_expert.jpg"}
              alt={article.author || "LegalEra Desk"}
              loading="lazy"
              className="w-11 h-11 rounded-full object-cover border border-outline-variant"
            />
            <div className="flex flex-col">
              <span className="font-body text-title-sm text-on-surface">
                {article.author || article.person || "LegalEra Editorial Desk"}
              </span>
              <span className="font-mono text-mono-sm text-on-surface-variant tabular-nums">
                {article.publishedFull || `Published ${article.date || "24 Nov 2026"} · New Delhi`}
              </span>
            </div>
          </div>

          <ArticleActions article={article} />
        </div>
      </header>

      {/* Featured Cover Image */}
      <figure className="flex flex-col gap-2">
        <div className="aspect-video w-full img-hero">
          <img
            src={article.image || "/images/hero_supreme_court.jpg"}
            alt={article.imageAlt || article.title}
            loading={isFirst ? "eager" : "lazy"}
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="font-body text-body-sm text-on-surface-variant">
          {article.imageCaption || `${article.title} — (Photo: LegalEra Archive)`}
        </figcaption>
      </figure>

      {/* Table of Contents */}
      {sections.length > 0 && (
        <div className="bg-surface-container-low border border-outline-variant rounded-lg p-5 flex flex-col gap-2.5">
          <span className="font-label text-label-md uppercase text-primary">In This Article</span>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-body text-body-sm text-primary">
            {sections.map((sec, idx) => (
              <li key={sec.id}>
                <a href={`#${sec.id}`} className="hover:underline">
                  {idx + 1}. {sec.heading}
                </a>
              </li>
            ))}
            <li>
              <a href={`#${article.slug}-citation`} className="hover:underline">
                {sections.length + 1}. Counsel &amp; Reference Details
              </a>
            </li>
          </ol>
        </div>
      )}

      {/* Interactive Reader Body */}
      <ArticleReaderBody
        sections={sections}
        quote={article.quote}
        citationText={citationText}
        citationId={`${article.slug}-citation`}
      />

      {/* Related Articles (shown on initial article) */}
      {isFirst && related.length > 0 && (
        <section className="pt-6 mt-2 border-t border-outline-variant flex flex-col gap-4">
          <h2 className="font-headline text-headline-md text-primary">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/news/${rel.slug}`}
                className="border border-outline-variant rounded-lg p-4 hover:bg-surface-container-low flex flex-col gap-1.5"
              >
                <span className="font-label text-label-sm text-accent-dark uppercase">
                  {rel.eyebrow || rel.category}
                </span>
                <h3 className="font-headline text-title-lg text-on-surface">{rel.title}</h3>
                <span className="font-mono text-mono-sm text-on-surface-variant">{rel.date || "23 Nov 2026"}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
