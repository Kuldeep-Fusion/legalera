// ============================================================================
// SINGLE ARTICLE API ("/api/articles?slug=...")
// ============================================================================
// Returns ONE article at a time when the user scrolls down to read the next
// story. Keeping responses to 1 post at a time keeps the app super fast!
// ============================================================================

import { NextResponse } from "next/server";
import { buildFullArticleData } from "@/data/news";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const payload = buildFullArticleData(slug);
  return NextResponse.json(payload);
}
