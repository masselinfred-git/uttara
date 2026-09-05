import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function SoinsIntro() {
  return (
    <Section className="bg-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-3xl text-[var(--earth)] sm:text-4xl md:text-5xl">
            Une approche globale
          </p>

          <h2 className="mt-4 text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
            Écouter ce que le corps exprime,
            avant de vouloir le faire taire.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
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