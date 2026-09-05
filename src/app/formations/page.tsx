import type { Metadata } from "next";

import { FormationList } from "@/components/sections/formations/FormationList";
import { FormationsCTA } from "@/components/sections/formations/FormationsCTA";
import { FormationsHero } from "@/components/sections/formations/FormationsHero";
import { FormationsIntro } from "@/components/sections/formations/FormationsIntro";
import { FundingSection } from "@/components/sections/formations/FundingSection";

export const metadata: Metadata = {
  title: "Formations Ayurveda",
  description:
    "Découvrez les formations Uttara en Ayurveda, massage Abhyanga, Bol Kansu et découverte de l’Ayurveda. Organisme certifié Qualiopi.",
};

export default function FormationsPage() {
  return (
    <>
      <FormationsHero />
      <FormationsIntro />
      <FormationList />
      <FundingSection />
      <FormationsCTA />
    </>
  );
}