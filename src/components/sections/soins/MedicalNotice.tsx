import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function MedicalNotice() {
  return (
    <Section className="bg-[var(--surface)]">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="font-script text-4xl text-[var(--earth)]">
            Une démarche de bien-être
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl">
            L’Ayurveda accompagne, il ne remplace pas la médecine.
          </h2>

          <p className="mt-7 leading-8 text-[var(--muted)]">
            Les soins et bilans proposés dans le cadre d’Uttara
            s’inscrivent dans une démarche de bien-être et
            d’accompagnement.
          </p>

          <p className="mt-4 leading-8 text-[var(--muted)]">
            Ils ne constituent pas des actes médicaux, ne permettent
            pas d’établir de diagnostic et ne se substituent ni à une
            consultation, ni à un traitement prescrit par un
            professionnel de santé.
          </p>
        </div>
      </Container>
    </Section>
  );
}