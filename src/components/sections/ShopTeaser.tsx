import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type {
  PublicHomeContent,
  PublicSiteCoordinates,
} from "@/services/cms/types";

export function ShopTeaser({
  content,
  shopUrl,
}: {
  content: PublicHomeContent["shop"];
  shopUrl: PublicSiteCoordinates["shopUrl"];
}) {
  return (
    <Section className="bg-[var(--forest)] text-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-4xl text-[var(--hemp)] sm:text-5xl">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65 sm:mt-7 sm:text-base sm:leading-8">
            {content.text}
          </p>

          <div className="mt-7 sm:mt-9">
            <Button
              href={shopUrl}
              variant="light"
            >
              {content.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
