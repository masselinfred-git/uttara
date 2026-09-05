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
            <p className="font-script text-4xl text-[var(--hemp)]">
              Transmettre
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/55">
              Les formations
            </p>

            <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
              Apprendre,
              expérimenter,
              transmettre.
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-white/65">
              Des formations pensées comme des temps
              d’apprentissage, de pratique et d’expérience.
            </p>

            <div className="mt-9">
              <Button href="/formations" variant="light">
                Voir toutes les formations
              </Button>
            </div>
          </div>

          <div>
            {formations.map((formation) => (
              <div
                key={formation.number}
                className="grid gap-4 border-t border-white/25 py-7 md:grid-cols-[70px_1fr]"
              >
                <span className="text-sm text-white/40">
                  {formation.number}
                </span>

                <div>
                  <h3 className="text-3xl">
                    {formation.title}
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-white/70">
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