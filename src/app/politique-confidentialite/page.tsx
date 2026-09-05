import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { legalConfig } from "@/config/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles du site Uttara.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--background-light)]">
      <Container className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <header className="mb-16">
            <p className="font-script text-4xl text-[var(--earth)]">
              Vos données
            </p>

            <h1 className="mt-3 text-5xl leading-tight md:text-7xl">
              Politique de confidentialité
            </h1>

            <p className="mt-6 max-w-2xl leading-8 text-[var(--muted)]">
              Uttara accorde une attention particulière
              à la protection de vos données personnelles
              et au respect de votre vie privée.
            </p>
          </header>

          <div className="space-y-14">
            <PrivacySection title="Responsable du traitement">
              <p>
                Le responsable du traitement des données
                personnelles collectées sur le site est :
              </p>

              <p className="mt-4">
                <strong>{legalConfig.businessName}</strong>
                <br />
                {legalConfig.address}
                <br />
                {legalConfig.email}
                <br />
                {legalConfig.phone}
              </p>
            </PrivacySection>

            <PrivacySection title="Données susceptibles d’être collectées">
              <p>
                Selon votre utilisation du site, nous pouvons
                collecter notamment les données suivantes :
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>nom et prénom ;</li>
                <li>adresse électronique ;</li>
                <li>numéro de téléphone ;</li>
                <li>
                  contenu des messages adressés via
                  le formulaire de contact ;
                </li>
                <li>
                  informations nécessaires à une demande
                  de prestation ou de formation ;
                </li>
                <li>
                  données techniques strictement nécessaires
                  au fonctionnement et à la sécurité du site.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection title="Finalités des traitements">
              <p>
                Les données collectées peuvent être utilisées
                pour :
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>répondre aux demandes de contact ;</li>
                <li>
                  traiter une demande concernant un soin,
                  une formation ou une prestation ;
                </li>
                <li>
                  assurer le suivi administratif
                  d’une inscription ;
                </li>
                <li>
                  assurer la sécurité et le bon fonctionnement
                  du site ;
                </li>
                <li>
                  respecter les obligations légales
                  et réglementaires applicables.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection title="Bases juridiques">
              <p>
                Selon la nature de votre demande,
                les traitements reposent notamment sur :
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  l’exécution de mesures précontractuelles
                  prises à votre demande ;
                </li>
                <li>
                  l’exécution d’un contrat lorsque
                  vous vous inscrivez à une prestation
                  ou une formation ;
                </li>
                <li>
                  le respect des obligations légales
                  de l’entreprise ;
                </li>
                <li>
                  l’intérêt légitime de l’entreprise
                  à répondre aux demandes qui lui sont adressées
                  et à assurer la sécurité de son site.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection title="Caractère obligatoire des données">
              <p>
                Les champs signalés comme obligatoires
                dans les formulaires sont nécessaires
                au traitement de votre demande.
              </p>

              <p className="mt-4">
                En l’absence de ces informations,
                Uttara peut ne pas être en mesure
                de répondre ou de traiter la demande concernée.
              </p>
            </PrivacySection>

            <PrivacySection title="Destinataires des données">
              <p>
                Les données sont destinées uniquement
                aux personnes habilitées au sein d’Uttara
                et, lorsque cela est nécessaire,
                à ses prestataires techniques agissant
                pour son compte.
              </p>

              <p className="mt-4">
                Les données ne sont pas vendues
                à des tiers.
              </p>
            </PrivacySection>

            <PrivacySection title="Durées de conservation">
              <p>
                Les données sont conservées uniquement
                pendant la durée nécessaire aux finalités
                pour lesquelles elles ont été collectées.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  demandes de contact sans relation contractuelle :
                  jusqu’à 3 ans à compter du dernier contact ;
                </li>

                <li>
                  données liées à une relation contractuelle :
                  pendant la durée de la relation,
                  puis pendant les durées nécessaires
                  au respect des obligations légales
                  ou à la défense des droits de l’entreprise ;
                </li>

                <li>
                  données techniques :
                  pendant une durée proportionnée
                  aux besoins de sécurité et de fonctionnement
                  du service.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection title="Vos droits">
              <p>
                Dans les conditions prévues par le RGPD
                et la loi Informatique et Libertés,
                vous pouvez notamment disposer des droits suivants :
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>droit d’accès ;</li>
                <li>droit de rectification ;</li>
                <li>droit à l’effacement ;</li>
                <li>droit à la limitation du traitement ;</li>
                <li>droit d’opposition ;</li>
                <li>
                  droit à la portabilité lorsque
                  celui-ci est applicable.
                </li>
              </ul>

              <p className="mt-5">
                Pour exercer vos droits, vous pouvez contacter :
              </p>

              <p className="mt-3">
                <a
                  href={`mailto:${legalConfig.email}`}
                  className="underline underline-offset-4"
                >
                  {legalConfig.email}
                </a>
              </p>

              <p className="mt-5">
                Une preuve d’identité pourra être demandée
                uniquement lorsqu’elle est nécessaire
                pour vérifier l’identité du demandeur.
              </p>
            </PrivacySection>

            <PrivacySection title="Réclamation auprès de la CNIL">
              <p>
                Si vous estimez que le traitement
                de vos données personnelles ne respecte pas
                la réglementation applicable,
                vous disposez du droit d’introduire
                une réclamation auprès de la Commission nationale
                de l’informatique et des libertés (CNIL).
              </p>

              <p className="mt-4">
                Site officiel :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  www.cnil.fr
                </a>
              </p>
            </PrivacySection>

            <PrivacySection title="Cookies et traceurs">
              <p>
                Dans sa configuration actuelle,
                le site Uttara n’utilise pas de traceurs
                publicitaires ni de cookies de mesure d’audience
                nécessitant le consentement préalable
                de l’utilisateur.
              </p>

              <p className="mt-4">
                Certains traceurs strictement nécessaires
                au fonctionnement ou à la sécurité du site
                peuvent, le cas échéant, être utilisés
                sans consentement préalable.
              </p>

              <p className="mt-4">
                Si des outils d’analyse, contenus intégrés
                ou services tiers nécessitant un consentement
                sont ajoutés ultérieurement,
                un dispositif permettant d’accepter,
                refuser et modifier ses choix sera mis en place.
              </p>
            </PrivacySection>

            <PrivacySection title="Services externes">
              <p>
                Les liens vers Instagram, Facebook
                ou d’autres services externes ne déclenchent
                aucun transfert de données vers ces plateformes
                tant que l’utilisateur ne clique pas
                volontairement sur ces liens.
              </p>

              <p className="mt-4">
                En cas d’intégration ultérieure d’une carte,
                d’une vidéo hébergée par un tiers
                ou d’un service externe susceptible de déposer
                des traceurs, celui-ci sera soumis,
                lorsque la réglementation l’exige,
                au consentement préalable de l’utilisateur.
              </p>
            </PrivacySection>

            <PrivacySection title="Sécurité">
              <p>
                Uttara met en œuvre des mesures techniques
                et organisationnelles raisonnables
                afin de protéger les données personnelles
                contre l’accès non autorisé, la perte,
                la modification ou la divulgation.
              </p>
            </PrivacySection>

            <PrivacySection title="Modification de la présente politique">
              <p>
                La présente politique peut être modifiée
                afin de tenir compte des évolutions techniques,
                réglementaires ou fonctionnelles du site.
              </p>
            </PrivacySection>

            <p className="border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
              Dernière mise à jour : septembre 2026.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function PrivacySection({
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