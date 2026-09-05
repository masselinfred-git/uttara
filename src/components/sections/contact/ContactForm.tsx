"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  privacy: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Pour l'instant : UI uniquement.
    // Nous brancherons l'envoi réel ensuite.
    setSubmitted(true);
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

      {submitted ? (
        <div className="mt-10 rounded-[2rem] bg-[var(--surface)] p-8">
          <p className="font-script text-3xl text-[var(--earth)]">
            Merci
          </p>

          <h3 className="mt-2 text-3xl">
            Votre formulaire est prêt.
          </h3>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            L’envoi réel sera activé lorsque nous aurons branché
            le service de messagerie.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm">
              Nom et prénom *
              <input
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
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
                  setForm({ ...form, email: event.target.value })
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
                  setForm({ ...form, phone: event.target.value })
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
                  setForm({ ...form, subject: event.target.value })
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
              rows={7}
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
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
                setForm({ ...form, privacy: event.target.checked })
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

          <p className="text-xs leading-5 text-[var(--muted)]">
            Les champs marqués d’un astérisque sont obligatoires.
            Les informations transmises sont utilisées uniquement
            pour répondre à votre demande.
          </p>

          <button
            type="submit"
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
            "
          >
            Envoyer mon message
          </button>
        </form>
      )}
    </div>
  );
}