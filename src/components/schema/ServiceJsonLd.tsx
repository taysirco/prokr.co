import type { Advertiser, City, Service, ServiceSchema } from '@/types';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/keyword-strategy';

// ============================================
// SERVICE SCHEMA
// For service pages
// ============================================
interface ServiceJsonLdProps {
    service: Service;
    city?: City;
    advertisers: Advertiser[];
    national?: boolean;
}

export function ServiceJsonLd({ service, city, advertisers, national }: ServiceJsonLdProps) {
    const schema: ServiceSchema & Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: national
            ? `${service.name_ar} في السعودية`
            : `${service.name_ar} ${city ? getCityKeyword(city.name_ar, getServiceKeywordProfile(service.slug).cityPrefixPattern) : ''}`,
        description: national
            ? `أفضل شركات ${service.name_ar} في جميع مدن المملكة العربية السعودية.`
            : `أفضل شركات ${service.name_ar} ${city ? getCityKeyword(city.name_ar, getServiceKeywordProfile(service.slug).cityPrefixPattern) : ''}. احصل على أفضل الخدمات بأسعار منافسة.`,
        areaServed: {
            '@type': 'City',
            name: national ? 'المملكة العربية السعودية' : (city?.name_ar || ''),
        },
        provider: advertisers.slice(0, 10).map(ad => ({
            '@type': 'Organization',
            name: ad.business_name,
            url: `https://prokr.co/company/${ad.short_code}`,
        })),
        serviceType: service.name_ar,
        ...(city && {
            availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: `https://prokr.co/${city.slug}/${service.slug}`,
                serviceLocation: {
                    '@type': 'Place',
                    name: city.name_ar,
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: city.name_ar,
                        addressCountry: 'SA',
                    },
                },
            },
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
