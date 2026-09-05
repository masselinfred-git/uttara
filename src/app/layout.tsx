import type { Metadata } from "next";
import {
  Allura,
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { siteConfig } from "@/config/site";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.passion-ayurveda.fr"),

  title: {
    default:
      "Uttara — Ayurveda, soins et formations dans les Hautes-Alpes",
    template: "%s | Uttara",
  },

  description:
    "Uttara vous accueille au Poët dans les Hautes-Alpes pour des soins ayurvédiques, massages, formations et temps de reconnexion à soi.",

  applicationName: "Uttara",

  keywords: [
    "Ayurveda",
    "massage ayurvédique",
    "soins ayurvédiques",
    "formation Ayurveda",
    "formation massage ayurvédique",
    "massage Abhyanga",
    "Bol Kansu",
    "Kobido",
    "Le Poët",
    "Hautes-Alpes",
    "Sisteron",
  ],

  authors: [
    {
      name: "Uttara",
    },
  ],

  creator: "Uttara",
  publisher: "Uttara",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Uttara",
    title:
      "Uttara — Ayurveda, soins et formations dans les Hautes-Alpes",
    description:
      "Soins ayurvédiques, massages et formations dans un cadre chaleureux au Poët, dans les Hautes-Alpes.",
    images: [
      {
        url: "/images/home/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "Uttara — Ayurveda, soins et formations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Uttara — Ayurveda, soins et formations dans les Hautes-Alpes",
    description:
      "Soins ayurvédiques, massages et formations au Poët dans les Hautes-Alpes.",
    images: ["/images/home/hero-poster.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${manrope.variable} ${allura.variable}`}
      >
        <StructuredData />
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}