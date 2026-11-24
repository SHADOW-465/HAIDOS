"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks } from "@/config/site";
import { primaryButtonClass } from "@/lib/ui";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    const first = dialogRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  function trapTab(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const nodes = dialogRef.current.querySelectorAll<HTMLElement>("a, button");
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="relative z-10" aria-label="haidos, back to top">
          <Logo height={32} />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-body transition-colors duration-150 [transition-timing-function:ease] hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <a href="#contact" className={`${primaryButtonClass} hidden min-[400px]:inline-flex`}>
            Book 15-Min Audit
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => (open ? close() : setOpen(true))}
          >
            {open ? <X strokeWidth={1.5} size={20} /> : <Menu strokeWidth={1.5} size={20} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
    </header>

      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 bg-white md:hidden">
          <div
            id="mobile-nav"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onKeyDown={trapTab}
            className="mx-auto flex h-full w-full max-w-6xl flex-col px-6 py-6"
          >
            <p id={titleId} className="sr-only">
              Menu
            </p>
            <nav className="flex flex-col" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="border-b border-line py-3 text-base text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={close} className={`${primaryButtonClass} mt-6 inline-flex`}>
                Book 15-Min Audit
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
