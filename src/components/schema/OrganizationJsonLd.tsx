import type { Advertiser, City, Service, OrganizationSchema } from '@/types';


// ============================================
// ORGANIZATION SCHEMA
// Additional schema for company pages
// ============================================
interface OrganizationJsonLdProps {
    advertiser: Advertiser;
    services?: Service[];
    cities?: City[];
}

export function OrganizationJsonLd({ advertiser, services, cities }: OrganizationJsonLdProps) {
    const schema: OrganizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `https://prokr.co/company/${advertiser.short_code}#organization`,
        name: advertiser.business_name,
        url: `https://prokr.co/company/${advertiser.short_code}`,
        logo: advertiser.logo_url || undefined,
        description: advertiser.description,
        telephone: advertiser.phone_number,
        areaServed: cities?.map(c => ({
            '@type': 'City' as const,
            name: c.name_ar,
        })),
        hasOfferCatalog: services && services.length > 0 ? {
            '@type': 'OfferCatalog',
            name: `خدمات ${advertiser.business_name}`,
            itemListElement: services.map(s => ({
                '@type': 'OfferCatalog' as const,
                name: s.name_ar,
            })),
        } : undefined,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: advertiser.phone_number,
            contactType: 'customer service',
            areaServed: 'SA',
            availableLanguage: 'Arabic',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
