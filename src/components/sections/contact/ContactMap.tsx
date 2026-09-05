import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=12+rue+du+Presbytère+05300+Le+Poët";

export function ContactMap() {
  return (
    <Section className="bg-[var(--surface)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <p className="font-script text-4xl text-[var(--earth)]">
              Venir chez Uttara
            </p>

            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">
              Un lieu pour ralentir.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[var(--muted)]">
              Uttara vous accueille au Poët,
              dans les Hautes-Alpes, dans un environnement
              calme et proche de la nature.
            </p>

            <p className="mt-5 leading-7">
              12 rue du Presbytère
              <br />
              05300 Le Poët
            </p>

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

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[var(--hemp)]">
            <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
              <div>
                <p className="font-script text-4xl text-[var(--earth)]">
                  Le Poët
                </p>

                <p className="mt-4 max-w-sm leading-7 text-[var(--muted)]">
                  Nous afficherons ici une photographie
                  du lieu ou une illustration de localisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}