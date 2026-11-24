import { SectionIntro } from "./SectionIntro";

const services = [
  {
    index: "01",
    title: "Document & Data Extraction Systems",
    timeline: "Delivered in 5–7 days",
    summary:
      "Stop paying skilled staff to manually copy-paste data out of PDFs, invoices, bank statements, purchase orders, or candidate resumes.",
    included: [
      "Layout-aware extraction for messy multi-page PDFs and scans",
      "Code-based validation & math checks (never blind AI guessing)",
      "Human-in-the-loop review queue for flagged edge cases",
      "Clean export directly into Excel, QuickBooks, Tally, or your ATS/CRM",
    ],
    bestFor: "Accounting & CA firms, boutique recruiting agencies, distributors.",
  },
  {
    index: "02",
    title: "Lead Capture & Client Follow-Up Automations",
    timeline: "Delivered in 4–7 days",
    summary:
      "Stop losing high-value inquiries to slow manual replies—and stop chasing clients every week for missing documents or approvals.",
    included: [
      "Instant capture & routing from website forms, WhatsApp, and email",
      "Automated qualification, CRM/sheet logging, and instant response flows",
      "Scheduled document-chasing reminders for monthly filings or onboarding",
      "Post-service review & approval follow-up workflows",
    ],
    bestFor: "High-ticket clinics, interior/solar firms, agencies, accounting practices.",
  },
  {
    index: "03",
    title: "Spreadsheet-to-App Dashboards & Reporting",
    timeline: "Delivered in 7–14 days",
    summary:
      "Replace fragile Excel trackers, WhatsApp chains, and Friday copy-paste reporting with a dedicated internal web application.",
    included: [
      "Custom web interface tailored to how your team actually operates",
      "Role-based permissions, input validation, and full audit trails",
      "Automated weekly/monthly management and client-ready reports",
      "Clean database architecture deployed directly on your infrastructure",
    ],
    bestFor: "Ops-heavy SMBs, e-commerce sellers, manufacturers, and exporters.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro kicker="02 / Services" title="Three fixed-scope systems. Built fast, owned by you.">
          No vague hourly consulting or fragile templates. We scope one clear operational bottleneck, build a reliable
          system in 1–2 weeks, and hand over full ownership.
        </SectionIntro>

        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-lg border border-line lg:grid-cols-3 lg:divide-x lg:divide-line">
          {services.map((service, serviceIndex) => (
            <article
              key={service.index}
              className={`flex min-w-0 flex-col p-6 md:p-8 ${serviceIndex < services.length - 1 ? "border-b border-line lg:border-b-0" : ""}`}
            >
              <h3 className="text-xl">
                <span className="font-mono text-[12px] font-medium tracking-[0.06em] text-muted">{service.index} / </span>
                {service.title}
              </h3>
              <p className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
                {service.timeline}
                <span className="mx-2 inline-block h-3 w-px translate-y-px bg-line" aria-hidden />
                Fixed scope
              </p>
              <p className="mt-4 text-sm leading-[1.6] text-body">{service.summary}</p>
              <h4 className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
                What&apos;s included
              </h4>
              <ul className="mt-3 space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-body">
                    <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-ink" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-line pt-5 text-sm leading-6 text-ink">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">Best for </span>
                {service.bestFor}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
