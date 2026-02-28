"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HeroSlide } from "@/components/home/types";

type HeroSectionProps = {
  slides: HeroSlide[];
  current: number;
  ctaLabel: string;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

export default function HeroSection({
  slides,
  current,
  ctaLabel,
  onPrev,
  onNext,
  onSelect,
}: HeroSectionProps) {
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext(); else onPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="home"
      className="relative flex items-center bg-white px-4 min-h-120 sm:h-[60vh] sm:min-h-0 md:px-6 lg:px-8"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 px-4 md:px-6 lg:px-8">
        <div className="relative h-full w-full overflow-hidden rounded-[20px]">
          <Image
            key={current}
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover transition-all duration-700"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-360 px-6 lg:px-8">
        <h1 className="max-w-3xl text-2xl font-semibold leading-tight text-white md:text-[34px] lg:text-[44px]">
          {slides[current].title}
        </h1>
        <p className="mt-3 max-w-2xl text-[16px] text-slate-200 md:mt-4 md:text-[19px] lg:text-[22px]">
          {slides[current].desc}
        </p>
        <a
          href="https://wa.me/6285730839962?text=Halo%20Athena%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white bg-white/20 px-6 py-2.5 text-[16px] font-medium text-white backdrop-blur-sm transition hover:bg-white/30 md:mt-8 md:border-white/50 md:px-7 md:py-3 md:text-[20px]"
        >
          {ctaLabel}

          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7974 8.21987L17.2356 8.21987L17.2356 14.6581" stroke="#FDFEFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.22021 17.2357L17.1457 8.31028" stroke="#FDFEFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <button
        onClick={onPrev}
        className="absolute left-6 z-30 hidden p-2 text-white transition hover:opacity-80 lg:block"
      >
        <ChevronLeft size={44} strokeWidth={1.5} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-6 z-30 hidden p-2 text-white transition hover:opacity-80 lg:block"
      >
        <ChevronRight size={44} strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`h-3 w-3 rounded-full transition ${current === index ? "bg-white" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
