import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { ContactForm } from "@/features/contact/components/contact-form";

export function ContactFormSection() {
  return (
    <Section className="pt-8">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Send a message"
            title="Let's talk about your ideas."
            description="Share some details about what you're working on, and I'll get back to you."
            align="left"
          />

          <p className="mt-8 text-sm leading-7 text-zinc-500">
            You can also reach me directly through email or connect with me on
            GitHub and LinkedIn.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
