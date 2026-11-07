import { ProjectImage } from "./project-image";

type ProjectGalleryProps = {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="space-y-8">
      {images.map((image) => (
        <article key={image.src} className="space-y-3">
          <ProjectImage src={image.src} alt={image.alt} />

          <div>
            <h3 className="font-semibold text-foreground">{image.title}</h3>
            <p className="mt-1 text-sm text-foreground-secondary">
              {image.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
