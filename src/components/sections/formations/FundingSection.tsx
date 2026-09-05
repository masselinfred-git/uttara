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
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-script text-4xl text-[var(--hemp)]">
              Financer sa formation
            </p>

            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
              Des possibilités de prise en charge
              selon votre situation.
            </h2>

            <div className="mt-8 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-3">
              <span className="text-sm font-medium tracking-[0.08em]">
                Organisme certifié Qualiopi
              </span>
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-white/80">
              Uttara est un organisme de formation déclaré sous le numéro
              d’activité{" "}
              <strong className="text-white">
                93050101105
              </strong>
              .
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              L’organisme est certifié Qualiopi. Selon votre statut,
              votre activité professionnelle et la formation choisie,
              une demande de prise en charge peut être étudiée auprès
              d’un organisme financeur.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
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

            <p className="mt-7 max-w-2xl leading-8 text-white/65">
              Les conditions varient selon les dispositifs.
              Toute prise en charge reste soumise à l’éligibilité
              de la formation, à votre situation et à l’accord préalable
              du financeur concerné.
            </p>

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 px-6 py-5">
              <p className="text-sm leading-6 text-white/60">
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