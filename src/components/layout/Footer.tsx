import Link from "next/link";

import { Container } from "@/components/ui/Container";
import type { PublicSiteCoordinates } from "@/services/cms/types";

export function Footer({
  coordinates,
}: {
  coordinates: PublicSiteCoordinates;
}) {
  return (
    <footer className="border-t border-black/10 bg-[var(--background-light)]">
      <Container className="py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* MARQUE */}
          <div>
            <Link href="/" className="inline-block">
              <p className="text-lg font-semibold uppercase tracking-[0.18em]">
                {coordinates.businessName}
              </p>

              <p className="mt-2 text-sm tracking-[0.08em] text-[var(--muted)]">
                Ayurveda · Soins · Formations
              </p>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--muted)]">
              Un espace dédié au soin, à l’Ayurveda
              et à la transmission, au cœur des Hautes-Alpes.
            </p>

            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
              {coordinates.address}
              <br />
              {coordinates.postalCode} {coordinates.city}
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Navigation
            </p>

            <nav
              aria-label="Navigation secondaire"
              className="mt-5 flex flex-col items-start gap-3 text-sm"
            >
              <Link
                href="/"
                className="transition-opacity hover:opacity-60"
              >
                Accueil
              </Link>

              <Link
                href="/soins"
                className="transition-opacity hover:opacity-60"
              >
                Soins
              </Link>

              <Link
                href="/formations"
                className="transition-opacity hover:opacity-60"
              >
                Formations
              </Link>

              <Link
                href="/contact"
                className="transition-opacity hover:opacity-60"
              >
                Contact
              </Link>

              <a
                href={coordinates.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                Boutique ↗
              </a>
            </nav>
          </div>

          {/* SUIVRE */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Suivre Uttara
            </p>

            <div className="mt-5 flex flex-col items-start gap-3 text-sm">
              <a
                href={coordinates.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                Instagram ↗
              </a>

              <a
                href={coordinates.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                Facebook ↗
              </a>
            </div>
          </div>
        </div>

        {/* BAS DE FOOTER */}
        <div className="mt-12 border-t border-black/10 pt-7">
          <div className="flex flex-col gap-5 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <span>
                © {new Date().getFullYear()} Uttara
              </span>

              <Link
                href="/mentions-legales"
                className="transition-opacity hover:opacity-60"
              >
                Mentions légales
              </Link>

              <Link
                href="/politique-confidentialite"
                className="transition-opacity hover:opacity-60"
              >
                Politique de confidentialité
              </Link>
            </div>

            <p>
              Conception & développement{" "}
              <Link
                href="/mentions-legales"
                className="underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Frédéric Masselin
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
