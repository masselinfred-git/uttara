import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-black/10 bg-[var(--background-light)]">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 flex-col">
          <span className="text-xl font-semibold tracking-[0.15em] uppercase">
            {siteConfig.name}
          </span>

          <span className="hidden text-xs tracking-[0.12em] text-black/60 sm:block">
            {siteConfig.baseline}
          </span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm transition-opacity hover:opacity-60"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <a
                href={siteConfig.shopUrl}
                className="rounded-full border border-black px-5 py-2 text-sm"
              >
                Boutique ↗
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <Link
            href="/contact"
            className="rounded-full border border-black/60 px-4 py-2 text-sm"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}