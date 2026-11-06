import SiteHeader from "@/components/ui/layout/site-header";
import { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />

      <main>{children}</main>
    </>
  );
}
