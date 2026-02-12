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
    <section id="services" className="bg-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-slate-900">{title}</h2>
        <p className="mb-12 mt-3 text-center text-slate-600">{subtitle}</p>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map(({ title: itemTitle, description, Icon }) => (
            <div
              key={itemTitle}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-800">
                <Icon size={22} strokeWidth={1.9} />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-slate-900">{itemTitle}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
