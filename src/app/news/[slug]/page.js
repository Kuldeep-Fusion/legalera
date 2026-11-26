// ============================================================================
// ARTICLE DETAIL PAGE ("/news/[slug]") — WITH INFINITE NEXT-POST SCROLLING
// ============================================================================
// Loads ONLY 1 post initially for fast performance, then automatically loads
// the next post when you scroll down to the end of the current article!
// ============================================================================

import Link from "next/link";
import AdBanner from "@/components/ad/AdBanner";
import InfiniteArticleFeed from "@/components/article/InfiniteArticleFeed";
import ReadingProgress from "@/components/article/ReadingProgress";
import NewsletterBox from "@/components/sections/NewsletterBox";
import { buildFullArticleData, getAllArticles, getArticleBySlug, TRENDING_NEWS } from "@/data/news";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return {
    title: `${article.title} — LEGAL ERA`,
  };
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const { article, nextSlug, nextTitle } = buildFullArticleData(slug);

  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <main className="flex-1 site-container py-8">
      <ReadingProgress />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body text-body-sm text-on-surface-variant mb-6">
        <Link href="/" className="hover:text-breaking">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/news?category=${encodeURIComponent(article.category || "Judgments")}`}
          className="hover:text-breaking"
        >
          {article.category || "Judgments"}
        </Link>
        <span>/</span>
        <span className="text-on-surface font-bold">
          {article.subcategory || article.eyebrow || "LegalEra Report"}
        </span>
      </nav>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
        {/* Left 8 Columns: Infinite Scroll Single-Article Stream */}
        <div className="xl:col-span-8 min-w-0">
          <InfiniteArticleFeed
            initialArticle={article}
            initialNextSlug={nextSlug}
            initialNextTitle={nextTitle}
            related={related}
          />
        </div>

        {/* Right 4 Columns: Sticky Sidebar */}
        <aside className="xl:col-span-4 xl:sticky xl:top-16 flex flex-col gap-6 min-w-0">
          <div className="bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col gap-4">
            <h2 className="font-label text-[12px] font-bold uppercase tracking-wider text-on-surface border-b-2 border-primary pb-2">
              Most Read News
            </h2>
            <ol className="flex flex-col divide-y divide-outline-variant">
              {TRENDING_NEWS.slice(0, 3).map((item, idx) => (
                <li key={item.slug} className="py-3 first:pt-0 last:pb-0 flex items-start gap-3">
                  <span
                    className={`px-1.5 py-0.5 rounded-sm font-mono text-mono-sm ${
                      idx === 0
                        ? "bg-breaking text-white"
                        : idx === 1
                        ? "bg-primary text-white"
                        : "bg-surface-container-high text-on-surface"
                    }`}
                  >
                    {item.rank}
                  </span>
                  <Link
                    href={`/news/${item.slug}`}
                    className="font-headline text-title-md text-on-surface hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <NewsletterBox variant="sidebar" eyebrow="Newsletter" />

          <AdBanner slot="sidebarRectangle" variant="rectangle" />
        </aside>
      </div>
    </main>
  );
}
