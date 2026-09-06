import { EmailButton } from "@/components/ui/EmailButton";
import type { PublicSiteCoordinates } from "@/services/cms/types";

export function ContactDetails({
  coordinates,
}: {
  coordinates: PublicSiteCoordinates;
}) {
  return (
    <div className="rounded-[2rem] bg-[var(--forest-dark)] p-6 text-[var(--background-light)] sm:p-8 md:p-10">
      <p className="font-script text-3xl text-[var(--hemp)] sm:text-4xl">
        La rencontre
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl">
        {coordinates.businessName}
      </h2>

      <div className="mt-7 space-y-7 sm:mt-8 sm:space-y-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            Adresse
          </p>

          <p className="mt-2 text-sm leading-7 text-white/80 sm:text-base">
            {coordinates.address}
            <br />
            {coordinates.postalCode} {coordinates.city}
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            Téléphone
          </p>

          <a
            href={`tel:${coordinates.phone.replace(/[^\d+]/g, "")}`}
            className="mt-2 block text-base text-white/85 transition hover:text-white sm:text-lg"
          >
            {coordinates.phone}
          </a>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            E-mail
          </p>

          <EmailButton email={coordinates.email} />
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            Rendez-vous
          </p>

          <p className="mt-2 text-sm leading-7 text-white/75 sm:text-base">
            {coordinates.appointmentText}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/15 pt-6 sm:mt-10 sm:pt-7">
        <p className="text-xs leading-6 text-white/55 sm:text-sm">
          {coordinates.fundingText}
        </p>
      </div>
    </div>
  );
}
