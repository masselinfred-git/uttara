import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicAboutContent } from "@/services/cms/types";

export function AboutSection({ content }: { content: PublicAboutContent }) {
  return (
    <Section className="bg-[var(--surface)]">
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="font-script text-3xl text-[var(--earth)] sm:text-4xl">
              {content.role}
            </p>

            <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl">
              {content.displayName}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:mt-7 sm:text-base sm:leading-8">
              {content.primaryText}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:mt-5 sm:text-base sm:leading-8">
              {content.secondaryText}
            </p>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[var(--hemp)] sm:min-h-[500px] lg:min-h-[560px]">
            <Image
              src={content.photo}
              alt="Laëtitia, fondatrice d’Uttara"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
