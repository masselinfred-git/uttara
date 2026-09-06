"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navigation } from "@/config/navigation";
import type { PublicSiteCoordinates } from "@/services/cms/types";

export function MobileMenu({
  coordinates,
}: {
  coordinates: PublicSiteCoordinates;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        className="
          inline-flex h-11 items-center justify-center
          rounded-full
          border border-[var(--forest)]
          px-5
          text-sm
          text-[var(--forest)]
          md:hidden
        "
      >
        Menu
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-[var(--background-light)] md:hidden">
          <div className="flex min-h-svh flex-col">
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-lg font-semibold uppercase tracking-[0.18em]"
              >
                Uttara
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Fermer le menu"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full
                  border border-black/15
                  text-xl
                "
              >
                ×
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between px-6 py-10">
              <nav aria-label="Navigation mobile">
                <ul className="space-y-5">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="
                          block
                          text-4xl
                          leading-tight
                          sm:text-5xl
                        "
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <a
                      href={coordinates.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="
                        block
                        text-4xl
                        leading-tight
                        text-[var(--earth)]
                        sm:text-5xl
                      "
                    >
                      Boutique ↗
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="mt-12 border-t border-black/10 pt-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Suivre Uttara
                </p>

                <div className="mt-4 flex gap-6 text-sm">
                  <a
                    href={coordinates.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram ↗
                  </a>

                  <a
                    href={coordinates.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook ↗
                  </a>
                </div>

                <p className="mt-7 text-sm leading-6 text-[var(--muted)]">
                  {coordinates.address}
                  <br />
                  {coordinates.postalCode} {coordinates.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
