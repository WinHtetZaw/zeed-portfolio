import Section from "@/components/ui/section";

export default function ContactHero() {
  return (
    <Section className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium text-accent-secondary">
          Get in touch
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Let's start a conversation.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          Have a project in mind, an opportunity to discuss, or just want to
          connect? I'd be happy to hear from you.
        </p>
      </div>
    </Section>
  );
}
