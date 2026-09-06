"use client";

export function EmailButton({ email }: { email: string }) {
  function handleClick() {
    window.location.href = `mailto:${email}`;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        mt-2 inline-flex rounded-full
        border border-white/25
        px-5 py-3
        text-sm text-white/85
        transition
        hover:bg-white
        hover:text-[var(--forest-dark)]
      "
    >
      Écrire par e-mail
    </button>
  );
}
