import Image from "next/image";
import WorkSectionBg from "@/assets/images/Work Section.svg";
import type { IconTextItem } from "@/components/home/types";

type HowWeWorkSectionProps = {
  title: string;
  subtitle: string;
  steps: IconTextItem[];
};

export default function HowWeWorkSection({
  title,
  subtitle,
  steps,
}: HowWeWorkSectionProps) {
  return (
    <section id="approach" className="relative overflow-hidden py-6 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <Image src={WorkSectionBg} alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-360 px-6 text-center">
        <h2 className="text-center text-[24px] font-semibold text-slate-900 md:text-[32px] lg:text-[40px]">{title}</h2>
        <p className="mb-12 mt-3 text-center text-[16px] text-slate-600 md:text-[18px]">{subtitle}</p>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {steps.map(({ title: itemTitle, description, Icon }, index) => (
            <div key={itemTitle} className="w-full sm:w-[calc(33.333%-16px)] lg:w-auto lg:flex-1">
              <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white">
                <Icon size={23} strokeWidth={1.8} />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[11px] font-semibold text-white">
                  {index + 1}
                </span>
              </div>
              <p className="text-2xl font-semibold text-slate-900">{itemTitle}</p>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
