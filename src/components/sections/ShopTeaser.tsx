import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function ShopTeaser() {
  return (
    <Section className="bg-[var(--forest)] text-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-4xl text-[var(--hemp)] sm:text-5xl">
            Poursuivre l’expérience
          </p>

          <h2 className="mt-4 text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
            Entrez dans l’univers
            de la boutique Uttara.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65 sm:mt-7 sm:text-base sm:leading-8">
            Une sélection pensée autour du soin,
            du vivant et de l’univers d’Uttara.
          </p>

          <div className="mt-7 sm:mt-9">
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