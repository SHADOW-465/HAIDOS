import { SectionIntro } from "./SectionIntro";

const audiences = [
  {
    title: "Accounting, Tax & CA Firms",
    body: "Automating bank statement/invoice extraction and monthly client document follow-ups.",
  },
  {
    title: "Boutique Recruiting Agencies",
    body: "Bulk resume parsing, branded candidate profile formatting, and ATS/CRM cleanup.",
  },
  {
    title: "High-Ticket Local Specialists",
    body: "Instant WhatsApp/web lead capture, quote follow-ups, and review pipelines for clinics and studios.",
  },
  {
    title: "Ops-Heavy SMBs & Manufacturers",
    body: "Replacing critical Excel trackers with auditable internal dashboards and compliance reporting.",
  },
] as const;

export function Audience() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro kicker="03 / Who we build for" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <li key={audience.title} className="min-w-0 rounded-lg border border-line bg-surface p-5">
              <h3 className="text-base">{audience.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-body">{audience.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
