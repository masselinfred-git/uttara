import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-black/10 bg-[var(--background-light)]">
      <Container className="flex min-h-24 items-center justify-between gap-8">
        <Link
          href="/"
          aria-label="Uttara - Accueil"
          className="relative block h-[76px] w-[250px] shrink-0 sm:w-[280px]"
        >
          <Image
            src="/images/brand/uttara-logo-horizontal.png"
            alt="Uttara - Ayurveda, Soins, Formations"
            fill
            priority
            sizes="(max-width: 640px) 250px, 280px"
            className="object-contain object-left"
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-6 lg:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                    text-sm
                    transition-opacity
                    duration-300
                    hover:opacity-60
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <a
                href={siteConfig.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center
                  rounded-full
                  border border-[var(--foreground)]
                  px-5 py-2.5
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-[var(--forest)]
                  hover:text-[var(--background-light)]
                "
              >
                Boutique ↗
              </a>
            </li>
          </ul>
        </nav>

        <Link
          href="/contact"
          className="
            inline-flex
            rounded-full
            border border-[var(--forest)]
            px-5 py-2.5
            text-sm
            text-[var(--forest)]
            transition-all
            duration-300
            hover:bg-[var(--forest)]
            hover:text-[var(--background-light)]
            md:hidden
          "
        >
          Contact
        </Link>
      </Container>
    </header>
  );
}