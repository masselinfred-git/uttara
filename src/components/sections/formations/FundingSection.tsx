import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicFormationsPage } from "@/services/cms/types";

type FundingSectionProps = {
  content: PublicFormationsPage;
};

export function FundingSection({ content }: FundingSectionProps) {
  return (
    <Section className="bg-[var(--forest-dark)] text-[var(--background-light)]">
      <Container>
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* INTRO */}
          <div>
            <p className="font-script text-3xl text-[var(--hemp)] sm:text-4xl">
              {content.fundingEyebrow}
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl md:text-6xl">
              {content.fundingTitle}
            </h2>

            <div className="mt-7 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2.5 sm:mt-8 sm:px-5 sm:py-3">
              <span className="text-xs font-medium tracking-[0.06em] sm:text-sm sm:tracking-[0.08em]">
                {content.qualiopiLabel}
              </span>
            </div>
          </div>

          {/* CONTENU */}
          <div>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {content.fundingIntro}{" "}
              <strong className="text-white">
                {content.trainingRegistrationNumber}
              </strong>
              .
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:mt-5 sm:text-base sm:leading-8">
              {content.fundingExplanation}
            </p>

            <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {content.funders.map((item) => (
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
              {content.fundingNotice}
            </p>

            <div className="mt-7 rounded-2xl border border-white/15 bg-black/10 px-5 py-5 sm:mt-8 sm:px-6">
              <p className="text-xs leading-6 text-white/60 sm:text-sm">
                Numéro de déclaration d’activité :{" "}
                {content.trainingRegistrationNumber}.{" "}
                {content.trainingRegistrationLegalText}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
