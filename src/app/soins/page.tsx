import type { Metadata } from "next";

import { CareList } from "@/components/sections/soins/CareList";
import { MedicalNotice } from "@/components/sections/soins/MedicalNotice";
import { SoinsCTA } from "@/components/sections/soins/SoinsCTA";
import { SoinsHero } from "@/components/sections/soins/SoinsHero";
import { SoinsIntro } from "@/components/sections/soins/SoinsIntro";
import { WhoForSection } from "@/components/sections/soins/WhoForSection";

export const metadata: Metadata = {
  title: "Soins ayurvédiques",
  description:
    "Découvrez les soins ayurvédiques proposés par Uttara : bilan ayurvédique, massages, bol Kansu et accompagnements de bien-être.",
};

export default function SoinsPage() {
  return (
    <>
      <SoinsHero />
      <SoinsIntro />
      <CareList />
      <WhoForSection />
      <MedicalNotice />
      <SoinsCTA />
    </>
  );
}