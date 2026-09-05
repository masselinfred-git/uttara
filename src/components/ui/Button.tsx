import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
};

export function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[var(--forest)] text-[var(--background-light)] hover:bg-[var(--forest-dark)]",

    light:
      "bg-[var(--background-light)] text-[var(--forest-dark)] hover:bg-white",

    outline:
      "border border-white/70 bg-transparent text-white hover:bg-white hover:text-[var(--forest-dark)]",
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex min-h-12 items-center justify-center
        rounded-full px-7 py-3.5
        text-sm font-medium
        transition-all duration-300
        hover:-translate-y-0.5
        ${styles[variant]}
      `}
    >
      {children}
    </Link>
  );
}