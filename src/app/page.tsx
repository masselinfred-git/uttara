import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function HomePage() {
  return (
    <>
      <Section className="min-h-[65vh]">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-black/50">
              Ayurveda · Soins · Formations
            </p>

            <h1 className="text-5xl leading-tight font-medium md:text-7xl">
              Un lieu pour prendre soin,
              transmettre et se reconnecter.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
              Uttara est un espace dédié à l’Ayurveda,
              aux soins, à l’énergie et à la transmission.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--surface)]">
        <Container>
          <p className="text-sm uppercase tracking-[0.2em] text-black/50">
            Site en construction
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
            Nous construisons actuellement le nouvel univers
            d’Uttara.
          </h2>
        </Container>
      </Section>
    </>
  );
}