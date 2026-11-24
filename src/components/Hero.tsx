import { trustPoints } from "@/config/site";
import { primaryButtonClass, secondaryButtonClass } from "@/lib/ui";
import { PipelinePreview } from "./PipelinePreview";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <p className="inline-block max-w-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.06em] text-body sm:text-[11px]">
            Operations software & automation studio
          </p>
          <h1 className="mt-5 max-w-xl text-[2rem] font-bold leading-[1.12] text-balance sm:text-4xl lg:text-[2.75rem]">
            Custom software and automations that replace messy spreadsheets and manual operations.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-[1.6] text-body md:text-lg">
            haidos builds fixed-scope internal tools, document extraction pipelines, and follow-up systems for growing
            businesses—engineered with strict validation rules and delivered in 1–2 weeks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={`${primaryButtonClass} inline-flex w-full sm:w-auto`}>
              Book a 15-Min Workflow Audit
            </a>
            <a href="#work" className={`${secondaryButtonClass} inline-flex w-full sm:w-auto`}>
              See Real Client Work
            </a>
          </div>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0 sm:divide-x sm:divide-line">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted sm:px-4 sm:first:pl-0 sm:last:pr-0"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 lg:col-span-5">
          <PipelinePreview />
        </div>
      </div>
    </section>
  );
}
