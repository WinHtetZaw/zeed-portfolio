import type { ReactNode } from "react";

import { PageTransition } from "@/components/animations/page-transition";

type PortfolioTemplateProps = {
  children: ReactNode;
};

export default function PortfolioTemplate({
  children,
}: PortfolioTemplateProps) {
  return <PageTransition>{children}</PageTransition>;
}
