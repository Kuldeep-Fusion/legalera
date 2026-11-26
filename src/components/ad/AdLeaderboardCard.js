"use client";

// ============================================================================
// LEADERBOARD AD CARD CAROUSEL (HORIZONTAL TOP / MID / BOTTOM SWIPER)
// ============================================================================

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AdMarkBadge from "@/components/ad/AdMarkBadge";

export default function AdLeaderboardCard({
  slides,
  isDarkBanner = false,
  hideOnMobile = false,
}) {
  return (
    <div
      className={`${
        hideOnMobile ? "hidden md:block " : ""
      }border-b border-outline-variant/60 bg-surface-container-low/40`}
    >
      <div className="site-container py-5">
        <div
          className={`relative overflow-hidden rounded-xl border shadow-sm ${
            isDarkBanner
              ? "bg-gradient-to-r from-secondary via-primary to-[#124570] text-white border-white/10"
              : "bg-gradient-to-r from-[#FDF2F3] via-white to-[#EDF5FC] text-on-surface border-outline-variant"
          }`}
        >
          <AdMarkBadge dark={isDarkBanner} />

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={slides.length > 1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            className={`ad-swiper w-full ${isDarkBanner ? "ad-swiper-dark" : "ad-swiper-light"}`}
          >
            {slides.map((ad) => (
              <SwiperSlide key={ad.id}>
                <div className="px-4 sm:px-5 pt-3.5 pb-7 pr-12 sm:pr-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 ring-1 ring-black/10 hidden sm:block">
                      <img
                        src={ad.image}
                        alt={ad.brandName}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`px-1.5 py-0.5 rounded-sm font-label text-[9px] font-bold uppercase tracking-widest ${
                            isDarkBanner
                              ? "bg-white/15 text-accent"
                              : "bg-surface-container-high text-on-surface-variant"
                          }`}
                        >
                          {ad.badge}
                        </span>
                        <span
                          className={`font-label text-[11px] font-bold uppercase tracking-wider ${
                            isDarkBanner ? "text-accent" : "text-breaking"
                          }`}
                        >
                          {ad.brandName}
                        </span>
                      </div>

                      <p
                        className={`font-display text-[15px] md:text-[16.5px] font-bold leading-snug ${
                          isDarkBanner ? "text-white" : "text-primary"
                        }`}
                      >
                        {ad.headline}
                      </p>
                      <p
                        className={`font-body text-[12px] line-clamp-2 md:truncate ${
                          isDarkBanner ? "text-sky-100/80" : "text-on-surface-variant"
                        }`}
                      >
                        {ad.subtext}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={ad.href}
                    className={`w-full md:w-auto text-center shrink-0 px-4 py-2 rounded-lg font-label text-[11.5px] font-bold uppercase tracking-wider transition-colors shadow-sm ${
                      isDarkBanner
                        ? "bg-accent text-on-accent hover:bg-white"
                        : "bg-primary text-white hover:bg-breaking"
                    }`}
                  >
                    {ad.ctaText}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
