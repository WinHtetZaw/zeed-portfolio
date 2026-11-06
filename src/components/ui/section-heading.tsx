import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading(props: SectionHeadingProps) {
  const { eyebrow, title, description, align = "left", className } = props;

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}

      <h2 className="text-(length:--text-heading) font-semibold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-foreground-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
