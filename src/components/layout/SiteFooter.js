// ============================================================================
// SITE FOOTER (MODERN EDITORIAL MEMBERSHIP FOOTER)
// ============================================================================
// Keeps LegalEra's exact fonts & logo palette with a clean 5-part layout:
// 1. Membership CTA Banner with tilted decorative cards
// 2. 4-Column Sitemap (Company, Explore, Community, Legal)
// 3. Brand Logo + Inline Quick Links + Social Icons
// 4. Crimson Copyright & Legal Bar
// 5. Bottom Live Headlines Strip
// ============================================================================

import Link from "next/link";
import { FOOTER_COLUMNS, SITE_INFO } from "@/data/siteConfig";
import { FROM_THE_COURTS, DEAL_STREET } from "@/data/news";

export default function SiteFooter() {
  const tickerStories = [...FROM_THE_COURTS, ...DEAL_STREET];
  const loopTicker = [...tickerStories, ...tickerStories];

  return (
    <footer className="bg-[#081726] text-white overflow-hidden">
      {/* 1. Top Membership CTA Band with Decorative Tilted Cards */}
      <div className="relative border-b border-white/10 py-14 overflow-hidden">
        {/* Left tilted decorative cards (visible on desktop) */}
        <div className="hidden lg:block pointer-events-none select-none" aria-hidden="true">
          <div className="absolute -left-6 top-2 w-28 h-24 rounded-lg overflow-hidden -rotate-6 opacity-60 ring-1 ring-white/15 shadow-lg">
            <img src="/images/news_corporate_boardroom.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -left-4 bottom-3 w-32 h-32 rounded-xl overflow-hidden rotate-6 opacity-90 ring-2 ring-white/20 shadow-2xl">
            <img src="/images/hero_supreme_court.jpg" alt="" className="w-full h-full object-cover" />
          </div>

          {/* Right tilted decorative cards */}
          <div className="absolute -right-6 top-2 w-28 h-24 rounded-lg overflow-hidden rotate-6 opacity-60 ring-1 ring-white/15 shadow-lg">
            <img src="/images/event_legal_awards.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -right-4 bottom-3 w-32 h-32 rounded-xl overflow-hidden -rotate-6 opacity-90 ring-2 ring-white/20 shadow-2xl">
            <img src="/images/magazine_cover_nov2026.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Center CTA Content */}
        <div className="relative z-10 site-container text-center flex flex-col items-center gap-4">
          <span className="px-3 py-0.5 rounded-full bg-breaking text-white font-label text-[11px] font-bold tracking-wide">
            Community
          </span>

          <h2 className="font-display text-[28px] md:text-[36px] leading-tight font-bold text-white max-w-xl">
            Support independent legal journalism
          </h2>

          <p className="font-body text-[14.5px] leading-relaxed text-sky-100/75 max-w-lg">
            Members get full access to judgment digests, the digital magazine archive, and daily regulatory briefings for advocates and General Counsel.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link
              href="/membership"
              className="px-5 py-2.5 rounded-lg bg-white text-on-surface hover:bg-primary-container font-label text-[13px] font-bold inline-flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <span>Become a member</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white hover:bg-white/15 font-label text-[13px] font-bold transition-colors"
            >
              Learn more
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-2 text-[12px] text-sky-100/70 font-body">
            <span>Full archive access</span>
            <span className="text-white/25">•</span>
            <span>Monthly digital magazine</span>
            <span className="text-white/25">•</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>

      {/* 2. 4-Column Sitemap Band */}
      <div className="site-container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h3 className="font-label text-[13px] font-bold text-white">{col.title}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-[13px] text-sky-100/75 hover:text-white underline decoration-white/25 underline-offset-4 hover:decoration-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 3. Brand Logo + Inline Quick Links + Social Row */}
      <div className="border-t border-white/10">
        <div className="site-container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="bg-white px-2.5 py-1.5 rounded-md inline-flex items-center shadow-sm">
            <img
              src="/images/legalera-logo.png"
              alt="LEGAL ERA"
              className="h-7 w-auto object-contain"
            />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-5 font-body text-[13px] text-sky-100/80">
            <Link href="/about" className="hover:text-white underline decoration-white/20 underline-offset-4">
              About
            </Link>
            <Link href="/magazine" className="hover:text-white underline decoration-white/20 underline-offset-4">
              E-Magazine
            </Link>
            <Link href="/events" className="hover:text-white underline decoration-white/20 underline-offset-4">
              Events
            </Link>
            <Link href="/about#contact" className="hover:text-white underline decoration-white/20 underline-offset-4">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3.5 font-label text-[12px] font-bold text-sky-100/80">
            <a href="#x" aria-label="X" className="hover:text-white transition-colors">
              X
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white transition-colors">
              IN
            </a>
            <a href="#youtube" aria-label="YouTube" className="hover:text-white transition-colors">
              YT
            </a>
            <Link href="/search" aria-label="Search Archive" className="hover:text-white transition-colors">
              Archive
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Bold Crimson Red Rounded Copyright Strip */}
      <div className="site-container pb-5">
        <div className="bg-breaking text-white rounded-xl px-5 py-3.5 flex flex-col lg:flex-row items-center justify-between gap-2.5 text-center shadow-md">
          <span className="font-body text-[12.5px] font-medium">
            {SITE_INFO.copyright}
          </span>

          <span className="font-body text-[12px] text-white/95">
            Design &amp; Developed by{" "}
            <a
              href="https://github.com/Kuldeep-Fusion"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline decoration-white/60 underline-offset-4 hover:decoration-white hover:text-accent transition-colors"
            >
              Kuldeep Kumar
            </a>
          </span>

          <div className="flex flex-wrap items-center justify-center gap-4 font-body text-[12.5px]">
            <Link href="/privacy" className="underline decoration-white/50 underline-offset-4 hover:decoration-white">
              Privacy Policy
            </Link>
            <Link href="/privacy" className="underline decoration-white/50 underline-offset-4 hover:decoration-white">
              Terms of Service
            </Link>
            <Link href="/advertise" className="underline decoration-white/50 underline-offset-4 hover:decoration-white">
              Advertise
            </Link>
          </div>
        </div>
      </div>

      {/* 5. Bottom Mini Scrolling Stories Bar */}
      <div className="border-t border-white/10 bg-[#050F1A] py-2.5 overflow-hidden">
        <div className="ticker-track flex items-center gap-8 whitespace-nowrap">
          {loopTicker.map((story, idx) => (
            <Link
              key={`${story.slug}-${idx}`}
              href={`/news/${story.slug}`}
              className="inline-flex items-center gap-2.5 group"
            >
              <img
                src={story.image}
                alt=""
                className="w-6 h-4 rounded-sm object-cover opacity-85 group-hover:opacity-100"
              />
              <span className="font-body text-[12px] font-medium text-sky-100/85 group-hover:text-white">
                {story.title}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-breaking text-white font-label text-[9.5px] font-bold">
                {story.court || story.firm || story.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
