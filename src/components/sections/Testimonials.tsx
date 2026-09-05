import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-4xl text-[var(--earth)]">
            Elles en parlent
          </p>

          <blockquote className="font-display mt-7 text-3xl leading-relaxed md:text-5xl">
            « Une expérience profondément humaine,
            douce et enveloppante, dans laquelle
            on se sent immédiatement en confiance. »
          </blockquote>

          <p className="mt-7 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            Témoignage stagiaire
          </p>
        </div>
      </Container>
    </Section>
  );
}