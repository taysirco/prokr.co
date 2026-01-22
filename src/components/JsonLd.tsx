import type { Advertiser, City, Service, LocalBusinessSchema, ServiceSchema } from '@/types';

interface LocalBusinessJsonLdProps {
    advertiser: Advertiser;
    city?: City;
}

export function LocalBusinessJsonLd({ advertiser, city }: LocalBusinessJsonLdProps) {
    const reviews = advertiser.reviews || [];
    const avgRating = reviews.length > 0
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        : undefined;

    const schema: LocalBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: advertiser.business_name,
        telephone: advertiser.phone_number,
        image: advertiser.logo_url || '',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'SA',
            addressRegion: city?.name_ar || 'المملكة العربية السعودية',
        },
        ...(avgRating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: Math.round(avgRating * 10) / 10,
                reviewCount: reviews.length,
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

interface ServiceJsonLdProps {
    service: Service;
    city: City;
    advertisers: Advertiser[];
}

export function ServiceJsonLd({ service, city, advertisers }: ServiceJsonLdProps) {
    const schema: ServiceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${service.name_ar} في ${city.name_ar}`,
        description: `أفضل شركات ${service.name_ar} في ${city.name_ar}. احصل على أفضل الخدمات بأسعار منافسة.`,
        areaServed: {
            '@type': 'City',
            name: city.name_ar,
        },
        provider: advertisers.slice(0, 10).map(ad => ({
            '@type': 'Organization',
            name: ad.business_name,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface BreadcrumbJsonLdProps {
    items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface WebsiteJsonLdProps {
    url: string;
    name: string;
    description: string;
}

export function WebsiteJsonLd({ url, name, description }: WebsiteJsonLdProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url,
        name,
        description,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
