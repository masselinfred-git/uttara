import type { Metadata } from "next";

import { DeveloperEmailButton } from "@/components/ui/DeveloperEmailButton";
import { Container } from "@/components/ui/Container";
import { legalConfig } from "@/config/legal";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Uttara, Ayurveda, soins et formations.",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales | Uttara",
    description:
      "Mentions légales du site Uttara, Ayurveda, soins et formations.",
    url: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-[var(--background-light)]">
      <Container className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <header className="mb-16">
            <p className="font-script text-4xl text-[var(--earth)]">
              Informations légales
            </p>

            <h1 className="mt-3 text-5xl md:text-7xl">
              Mentions légales
            </h1>

            <p className="mt-6 max-w-2xl leading-8 text-[var(--muted)]">
              Les présentes mentions légales régissent
              l’utilisation du site Uttara.
            </p>
          </header>

          <div className="space-y-14">
            <LegalSection title="Éditeur du site">
              <p>
                Le présent site est édité par :
              </p>

              <p className="mt-4">
                <strong>{legalConfig.businessName}</strong>
                <br />
                Nom commercial : {legalConfig.tradeName}
                <br />
                Anciennement : {legalConfig.previousTradeName}
                <br />
                {legalConfig.address}
                <br />
                France
              </p>

              <p className="mt-4">
                Téléphone :{" "}
                <a
                  href="tel:+33678577341"
                  className="underline underline-offset-4"
                >
                  {legalConfig.phone}
                </a>
              </p>

              <p className="mt-4">
                SIREN : {legalConfig.siren}
                <br />
                SIRET : {legalConfig.siret}
              </p>
            </LegalSection>

            <LegalSection title="Organisme de formation">
              <p>
                Numéro de déclaration d’activité :{" "}
                <strong>
                  {legalConfig.trainingRegistrationNumber}
                </strong>
              </p>

              <p className="mt-3">
                Cet enregistrement ne vaut pas agrément de l’État.
              </p>
            </LegalSection>

            <LegalSection title="Directrice de la publication">
              <p>
                La directrice de la publication est :{" "}
                <strong>
                  {legalConfig.publicationDirector}
                </strong>.
              </p>
            </LegalSection>

            <LegalSection title="Conception et développement du site">
              <p>
                Conception, développement et intégration du site :
              </p>

              <p className="mt-4">
                <strong>Frédéric Masselin</strong>
                <br />
                Développement web & solutions numériques
              </p>

              <div className="mt-4">
                <DeveloperEmailButton />
              </div>
            </LegalSection>

            <LegalSection title="Hébergement">
              <p>
                Le site est hébergé par :
              </p>

              <p className="mt-4">
                <strong>{legalConfig.hosting.name}</strong>
                <br />
                {legalConfig.hosting.address}
                <br />
                {legalConfig.hosting.phone}
              </p>
            </LegalSection>

            <LegalSection title="Propriété intellectuelle">
              <p>
                L’ensemble des contenus présents sur ce site,
                notamment les textes, photographies, illustrations,
                éléments graphiques, logos, vidéos, icônes,
                ainsi que leur mise en forme, est protégé
                par les dispositions françaises et internationales
                relatives à la propriété intellectuelle.
              </p>

              <p className="mt-4">
                Toute reproduction, représentation, adaptation,
                modification ou diffusion, totale ou partielle,
                sans autorisation préalable écrite de l’éditeur,
                est interdite, sauf exceptions prévues par la loi.
              </p>
            </LegalSection>

            <LegalSection title="Nature des prestations">
              <p>
                Les prestations et informations relatives
                à l’Ayurveda présentées sur le site s’inscrivent
                dans une démarche de bien-être et
                d’accompagnement.
              </p>

              <p className="mt-4">
                Elles ne constituent pas des actes médicaux,
                ne permettent pas d’établir un diagnostic médical
                et ne se substituent ni à une consultation,
                ni à un diagnostic, ni à un traitement prescrit
                par un professionnel de santé.
              </p>

              <p className="mt-4">
                Toute question relative à votre état de santé
                doit être adressée à un professionnel de santé
                compétent.
              </p>
            </LegalSection>

            <LegalSection title="Responsabilité">
              <p>
                L’éditeur s’efforce de fournir des informations
                aussi exactes et à jour que possible.
              </p>

              <p className="mt-4">
                Il ne saurait toutefois garantir l’exactitude,
                la complétude ou l’actualité permanente
                de l’ensemble des informations diffusées.
              </p>

              <p className="mt-4">
                L’utilisateur reste responsable de l’usage
                qu’il fait des informations accessibles
                sur le site.
              </p>
            </LegalSection>

            <LegalSection title="Liens externes">
              <p>
                Le site peut contenir des liens vers des sites
                ou services tiers.
              </p>

              <p className="mt-4">
                Uttara n’exerce aucun contrôle sur ces ressources
                externes et ne peut être tenue responsable
                de leur contenu, de leur disponibilité
                ou de leurs pratiques.
              </p>
            </LegalSection>

            <LegalSection title="Médiation de la consommation">
              <p>
                Conformément aux articles L.612-1 et suivants
                du Code de la consommation, le consommateur
                peut recourir gratuitement à un médiateur
                de la consommation en vue de la résolution
                amiable d’un litige.
              </p>

              <p className="mt-4">
                Médiateur désigné :
              </p>

              <p className="mt-3">
                <strong>{legalConfig.mediator.name}</strong>
                <br />
                {legalConfig.mediator.address}
                <br />
                Site : {legalConfig.mediator.website}
              </p>
            </LegalSection>

            <LegalSection title="Données personnelles">
              <p>
                Les informations concernant la collecte
                et le traitement des données personnelles
                sont détaillées dans notre{" "}
                <a
                  href="/politique-confidentialite"
                  className="underline underline-offset-4"
                >
                  politique de confidentialité
                </a>.
              </p>
            </LegalSection>

            <LegalSection title="Droit applicable">
              <p>
                Le présent site et ses mentions légales
                sont soumis au droit français.
              </p>
            </LegalSection>

            <p className="border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
              Dernière mise à jour : septembre 2026.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[var(--border)] pt-8">
      <h2 className="text-3xl md:text-4xl">
        {title}
      </h2>

      <div className="mt-5 leading-8 text-[var(--muted)]">
        {children}
      </div>
    </section>
  );
}
