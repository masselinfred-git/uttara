import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicHomeContent } from "@/services/cms/types";

export function IntroSection({
  content,
}: {
  content: PublicHomeContent["intro"];
}) {
  return (
    <Section className="bg-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-3xl text-[var(--earth)] sm:text-4xl md:text-5xl">
            {content.eyebrow}
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
            {content.text}
          </p>
        </div>
      </Container>
    </Section>
  );
}
