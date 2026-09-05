"use client";

export function DeveloperEmailButton() {
  function handleClick() {
    const user = "ton-identifiant";
    const domain = "ton-domaine.fr";

    window.location.href = `mailto:${user}@${domain}`;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        text-[var(--forest)]
        underline
        underline-offset-4
        transition
        hover:opacity-70
      "
    >
      Me contacter
    </button>
  );
}