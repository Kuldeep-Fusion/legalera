"use client";

// ============================================================================
// AD BANNER ENTRYPOINT (LEADERBOARD & RECTANGLE SWIPER CARDS)
// ============================================================================

import { AD_SLOTS } from "@/data/ads";
import AdRectangleCard from "@/components/ad/AdRectangleCard";
import AdLeaderboardCard from "@/components/ad/AdLeaderboardCard";

export default function AdBanner({ slot = "topLeaderboard", variant = "leaderboard" }) {
  const slides = AD_SLOTS[slot] || AD_SLOTS.topLeaderboard;

  if (variant === "rectangle") {
    return <AdRectangleCard slides={slides} />;
  }

  const isDarkBanner = slot === "topLeaderboard" || slot === "bottomLeaderboard";
  return <AdLeaderboardCard slides={slides} isDarkBanner={isDarkBanner} />;
}
