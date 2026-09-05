import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const fundingOptions = [
  "FAFCEA",
  "France Travail",
  "Département",
  "OPCO",
  "Autres fonds de formation",
];

export function FundingSection() {
  return (
    <Section className="bg-[var(--forest-dark)] text-[var(--background-light)]">
      <Container>
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* INTRO */}
          <div>
            <p className="font-script text-3xl text-[var(--hemp)] sm:text-4xl">
              Financer sa formation
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl md:text-6xl">
              Des possibilités de prise en charge
              selon votre situation.
            </h2>

            <div className="mt-7 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2.5 sm:mt-8 sm:px-5 sm:py-3">
              <span className="text-xs font-medium tracking-[0.06em] sm:text-sm sm:tracking-[0.08em]">
                Organisme certifié Qualiopi
              </span>
            </div>
          </div>

          {/* CONTENU */}
          <div>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Uttara est un organisme de formation déclaré sous le numéro
              d’activité{" "}
              <strong className="text-white">
                93050101105
              </strong>
              .
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:mt-5 sm:text-base sm:leading-8">
              L’organisme est certifié Qualiopi. Selon votre statut,
              votre activité professionnelle et la formation choisie,
              une demande de prise en charge peut être étudiée auprès
              d’un organisme financeur.
            </p>

            <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {fundingOptions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4"
                >
                  <p className="text-sm text-white/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:mt-7 sm:text-base sm:leading-8">
              Les conditions varient selon les dispositifs.
              Toute prise en charge reste soumise à l’éligibilité
              de la formation, à votre situation et à l’accord préalable
              du financeur concerné.
            </p>

            <div className="mt-7 rounded-2xl border border-white/15 bg-black/10 px-5 py-5 sm:mt-8 sm:px-6">
              <p className="text-xs leading-6 text-white/60 sm:text-sm">
                Numéro de déclaration d’activité : 93050101105.
                Cet enregistrement ne vaut pas agrément de l’État.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}