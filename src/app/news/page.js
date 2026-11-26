// ============================================================================
// NEWS LISTING & CATEGORY PAGE ("/news")
// ============================================================================
// Shows all news stories or filters them by category (e.g. /news?category=Judgments).
// We read the URL parameter on the server and pass it to NewsListingClient.
// ============================================================================

import NewsListingClient from "@/components/listings/NewsListingClient";
import { getAllArticles } from "@/data/news";

export const metadata = {
  title: "Latest Legal News & Categories — LEGAL ERA",
};

export default async function NewsPage({ searchParams }) {
  const params = await searchParams;
  const initialCategory = params?.category || "All";
  const allArticles = getAllArticles();

  return <NewsListingClient initialCategory={initialCategory} articles={allArticles} />;
}
