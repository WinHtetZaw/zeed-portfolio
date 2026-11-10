import SiteFooter from "@/components/ui/layout/site-footer";
import SiteHeader from "@/components/ui/layout/site-header";
import { ReactNode } from "react";

type PortfolioLayoutProps = {
  children: ReactNode;
};

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main-content"
        className="sr-only z-100 rounded-md bg-accent px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="relative flex-1">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-125 max-w-125 w-full -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        />
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
