import Image from "next/image";

import { Container } from "@/components/ui/Container";

export function FormationsHero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden">
      <Image
        src="/images/home/hero-poster.webp"
        alt="Univers naturel Uttara"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />

      <Container className="relative z-10 flex min-h-[72vh] items-center py-16">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/80">
            Ayurveda · Transmission · Pratique
          </p>

          <h1 className="text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            Apprendre,
            <br />
            pratiquer,
            <br />
            <span className="font-script font-normal">
              transmettre.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Des formations pensées comme des temps
            d’apprentissage, d’expérience et de transmission,
            dans un cadre chaleureux et profondément humain.
          </p>

          <p className="mt-6 text-sm tracking-[0.08em] text-white/75">
            Organisme de formation certifié Qualiopi · NDA 93050101105
          </p>
        </div>
      </Container>
    </section>
  );
}