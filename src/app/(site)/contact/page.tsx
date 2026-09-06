import type { Metadata } from "next";

import { ContactDetails } from "@/components/sections/contact/ContactDetails";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactMap } from "@/components/sections/contact/ContactMap";
import { ContactSocials } from "@/components/sections/contact/ContactSocials";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getSiteCoordinates } from "@/services/cms/getSiteCoordinates";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact et accès",
  description:
    "Contactez Uttara pour un soin, une formation ou une demande de financement. Uttara vous accueille au 12 rue du Presbytère, 05300 Le Poët.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact | Uttara",
    description:
      "Contacter Uttara et préparer votre venue au Poët dans les Hautes-Alpes.",
    url: "/contact",
  },
};

export default async function ContactPage() {
  const coordinates = await getSiteCoordinates();

  return (
    <>
      <ContactHero />

      <Section className="bg-[var(--background-light)]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <ContactForm />
            <ContactDetails coordinates={coordinates} />
          </div>
        </Container>
      </Section>

      <ContactMap coordinates={coordinates} />

      <ContactSocials coordinates={coordinates} />
    </>
  );
}
