import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: "video" | "square";
};

export function ProjectImage(props: ProjectImageProps) {
  const { src, alt, priority = false, aspectRatio = "video" } = props;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated ${
        aspectRatio === "video" ? "aspect-video" : "aspect-square"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 1200px"
        // className="object-cover transition-transform duration-500 hover:scale-[1.02]"
        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none"
      />
    </div>
  );
}
