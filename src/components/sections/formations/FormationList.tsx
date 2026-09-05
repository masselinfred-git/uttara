import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { formations } from "@/config/formations";

export function FormationList() {
  return (
    <Section>
      <Container>
        <div className="mb-14 md:mb-20">
          <p className="font-script text-4xl text-[var(--earth)] md:text-5xl">
            Les formations
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl">
            Choisir sa voie,
            progresser à son rythme.
          </h2>
        </div>

        <div className="space-y-10">
          {formations.map((formation, index) => (
            <article
              key={formation.slug}
              className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--background-light)]"
            >
              <div className="grid lg:grid-cols-[0.32fr_0.68fr]">
                <div className="flex flex-col justify-between bg-[var(--forest-dark)] p-8 text-[var(--background-light)] md:p-10">
                  <div>
                    <span className="text-sm text-white/45">
                      0{index + 1}
                    </span>

                    <p className="mt-8 font-script text-3xl text-[var(--hemp)]">
                      {formation.eyebrow}
                    </p>

                    <h3 className="mt-3 text-3xl leading-tight md:text-4xl">
                      {formation.shortTitle}
                    </h3>
                  </div>

                  <div className="mt-10 space-y-4 border-t border-white/15 pt-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                        Durée
                      </p>

                      <p className="mt-1 text-lg">
                        {formation.duration}
                        {formation.hours ? ` · ${formation.hours}` : ""}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                        Tarif
                      </p>

                      <p className="mt-1 text-lg">
                        {formation.price}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10 lg:p-12">
                  <h3 className="text-4xl leading-tight md:text-5xl">
                    {formation.title}
                  </h3>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                    {formation.description}
                  </p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        Objectifs
                      </p>

                      <ul className="mt-4 space-y-3">
                        {formation.objectives.slice(0, 4).map((objective) => (
                          <li
                            key={objective}
                            className="flex gap-3 leading-7 text-[var(--muted)]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />

                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        Modalités
                      </p>

                      <div className="mt-4 space-y-3 leading-7 text-[var(--muted)]">
                        <p>
                          {formation.individual
                            ? "Formation possible en accompagnement individuel."
                            : "Formation organisée en petit groupe."}
                        </p>

                        {formation.maxParticipants && (
                          <p>
                            Groupe limité à {formation.maxParticipants} participants.
                          </p>
                        )}

                        {formation.accommodation && (
                          <p>
                            {formation.accommodation}
                          </p>
                        )}

                        <p>
                          Prise en charge possible selon votre situation
                          et votre organisme financeur.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <Button href="/contact">
                      Demander le programme
                    </Button>

                    <Button href="/contact" variant="outlineDark">
                      S’inscrire
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}