import { Check, X } from "lucide-react";

const typical = [
  "Sell hyped black-box chatbots that hallucinate on real business data",
  "Glue together brittle no-code templates that break silently",
  "Lock you into bloated monthly retainers you don't need",
  "Hand your project off to junior freelancers after the sales call",
];

const haidos = [
  "Pair AI extraction with deterministic code validation and human review flags",
  "Build real, maintainable full-stack software and structured data pipelines",
  "Flat fixed-scope project pricing with 100% code and data ownership",
  "You talk directly to the engineers architecting and shipping your system",
];

export function Comparison() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-lg border border-line">
          <div className="grid md:grid-cols-2">
            <h2 className="bg-surface-2 px-5 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
              Typical &quot;AI Agencies&quot;
            </h2>
            <h2 className="border-t border-line bg-ink px-5 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-white md:border-l md:border-t-0">
              haidos Engineering
            </h2>
          </div>
          <div>
            {typical.map((item, index) => (
              <div key={item} className="grid border-t border-line md:grid-cols-2">
                <p className="flex gap-3 px-5 py-4 text-sm leading-6 text-body">
                  <X className="mt-0.5 shrink-0 text-muted" strokeWidth={1.5} size={16} aria-hidden />
                  <span>{item}</span>
                </p>
                <p className="flex gap-3 border-t border-line px-5 py-4 text-sm leading-6 text-ink md:border-l md:border-t-0">
                  <Check className="mt-0.5 shrink-0 text-ink" strokeWidth={1.5} size={16} aria-hidden />
                  <span>{haidos[index]}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="text-2xl">Engineers, not account managers.</h2>
          <p className="mt-3 text-base leading-[1.6] text-body">
            haidos is a lean software studio based in Chennai, partnering with businesses across India, the US, the UK,
            and Australia. No bloated layers, no cookie-cutter templates—just clean operational software built to save
            your team real hours every week.
          </p>
        </div>
      </div>
    </section>
  );
}
