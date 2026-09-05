import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function FormationsCTA() {
  return (
    <Section className="bg-[var(--surface)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-4xl text-[var(--earth)] sm:text-5xl">
            Construire son projet
          </p>

          <h2 className="mt-4 text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
            Une question sur une formation
            ou son financement ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:mt-7 sm:text-base sm:leading-8">
            Laëtitia peut vous aider à identifier la formation
            la plus adaptée à votre projet et à préparer
            les éléments nécessaires à votre demande de prise en charge.
          </p>

          <div className="mt-7 sm:mt-9">
            <Button href="/contact">
              Échanger sur mon projet
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}