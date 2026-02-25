import type {
    Advertiser,
    City,
    Service,
    LocalBusinessSchema,
    ServiceSchema,
    OrganizationSchema,
    ItemListSchema,
    WebPageSchema,
    ServiceCatalogSchema
} from '@/types';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/keyword-strategy';

// ============================================
// ENHANCED LOCAL BUSINESS SCHEMA
// For individual company pages
// ============================================
interface LocalBusinessJsonLdProps {
    advertiser: Advertiser;
    city?: City;
}

export function LocalBusinessJsonLd({ advertiser, city }: LocalBusinessJsonLdProps) {
    const reviews = advertiser.reviews || [];
    const avgRating = reviews.length > 0
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        : undefined;

    const schema: LocalBusinessSchema & Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `https://prokr.co/company/${advertiser.short_code}#business`,
        name: advertiser.business_name,
        telephone: advertiser.phone_number,
        url: `https://prokr.co/company/${advertiser.short_code}`,
        description: advertiser.description,
        image: advertiser.logo_url || '',
        priceRange: 'SAR',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'SA',
            addressRegion: city?.name_ar || 'المملكة العربية السعودية',
            addressLocality: city?.name_ar,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '09:00',
            closes: '18:00',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: advertiser.phone_number,
            contactType: 'customer service',
            areaServed: 'SA',
            availableLanguage: 'Arabic',
        },
        ...(avgRating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: Math.round(avgRating * 10) / 10,
                reviewCount: reviews.length,
                bestRating: 5,
                worstRating: 1,
            },
        }),
        ...(reviews.length > 0 && {
            review: reviews.slice(0, 5).map(r => ({
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: r.user,
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: r.rating,
                    bestRating: 5,
                    worstRating: 1,
                },
                reviewBody: r.comment,
                datePublished: new Date(r.date).toISOString().split('T')[0],
            })),
        }),
        ...(advertiser.gallery.length > 0 && {
            photo: advertiser.gallery.map(img => ({
                '@type': 'ImageObject',
                url: img,
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
