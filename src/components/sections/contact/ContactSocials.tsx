import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicSiteCoordinates } from "@/services/cms/types";

export function ContactSocials({
  coordinates,
}: {
  coordinates: PublicSiteCoordinates;
}) {
  return (
    <Section className="bg-[var(--forest)] text-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-4xl text-[var(--hemp)] sm:text-5xl">
            Suivre l’univers
          </p>

          <h2 className="mt-4 text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
            Retrouvez Uttara au quotidien.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70 sm:mt-7 sm:text-base sm:leading-8">
            Actualités, formations, soins,
            inspirations et vie du lieu.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={coordinates.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex min-h-12
                items-center justify-center
                rounded-full
                border border-white/40
                px-7 py-3.5
                text-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:text-[var(--forest-dark)]
              "
            >
              Instagram ↗
            </a>

            <a
              href={coordinates.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex min-h-12
                items-center justify-center
                rounded-full
                border border-white/40
                px-7 py-3.5
                text-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:text-[var(--forest-dark)]
              "
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
