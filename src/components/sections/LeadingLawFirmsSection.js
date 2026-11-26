"use client";

// ============================================================================
// LEADING LAW FIRMS — INFINITE BRANDED LOGO SLIDER
// ============================================================================
// Features Within The Circle's deep navy dot-grid backdrop with pure,
// bordered law-firm logo cards (logo image only, zero extra text) in a
// smooth infinite SwiperJS marquee carousel.
// ============================================================================

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { LEADING_LAW_FIRMS } from "@/data/news";

export default function LeadingLawFirmsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-white border-y border-white/10 py-10 md:py-12">
      {/* Ambient Ocean Glow & Dot-Grid Pattern matched to Within The Circle */}
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 -top-20 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(92,196,242,0.55) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 site-container">
        {/* Compact Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            href="/news?category=Law+Firms"
            className="inline-flex items-center gap-1.5 group"
          >
            <h2 className="font-display text-[20px] md:text-[23px] font-bold text-white group-hover:text-accent transition-colors">
              Leading Law Firms
            </h2>
            <span className="text-accent text-xl leading-none font-bold group-hover:translate-x-0.5 transition-transform">
              &rsaquo;
            </span>
          </Link>

          <Link
            href="/news?category=Law+Firms"
            className="font-label text-[11.5px] font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
          >
            Full Directory →
          </Link>
        </div>

        {/* Continuous Infinite Bordered Logo Carousel (3 Logos + Soft Left/Right Fade) */}
        <div
          className="relative"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)",
          }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={22}
            slidesPerView={1}
            speed={3600}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full px-4 sm:px-6 [&_.swiper-wrapper]:!ease-linear"
          >
            {LEADING_LAW_FIRMS.map((firm) => (
              <SwiperSlide key={firm.name}>
                <Link
                  href={firm.href}
                  title={firm.name}
                  aria-label={firm.name}
                  className="group relative h-24 sm:h-28 w-full rounded-2xl bg-white/[0.97] hover:bg-white border-2 border-white/25 hover:border-accent shadow-lg p-5 flex items-center justify-center transition-all duration-300"
                >
                  {/* Inner hairline frame for crafted plaque border look */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-1.5 rounded-xl border border-primary/10 group-hover:border-accent/40 transition-colors"
                  />

                  <img
                    src={firm.logo}
                    alt={firm.name}
                    loading="lazy"
                    className="relative z-10 max-h-12 sm:max-h-14 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
