import type { Metadata } from "next";

import SiteNotFound from "./(site)/not-found";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { siteFontVariables } from "@/app/site-fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Page introuvable | Uttara",
};

export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className={siteFontVariables}>
        <StructuredData />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <SiteNotFound />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
