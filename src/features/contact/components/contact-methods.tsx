import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { GitHub } from "@/components/ui/github-icon";
import { Linkedin } from "@/components/ui/linkedin-icon";

const contactMethods = [
  {
    label: "Email",
    value: "your-email@example.com",
    description: "For opportunities and direct communication.",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "GitHub profile",
    description: "Explore my projects and source code.",
    href: "https://github.com/your-username",
    icon: GitHub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn profile",
    description: "Connect with me professionally.",
    href: "https://linkedin.com/in/your-username",
    icon: Linkedin,
    external: true,
  },
];

export default function ContactMethods() {
  return (
    <Section className="pt-8 sm:pt-12">
      <SectionHeading
        eyebrow="Connect"
        title="Find me online."
        description="Choose the channel that works best for you."
        align="center"
      />

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
        {contactMethods.map((method) => {
          const Icon = method.icon;

          return (
            <Link
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-400">
                  <Icon size={20} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-zinc-500 transition-colors group-hover:text-violet-400"
                />
              </div>

              <h2 className="mt-6 text-lg font-semibold text-white">
                {method.label}
              </h2>

              <p className="mt-2 text-sm font-medium text-zinc-300">
                {method.value}
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {method.description}
              </p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
