import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function FormationsPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-medium">
          Formations
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-black/65">
          Découvrez prochainement les formations
          proposées par Uttara.
        </p>
      </Container>
    </Section>
  );
}