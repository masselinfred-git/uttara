import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const items = [
  "Besoin de ralentir",
  "Fatigue ou surcharge",
  "Tensions corporelles",
  "Recherche d’ancrage",
  "Envie de prendre soin de soi",
  "Découverte de l’Ayurveda",
];

export function WhoForSection() {
  return (
    <Section className="bg-[var(--forest-dark)] text-[var(--background-light)]">
      <Container>
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-script text-3xl text-[var(--hemp)] sm:text-4xl">
              Pour qui ?
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl md:text-6xl">
              Un soin peut commencer simplement
              par le besoin de souffler.
            </h2>
          </div>

          <div className="border-t border-white/20">
            {items.map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-[40px_1fr] border-b border-white/20 py-5 sm:grid-cols-[50px_1fr] sm:py-6"
              >
                <span className="text-xs text-white/40 sm:text-sm">
                  0{index + 1}
                </span>

                <p className="text-lg text-white/85 sm:text-xl md:text-2xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}