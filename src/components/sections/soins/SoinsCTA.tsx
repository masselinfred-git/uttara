import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function SoinsCTA() {
  return (
    <Section className="bg-[var(--forest)] text-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-5xl text-[var(--hemp)]">
            Prendre rendez-vous autrement
          </p>

          <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
            Vous ne savez pas quel soin choisir ?
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-white/70">
            Échangeons simplement sur votre besoin.
            Laëtitia pourra vous orienter vers l’accompagnement
            le plus adapté.
          </p>

          <div className="mt-9">
            <Button href="/contact" variant="light">
              Contacter Laëtitia
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}