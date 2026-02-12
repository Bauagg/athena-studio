"use client";

import Image from "next/image";
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
  return (
    <section
      id="home"
      className="relative flex min-h-[540px] items-center overflow-hidden md:h-[76vh]"
    >
      <Image
        key={current}
        src={slides[current].image}
        alt={slides[current].title}
        fill
        priority
        className="absolute inset-0 object-cover transition-all duration-700"
      />
      <div className="absolute inset-0 z-10 bg-slate-950/50" />

      <div className="relative z-20 mx-auto w-full max-w-[1240px] px-6 lg:px-8">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          {slides[current].title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200">
          {slides[current].desc}
        </p>
        <button className="mt-8 rounded-full border border-white/50 bg-white/20 px-7 py-3 text-xl font-medium text-white backdrop-blur-sm transition hover:bg-white/30">
          {ctaLabel}
        </button>
      </div>

      <button
        onClick={onPrev}
        className="absolute left-4 z-30 p-2 text-white transition hover:opacity-80 md:left-6"
      >
        <ChevronLeft size={44} strokeWidth={1.5} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 z-30 p-2 text-white transition hover:opacity-80 md:right-6"
      >
        <ChevronRight size={44} strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
