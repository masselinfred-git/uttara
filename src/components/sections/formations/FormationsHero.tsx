import Image from "next/image";

import { Container } from "@/components/ui/Container";

export function FormationsHero() {
  return (
    <section className="relative min-h-[64svh] overflow-hidden sm:min-h-[68svh] lg:min-h-[72vh]">
      <Image
        src="/images/home/hero-poster.webp"
        alt="Univers naturel Uttara"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 sm:from-black/60 sm:via-black/30" />

      <Container className="relative z-10 flex min-h-[64svh] items-center py-12 sm:min-h-[68svh] sm:py-16 lg:min-h-[72vh]">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-white/80 sm:mb-5 sm:text-xs sm:tracking-[0.28em]">
            Ayurveda · Transmission · Pratique
          </p>

          <h1 className="text-[2.8rem] leading-[0.96] sm:text-6xl md:text-7xl lg:text-8xl">
            Apprendre,
            <br />
            pratiquer,
            <br />
            <span className="font-script font-normal">
              transmettre.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
            Des formations pensées comme des temps
            d’apprentissage, d’expérience et de transmission,
            dans un cadre chaleureux et profondément humain.
          </p>

          <p className="mt-5 max-w-xl text-xs leading-6 tracking-[0.06em] text-white/70 sm:mt-6 sm:text-sm sm:tracking-[0.08em]">
            Organisme de formation certifié Qualiopi · NDA 93050101105
          </p>
        </div>
      </Container>
    </section>
  );
}