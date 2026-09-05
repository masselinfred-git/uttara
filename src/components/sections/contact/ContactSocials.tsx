import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ContactSocials() {
  return (
    <Section className="bg-[var(--forest)] text-[var(--background-light)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-5xl text-[var(--hemp)]">
            Suivre l’univers
          </p>

          <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
            Retrouvez Uttara au quotidien.
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-white/70">
            Actualités, formations, soins,
            inspirations et vie du lieu.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="
                rounded-full border border-white/40
                px-7 py-3.5 text-sm
                transition
                hover:bg-white hover:text-[var(--forest-dark)]
              "
            >
              Instagram ↗
            </a>

            <a
              href="#"
              className="
                rounded-full border border-white/40
                px-7 py-3.5 text-sm
                transition
                hover:bg-white hover:text-[var(--forest-dark)]
              "
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}