import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroVideo() {
  return (
    <section className="relative min-h-[82svh] overflow-hidden sm:min-h-[86svh] lg:min-h-[88svh]">
      {/* VIDEO */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/home/hero-poster.webp"
          className="h-full w-full object-cover object-center"
        >
          <source
            src="/videos/hero/uttara-hero.webm"
            type="video/webm"
          />

          <source
            src="/videos/hero/uttara-hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 sm:from-black/60 sm:via-black/30 sm:to-black/5" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* CONTENU */}
      <Container className="relative z-10 flex min-h-[82svh] items-center py-12 sm:min-h-[86svh] sm:py-16 lg:min-h-[88svh] lg:py-20">
        <div className="max-w-3xl pt-6 text-[#f4ede3] sm:pt-10 lg:pt-16">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.26em] sm:mb-5 sm:text-xs sm:tracking-[0.3em] md:text-sm">
            Ayurveda · Soins · Formations
          </p>

          <h1 className="text-[2.8rem] leading-[0.98] font-medium sm:text-6xl md:text-7xl lg:text-8xl">
            Revenir à soi.
            <br />
            Se reconnecter
            <br />
            <span className="font-script font-normal">
              à l’essentiel.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/90 sm:mt-8 sm:text-base md:text-lg">
            Un espace chaleureux où l’Ayurveda,
            le soin et l’énergie se rencontrent.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button href="/soins" variant="light">
              Découvrir les soins
            </Button>

            <Button href="/formations" variant="outline">
              Les formations
            </Button>
          </div>
        </div>
      </Container>

      {/* INDICATION SCROLL */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-center text-white/70 sm:block">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Découvrir
        </span>

        <div className="mx-auto mt-3 h-10 w-px bg-white/50" />
      </div>
    </section>
  );
}