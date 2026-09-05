import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroVideo() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden">
      {/* VIDEO */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/home/hero-poster.webp"
          className="h-full w-full object-cover"
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

      {/* Overlay chaud */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      {/* CONTENU */}
      <Container className="relative z-10 flex min-h-[88svh] items-center">
        <div className="max-w-3xl pt-24 text-[#f4ede3]">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] md:text-sm">
            Ayurveda · Soins · Formations
          </p>

          <h1 className="text-5xl leading-[0.95] font-medium md:text-7xl lg:text-8xl">
            Revenir à soi.
            <br />
            Se reconnecter
            <br />
            <span className="font-script font-normal">
              à l’essentiel.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/85 md:text-lg">
            Un espace chaleureux où l’Ayurveda,
            le soin et l’énergie se rencontrent.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/soins" variant="light">
              Découvrir les soins
            </Button>

            <Button href="/formations" variant="outline">
              Les formations
            </Button>
          </div>
        </div>
      </Container>

      {/* indication scroll */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-white/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Découvrir
        </span>

        <div className="mx-auto mt-3 h-10 w-px bg-white/50" />
      </div>
    </section>
  );
}