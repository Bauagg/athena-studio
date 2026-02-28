import type { IconTextItem } from "@/components/home/types";

type ServicesSectionProps = {
  title: string;
  subtitle: string;
  services: IconTextItem[];
};

export default function ServicesSection({
  title,
  subtitle,
  services,
}: ServicesSectionProps) {
  return (
    <section id="services" className="pb-20 bg-white">
      <div className="mx-auto max-w-360 px-6">
        <h2 className="text-center text-[24px] font-semibold text-slate-900 md:text-[32px] lg:text-[40px]">{title}</h2>
        <p className="mb-12 mt-3 text-center text-[16px] text-[#6D6F76] md:text-[18px]">{subtitle}</p>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map(({ title: itemTitle, description, Icon }) => (
            <div
              key={itemTitle}
              className="rounded-2xl border border-[#F6FAFF] bg-[#F6FAFF] p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9EFF6] text-slate-800">
                <Icon size={22} strokeWidth={1.9} />
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
