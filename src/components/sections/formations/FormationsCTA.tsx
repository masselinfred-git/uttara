import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function FormationsCTA() {
  return (
    <Section className="bg-[var(--surface)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-5xl text-[var(--earth)]">
            Construire son projet
          </p>

          <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
            Une question sur une formation
            ou son financement ?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-[var(--muted)]">
            Laëtitia peut vous aider à identifier la formation
            la plus adaptée à votre projet et à préparer
            les éléments nécessaires à votre demande de prise en charge.
          </p>

          <div className="mt-9">
            <Button href="/contact">
              Échanger sur mon projet
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}