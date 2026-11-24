import { SectionIntro } from "./SectionIntro";

const steps = [
  {
    index: "01",
    title: "15-Minute Bottleneck Audit (Free)",
    body: "Show us the spreadsheet, messy PDF folder, or manual workflow slowing your team down. We will tell you plainly whether it needs custom software, a simple automation, or nothing at all.",
  },
  {
    index: "02",
    title: "Fixed-Scope Build (5–14 Days)",
    body: "We agree on exact inputs, outputs, and a flat project fee before writing a line of code. Projects run on a straightforward 50% upfront / 50% upon live working demo milestone structure.",
  },
  {
    index: "03",
    title: "Handover & Full Ownership",
    body: "We deploy the system to your accounts with clean documentation. You own 100% of the code and workflows with zero forced monthly SaaS lock-in. Optional ongoing support is available if you want us on call.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro kicker="04 / Process" title="Simple milestones. Zero lock-in." />
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.index} className="min-w-0 border-t border-line pt-5">
              <p className="font-mono text-sm font-medium tracking-[0.06em] text-ink">{step.index}</p>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-[1.6] text-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
