"use client";

import { useState } from "react";

const pipelines = [
  {
    id: "accounting",
    label: "Accounting PDFs",
    inputFile: "14_Client_Bank_Statements.pdf",
    inputDetail: "Unstructured multi-page PDFs",
    rule: "Opening + Credits - Debits = Closing",
    pass: "13 verified",
    flag: "1 flagged for review",
    output: "Clean mapped export ready for Excel / QuickBooks / Tally",
  },
  {
    id: "recruiting",
    label: "Recruiting Resumes",
    inputFile: "42_Candidate_CVs_Batch.zip",
    inputDetail: "Mixed PDF & DOCX resumes",
    rule: "Skill extraction + experience check + client template mapping",
    pass: "40 formatted",
    flag: "2 missing dates",
    output: "Branded client dossiers + structured ATS / CRM CSV",
  },
  {
    id: "ops",
    label: "Ops & Quality Logs",
    inputFile: "Batch_409_Inspection_Data.csv",
    inputDetail: "Shop-floor rejection logs",
    rule: "Customer tolerance rules + immutable audit trail",
    pass: "Audit ready",
    flag: "3 out-of-spec flagged",
    output: "One-click root-cause report & compliance export",
  },
] as const;

export function PipelinePreview() {
  const [index, setIndex] = useState(0);
  const active = pipelines[index];

  function move(event: React.KeyboardEvent<HTMLDivElement>) {
    const nextKey = event.key === "ArrowRight" || event.key === "ArrowDown";
    const prevKey = event.key === "ArrowLeft" || event.key === "ArrowUp";
    if (!nextKey && !prevKey) return;
    event.preventDefault();
    const direction = nextKey ? 1 : -1;
    const next = (index + direction + pipelines.length) % pipelines.length;
    setIndex(next);
    document.getElementById(`pipeline-tab-${pipelines[next].id}`)?.focus();
  }

  return (
    <div className="rounded-lg border border-line bg-surface p-5">
      <div
        role="tablist"
        aria-label="Live pipeline examples"
        aria-orientation="vertical"
        className="flex flex-col gap-1.5"
        onKeyDown={move}
      >
        {pipelines.map((pipeline, pipelineIndex) => {
          const selected = pipelineIndex === index;
          return (
            <button
              key={pipeline.id}
              id={`pipeline-tab-${pipeline.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`pipeline-panel-${pipeline.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(pipelineIndex)}
              className={`cursor-pointer rounded-md px-3 py-2 text-left font-mono text-[11px] uppercase tracking-[0.06em] transition-colors duration-150 [transition-timing-function:ease] ${
                selected ? "bg-ink text-white" : "border border-line bg-white text-body hover:text-ink"
              }`}
            >
              {pipeline.label}
            </button>
          );
        })}
      </div>

      <div
        key={active.id}
        id={`pipeline-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`pipeline-tab-${active.id}`}
        className="pipeline-in mt-5"
      >
        <p className="sr-only" aria-live="polite">
          Showing the {active.label} pipeline
        </p>
        <ol className="space-y-3">
          <li className="rounded-md border border-line bg-white p-3">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-muted">01 / Input</p>
            <p className="mt-2 font-mono text-[13px] leading-5 text-ink [overflow-wrap:anywhere]">{active.inputFile}</p>
            <p className="mt-1 text-sm leading-6 text-body">{active.inputDetail}</p>
          </li>
          <li className="rounded-md border border-line bg-white p-3">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-muted">02 / Rule engine</p>
            <p className="mt-2 border border-line bg-surface px-2.5 py-2 font-mono text-[12px] leading-5 text-ink [overflow-wrap:anywhere]">
              {active.rule}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-pass-bg px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-pass">
                {active.pass}
              </span>
              <span className="bg-warn-bg px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-warn">
                {active.flag}
              </span>
            </div>
          </li>
          <li className="rounded-md border border-line bg-white p-3">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-muted">03 / Output</p>
            <p className="mt-2 text-sm leading-6 text-ink">{active.output}</p>
          </li>
        </ol>
      </div>
    </div>
  );
}
