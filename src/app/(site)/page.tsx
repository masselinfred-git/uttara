import { AboutSection } from "@/components/sections/AboutSection";
import { CareSection } from "@/components/sections/CareSection";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { ImmersiveBreak } from "@/components/sections/ImmersiveBreak";
import { IntroSection } from "@/components/sections/IntroSection";
import { SchedulePreview } from "@/components/sections/SchedulePreview";
import { ShopTeaser } from "@/components/sections/ShopTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrainingPreview } from "@/components/sections/TrainingPreview";
import { getAboutContent } from "@/services/cms/getAboutContent";
import { getHomeContent } from "@/services/cms/getHomeContent";
import { getSiteCoordinates } from "@/services/cms/getSiteCoordinates";
import { getTestimonials } from "@/services/cms/getTestimonials";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

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

export default async function HomePage() {
  const [home, testimonials, about, coordinates] = await Promise.all([
    getHomeContent(),
    getTestimonials(),
    getAboutContent(),
    getSiteCoordinates(),
  ]);

  return (
    <>
      <HeroVideo content={home.hero} />

      <IntroSection content={home.intro} />

      <CareSection content={home.care} />

      <ImmersiveBreak content={home.immersive} />

      <TrainingPreview content={home.training} />

      <SchedulePreview content={home.schedule} />

      <Testimonials testimonials={testimonials} />

      <AboutSection content={about} />

      <ShopTeaser content={home.shop} shopUrl={coordinates.shopUrl} />
    </>
  );
}
