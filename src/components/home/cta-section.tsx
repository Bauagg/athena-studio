import { ArrowUpRight } from "lucide-react";

type CtaSectionProps = {
  titleA: string;
  titleB: string;
  description: string;
  buttonLabel: string;
};

export default function CtaSection({
  titleA,
  titleB,
  description,
  buttonLabel,
}: CtaSectionProps) {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-slate-950 via-[#0f2b52] to-[#0b2f63] py-20"
    >
      <div className="mx-auto max-w-360 px-6 text-center text-white">
        <h2 className="mx-auto max-w-4xl text-[24px] font-semibold leading-tight md:text-[42px] lg:text-[60px]">
          {titleA}
          <span className="text-blue-300"> {titleB}</span>
        </h2>
        <p className="mx-auto mt-6 text-[16px] text-slate-300 md:text-[20px] lg:text-[24px]">{description}</p>
        <a
          href="https://wa.me/6285730839962?text=Halo%20Athena%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-10 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-16 py-4 text-xl font-semibold text-white transition hover:bg-white/20"
        >
          {buttonLabel} <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}
