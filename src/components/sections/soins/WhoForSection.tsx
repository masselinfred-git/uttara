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
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-script text-4xl text-[var(--hemp)]">
              Pour qui ?
            </p>

            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">
              Un soin peut commencer simplement
              par le besoin de souffler.
            </h2>
          </div>

          <div className="border-t border-white/20">
            {items.map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-[50px_1fr] border-b border-white/20 py-6"
              >
                <span className="text-sm text-white/40">
                  0{index + 1}
                </span>

                <p className="text-xl text-white/85 md:text-2xl">
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