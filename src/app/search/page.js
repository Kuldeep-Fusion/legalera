// ============================================================================
// SEARCH RESULTS PAGE ("/search")
// ============================================================================
// Reads ?q=... from the URL and lets the user search all LegalEra stories!
// ============================================================================

import SearchClient from "@/components/listings/SearchClient";
import { getAllArticles } from "@/data/news";

export const metadata = {
  title: "Search Legal Archive — LEGAL ERA",
};

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const initialQuery = params?.q || "IBC";
  const allArticles = getAllArticles();

  return <SearchClient initialQuery={initialQuery} articles={allArticles} />;
}
