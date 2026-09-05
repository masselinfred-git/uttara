import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold tracking-[0.12em] uppercase">
            {siteConfig.name}
          </p>

          <p className="mt-2 text-sm text-black/60">
            {siteConfig.baseline}
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-black/60">
          <Link href="/mentions-legales">
            Mentions légales
          </Link>

          <Link href="/politique-confidentialite">
            Politique de confidentialité
          </Link>
        </div>
      </Container>
    </footer>
  );
}