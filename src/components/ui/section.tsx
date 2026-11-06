import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  container?: boolean;
};

export default function Section({
  children,
  className,
  container = true,
  ...props
}: SectionProps) {
  return (
    <section className={cn("section-spacing", className)} {...props}>
      {container ? (
        <div className="container-layout">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
