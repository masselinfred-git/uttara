import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicHomeContent } from "@/services/cms/types";

export function TrainingPreview({
  content,
}: {
  content: PublicHomeContent["training"];
}) {
  return (
    <Section className="bg-[var(--forest-dark)] text-[var(--background-light)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-script text-3xl text-[var(--hemp)] sm:text-4xl">
              {content.eyebrow}
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/55 sm:text-xs sm:tracking-[0.25em]">
              {content.label}
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
              {content.title}
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 sm:mt-7 sm:text-base sm:leading-8">
              {content.text}
            </p>

            <div className="mt-7 sm:mt-9">
              <Button href="/formations" variant="light">
                Voir toutes les formations
              </Button>
            </div>
          </div>

          <div>
            {content.items.map((formation) => (
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
