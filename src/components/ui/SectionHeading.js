// ============================================================================
// SECTION HEADING (MATCHED TO HERO "• LATEST NEWS" STYLE)
// ============================================================================

import Link from "next/link";

export default function SectionHeading({
  title,
  seeMoreHref,
  seeMoreText = "View All →",
  dotColor = "bg-breaking",
  dark = false,
}) {
  return (
    <div
      className={`flex items-center justify-between border-b pb-2.5 mb-5 ${
        dark ? "border-white/15" : "border-outline-variant"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${dotColor}`} aria-hidden="true" />
        <h2
          className={`font-label text-[12px] font-bold uppercase tracking-[0.08em] ${
            dark ? "text-white" : "text-on-surface"
          }`}
        >
          {title}
        </h2>
      </div>
      {seeMoreHref && (
        <Link
          href={seeMoreHref}
          className={`font-label text-[11.5px] font-bold transition-colors ${
            dark ? "text-accent hover:text-white" : "text-accent-dark hover:text-breaking"
          }`}
        >
          {seeMoreText}
        </Link>
      )}
    </div>
  );
}
