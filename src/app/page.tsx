import { AboutSection } from "@/components/sections/AboutSection";
import { CareSection } from "@/components/sections/CareSection";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { ImmersiveBreak } from "@/components/sections/ImmersiveBreak";
import { IntroSection } from "@/components/sections/IntroSection";
import { SchedulePreview } from "@/components/sections/SchedulePreview";
import { ShopTeaser } from "@/components/sections/ShopTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrainingPreview } from "@/components/sections/TrainingPreview";

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