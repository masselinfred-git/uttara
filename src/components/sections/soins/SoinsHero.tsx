import Image from "next/image";

import { Container } from "@/components/ui/Container";

export function SoinsHero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden">
      <Image
        src="/images/soins/massage-ayurvedique-home.webp"
        alt="Soin ayurvédique chez Uttara"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10" />

      <Container className="relative z-10 flex min-h-[72vh] items-center py-16">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/80">
            Ayurveda · Soins · Équilibre
          </p>

          <h1 className="text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            Prendre soin
            <br />
            <span className="font-script text-6xl font-normal sm:text-7xl md:text-8xl">
              autrement.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Des soins inspirés de l’Ayurveda pour accompagner
            le corps, les rythmes, l’énergie et le besoin
            de revenir à soi.
          </p>
        </div>
      </Container>
    </section>
  );
}