import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section className="bg-[var(--surface)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-script text-4xl text-[var(--earth)]">
              La rencontre
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl">
              Je suis Laëtitia.
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-[var(--muted)]">
              Mon approche s’est construite autour de
              l’Ayurveda, du soin, de l’écoute du corps
              et de l’énergie.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">
              Uttara est l’espace dans lequel je rassemble
              aujourd’hui ces pratiques et cette expérience
              pour accompagner et transmettre.
            </p>
          </div>

          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[var(--hemp)]">
            <Image
              src="/images/laititia/portrait.webp"
              alt="Laëtitia, fondatrice d’Uttara"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}