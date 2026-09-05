import { EmailButton } from "@/components/ui/EmailButton";
import { legalConfig } from "@/config/legal";

export function ContactDetails() {
  return (
    <div className="rounded-[2rem] bg-[var(--forest-dark)] p-6 text-[var(--background-light)] sm:p-8 md:p-10">
      <p className="font-script text-3xl text-[var(--hemp)] sm:text-4xl">
        La rencontre
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl">
        Uttara
      </h2>

      <div className="mt-7 space-y-7 sm:mt-8 sm:space-y-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            Adresse
          </p>

          <p className="mt-2 text-sm leading-7 text-white/80 sm:text-base">
            12 rue du Presbytère
            <br />
            05300 Le Poët
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            Téléphone
          </p>

          <a
            href="tel:+33678577341"
            className="mt-2 block text-base text-white/85 transition hover:text-white sm:text-lg"
          >
            {legalConfig.phone}
          </a>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            E-mail
          </p>

          <EmailButton />
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            Rendez-vous
          </p>

          <p className="mt-2 text-sm leading-7 text-white/75 sm:text-base">
            Les soins et formations sont proposés sur rendez-vous.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/15 pt-6 sm:mt-10 sm:pt-7">
        <p className="text-xs leading-6 text-white/55 sm:text-sm">
          Pour toute demande concernant une formation,
          pensez à préciser votre statut professionnel
          et votre éventuel besoin de financement.
        </p>
      </div>
    </div>
  );
}