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
    <section id="approach" className="relative overflow-hidden bg-slate-100 py-12 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-40 h-80 w-80 rounded-full bg-white/50" />
        <div className="absolute -bottom-44 right-10 h-96 w-96 rounded-full bg-white/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center lg:px-6">
        <h2 className="text-xl font-semibold text-slate-900 lg:text-3xl">{title}</h2>
        <p className="mx-auto mb-8 mt-2 max-w-2xl text-sm text-slate-600 lg:mb-12 lg:mt-3 lg:text-base">{subtitle}</p>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {steps.map(({ title: itemTitle, description, Icon }, index) => (
            <div key={itemTitle} className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-auto lg:flex-1">
              <div className="relative mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white lg:mb-5 lg:h-14 lg:w-14">
                <Icon size={18} strokeWidth={1.8} className="lg:hidden" />
                <Icon size={23} strokeWidth={1.8} className="hidden lg:block" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[9px] font-semibold text-white lg:-right-1.5 lg:-top-1.5 lg:h-5 lg:w-5 lg:text-[11px]">
                  {index + 1}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900 lg:text-2xl">{itemTitle}</p>
              <p className="mt-1 text-xs text-slate-600 lg:mt-2 lg:text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
