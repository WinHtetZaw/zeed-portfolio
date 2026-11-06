import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CURRENT_YEAR } from "@/app/utils/constants";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle mt-auto">
      <div className="container-layout py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="w-fit text-xl font-semibold tracking-tight text-foreground"
            >
              Zeed<span className="text-accent">.</span>dev
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-foreground-secondary">
              Frontend developer focused on building modern, thoughtful, and
              user-friendly web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">
              Navigation
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-3"
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground-secondary transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>

            <div className="flex flex-col items-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-foreground"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="mt-12 flex flex-col gap-3 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-muted">
            © {CURRENT_YEAR} Zeed.dev. All rights reserved.
          </p>

          <p className="text-xs text-foreground-muted">
            Designed and built with care.
          </p>
        </div> */}
      </div>

      <div className="border-t border-border-subtle">
        <div className="container-layout flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-muted">
            © {CURRENT_YEAR} Zeed.dev. All rights reserved.
          </p>

          <p className="text-xs text-foreground-muted">
            Designed and built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
