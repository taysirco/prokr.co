import type { ServiceCatalogSchema, Service } from '@/types';


// ============================================
// SERVICE CATALOG SCHEMA
// For main services listing page
// ============================================
interface ServiceCatalogJsonLdProps {
    services: Service[];
    baseUrl?: string;
}

export function ServiceCatalogJsonLd({ services, baseUrl = 'https://prokr.co' }: ServiceCatalogJsonLdProps) {
    const schema: ServiceCatalogSchema = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'دليل خدمات بروكر',
        description: 'جميع الخدمات المتوفرة في المملكة العربية السعودية',
        itemListElement: services.map(s => ({
            '@type': 'Offer',
            itemOffered: {
                '@type': 'Service',
                name: s.name_ar,
                url: `${baseUrl}/${s.slug}`,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
