"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  privacy: false,
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          website: form.website,
          privacy: form.privacy,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Une erreur est survenue.",
        );
      }

      setForm(initialState);
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue.",
      );
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background-light)] px-5 py-4 outline-none transition focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10";

  return (
    <div>
      <p className="font-script text-4xl text-[var(--earth)]">
        Écrivez-moi
      </p>

      <h2 className="mt-3 text-4xl leading-tight md:text-5xl">
        Parlez-moi de votre besoin.
      </h2>

      <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">
        Pour un soin, une formation ou simplement une question,
        laissez-moi un message. Je vous répondrai dès que possible.
      </p>

      {status === "success" ? (
        <div
          className="mt-10 rounded-[2rem] bg-[var(--surface)] p-8"
          role="status"
          aria-live="polite"
        >
          <p className="font-script text-3xl text-[var(--earth)]">
            Merci
          </p>

          <h3 className="mt-2 text-3xl">
            Votre message a bien été envoyé.
          </h3>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            Laëtitia vous répondra dès que possible.
          </p>

          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm underline underline-offset-4"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* HONEYPOT */}
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
          >
            <label>
              Site internet
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(event) =>
                  setForm({
                    ...form,
                    website: event.target.value,
                  })
                }
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm">
              Nom et prénom *
              <input
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) =>
                  setForm({
                    ...form,
                    name: event.target.value,
                  })
                }
                className={fieldClass}
              />
            </label>

            <label className="text-sm">
              Adresse e-mail *
              <input
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(event) =>
                  setForm({
                    ...form,
                    email: event.target.value,
                  })
                }
                className={fieldClass}
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm">
              Téléphone
              <input
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) =>
                  setForm({
                    ...form,
                    phone: event.target.value,
                  })
                }
                className={fieldClass}
              />
            </label>

            <label className="text-sm">
              Votre demande *
              <select
                required
                value={form.subject}
                onChange={(event) =>
                  setForm({
                    ...form,
                    subject: event.target.value,
                  })
                }
                className={fieldClass}
              >
                <option value="">
                  Choisir
                </option>

                <option value="soin">
                  Un soin
                </option>

                <option value="formation">
                  Une formation
                </option>

                <option value="financement">
                  Financement d’une formation
                </option>

                <option value="autre">
                  Autre demande
                </option>
              </select>
            </label>
          </div>

          <label className="block text-sm">
            Votre message *
            <textarea
              required
              minLength={10}
              maxLength={5000}
              rows={7}
              value={form.message}
              onChange={(event) =>
                setForm({
                  ...form,
                  message: event.target.value,
                })
              }
              className={`${fieldClass} resize-y`}
            />
          </label>

          <label className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
            <input
              type="checkbox"
              required
              checked={form.privacy}
              onChange={(event) =>
                setForm({
                  ...form,
                  privacy: event.target.checked,
                })
              }
              className="mt-1 h-4 w-4 accent-[var(--forest)]"
            />

            <span>
              J’accepte que les informations saisies soient utilisées
              afin de répondre à ma demande. Pour en savoir plus,
              consultez la{" "}
              <a
                href="/politique-confidentialite"
                className="underline underline-offset-4"
              >
                politique de confidentialité
              </a>
              .
            </span>
          </label>

          {status === "error" && (
            <div
              className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-sm text-red-800"
              role="alert"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="
              inline-flex min-h-12 items-center justify-center
              rounded-full
              bg-[var(--forest)]
              px-8 py-3.5
              text-sm font-medium
              text-[var(--background-light)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[var(--forest-dark)]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {status === "sending"
              ? "Envoi en cours..."
              : "Envoyer mon message"}
          </button>
        </form>
      )}
    </div>
  );
}
