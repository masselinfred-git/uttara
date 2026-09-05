import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function FormationsIntro() {
  return (
    <Section className="bg-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-4xl text-[var(--earth)] md:text-5xl">
            Transmettre autrement
          </p>

          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Apprendre par la pratique,
            l’écoute et l’expérience.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Les formations Uttara sont conçues pour permettre
            une véritable intégration des gestes, des principes
            ayurvédiques et de la posture professionnelle.
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-[var(--muted)]">
            L’enseignement privilégie un accompagnement attentif,
            des démonstrations concrètes et une pratique supervisée,
            afin que chaque stagiaire puisse progresser avec confiance.
          </p>
        </div>
      </Container>
    </Section>
  );
}