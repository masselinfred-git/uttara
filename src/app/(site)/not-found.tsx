import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-[var(--background-light)]">
      <Container className="flex min-h-[72svh] items-center py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-4xl text-[var(--earth)] sm:text-5xl">
            Chemin égaré
          </p>

          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            Erreur 404
          </p>

          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-7xl">
            Cette page ne semble
            plus être ici.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
            Revenez à l’accueil ou poursuivez votre découverte
            des soins et des formations proposés par Uttara.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full
                bg-[var(--forest)]
                px-7 py-3.5
                text-sm font-medium
                text-[var(--background-light)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--forest-dark)]
              "
            >
              Retour à l’accueil
            </Link>

            <Link
              href="/soins"
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full
                border border-[var(--forest)]
                px-7 py-3.5
                text-sm font-medium
                text-[var(--forest)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--forest)]
                hover:text-[var(--background-light)]
              "
            >
              Découvrir les soins
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}