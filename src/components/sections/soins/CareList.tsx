import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicSoin } from "@/services/cms/types";

type CareListProps = {
  soins: PublicSoin[];
};

export function CareList({ soins }: CareListProps) {
  return (
    <Section>
      <Container>
        {/* INTRODUCTION */}
        <div className="mb-12 sm:mb-14 md:mb-20">
          <p className="font-script text-3xl text-[var(--earth)] sm:text-4xl md:text-5xl">
            Les soins
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl leading-tight sm:text-5xl md:text-6xl">
            Des rituels pour ralentir,
            <br className="hidden md:block" />
            ressentir et revenir à soi.
          </h2>
        </div>

        {/* ESPACE DÉTENTE */}
        <div className="mb-14 overflow-hidden rounded-[2rem] bg-[var(--forest-dark)] text-[var(--background-light)] sm:mb-20">
          <div className="grid gap-7 px-6 py-8 sm:px-7 sm:py-9 md:grid-cols-[1fr_auto] md:items-center md:px-10 md:py-10">
            <div>
              <p className="font-script text-3xl text-[var(--hemp)] md:text-4xl">
                Prolonger l’expérience
              </p>

              <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl">
                Espace détente, tisanerie & sauna
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Après votre soin, vous pouvez prolonger ce moment
                dans l’espace détente et profiter de la tisanerie
                et du sauna.
              </p>
            </div>

            <div className="border-t border-white/20 pt-6 md:min-w-[220px] md:border-t-0 md:border-l md:pl-10 md:pt-0">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                  Accès 20 min
                </p>

                <p className="mt-1 text-2xl">
                  10 €
                </p>
              </div>

              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                  30 min supplémentaires
                </p>

                <p className="mt-1 text-2xl">
                  10 €
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SOINS */}
        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {soins.map((soin, index) => (
            <article
              key={soin.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              {/* IMAGE */}
              <div
                className={`
                  relative min-h-[350px]
                  overflow-hidden rounded-[2rem]
                  bg-[var(--surface)]
                  sm:min-h-[500px]
                  lg:min-h-[610px]
                  ${index % 2 === 1 ? "lg:order-2" : ""}
                `}
              >
                <Image
                  src={soin.image}
                  alt={soin.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* INFORMATIONS */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] sm:text-xs sm:tracking-[0.25em]">
                  {soin.eyebrow}
                </p>

                <h3 className="mt-4 text-3xl leading-tight sm:text-5xl">
                  {soin.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8">
                  {soin.description}
                </p>

                {soin.details && (
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                    {soin.details}
                  </p>
                )}

                {/* DURÉES / TARIFS */}
                <div className="mt-8 border-y border-[var(--border)]">
                  {soin.durations.map((option) => (
                    <div
                      key={`${soin.title}-${option.duration}`}
                      className="grid grid-cols-2 gap-4 border-b border-[var(--border)] py-5 last:border-b-0"
                    >
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs">
                          Durée
                        </span>

                        <strong className="mt-1 block text-lg font-medium">
                          {option.duration}
                        </strong>
                      </div>

                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs">
                          Tarif
                        </span>

                        <strong className="mt-1 block text-lg font-medium">
                          {option.price}
                        </strong>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RAPPEL ESPACE DÉTENTE */}
                <div className="mt-6 text-sm leading-6 text-[var(--muted)]">
                  <p>
                    Espace détente, tisanerie & sauna :
                    <strong className="ml-1 text-[var(--foreground)]">
                      20 min — 10 €
                    </strong>
                  </p>

                  <p className="mt-1">
                    30 min supplémentaires :
                    <strong className="ml-1 text-[var(--foreground)]">
                      10 €
                    </strong>
                  </p>
                </div>

                <div className="mt-7 sm:mt-9">
                  <Button href="/contact">
                    Réserver ce soin
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
