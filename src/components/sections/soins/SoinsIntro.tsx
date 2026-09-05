import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function SoinsIntro() {
  return (
    <Section className="bg-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-4xl text-[var(--earth)] md:text-5xl">
            Une approche globale
          </p>

          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Écouter ce que le corps exprime,
            avant de vouloir le faire taire.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Chaque soin est envisagé comme un temps de pause,
            d’écoute et de rééquilibrage. L’approche ayurvédique
            considère la personne dans sa globalité, avec son rythme,
            ses besoins et son état du moment.
          </p>
        </div>
      </Container>
    </Section>
  );
}