"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Handshake,
  BriefcaseBusiness,
  Zap,
  MessageSquare,
  ShieldCheck,
  Wifi,
  Search,
  Map,
  PenTool,
  Code2,
  Rocket,
  Code,
  TrendingUp,
  BarChart3,
  Brain,
  Crosshair,
  CircleCheck,
  Lightbulb,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { homeContentByLanguage } from "@/components/home/content";
import type { HeroSlide, IconTextItem } from "@/components/home/types";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
import HowWeWorkSection from "@/components/home/how-we-work-section";
import WhyAthenaSection from "@/components/home/why-athena-section";
import CtaSection from "@/components/home/cta-section";

import Banner1 from "@/assets/images/banner1.png";
import Banner2 from "@/assets/images/banner2.png";
import Banner3 from "@/assets/images/banner3.png";
import aboutUsImage from "@/assets/images/image.png";

export default function HomePage() {
  const { language } = useLanguage();
  const content = homeContentByLanguage[language];
  const [current, setCurrent] = useState(0);

  const slides: HeroSlide[] = useMemo(
    () => [
      { image: Banner1, ...content.slides[0] },
      { image: Banner2, ...content.slides[1] },
      { image: Banner3, ...content.slides[2] },
    ],
    [content.slides],
  );

  const whyItems: IconTextItem[] = useMemo(() => {
    const icons = [Handshake, BriefcaseBusiness, Zap, MessageSquare, ShieldCheck, Wifi];
    return content.whyItems.map((item, index) => ({ ...item, Icon: icons[index] }));
  }, [content.whyItems]);

  const howWeWorkSteps: IconTextItem[] = useMemo(() => {
    const icons = [Search, Map, PenTool, Code2, Rocket];
    return content.howWeWork.map((item, index) => ({ ...item, Icon: icons[index] }));
  }, [content.howWeWork]);

  const aboutValues: IconTextItem[] = useMemo(() => {
    const icons = [Brain, Crosshair, CircleCheck, Lightbulb];
    return content.aboutValues.map((item, index) => ({ ...item, Icon: icons[index] }));
  }, [content.aboutValues]);

  const services: IconTextItem[] = useMemo(() => {
    const icons = [Code, TrendingUp, BarChart3];
    return content.services.map((item, index) => ({ ...item, Icon: icons[index] }));
  }, [content.services]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      <HeroSection
        slides={slides}
        current={current}
        ctaLabel={content.heroCta}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelect={setCurrent}
      />

      <AboutSection
        title={content.aboutTitle}
        subtitle={content.aboutSubtitle}
        intro={content.aboutIntro}
        missionTitle={content.missionTitle}
        missionText={content.missionText}
        approachTitle={content.approachTitle}
        approachText={content.approachText}
        values={aboutValues}
        image={aboutUsImage}
      />

      <ServicesSection
        title={content.servicesTitle}
        subtitle={content.servicesSubtitle}
        services={services}
      />

      <HowWeWorkSection
        title={content.howWeWorkTitle}
        subtitle={content.howWeWorkSubtitle}
        steps={howWeWorkSteps}
      />

      <WhyAthenaSection
        title={content.whyTitle}
        subtitle={content.whySubtitle}
        items={whyItems}
      />

      <CtaSection
        titleA={content.ctaTitleA}
        titleB={content.ctaTitleB}
        description={content.ctaDesc}
        buttonLabel={content.ctaButton}
      />
    </div>
  );
}
