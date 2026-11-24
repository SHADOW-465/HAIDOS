"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { SectionIntro } from "./SectionIntro";

const items = [
  {
    question: "What if AI makes mistakes on our financial, legal, or client data?",
    answer:
      "We never let raw AI write directly into your critical records unchecked. Every extraction pipeline pairs structured parsing with deterministic code-based validation rules (such as balance reconciliation math or required-field checks). Anything that fails validation is automatically flagged in a clean human-review queue so bad data never slips through silently.",
  },
  {
    question: "Do we have to replace Excel, Tally, QuickBooks, or our existing CRM/ATS?",
    answer:
      "No. We build around the tools your team already knows. Most of our systems sit right in front of your current stack—taking messy inputs, cleaning and validating them, and exporting directly into the exact templates or software you already use.",
  },
  {
    question: "Do we own the code and data, or are we locked into a subscription?",
    answer:
      "You own 100% of the custom code, workflows, and data once the final milestone is complete. There is no forced monthly software fee from us—you only pay your own lightweight hosting or API usage costs directly, with an optional support retainer if you want us maintaining updates.",
  },
  {
    question: "How do pricing and payments work?",
    answer:
      "Every engagement starts as a small, fixed-scope Phase 1 build priced upfront based on exact deliverables—never open-ended hourly billing. Payment is split 50% to begin and 50% after you test the live working build before final handover.",
  },
  {
    question: "Can you test our actual files before we commit to a full build?",
    answer:
      "Yes. Send us 1–2 redacted sample files or walk us through your bottleneck on a quick 15-minute call. For document extraction builds, we are happy to verify feasibility against your real layouts before you commit.",
  },
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro kicker="FAQ" title="Objections, answered plainly." />
        <div className="mt-10 border-y border-line">
          {items.map((item, index) => {
            const expanded = open === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <div key={item.question} className="border-b border-line last:border-b-0">
                <h3 className="text-base font-medium tracking-normal md:text-lg">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span className="font-display font-semibold tracking-[-0.03em]">{item.question}</span>
                    <ChevronDown
                      strokeWidth={1.5}
                      size={18}
                      aria-hidden
                      className={`mt-1 shrink-0 transition-transform duration-150 [transition-timing-function:ease] ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-150 [transition-timing-function:ease] ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-5 pr-8 text-sm leading-[1.6] text-body md:text-base">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
