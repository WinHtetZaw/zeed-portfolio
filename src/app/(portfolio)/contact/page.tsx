import type { Metadata } from "next";

import ContactHero from "@/features/contact/components/contact-hero";
import ContactMethods from "@/features/contact/components/contact-methods";
import { ContactFormSection } from "@/features/contact/components/contact-form-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me about development opportunities, projects, or collaborations.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <ContactFormSection />
    </>
  );
}
