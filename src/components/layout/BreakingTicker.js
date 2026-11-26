// ============================================================================
// BREAKING / LIVE NEWS FLASH TICKER
// ============================================================================
// Crisp TOI-style "LIVE FLASH" bar with a pulsing red dot and smooth headlines.
// ============================================================================

import Link from "next/link";
import { BREAKING_TICKER } from "@/data/news";

export default function BreakingTicker() {
  const loopItems = [...BREAKING_TICKER, ...BREAKING_TICKER];

  return (
    <div className="bg-breaking-container border-b border-breaking/20 overflow-hidden">
      <div className="site-container h-9 flex items-center gap-3">
        <span
          role="status"
          className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-breaking text-white uppercase"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="font-label text-[10px] font-bold tracking-wider">Breaking</span>
        </span>

        <div className="flex-1 overflow-hidden relative">
          <div className="ticker-track flex items-center gap-8 whitespace-nowrap">
            {loopItems.map((item, idx) => (
              <div key={`${item.slug}-${idx}`} className="flex items-center gap-8">
                <Link
                  href={`/news/${item.slug}`}
                  className="font-body text-[13px] font-bold text-on-surface hover:text-breaking hover:underline"
                >
                  {item.text}
                </Link>
                <span className="text-breaking font-bold" aria-hidden="true">
                  |
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
