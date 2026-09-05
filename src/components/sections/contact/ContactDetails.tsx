import { legalConfig } from "@/config/legal";
import { EmailButton } from "@/components/ui/EmailButton";

export function ContactDetails() {
  return (
    <div className="rounded-[2rem] bg-[var(--forest-dark)] p-8 text-[var(--background-light)] md:p-10">
      <p className="font-script text-4xl text-[var(--hemp)]">
        La rencontre
      </p>

      <h2 className="mt-3 text-4xl">
        Uttara
      </h2>

      <div className="mt-8 space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Adresse
          </p>

          <p className="mt-2 leading-7 text-white/80">
            12 rue du Presbytère
            <br />
            05300 Le Poët
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Téléphone
          </p>

          <a
            href="tel:+33678577341"
            className="mt-2 block text-lg text-white/85 transition hover:text-white"
          >
            {legalConfig.phone}
          </a>
        </div>

        <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                E-mail
            </p>

            <EmailButton />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Rendez-vous
          </p>

          <p className="mt-2 leading-7 text-white/75">
            Les soins et formations sont proposés sur rendez-vous.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/15 pt-7">
        <p className="text-sm leading-6 text-white/55">
          Pour toute demande concernant une formation,
          pensez à préciser votre statut professionnel
          et votre éventuel besoin de financement.
        </p>
      </div>
    </div>
  );
}