"use client";

// ============================================================================
// DEAL STREET & M&A SECTION (4-CARD INFINITE SLIDER MATCHED TO HIRE & MOVES)
// ============================================================================

import CardCarousel from "@/components/card/CardCarousel";
import SingleCard from "@/components/card/SingleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { DEAL_STREET } from "@/data/news";

export default function DealStreetSection() {
  return (
    <section className="site-container py-10 md:py-12 border-b border-outline-variant">
      <SectionHeading
        title="Deal Street & M&A"
        seeMoreHref="/news?category=Law+Firms"
        seeMoreText="All Deals →"
        dotColor="bg-primary"
      />

      <CardCarousel
        items={DEAL_STREET}
        desktopSlides={4}
        autoplayDelay={3900}
        showDots={false}
        renderCard={(deal) => (
          <SingleCard
            article={{
              ...deal,
              eyebrow: `${deal.firm} · ${deal.dealType || "M&A"}`,
              summary:
                deal.summary ||
                `Lead counsel ${deal.leadPartner || deal.author} structuring ${deal.sector || "M&A"} transaction.`,
              footer: deal.sector || deal.leadPartner,
            }}
            showSummary={true}
          />
        )}
      />
    </section>
  );
}
