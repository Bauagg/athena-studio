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
      <div className="mx-auto max-w-6xl px-6 text-center text-white">
        <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          {titleA}
          <span className="text-blue-300"> {titleB}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-xl text-slate-300">{description}</p>
        <button className="mx-auto mt-10 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-16 py-4 text-xl font-semibold text-white transition hover:bg-white/20">
          {buttonLabel} <ArrowUpRight size={20} />
        </button>
      </div>
    </section>
  );
}
