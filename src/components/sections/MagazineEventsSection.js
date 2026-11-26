// ============================================================================
// LEGAL ERA MAGAZINE & EVENTS SHOWCASE (BALANCED 2-COLUMN CARDS)
// ============================================================================

import Link from "next/link";
import { DownloadIcon } from "@/components/ui/Icons";
import { FEATURED_ISSUE } from "@/data/magazine";
import { FLAGSHIP_EVENT, UPCOMING_EVENTS } from "@/data/events";

export default function MagazineEventsSection() {
  return (
    <section className="site-container py-10 md:py-12">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-7 items-stretch">
        {/* ================================================================
            LEFT 6 COLS: LEGAL ERA MAGAZINE (DARK NAVY FEATURE CARD)
            ================================================================ */}
        <div className="xl:col-span-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-white p-6 md:p-7 flex flex-col justify-between gap-6 shadow-md ring-1 ring-white/10">
          <div
            className="pointer-events-none absolute -right-12 -bottom-12 w-56 h-56 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(rgba(92,196,242,0.5) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
            aria-hidden="true"
          />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/15 pb-3.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <h2 className="font-label text-[11.5px] font-bold uppercase tracking-[0.08em] text-white">
                LEGAL ERA Magazine
              </h2>
            </div>
            <span className="px-2.5 py-0.5 rounded-sm bg-accent text-on-accent font-label text-[10px] font-bold uppercase whitespace-nowrap">
              Nov 2026 Issue
            </span>
          </div>

          {/* Body: Centered vertically between header and archive bar */}
          <div className="relative z-10 flex flex-col gap-6 flex-1 justify-center py-2">
            {/* Top Row: Cover Left | Volume + Title + Summary Right */}
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <Link
                href="/magazine"
                className="w-32 sm:w-36 aspect-[3/4] rounded-xl overflow-hidden border-2 border-accent/70 bg-secondary shrink-0 shadow-2xl ring-4 ring-white/10 group block"
              >
                <img
                  src={FEATURED_ISSUE.coverImage}
                  alt={FEATURED_ISSUE.title}
                  loading="lazy"
                  className="w-full h-full object-cover scale-[1.08] group-hover:scale-[1.12] transition-transform duration-300"
                />
              </Link>

              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <span className="font-mono text-[10.5px] text-accent uppercase tracking-wider">
                  {FEATURED_ISSUE.volume}
                </span>
                <h3 className="font-display text-[21px] md:text-[23px] leading-[1.2] font-bold text-white">
                  {FEATURED_ISSUE.title}
                </h3>
                <p className="font-body text-[13px] leading-relaxed text-sky-100/85">
                  {FEATURED_ISSUE.description}
                </p>
              </div>
            </div>

            {/* Bottom Full-Width Details (Highlights) + Single-Row Buttons */}
            <div className="flex flex-col gap-4 pt-3.5 border-t border-white/15">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {FEATURED_ISSUE.highlights.map((hl) => (
                  <li key={hl} className="font-body text-[12px] text-sky-100/90 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/magazine"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent text-on-accent hover:bg-white font-label text-[11px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors shadow-sm"
                >
                  Read Digital Edition
                </Link>
                <Link
                  href="/magazine"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-white/25 text-white hover:bg-white/10 font-label text-[11px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors"
                >
                  <DownloadIcon className="w-3.5 h-3.5" />
                  <span>PDF ({FEATURED_ISSUE.pdfSize})</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 pt-3.5 border-t border-white/15 flex items-center justify-between gap-3 text-[12px]">
            <span className="text-sky-100/70 truncate">Archive: Oct 2026 · Sep 2026 · Aug 2026</span>
            <Link
              href="/magazine"
              className="font-label text-[11.5px] font-bold text-accent hover:text-white whitespace-nowrap shrink-0"
            >
              Browse Archive →
            </Link>
          </div>
        </div>

        {/* ================================================================
            RIGHT 6 COLS: EVENTS & LEGAL AWARDS
            ================================================================ */}
        <div className="xl:col-span-6 bg-white border border-outline-variant rounded-2xl p-6 md:p-7 flex flex-col justify-between gap-5 shadow-sm">
          {/* Top Bar (matches Left card header height) */}
          <div className="flex items-center justify-between gap-3 border-b border-outline-variant pb-3.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-breaking shrink-0" aria-hidden="true" />
              <h2 className="font-label text-[11.5px] font-bold uppercase tracking-[0.08em] text-on-surface">
                Events &amp; Legal Awards
              </h2>
            </div>
            <Link
              href="/events"
              className="font-label text-[11.5px] font-bold text-primary hover:text-breaking whitespace-nowrap transition-colors"
            >
              View Calendar →
            </Link>
          </div>

          {/* Flagship Gala + Upcoming Summits */}
          <div className="flex flex-col gap-4 flex-1 justify-between">
            {/* Flagship Gala Card (Image Left + Title/Summary Right, Full-Width Buttons Below) */}
            <div className="flex flex-col gap-3.5 p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <div className="relative w-full sm:w-36 aspect-[16/10] sm:aspect-[4/3] img-thumb shrink-0">
                  <img
                    src={FLAGSHIP_EVENT.image}
                    alt={FLAGSHIP_EVENT.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-sm bg-breaking text-white font-label text-[9px] font-bold uppercase tracking-wider">
                    Flagship Gala
                  </span>
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                  <span className="font-mono text-[10.5px] font-bold text-breaking tabular-nums block">
                    {FLAGSHIP_EVENT.dateLocation}
                  </span>
                  <h3 className="font-headline text-[16px] leading-[1.3] font-bold text-on-surface mt-1">
                    {FLAGSHIP_EVENT.title}
                  </h3>
                  <p className="font-body text-[12px] leading-relaxed text-on-surface-variant mt-1">
                    {FLAGSHIP_EVENT.shortSummary}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1 border-t border-outline-variant/70">
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-primary text-white hover:bg-secondary font-label text-[10.5px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors"
                >
                  Register Delegate
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg border border-outline-variant bg-white hover:border-primary text-primary font-label text-[10.5px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors"
                >
                  Nominate
                </Link>
              </div>
            </div>

            {/* Upcoming Summits List */}
            <div className="flex flex-col divide-y divide-outline-variant border border-outline-variant rounded-xl px-4 bg-white">
              {UPCOMING_EVENTS.slice(0, 2).map((ev) => (
                <div
                  key={ev.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div className="w-11 h-11 rounded-lg bg-primary-container text-primary flex flex-col items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-[11px] font-bold leading-none">
                        {ev.dateVenue.split(" ")[0]}
                      </span>
                      <span className="font-label text-[9px] font-bold uppercase mt-0.5">
                        {ev.dateVenue.split(" ")[1]}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-label text-[10px] font-bold uppercase text-accent-dark whitespace-nowrap">
                          {ev.tag}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200/70 text-emerald-800 font-label text-[9.5px] font-bold whitespace-nowrap">
                          {ev.statusText}
                        </span>
                      </div>

                      <h4 className="font-headline text-[14px] leading-snug font-bold text-on-surface line-clamp-2">
                        {ev.title}
                      </h4>

                      <span className="font-body text-[12px] text-on-surface-variant line-clamp-1">
                        {ev.shortVenue}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/events"
                    className="self-start sm:self-center shrink-0 px-3.5 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white font-label text-[10.5px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors"
                  >
                    Register
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar (aligns symmetrically with Magazine bottom bar) */}
          <div className="pt-3.5 border-t border-outline-variant flex items-center justify-between gap-3 text-[12px]">
            <span className="text-on-surface-variant truncate">Nominations &amp; Delegate Passes Open</span>
            <Link
              href="/events"
              className="font-label text-[11.5px] font-bold text-primary hover:text-breaking whitespace-nowrap shrink-0"
            >
              All Summits →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
