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
      <div className="mx-auto max-w-360 px-6">
        <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-[34px] lg:text-[44px]">{title}</h2>
        <p className="mt-3 text-center text-[16px] text-[#6D6F76] md:text-[17px] lg:text-[18px]">{subtitle}</p>
        <p className="mx-auto mt-10 text-[18px] leading-relaxed text-slate-800 md:text-[20px] lg:text-[22px]">
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
          <div className="flex flex-col gap-5">
            <div className="flex-1 rounded-xl border border-slate-200 bg-[#F6FAFF] p-6 lg:p-8">
              <h3 className="mb-3 text-[18px] font-semibold text-slate-900 md:text-[21px] lg:text-[24px]">
                {missionTitle}
              </h3>
              <p className="text-[14px] leading-loose text-[#4C4C4C] md:text-[16px] lg:text-[20px]">{missionText}</p>
            </div>
            <div className="flex-1 rounded-xl border border-slate-200 bg-[#F6FAFF] p-6 lg:p-8">
              <h3 className="mb-3 text-[18px] font-semibold text-slate-900 md:text-[21px] lg:text-[24px]">
                {approachTitle}
              </h3>
              <p className="text-[14px] leading-loose text-[#4C4C4C] md:text-[16px] lg:text-[20px]">{approachText}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title: itemTitle, description, Icon }) => (
            <div
              key={itemTitle}
              className="rounded-2xl border border-slate-200 bg-[#F6FAFF] p-5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9EFF6] text-slate-800">
                <Icon size={22} strokeWidth={1.9} />
              </div>
              <h4 className="mb-2 text-[18px] font-semibold text-slate-900">{itemTitle}</h4>
              <p className="text-[14px] leading-relaxed text-[#4C4C4C]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
