import Image, { type StaticImageData } from "next/image";
import type { IconTextItem } from "@/components/home/types";

type AboutSectionProps = {
  title: string;
  subtitle: string;
  intro: string;
  missionTitle: string;
  missionText: string;
  approachTitle: string;
  approachText: string;
  values: IconTextItem[];
  image: StaticImageData;
};

export default function AboutSection({
  title,
  subtitle,
  intro,
  missionTitle,
  missionText,
  approachTitle,
  approachText,
  values,
  image,
}: AboutSectionProps) {
  return (
    <section id="about-us" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-3 text-center text-slate-600">{subtitle}</p>
        <p className="mx-auto mt-10 max-w-5xl text-xl leading-relaxed text-slate-800">
          {intro}
        </p>

        <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <Image
              src={image}
              alt="Athena Studio office building"
              width={620}
              height={430}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <div className="rounded-xl border border-slate-200 bg-slate-100 p-6">
              <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                {missionTitle}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{missionText}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-100 p-6">
              <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                {approachTitle}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{approachText}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title: itemTitle, description, Icon }) => (
            <div
              key={itemTitle}
              className="rounded-2xl border border-slate-200 bg-slate-100 p-5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-800">
                <Icon size={22} strokeWidth={1.9} />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-slate-900">{itemTitle}</h4>
              <p className="text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
