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
    <section id="approach" className="relative overflow-hidden bg-slate-100 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-40 h-80 w-80 rounded-full bg-white/50" />
        <div className="absolute -bottom-44 right-10 h-96 w-96 rounded-full bg-white/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
        <p className="mx-auto mb-12 mt-3 max-w-2xl text-slate-600">{subtitle}</p>

        <div className="grid gap-10 md:grid-cols-5">
          {steps.map(({ title: itemTitle, description, Icon }, index) => (
            <div key={itemTitle}>
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
