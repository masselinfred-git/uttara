import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-medium">
          Contact
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-black/65">
          Cette page accueillera prochainement
          le formulaire de contact et les informations d’accès.
        </p>
      </Container>
    </Section>
  );
}