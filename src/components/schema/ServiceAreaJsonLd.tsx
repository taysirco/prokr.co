import { safeJsonLd } from '@/lib/json-ld';
import type { City, Service } from '@/types';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/locale-formatting';

// ============================================
// SERVICE AREA SCHEMA WITH GEO COORDINATES
// For city+service silo pages (Local SEO)
// ============================================
interface ServiceAreaJsonLdProps {
    service: Service;
    city: City;
    coordinates: { lat: number; lng: number };
    neighborhoods?: string[];
}

export function ServiceAreaJsonLd({ service, city, coordinates, neighborhoods }: ServiceAreaJsonLdProps) {
    const kwProfile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, kwProfile.cityPrefixPattern);
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `https://prokr.co/${city.slug}/${service.slug}#service`,
        name: `${service.name_ar} ${cityKw}`,
        serviceType: service.name_ar,
        areaServed: {
            '@type': 'City',
            name: city.name_ar,
            geo: {
                '@type': 'GeoCoordinates',
                latitude: coordinates.lat,
                longitude: coordinates.lng,
            },
            containedInPlace: {
                '@type': 'Country',
                name: 'المملكة العربية السعودية',
            },
        },
        provider: {
            '@type': 'Organization',
            name: 'بروكر',
            url: 'https://prokr.co',
        },
        ...(neighborhoods && neighborhoods.length > 0 && {
            spatialCoverage: neighborhoods.map(n => ({
                '@type': 'Place',
                name: `حي ${n}، ${city.name_ar}`,
            })),
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
