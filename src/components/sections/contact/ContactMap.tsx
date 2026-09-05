import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=12+rue+du+Presbytère+05300+Le+Poët";

export function ContactMap() {
  return (
    <Section className="bg-[var(--surface)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          {/* TEXTE */}
          <div>
            <p className="font-script text-4xl text-[var(--earth)]">
              Venir chez Uttara
            </p>

            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
              Un lieu pour ralentir.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[var(--muted)]">
              Uttara vous accueille au Poët,
              dans les Hautes-Alpes, dans un environnement
              calme et proche de la nature.
            </p>

            <div className="mt-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Adresse
              </p>

              <p className="mt-2 text-lg leading-7">
                12 rue du Presbytère
                <br />
                05300 Le Poët
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="
                mt-8 inline-flex min-h-12
                items-center justify-center
                rounded-full
                border border-[var(--forest)]
                px-7 py-3.5
                text-sm font-medium
                text-[var(--forest)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--forest)]
                hover:text-[var(--background-light)]
              "
            >
              Ouvrir dans Google Maps ↗
            </a>
          </div>

          {/* IMAGE DU POËT */}
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[var(--hemp)] sm:min-h-[500px]">
            <Image
              src="/images/contact/le-poet.webp"
              alt="Village du Poët dans les Hautes-Alpes"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />

            {/* léger voile pour harmoniser avec la charte */}
            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>
      </Container>
    </Section>
  );
}