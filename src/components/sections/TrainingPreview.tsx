import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const formations = [
  {
    number: "01",
    title: "Massage Ayurvédique",
    text: "Découvrir les fondamentaux du massage et développer un toucher juste et conscient.",
  },
  {
    number: "02",
    title: "Bol Kansu",
    text: "Explorer la pratique traditionnelle du massage des pieds au bol Kansu.",
  },
  {
    number: "03",
    title: "Approche énergétique",
    text: "Approfondir l’écoute du corps et des circulations énergétiques.",
  },
  {
    number: "04",
    title: "Transmission",
    text: "Intégrer les pratiques dans une approche professionnelle et personnelle.",
  },
];

export function TrainingPreview() {
  return (
    <Section className="bg-[var(--forest-dark)] text-[var(--background-light)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-script text-3xl text-[var(--hemp)] sm:text-4xl">
              Transmettre
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/55 sm:text-xs sm:tracking-[0.25em]">
              Les formations
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
              Apprendre,
              expérimenter,
              transmettre.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 sm:mt-7 sm:text-base sm:leading-8">
              Des formations pensées comme des temps
              d’apprentissage, de pratique et d’expérience.
            </p>

            <div className="mt-7 sm:mt-9">
              <Button href="/formations" variant="light">
                Voir toutes les formations
              </Button>
            </div>
          </div>

          <div>
            {formations.map((formation) => (
              <div
                key={formation.number}
                className="grid gap-3 border-t border-white/25 py-6 sm:py-7 md:grid-cols-[70px_1fr] md:gap-4"
              >
                <span className="text-xs text-white/40 sm:text-sm">
                  {formation.number}
                </span>

                <div>
                  <h3 className="text-2xl sm:text-3xl">
                    {formation.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-7 text-white/70 sm:mt-3 sm:text-base">
                    {formation.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}