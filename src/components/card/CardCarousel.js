"use client";

// ============================================================================
// REUSABLE SWIPERJS CARD CAROUSEL
// ============================================================================
// Renders a responsive horizontal slider of SingleCard (or custom renderCard)
// with inner pagination dots and smooth auto-play.
// ============================================================================

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SingleCard from "@/components/card/SingleCard";

export default function CardCarousel({
  items = [],
  renderCard,
  showSummary = true,
  autoplayDelay = 3800,
  desktopSlides = 3,
  showDots = true,
}) {
  if (!items.length) return null;

  return (
    <Swiper
      modules={showDots ? [Autoplay, Pagination] : [Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      speed={700}
      loop={items.length > 1}
      autoplay={
        autoplayDelay > 0
          ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
          : false
      }
      breakpoints={{
        640: { slidesPerView: Math.min(2, items.length) },
        1024: { slidesPerView: Math.min(3, desktopSlides, items.length) },
        1280: { slidesPerView: Math.min(desktopSlides, items.length) },
      }}
      pagination={showDots ? { clickable: true } : false}
      className={`ad-swiper ad-swiper-light w-full !py-2 ${showDots ? "!pb-9" : ""}`}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={item.slug || item.id || idx} className="!h-auto flex">
          <div className="w-full h-full">
            {renderCard ? renderCard(item, idx) : <SingleCard article={item} showSummary={showSummary} />}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
