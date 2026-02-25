import type { City, Service } from '@/types';
import { resolveSeoContent } from '@/lib/overrides';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/keyword-strategy';

interface ServiceOfferJsonLdProps {
    city: City;
    service: Service;
}

export function ServiceOfferJsonLd({ city, service }: ServiceOfferJsonLdProps) {
    const content = resolveSeoContent(city, service);

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service.name_ar} ${getCityKeyword(city.name_ar, getServiceKeywordProfile(service.slug).cityPrefixPattern)}`,
        "description": content.aiContent.shortAnswer,
        "areaServed": {
            "@type": "City",
            "name": city.name_ar,
            "addressCountry": "SA"
        },
        "provider": {
            "@type": "Organization",
            "name": "بروكر",
            "url": "https://prokr.co"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `خدمات ${service.name_ar}`,
            "itemListElement": content.pricing.slice(0, 5).map((item) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": item.type
                },
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "SAR",
                    "minPrice": item.minPrice,
                    "maxPrice": item.maxPrice
                }
            }))
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
