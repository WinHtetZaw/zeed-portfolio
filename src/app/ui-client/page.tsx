"use client";

import Button from "@/components/ui/button";

export default function Page() {
  return (
    <main>
      <article className="container-layout section-spacing space-y-10">
        <section className="space-y-4">
          <h1 className="text-4xl font-semibold">Button Component</h1>

          <p className="text-foreground-secondary">
            Testing our reusable button variants and sizes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Variants</h2>

          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Sizes</h2>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">States</h2>

          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled</Button>
            <Button variant="outline" onClick={() => alert("Button works!")}>
              Click me
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}
