import { navLinks, site } from "@/config/site";
import { Logo } from "./Logo";

const social = [
  { label: "X / Twitter", href: site.social.x, external: true },
  { label: "LinkedIn", href: site.social.linkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#top" aria-label="haidos, back to top">
            <Logo height={26} />
          </a>
          <p className="mt-3 text-sm leading-[1.6] text-body">
            Business operations software & workflow automation studio.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav aria-label="On this page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
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
          <nav aria-label="Connect">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-body transition-colors duration-150 [transition-timing-function:ease] hover:text-ink"
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-muted">© 2026 haidos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
