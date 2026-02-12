import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

export type SlideText = {
  title: string;
  desc: string;
};

export type TextItem = {
  title: string;
  description: string;
};

export type IconTextItem = TextItem & {
  Icon: LucideIcon;
};

export type HeroSlide = SlideText & {
  image: StaticImageData;
};

export type HomeContent = {
  slides: SlideText[];
  heroCta: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutIntro: string;
  missionTitle: string;
  missionText: string;
  approachTitle: string;
  approachText: string;
  aboutValues: TextItem[];
  servicesTitle: string;
  servicesSubtitle: string;
  services: TextItem[];
  howWeWorkTitle: string;
  howWeWorkSubtitle: string;
  howWeWork: TextItem[];
  whyTitle: string;
  whySubtitle: string;
  whyItems: TextItem[];
  ctaTitleA: string;
  ctaTitleB: string;
  ctaDesc: string;
  ctaButton: string;
};
