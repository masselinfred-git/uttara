import type { Metadata } from "next";

import { CareList } from "@/components/sections/soins/CareList";
import { MedicalNotice } from "@/components/sections/soins/MedicalNotice";
import { SoinsCTA } from "@/components/sections/soins/SoinsCTA";
import { SoinsHero } from "@/components/sections/soins/SoinsHero";
import { SoinsIntro } from "@/components/sections/soins/SoinsIntro";
import { WhoForSection } from "@/components/sections/soins/WhoForSection";
import { getSoins } from "@/services/cms/getSoins";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Soins ayurvédiques et massages au Poët",
  description:
    "Découvrez les soins proposés par Uttara au Poët : massage ayurvédique Abhyanga, Bol Kansu, Udvartana et Kobido dans un cadre chaleureux dans les Hautes-Alpes.",

  alternates: {
    canonical: "/soins",
  },

  openGraph: {
    title: "Soins ayurvédiques et massages | Uttara",
    description:
      "Massages ayurvédiques, Bol Kansu, Udvartana et Kobido au Poët dans les Hautes-Alpes.",
    url: "/soins",
    images: [
      {
        url: "/images/soins/massage-ayurvedique-home.webp",
        alt: "Massage ayurvédique chez Uttara",
      },
    ],
  },
};

export default async function SoinsPage() {
  const soins = await getSoins();

  return (
    <>
      <SoinsHero />
      <SoinsIntro />
      <CareList soins={soins} />
      <WhoForSection />
      <MedicalNotice />
      <SoinsCTA />
    </>
  );
}
