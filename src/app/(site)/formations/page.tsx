import type { Metadata } from "next";

import { FormationList } from "@/components/sections/formations/FormationList";
import { FormationsCTA } from "@/components/sections/formations/FormationsCTA";
import { FormationsHero } from "@/components/sections/formations/FormationsHero";
import { FormationsIntro } from "@/components/sections/formations/FormationsIntro";
import { FundingSection } from "@/components/sections/formations/FundingSection";
import { getFormations } from "@/services/cms/getFormations";
import { getFormationsPage } from "@/services/cms/getFormationsPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Formations Ayurveda et massage ayurvédique",
  description:
    "Formations Ayurveda et massage ayurvédique chez Uttara : apprentissage pratique, accompagnement professionnel et possibilités de financement selon votre situation.",

  alternates: {
    canonical: "/formations",
  },

  openGraph: {
    title: "Formations Ayurveda et massage ayurvédique | Uttara",
    description:
      "Des formations pratiques et humaines autour de l’Ayurveda et du massage, organisées au Poët dans les Hautes-Alpes.",
    url: "/formations",
  },
};

export default async function FormationsPage() {
  const [formations, formationsPage] = await Promise.all([
    getFormations(),
    getFormationsPage(),
  ]);

  return (
    <>
      <FormationsHero />
      <FormationsIntro />
      <FormationList formations={formations} />
      <FundingSection content={formationsPage} />
      <FormationsCTA />
    </>
  );
}
