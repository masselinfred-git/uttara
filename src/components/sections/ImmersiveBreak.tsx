export function ImmersiveBreak() {
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
          « Prendre soin du corps,
          <br />
          c’est aussi prendre soin
          <br />

          <span className="font-script text-5xl md:text-7xl">
            de l’énergie.
          </span>
          »
        </blockquote>
      </div>
    </section>
  );
}
