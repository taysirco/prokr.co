import { safeJsonLd } from '@/lib/json-ld';
import type { City, Service } from '@/types';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/locale-formatting';

// ============================================
// IMAGE OBJECT SCHEMA
// For silo pages - main service images
// ============================================
interface ImageObjectJsonLdProps {
    imageUrl: string;
    service: Service;
    city: City;
}

export function ImageObjectJsonLd({ imageUrl, service, city }: ImageObjectJsonLdProps) {
    const kwProfile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, kwProfile.cityPrefixPattern);
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        '@id': `https://prokr.co/${city.slug}/${service.slug}#primaryImage`,
        url: imageUrl,
        name: `${service.name_ar} ${cityKw}`,
        description: `صورة توضيحية لخدمة ${service.name_ar} ${cityKw} - شركات تم التحقق منها عبر منصة نفاذ (SBC) - بروكر`,
        caption: `تم التحقق — نفاذ / SBC | ${service.name_ar} ${cityKw}`,
        width: 1200,
        height: 800,
        contentLocation: {
            '@type': 'Place',
            name: `${city.name_ar}، المملكة العربية السعودية`,
        },
        creator: {
            '@type': 'Organization',
            name: 'بروكر الخدمي',
            url: 'https://prokr.co',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
