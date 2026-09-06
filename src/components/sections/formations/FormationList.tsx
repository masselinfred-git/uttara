import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicFormation } from "@/services/cms/types";

type FormationListProps = {
  formations: PublicFormation[];
};

export function FormationList({ formations }: FormationListProps) {
  return (
    <Section>
      <Container>
        <div className="mb-12 sm:mb-14 md:mb-20">
          <p className="font-script text-3xl text-[var(--earth)] sm:text-4xl md:text-5xl">
            Les formations
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl leading-tight sm:text-5xl md:text-6xl">
            Choisir sa voie,
            progresser à son rythme.
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {formations.map((formation, index) => (
            <article
              key={formation.id}
              className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--background-light)]"
            >
              <div className="grid lg:grid-cols-[0.32fr_0.68fr]">
                {/* COLONNE INFORMATIONS */}
                <div className="flex flex-col justify-between bg-[var(--forest-dark)] p-6 text-[var(--background-light)] sm:p-8 md:p-10">
                  <div>
                    <span className="text-xs text-white/45 sm:text-sm">
                      0{index + 1}
                    </span>

                    <p className="mt-6 font-script text-3xl text-[var(--hemp)] sm:mt-8">
                      {formation.eyebrow}
                    </p>

                    <h3 className="mt-3 text-2xl leading-tight sm:text-3xl md:text-4xl">
                      {formation.shortTitle}
                    </h3>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-5 border-t border-white/15 pt-6 sm:mt-10 lg:block lg:space-y-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
                        Durée
                      </p>

                      <p className="mt-1 text-base sm:text-lg">
                        {formation.duration}
                        {formation.hours
                          ? ` · ${formation.hours}`
                          : ""}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
                        Tarif
                      </p>

                      <p className="mt-1 text-base sm:text-lg">
                        {formation.price}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CONTENU */}
                <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <h3 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
                    {formation.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                    {formation.description}
                  </p>

                  <div className="mt-7 grid gap-7 sm:mt-8 md:grid-cols-2 md:gap-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                        Objectifs
                      </p>

                      <ul className="mt-4 space-y-3">
                        {formation.objectives
                          .slice(0, 4)
                          .map((objective) => (
                            <li
                              key={objective}
                              className="flex gap-3 text-sm leading-7 text-[var(--muted)] sm:text-base"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />

                              {objective}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                        Modalités
                      </p>

                      <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                        <p>
                          {formation.individual
                            ? "Formation possible en accompagnement individuel."
                            : "Formation organisée en petit groupe."}
                        </p>

                        {formation.maxParticipants && (
                          <p>
                            Groupe limité à{" "}
                            {formation.maxParticipants} participants.
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

                  {formation.documents.length > 0 && (
                    <div className="mt-8 border-t border-[var(--border)] pt-7 sm:mt-9 sm:pt-8">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                        Documents à télécharger
                      </p>

                      <div className="mt-4 flex flex-col gap-3">
                        {formation.documents.map((document) => {
                          const isPdf = document.fileType === "PDF";

                          return (
                            <a
                              key={document.id}
                              href={document.url}
                              download={isPdf ? undefined : document.filename}
                              target={isPdf ? "_blank" : undefined}
                              rel={isPdf ? "noopener noreferrer" : undefined}
                              className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] px-5 py-4 text-sm transition hover:border-[var(--forest)] sm:text-base"
                            >
                              <span>
                                <span className="font-medium text-[var(--foreground)]">
                                  {document.title}
                                </span>
                                {document.description && (
                                  <span className="mt-1 block text-sm text-[var(--muted)]">
                                    {document.description}
                                  </span>
                                )}
                              </span>

                              <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-[var(--earth)]">
                                {document.fileType}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
                    <Button href="/contact">
                      Demander le programme
                    </Button>

                    <Button
                      href="/contact"
                      variant="outlineDark"
                    >
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
