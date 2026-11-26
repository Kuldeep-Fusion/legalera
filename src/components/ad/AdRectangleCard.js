"use client";

// ============================================================================
// RECTANGLE AD CARD CAROUSEL (SIDEBAR 300x250 SWIPER)
// ============================================================================

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AdMarkBadge from "@/components/ad/AdMarkBadge";

export default function AdRectangleCard({ slides }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-outline-variant bg-white shadow-sm">
      <AdMarkBadge dark={true} />

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={slides.length > 1}
        autoplay={{
          delay: 4800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        className="ad-swiper ad-swiper-light w-full"
      >
        {slides.map((ad) => (
          <SwiperSlide key={ad.id}>
            <div className="flex flex-col pb-7 group">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-primary">
                <img
                  src={ad.image}
                  alt={ad.brandName}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300 ease-out"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-2.5 left-3 font-label text-[11px] font-bold uppercase tracking-wider text-accent">
                  {ad.brandName}
                </span>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <span className="self-start px-2 py-0.5 rounded-sm bg-accent-container text-on-accent-container font-label text-[9.5px] font-bold uppercase tracking-wider">
                  {ad.badge}
                </span>

                <h3 className="font-display text-[15.5px] leading-snug font-bold text-on-surface line-clamp-2">
                  {ad.headline}
                </h3>

                <p className="font-body text-[12.5px] leading-relaxed text-on-surface-variant line-clamp-2">
                  {ad.subtext}
                </p>

                <Link
                  href={ad.href}
                  className="mt-1 w-full py-2 rounded-lg bg-breaking text-white hover:bg-breaking-dark font-label text-[11px] font-bold uppercase tracking-wider text-center transition-colors shadow-sm"
                >
                  {ad.ctaText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
