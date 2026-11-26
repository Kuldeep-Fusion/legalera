// ============================================================================
// SPONSORED "AD" BADGE MARK FOR AD CARDS & SCROLLERS
// ============================================================================

import Link from "next/link";

export default function AdMarkBadge({ dark = false }) {
  return (
    <Link
      href="/advertise"
      title="Sponsored Advertisement — Click to advertise with LEGAL ERA"
      className={`absolute top-2.5 right-3 z-20 inline-flex items-center gap-1 px-2 py-0.5 rounded font-label text-[9.5px] font-bold uppercase tracking-widest transition-colors ${
        dark
          ? "bg-black/55 hover:bg-black/80 text-white/90 ring-1 ring-white/20 backdrop-blur-sm"
          : "bg-white/95 hover:bg-white text-on-surface-variant ring-1 ring-outline-variant shadow-sm"
      }`}
    >
      <span>Ad</span>
      <span aria-hidden="true" className="text-[10px] opacity-75">
        ⓘ
      </span>
    </Link>
  );
}
