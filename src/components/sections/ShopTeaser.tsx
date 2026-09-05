import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function ShopTeaser() {
  return (
    <Section className="bg-[var(--forest)] text-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-5xl text-[var(--hemp)]">
            Poursuivre l’expérience
          </p>

          <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
            Entrez dans l’univers
            de la boutique Uttara.
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-white/65">
            Une sélection pensée autour du soin,
            du vivant et de l’univers d’Uttara.
          </p>

          <div className="mt-9">
            <Button
              href={siteConfig.shopUrl}
              variant="light"
            >
              Découvrir la boutique ↗
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}