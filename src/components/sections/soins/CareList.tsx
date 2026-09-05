import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type CareDuration = {
  duration: string;
  price: string;
};

type Care = {
  title: string;
  eyebrow: string;
  description: string;
  details?: string;
  durations: CareDuration[];
  image: string;
};

const soins: Care[] = [
  {
    title: "Massage Ayurvédique Abhyanga",
    eyebrow: "Massage traditionnel à l’huile",
    description:
      "L’Abhyanga est l’un des massages emblématiques de la tradition ayurvédique. Pratiqué à l’huile, il enveloppe le corps dans des mouvements fluides, réguliers et profonds.",
    details:
      "Ce soin invite au relâchement, à la détente et à une meilleure perception du corps. Il constitue un véritable temps de pause, particulièrement adapté lorsque l’on ressent le besoin de ralentir et de se recentrer.",
    durations: [
      {
        duration: "60 min",
        price: "75 €",
      },
      {
        duration: "80 min",
        price: "90 €",
      },
    ],
    image: "/images/soins/massage-ayurvedique-home.webp",
  },

  {
    title: "Massage Bol Kansu pieds",
    eyebrow: "Ancrage et relaxation",
    description:
      "Le massage des pieds au bol Kansu est une pratique traditionnelle ayurvédique réalisée avec du ghee et un petit bol composé d’un alliage de métaux.",
    details:
      "Le soin alterne gestes manuels, pressions douces et mouvements du bol sur différentes zones du pied. Il offre une expérience particulièrement apaisante et favorise une sensation profonde d’ancrage et de détente.",
    durations: [
      {
        duration: "30 min",
        price: "45 €",
      },
    ],
    image: "/images/soins/bol-kansu-pieds.webp",
  },

  {
    title: "Massage corps aux poudres de plantes Udvartana",
    eyebrow: "Rituel ayurvédique aux plantes",
    description:
      "L’Udvartana est un massage traditionnel du corps réalisé avec des poudres de plantes. Il apporte une dimension très sensorielle au soin grâce au contact des poudres sur la peau.",
    details:
      "Lotus sacré, rose de Damas, neem et autres plantes peuvent être utilisés selon le rituel. Le massage associe mouvements dynamiques et exfoliation pour laisser la peau douce et satinée.",
    durations: [
      {
        duration: "60 min",
        price: "75 €",
      },
    ],
    image: "/images/soins/udvartana.webp",
  },

  {
    title: "Massage corps au Bol Kansu",
    eyebrow: "Douceur et équilibre",
    description:
      "Le massage du corps au Bol Kansu associe les mains et de petits bols traditionnels dans un enchaînement de lissages et de rotations.",
    details:
      "La douceur du geste et le contact du métal offrent un soin enveloppant et profondément relaxant. Une expérience idéale pour ralentir, relâcher les tensions et retrouver une sensation de calme.",
    durations: [
      {
        duration: "60 min",
        price: "75 €",
      },
    ],
    image: "/images/soins/bol-kansu-corps.webp",
  },

  {
    title: "Lifting naturel du visage Kobido",
    eyebrow: "Massage facial japonais",
    description:
      "Le Kobido est un art traditionnel japonais du massage du visage, transmis depuis plusieurs siècles.",
    details:
      "Le soin repose sur des gestes précis et rythmés travaillant différentes zones du visage. Il associe détente, tonicité et mise en valeur de l’éclat naturel de la peau.",
    durations: [
      {
        duration: "60 min",
        price: "75 €",
      },
    ],
    image: "/images/soins/kobido.webp",
  },
];

export function CareList() {
  return (
    <Section>
      <Container>
        {/* INTRODUCTION */}
        <div className="mb-14 md:mb-20">
          <p className="font-script text-4xl text-[var(--earth)] md:text-5xl">
            Les soins
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl">
            Des rituels pour ralentir,
            <br className="hidden md:block" />
            ressentir et revenir à soi.
          </h2>
        </div>

        {/* ESPACE DÉTENTE */}
        <div className="mb-20 overflow-hidden rounded-[2rem] bg-[var(--forest-dark)] text-[var(--background-light)]">
          <div className="grid gap-8 px-7 py-9 md:grid-cols-[1fr_auto] md:items-center md:px-10 md:py-10">
            <div>
              <p className="font-script text-3xl text-[var(--hemp)] md:text-4xl">
                Prolonger l’expérience
              </p>

              <h3 className="mt-2 text-3xl md:text-4xl">
                Espace détente, tisanerie & sauna
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                Après votre soin, vous pouvez prolonger ce moment
                dans l’espace détente et profiter de la tisanerie
                et du sauna.
              </p>
            </div>

            <div className="border-t border-white/20 pt-6 md:min-w-[220px] md:border-t-0 md:border-l md:pl-10 md:pt-0">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                  Accès 20 min
                </p>

                <p className="mt-1 text-2xl">
                  10 €
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
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
        <div className="space-y-20 md:space-y-28">
          {soins.map((soin, index) => (
            <article
              key={soin.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              {/* IMAGE */}
              <div
                className={`
                  relative min-h-[430px]
                  overflow-hidden rounded-[2rem]
                  bg-[var(--surface)]
                  sm:min-h-[520px]
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
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {soin.eyebrow}
                </p>

                <h3 className="mt-4 text-4xl leading-tight sm:text-5xl">
                  {soin.title}
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8">
                  {soin.description}
                </p>

                {soin.details && (
                  <p className="mt-4 max-w-xl leading-8 text-[var(--muted)]">
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
                        <span className="block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                          Durée
                        </span>

                        <strong className="mt-1 block text-lg font-medium">
                          {option.duration}
                        </strong>
                      </div>

                      <div>
                        <span className="block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
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

                <div className="mt-9">
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