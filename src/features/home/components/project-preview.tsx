type ProjectPreviewProps = {
  title: string;
  category: string;
};

export default function ProjectPreview({
  title,
  category,
}: ProjectPreviewProps) {
  return (
    <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 p-4 sm:p-6">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 size-64 rounded-full bg-violet-500/10 blur-3xl"
      />

      {/* Window header */}
      <div className="relative flex items-center gap-2 border-b border-white/10 pb-4">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-yellow-400/70" />
        <span className="size-2.5 rounded-full bg-green-400/70" />

        <span className="ml-auto font-mono text-[10px] text-zinc-500">
          {category}
        </span>
      </div>

      {/* App preview */}
      <div className="relative mt-5 grid h-[calc(100%-3rem)] grid-cols-[70px_1fr] gap-3 sm:grid-cols-[110px_1fr] sm:gap-5">
        {/* Sidebar */}
        <div className="space-y-3 border-r border-white/10 pr-3">
          <div className="h-2 w-12 rounded bg-violet-400/70 sm:w-16" />

          <div className="space-y-2 pt-4">
            <div className="h-1.5 w-full rounded bg-zinc-700" />
            <div className="h-1.5 w-4/5 rounded bg-zinc-800" />
            <div className="h-1.5 w-full rounded bg-zinc-800" />
          </div>
        </div>

        {/* Main content */}
        <div className="min-w-0 space-y-3">
          <div className="h-2 w-2/5 rounded bg-zinc-300/80" />

          <div className="space-y-2 pt-2">
            <div className="h-1.5 w-full rounded bg-zinc-700" />
            <div className="h-1.5 w-11/12 rounded bg-zinc-800" />
            <div className="h-1.5 w-4/5 rounded bg-zinc-800" />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="h-12 rounded-md border border-white/10 bg-zinc-800/80 sm:h-16" />
            <div className="h-12 rounded-md border border-white/10 bg-zinc-800/80 sm:h-16" />
          </div>

          <div className="h-7 w-24 rounded-md bg-violet-500/20 sm:h-9 sm:w-32" />
        </div>
      </div>

      {/* Preview label */}
      <div className="absolute bottom-4 right-4 rounded-md border border-white/10 bg-zinc-950/80 px-3 py-1.5">
        <span className="text-xs font-medium text-zinc-300">{title}</span>
      </div>
    </div>
  );
}
