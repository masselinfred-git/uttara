import type { PublicHomeContent } from "@/services/cms/types";

export function ImmersiveBreak({
  content,
}: {
  content: PublicHomeContent["immersive"];
}) {
  return (
    <section className="relative min-h-[65vh] overflow-hidden bg-[var(--forest-dark)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/home/hero-poster.webp"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/hero/uttara-break.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex min-h-[65vh] items-center justify-center px-6 text-center">
        <blockquote className="font-display max-w-4xl text-4xl leading-tight text-white md:text-6xl">
          « {content.line1}
          <br />
          {content.line2}
          <br />

          <span className="font-script text-5xl md:text-7xl">
            {content.accent}
          </span>
          »
        </blockquote>
      </div>
    </section>
  );
}
