"use client";

// ============================================================================
// HIRE & MOVES SECTION (4-CARD INFINITE SLIDER)
// ============================================================================

import CardCarousel from "@/components/card/CardCarousel";
import SingleCard from "@/components/card/SingleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { HIRE_AND_MOVES } from "@/data/news";

export default function HireMovesSection() {
  return (
    <section className="site-container py-10 md:py-12 border-b border-outline-variant">
      <SectionHeading
        title="Hire & Moves"
        seeMoreHref="/news?category=Law+Firms"
        seeMoreText="All Moves →"
        dotColor="bg-accent-dark"
      />

      <CardCarousel
        items={HIRE_AND_MOVES}
        desktopSlides={4}
        autoplayDelay={3600}
        showDots={false}
        renderCard={(move) => (
          <SingleCard
            article={{ ...move, eyebrow: move.tag, footer: move.org }}
            showSummary={true}
          />
        )}
      />
    </section>
  );
}
