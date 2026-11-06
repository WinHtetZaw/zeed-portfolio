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

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
