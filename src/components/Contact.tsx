"use client";

import { ArrowUpRight, Calendar, Check, Copy, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { site } from "@/config/site";
import { primaryButtonClass } from "@/lib/ui";

type Fields = {
  name: string;
  contact: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", contact: "", message: "" };

function isContact(value: string) {
  const trimmed = value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return true;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Enter your name.";
  if (!isContact(fields.contact)) errors.contact = "Enter a work email or WhatsApp number.";
  if (fields.message.trim().length < 12) errors.message = "Describe the workflow in a sentence or two.";
  return errors;
}

export function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    let copiedOk = false;
    try {
      await navigator.clipboard.writeText(site.email);
      copiedOk = true;
    } catch {
      const input = document.createElement("textarea");
      input.value = site.email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      copiedOk = document.execCommand("copy");
      input.remove();
    }
    if (!copiedOk) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (honey) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    // TODO: Connect Formspree, Web3Forms, Resend, or a custom API endpoint via site.formEndpoint.
    if (!site.formEndpoint) {
      await new Promise((resolve) => window.setTimeout(resolve, 350));
      setStatus("sent");
      return;
    }

    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          contact: fields.contact.trim(),
          message: fields.message.trim(),
          _subject: "haidos bottleneck assessment",
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">05 / Start here</p>
          <h2 className="mt-3 text-3xl text-balance md:text-[2.5rem]">Got a manual process your team hates?</h2>
          <p className="mt-4 max-w-md text-base leading-[1.6] text-body">
            Send us two lines about the bottleneck. We reply within 24 hours with a straight technical assessment—no
            pushy sales sequence.
          </p>

          <ul className="mt-8 space-y-3">
            <li>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-md border border-line bg-white px-4 py-3 text-sm font-medium transition-colors duration-150 [transition-timing-function:ease] hover:bg-surface"
              >
                <span className="inline-flex items-center gap-3">
                  <MessageCircle strokeWidth={1.5} size={18} aria-hidden />
                  Message on WhatsApp
                </span>
                <ArrowUpRight strokeWidth={1.5} size={16} aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={site.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-md border border-line bg-white px-4 py-3 text-sm font-medium transition-colors duration-150 [transition-timing-function:ease] hover:bg-surface"
              >
                <span className="inline-flex items-center gap-3">
                  <Calendar strokeWidth={1.5} size={18} aria-hidden />
                  Pick a 15-min slot
                </span>
                <ArrowUpRight strokeWidth={1.5} size={16} aria-hidden />
              </a>
            </li>
            <li className="flex items-center justify-between gap-3 rounded-md border border-line bg-white px-4 py-3">
              <a href={`mailto:${site.email}`} className="inline-flex min-w-0 items-center gap-3 text-sm font-medium">
                <Mail strokeWidth={1.5} size={18} aria-hidden className="shrink-0" />
                <span className="truncate">{site.email}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex cursor-pointer items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-ink"
              >
                {copied ? <Check strokeWidth={1.5} size={14} aria-hidden /> : <Copy strokeWidth={1.5} size={14} aria-hidden />}
                {copied ? "Copied" : "Copy"}
              </button>
            </li>
          </ul>

          <p className="mt-6 font-mono text-[11px] font-medium uppercase leading-relaxed tracking-[0.06em] text-muted">
            Based in Chennai, India
            <span className="mx-2 inline-block h-3 w-px translate-y-px bg-line" aria-hidden />
            Working globally (IST / GMT / EST overlap)
          </p>
        </div>

        <div className="min-w-0 rounded-lg border border-line bg-surface p-6 md:p-8">
          {status === "sent" ? (
            <p role="status" className="text-base leading-[1.6] text-ink">
              Received. We&apos;ll review your workflow and reply within 24 hours.
            </p>
          ) : (
            <form className="relative space-y-5" onSubmit={onSubmit} noValidate>
              <div className="sr-only" aria-hidden="true">
                <label>
                  Company website
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={honey}
                    onChange={(event) => setHoney(event.target.value)}
                    name="company_website"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={(event) => update("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-base text-ink outline-none transition-colors duration-150 [transition-timing-function:ease] focus:border-ink"
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1.5 text-sm text-ink">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="work-contact" className="text-sm font-medium text-ink">
                  Work Email or WhatsApp Number
                </label>
                <input
                  id="work-contact"
                  name="contact"
                  type="text"
                  autoComplete="on"
                  value={fields.contact}
                  onChange={(event) => update("contact", event.target.value)}
                  aria-invalid={Boolean(errors.contact)}
                  aria-describedby={errors.contact ? "contact-error" : undefined}
                  className="mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-base text-ink outline-none transition-colors duration-150 [transition-timing-function:ease] focus:border-ink"
                />
                {errors.contact ? (
                  <p id="contact-error" className="mt-1.5 text-sm text-ink">
                    {errors.contact}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  What manual task, spreadsheet, or document workflow is wasting your team&apos;s time?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={fields.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="e.g., We spend 8 hours every week copying client bank statements into Excel/Tally..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="mt-2 w-full resize-y rounded-md border border-line bg-white px-3 py-2.5 text-base leading-6 text-ink outline-none transition-colors duration-150 [transition-timing-function:ease] placeholder:text-muted focus:border-ink"
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 text-sm text-ink">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {status === "error" ? (
                <p role="alert" className="text-sm text-ink">
                  The message did not send. Email {site.email} and we will take it from there.
                </p>
              ) : null}

              <button type="submit" className={`${primaryButtonClass} inline-flex w-full`} disabled={status === "sending"}>
                {status === "sending" ? "Sending" : "Send Bottleneck Assessment"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
