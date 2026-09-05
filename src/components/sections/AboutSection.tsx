import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section className="bg-[var(--surface)]">
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="font-script text-3xl text-[var(--earth)] sm:text-4xl">
              La rencontre
            </p>

            <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl">
              Je suis Laëtitia.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:mt-7 sm:text-base sm:leading-8">
              Mon approche s’est construite autour de
              l’Ayurveda, du soin, de l’écoute du corps
              et de l’énergie.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:mt-5 sm:text-base sm:leading-8">
              Uttara est l’espace dans lequel je rassemble
              aujourd’hui ces pratiques et cette expérience
              pour accompagner et transmettre.
            </p>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[var(--hemp)] sm:min-h-[500px] lg:min-h-[560px]">
            <Image
              src="/images/laititia/portrait.webp"
              alt="Laëtitia, fondatrice d’Uttara"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}