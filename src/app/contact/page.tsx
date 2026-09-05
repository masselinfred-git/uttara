import type { Metadata } from "next";

import { ContactDetails } from "@/components/sections/contact/ContactDetails";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactMap } from "@/components/sections/contact/ContactMap";
import { ContactSocials } from "@/components/sections/contact/ContactSocials";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Uttara pour toute question concernant les soins ayurvédiques, les formations ou leur financement.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Section className="bg-[var(--background-light)]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <ContactForm />
            <ContactDetails />
          </div>
        </Container>
      </Section>

      <ContactMap />

      <ContactSocials />
    </>
  );
}