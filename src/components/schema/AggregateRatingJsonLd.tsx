import type { Advertiser, City, Service } from '@/types';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/keyword-strategy';

// ============================================
// AGGREGATE RATING SCHEMA
// For silo pages (city+service) with multiple advertisers
// ============================================
interface AggregateRatingJsonLdProps {
    service: Service;
    city: City;
    advertisers: Advertiser[];
}

export function AggregateRatingJsonLd({ service, city, advertisers }: AggregateRatingJsonLdProps) {
    const allReviews = advertisers.flatMap(ad => ad.reviews || []);
    if (allReviews.length === 0) return null;

    const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
    const kwProfile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, kwProfile.cityPrefixPattern);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `https://prokr.co/${city.slug}/${service.slug}#aggregateRating`,
        name: `${service.name_ar} ${cityKw}`,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: Math.round(avgRating * 10) / 10,
            reviewCount: allReviews.length,
            bestRating: 5,
            worstRating: 1,
        },
        ...(allReviews.length > 0 && {
            review: allReviews.slice(0, 3).map(r => ({
                '@type': 'Review',
                author: { '@type': 'Person', name: r.user },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: r.rating,
                    bestRating: 5,
                },
                reviewBody: r.comment,
                datePublished: new Date(r.date).toISOString().split('T')[0],
            })),
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
