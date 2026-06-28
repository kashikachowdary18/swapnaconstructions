import { COMPANY } from "@/lib/constants";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.shortName,
    description: COMPANY.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: [COMPANY.instagramUrl],
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    knowsAbout: [
      "Excavation",
      "Earthwork",
      "Rock Excavation",
      "Basement Excavation",
      "Road Works",
      "Drainage Works",
      "Infrastructure Support",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
