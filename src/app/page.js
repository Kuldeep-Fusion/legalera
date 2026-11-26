// ============================================================================
// HOMEPAGE ("/") — COHESIVE MODERN EDITORIAL PORTAL
// ============================================================================
// Every section below shares the exact same clean typography, pastel & brand
// pills, rounded imagery, hairline dividers, and bookmark UX as the Hero!
// ============================================================================

import Link from "next/link";
import AdBanner from "@/components/ad/AdBanner";
import BreakingTicker from "@/components/layout/BreakingTicker";
import HeroEditorialGrid from "@/components/sections/HeroEditorialGrid";
import HeroBookmarkButton from "@/components/ui/HeroBookmarkButton";
import WithinCircleSection from "@/components/sections/WithinCircleSection";
import GlobalInsightsSection from "@/components/sections/GlobalInsightsSection";
import LeadingLawFirmsSection from "@/components/sections/LeadingLawFirmsSection";
import HireMovesSection from "@/components/sections/HireMovesSection";
import DealStreetSection from "@/components/sections/DealStreetSection";
import IprTechSection from "@/components/sections/IprTechSection";
import MagazineEventsSection from "@/components/sections/MagazineEventsSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SingleCard from "@/components/card/SingleCard";
import NewsletterBox from "@/components/sections/NewsletterBox";
import {
  ADR_STORIES,
  FROM_THE_COURTS,
  TAX_STORIES,
} from "@/data/news";

export default function HomePage() {
  return (
    <main className="flex-1 bg-surface">
      {/* 1. Breaking Flash Bar */}
      <BreakingTicker />

      {/* 1B. Quick Topics / In Focus Strip */}
      <div className="border-b border-outline-variant bg-surface">
        <div className="site-container py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="font-label text-[10px] font-bold uppercase tracking-wider text-primary shrink-0 pr-1">
            In Focus:
          </span>
          {[
            { label: "IBC Section 53", href: "/search?q=IBC" },
            { label: "Supreme Court", href: "/search?q=Supreme+Court" },
            { label: "SEBI RPT Norms", href: "/search?q=SEBI" },
            { label: "DPDP Privacy", href: "/search?q=DPDP" },
            { label: "AI Personality Rights", href: "/search?q=AI" },
            { label: "M&A Deal Street", href: "/news?category=Law+Firms" },
            { label: "Nov 2026 Magazine", href: "/magazine" },
          ].map((topic) => (
            <Link
              key={topic.label}
              href={topic.href}
              className="shrink-0 px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant hover:border-primary hover:text-primary font-body text-[12px] font-medium text-on-surface-variant transition-colors"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </div>

      {/* 1C. Top Leaderboard Dummy Ad (970x90, hidden on mobile) */}
      <AdBanner slot="topLeaderboard" variant="leaderboard" hideOnMobile />

      {/* 2. 3-COLUMN HERO EDITORIAL GRID */}
      <HeroEditorialGrid />

      {/* 3. WITHIN THE CIRCLE & EXCLUSIVE INTERVIEWS */}
      <WithinCircleSection />

      {/* 4. GLOBAL INSIGHTS & INTERACTIVE QUIZ */}
      <GlobalInsightsSection />

      {/* 4A. LEADING LAW FIRMS (BRANDED LOGO & ACHIEVEMENT SLIDER) */}
      <LeadingLawFirmsSection />

      {/* 4B. HIRE & MOVES (4-CARD SLIDER) */}
      <HireMovesSection />

      {/* 4C. Mid-Page Leaderboard Ad Scroller */}
      <AdBanner slot="midLeaderboard" variant="leaderboard" />

      {/* 4D. DEAL STREET & M&A */}
      <DealStreetSection />

      {/* 5. FULL-WIDTH DARK BENTO SECTION: IPR & TECH LAW + SIDEBAR AD */}
      <IprTechSection />

      {/* 6. THREE-COLUMN SPECIALIST DESKS (Tax | Arbitration | From The Courts) */}
      <section className="site-container py-10 md:py-12 border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-0 xl:divide-x xl:divide-outline-variant">
          {[
            { title: "Tax Law & Policy", href: "/news?category=India", items: TAX_STORIES, dot: "bg-accent-dark" },
            { title: "Arbitration & ADR", href: "/news?category=Litigation", items: ADR_STORIES, dot: "bg-primary" },
            {
              title: "From The Courts",
              href: "/news?category=Judgments",
              items: FROM_THE_COURTS.map((item) => ({ ...item, eyebrow: item.court })),
              dot: "bg-breaking",
            },
          ].map((col, colIdx) => {
            const [topStory, ...rest] = col.items;
            return (
              <div
                key={col.title}
                className={`flex flex-col min-w-0 ${
                  colIdx === 0 ? "xl:pr-6" : colIdx === 1 ? "xl:px-6" : "xl:pl-6 md:col-span-2 xl:col-span-1"
                }`}
              >
                <SectionHeading title={col.title} seeMoreHref={col.href} dotColor={col.dot} />

                <div className="mb-4 pb-4 border-b border-outline-variant">
                  <SingleCard article={topStory} showSummary={false} />
                </div>

                <div className="flex flex-col divide-y divide-outline-variant">
                  {rest.map((item) => (
                    <article key={item.slug} className="py-3 first:pt-0 last:pb-0 flex flex-col gap-1.5 group">
                      <span className="self-start px-2 py-0.5 rounded-sm bg-surface-container text-primary font-label text-[9.5px] font-bold uppercase tracking-wider">
                        {item.eyebrow || item.category}
                      </span>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-headline text-[14.5px] leading-snug font-bold text-on-surface group-hover:text-primary group-hover:underline">
                          <Link href={`/news/${item.slug}`}>{item.title}</Link>
                        </h3>
                        <HeroBookmarkButton article={item} />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7B. Lower Leaderboard Ad Scroller */}
      <AdBanner slot="bottomLeaderboard" variant="leaderboard" />

      {/* 8. MAGAZINE & EVENTS DUAL SHOWCASE */}
      <MagazineEventsSection />

      {/* 9. NEWSLETTER BANNER */}
      <NewsletterBox variant="banner" />
    </main>
  );
}
