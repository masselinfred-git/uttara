import { AboutSection } from "@/components/sections/AboutSection";
import { CareSection } from "@/components/sections/CareSection";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { ImmersiveBreak } from "@/components/sections/ImmersiveBreak";
import { IntroSection } from "@/components/sections/IntroSection";
import { SchedulePreview } from "@/components/sections/SchedulePreview";
import { ShopTeaser } from "@/components/sections/ShopTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrainingPreview } from "@/components/sections/TrainingPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayurveda, soins et formations dans les Hautes-Alpes",
  description:
    "Uttara vous accueille au Poët pour des soins ayurvédiques, massages et formations dans un univers chaleureux, naturel et profondément humain.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Uttara — Ayurveda, soins et formations",
    description:
      "Soins ayurvédiques, massages et formations au Poët dans les Hautes-Alpes.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <IntroSection />

      <CareSection />

      <ImmersiveBreak />

      <TrainingPreview />

      <SchedulePreview />

      <Testimonials />

      <AboutSection />

      <ShopTeaser />
    </>
  );
}