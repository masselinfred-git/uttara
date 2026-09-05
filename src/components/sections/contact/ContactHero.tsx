import Image from "next/image";

import { Container } from "@/components/ui/Container";

export function ContactHero() {
  return (
    <section className="relative min-h-[58svh] overflow-hidden sm:min-h-[62svh] lg:min-h-[64vh]">
      <Image
        src="/images/home/hero-poster.webp"
        alt="Univers naturel Uttara"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 sm:from-black/60 sm:via-black/30" />

      <Container className="relative z-10 flex min-h-[58svh] items-center py-12 sm:min-h-[62svh] sm:py-16 lg:min-h-[64vh]">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-white/80 sm:mb-5 sm:text-xs sm:tracking-[0.28em]">
            Contact · Soins · Formations
          </p>

          <h1 className="text-[2.9rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            Échangeons
            <br />
            <span className="font-script font-normal">
              simplement.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
            Une question sur un soin, une formation ou votre projet ?
            Laëtitia vous répond personnellement.
          </p>
        </div>
      </Container>
    </section>
  );
}