import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicHomeContent } from "@/services/cms/types";

export function CareSection({
  content,
}: {
  content: PublicHomeContent["care"];
}) {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[var(--surface)] sm:min-h-[500px] lg:min-h-[620px]">
            <Image
              src="/images/soins/soin-home.webp"
              alt="Soin ayurvédique chez Uttara"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 font-script text-3xl text-[var(--earth)] sm:text-4xl">
              {content.eyebrow}
            </p>

            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] sm:text-xs sm:tracking-[0.25em]">
              {content.label}
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl">
              {content.title}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:mt-7 sm:text-base sm:leading-8">
              {content.text}
            </p>

            <div className="mt-7 sm:mt-9">
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
