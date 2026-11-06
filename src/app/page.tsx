export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold">Zeed.dev</h1>

        <p className="text-foreground-secondary">Testing our design system.</p>

        <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
          <h2 className="text-xl font-semibold">Design tokens are working!</h2>

          <p className="mt-2 text-foreground-muted">
            This card uses our reusable color, radius, border, and shadow
            tokens.
          </p>

          <button className="mt-5 rounded-lg bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-hover">
            Test button
          </button>
        </div>
      </div>
    </main>
  );
}
