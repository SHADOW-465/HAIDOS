import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { textLinkClass } from "@/lib/ui";
import { SectionIntro } from "./SectionIntro";

const tags = ["Custom Full-Stack App", "Configurable Rule Engine", "Audit Trails", "Automated Reporting"];

const rows = [
  { batch: "409", check: "Bore diameter", status: "Flagged", tone: "warn" },
  { batch: "408", check: "Surface finish", status: "Pass", tone: "pass" },
  { batch: "407", check: "Wall thickness", status: "Flagged", tone: "warn" },
  { batch: "406", check: "Thread gauge", status: "Pass", tone: "pass" },
] as const;

export function CaseStudy() {
  const demoHref = site.demoVideoUrl || undefined;

  return (
    <section id="work" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro kicker="01 / Proof of work" title="Built for workflows where mistakes cost real money." />

        <article className="mt-10 overflow-hidden rounded-lg border border-line lg:grid lg:grid-cols-2">
          <div className="min-w-0 p-6 md:p-8 lg:p-10">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
              Production system
              <span className="mx-2 inline-block h-3 w-px translate-y-px bg-line" aria-hidden />
              Medical device manufacturing (Delhi)
            </p>
            <h3 className="mt-4 text-2xl md:text-[1.75rem]">Operational & Rejection-Analysis Platform</h3>
            <div className="mt-6 space-y-5">
              <div>
                <h4 className="text-sm font-medium text-ink">The Bottleneck</h4>
                <p className="mt-1 text-sm leading-[1.6] text-body">
                  Process tracking, quality rejections, and customer-specific compliance checks relied on slow manual
                  spreadsheets, making root-cause analysis and audit preparation fragile and error-prone.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-ink">What haidos Built</h4>
                <p className="mt-1 text-sm leading-[1.6] text-body">
                  A custom full-stack operational data application supporting configurable customer rules, automated
                  rejection analysis, immutable audit trails, and one-click compliance reporting.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-ink">The Impact</h4>
                <p className="mt-1 text-sm leading-[1.6] text-body">
                  Replaced scattered manual logs with a single auditable system built around strict manufacturing
                  tolerances.
                </p>
              </div>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-line px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* TODO: Replace with real blurred screenshots or MP4/Loom walkthrough */}
          <div className="flex min-w-0 flex-col border-t border-line bg-frame p-4 sm:p-6 lg:border-l lg:border-t-0">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
              System interface preview
            </p>
            <div className="mt-4 flex flex-1 flex-col border border-line bg-white">
              <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-2.5">
                <p className="font-display text-sm font-semibold tracking-[-0.03em]">Rejection analysis</p>
                <span className="bg-pass-bg px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-pass">
                  Live
                </span>
              </div>
              <div className="grid grid-cols-[4.25rem_minmax(0,1fr)_5.25rem] border-b border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                <span>Batch</span>
                <span>Check</span>
                <span className="text-right">Status</span>
              </div>
              <ul className="flex-1">
                {rows.map((row) => (
                  <li
                    key={row.batch}
                    className="grid grid-cols-[4.25rem_minmax(0,1fr)_5.25rem] items-center border-b border-line px-3 py-2 text-sm last:border-b-0"
                  >
                    <span className="font-mono text-[12px] text-ink">{row.batch}</span>
                    <span className="truncate text-body">{row.check}</span>
                    <span
                      className={`justify-self-end px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.06em] ${
                        row.tone === "pass" ? "bg-pass-bg text-pass" : "bg-warn-bg text-warn"
                      }`}
                    >
                      {row.status}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="border-t border-line px-3 py-2 font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                Customer tolerance ±0.05 mm / Immutable audit trail
              </p>
            </div>
          </div>
        </article>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-line p-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">Live workflow demo</p>
            <h3 className="mt-3 text-xl">Automated Document Extraction & Validation Demo</h3>
            <p className="mt-3 text-sm leading-[1.6] text-body">
              See how our pipeline parses messy multi-page PDFs, runs deterministic math/format checks, flags exceptions
              for human review, and exports clean sheets in seconds.
            </p>
            {/* TODO: Link to Loom/YouTube demo video — set site.demoVideoUrl */}
            <a
              href={demoHref ?? "#contact"}
              className={`${textLinkClass} mt-5`}
              {...(demoHref ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              Watch 60-Sec Walkthrough
              <ArrowUpRight strokeWidth={1.5} size={16} aria-hidden />
            </a>
          </article>

          <article className="rounded-lg border border-line p-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
              Compliance application
            </p>
            <h3 className="mt-3 text-xl">Web-Based Compliance & Reporting Tool</h3>
            <p className="mt-3 text-sm leading-[1.6] text-body">
              A dedicated web platform built to replace manual compliance checklists with structured workflows, role
              validation, and exportable records.
            </p>
            <a href="#contact" className={`${textLinkClass} mt-5`}>
              Request Private Demo
              <ArrowUpRight strokeWidth={1.5} size={16} aria-hidden />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
