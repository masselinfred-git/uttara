import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": [
      "LocalBusiness",
      "HealthAndBeautyBusiness",
    ],

    name: siteConfig.name,

    alternateName: legalConfig.previousTradeName,

    url: siteConfig.url,

    telephone: "+33678577341",

    address: {
      "@type": "PostalAddress",
      streetAddress: "12 rue du Presbytère",
      postalCode: "05300",
      addressLocality: "Le Poët",
      addressRegion: "Provence-Alpes-Côte d’Azur",
      addressCountry: "FR",
    },

    founder: {
      "@type": "Person",
      name: legalConfig.businessName,
    },

    description: siteConfig.description,

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Hautes-Alpes",
      },
      {
        "@type": "City",
        name: "Sisteron",
      },
    ],

    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Soins et formations Uttara",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Soins",
          url: `${siteConfig.url}/soins`,
        },
        {
          "@type": "OfferCatalog",
          name: "Formations",
          url: `${siteConfig.url}/formations`,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}