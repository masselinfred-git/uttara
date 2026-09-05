import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function IntroSection() {
  return (
    <Section className="bg-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-3xl text-[var(--earth)] sm:text-4xl md:text-5xl">
            Bienvenue chez Uttara
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
            Un lieu où l’on prend le temps
            de revenir au corps,
            au vivant et à soi.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
            Ici, le soin ne se limite pas à un geste.
            Il devient une expérience, une écoute,
            une transmission et un moment pour ralentir.
          </p>
        </div>
      </Container>
    </Section>
  );
}