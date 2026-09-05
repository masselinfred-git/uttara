import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function CareSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* IMAGE */}
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[var(--surface)]">
            <Image
              src="/images/soins/soin-home.webp"
              alt="Soin ayurvédique chez Uttara"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXTE */}
          <div>
            <p className="mb-3 font-script text-4xl text-[var(--earth)]">
              Prendre soin
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Les soins
            </p>

            <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
              Écouter le corps,
              accompagner l’énergie.
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-[var(--muted)]">
              Les soins proposés par Uttara s’inscrivent
              dans une approche globale inspirée de l’Ayurveda,
              attentive au corps, aux sensations et à l’équilibre
              propre à chacun.
            </p>

            <div className="mt-9">
              <Button href="/soins">
                Découvrir les soins
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}