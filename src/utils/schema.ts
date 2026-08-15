// NOTE (2026-08-15): aggregateRating was removed from this file. It previously
// hardcoded ratingValue 4.9 / reviewCount 127 and shipped to production, asserting
// 127 fabricated reviews to Google. Do not reintroduce it unless a real renter
// supplies verifiable review counts from their own Google Business Profile.
//
// The street address is also gone. We are a service-area lead-gen site with no
// storefront, so publishing a PostalAddress asserts a physical location we do not
// have. `areaServed` is the honest way to express geography.

export function generateLocalBusinessSchema(config: {
  name: string;
  url: string;
  phone: string;
  areaServed?: string[];
  description?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.name,
    url: config.url,
    telephone: config.phone,
    ...(config.description ? { description: config.description } : {}),
    areaServed: (config.areaServed ?? ['Birmingham, AL']).map((a) => ({
      '@type': 'City',
      name: a,
    })),
  };
}

export function generateServiceSchema(config: {
  name: string;
  description: string;
  provider: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.name,
    description: config.description,
    provider: {
      '@type': 'LocalBusiness',
      name: config.provider,
    },
  };
}
