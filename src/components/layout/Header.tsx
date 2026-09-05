import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-black/10">
      <Container className="flex min-h-20 items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-semibold tracking-[0.15em] uppercase">
            {siteConfig.name}
          </span>

          <span className="text-xs tracking-[0.12em] text-black/60">
            {siteConfig.baseline}
          </span>
        </Link>

        <nav aria-label="Navigation principale">
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
      </Container>
    </header>
  );
}