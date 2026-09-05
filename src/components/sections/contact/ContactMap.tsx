import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=12+rue+du+Presbytère+05300+Le+Poët";

export function ContactMap() {
  return (
    <Section className="bg-[var(--surface)]">
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <p className="font-script text-3xl text-[var(--earth)] sm:text-4xl">
              Venir chez Uttara
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl md:text-6xl">
              Un lieu pour ralentir.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              Uttara vous accueille au Poët,
              dans les Hautes-Alpes, dans un environnement
              calme et proche de la nature.
            </p>

            <div className="mt-6 sm:mt-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                Adresse
              </p>

              <p className="mt-2 text-base leading-7 sm:text-lg">
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
                mt-7 inline-flex min-h-12
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
                sm:mt-8
              "
            >
              Ouvrir dans Google Maps ↗
            </a>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] bg-[var(--hemp)] sm:min-h-[500px]">
            <Image
              src="/images/contact/le-poet.webp"
              alt="Village du Poët dans les Hautes-Alpes"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>
      </Container>
    </Section>
  );
}