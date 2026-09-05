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
      "bg-[var(--forest)] text-[color:var(--background-light)] hover:bg-[var(--forest-dark)]",

    light:
      "bg-[var(--background-light)] text-[color:var(--foreground)] hover:bg-white",

    outline:
      "border border-current bg-transparent text-current hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        rounded-full px-7 py-3.5
        text-sm font-medium
        transition-all duration-300
        ${styles[variant]}
      `}
    >
      {children}
    </Link>
  );
}