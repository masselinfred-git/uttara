import {
  Allura,
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

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

export const siteFontVariables =
  `${cormorant.variable} ${manrope.variable} ${allura.variable}`;
