import Image from "next/image";

import { Container } from "@/components/ui/Container";

export function SoinsHero() {
  return (
    <section className="relative min-h-[62svh] overflow-hidden sm:min-h-[68svh] lg:min-h-[72vh]">
      <Image
        src="/images/soins/massage-ayurvedique-home.webp"
        alt="Soin ayurvédique chez Uttara"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 sm:from-black/55 sm:via-black/30" />

      <Container className="relative z-10 flex min-h-[62svh] items-center py-12 sm:min-h-[68svh] sm:py-16 lg:min-h-[72vh]">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-white/80 sm:mb-5 sm:text-xs sm:tracking-[0.28em]">
            Ayurveda · Soins · Équilibre
          </p>

          <h1 className="text-[2.9rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            Prendre soin
            <br />
            <span className="font-script text-[3.4rem] font-normal sm:text-7xl md:text-8xl">
              autrement.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
            Des soins inspirés de l’Ayurveda pour accompagner
            le corps, les rythmes, l’énergie et le besoin
            de revenir à soi.
          </p>
        </div>
      </Container>
    </section>
  );
}