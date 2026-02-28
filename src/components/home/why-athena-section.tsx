import type { IconTextItem } from "@/components/home/types";

type WhyAthenaSectionProps = {
  title: string;
  subtitle: string;
  items: IconTextItem[];
};

export default function WhyAthenaSection({
  title,
  subtitle,
  items,
}: WhyAthenaSectionProps) {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="mx-auto max-w-360 px-6">
        <h2 className="text-center text-[24px] font-semibold text-slate-900 md:text-[32px] lg:text-[40px]">{title}</h2>
        <p className="mb-12 mt-3 text-center text-[16px] text-slate-600 md:text-[18px]">{subtitle}</p>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map(({ title: itemTitle, description, Icon }) => (
            <div
              key={itemTitle}
              className="rounded-2xl border border-[#F6FAFF] bg-[#F6FAFF] p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9EFF6] text-slate-800">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 text-[18px] font-semibold text-slate-900">{itemTitle}</h3>
              <p className="text-[14px] leading-relaxed text-[#4C4C4C]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
