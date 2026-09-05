import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function IntroSection() {
  return (
    <Section className="bg-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-4xl text-[var(--earth)] md:text-5xl">
            Bienvenue chez Uttara
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl">
            Un lieu où l’on prend le temps
            de revenir au corps,
            au vivant et à soi.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Ici, le soin ne se limite pas à un geste.
            Il devient une expérience, une écoute,
            une transmission et un moment pour ralentir.
          </p>
        </div>
      </Container>
    </Section>
  );
}