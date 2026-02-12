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
    <section id="why-us" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-slate-900">{title}</h2>
        <p className="mb-12 mt-3 text-center text-gray-600">{subtitle}</p>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map(({ title: itemTitle, description, Icon }) => (
            <div
              key={itemTitle}
              className="rounded-xl bg-slate-100 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-800">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-slate-900">{itemTitle}</h3>
              <p className="text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
