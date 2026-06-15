import { safeJsonLd } from '@/lib/json-ld';
import type { Advertiser, ItemListSchema } from '@/types';

// ============================================
// ITEM LIST SCHEMA — Dual-Mode
// Mode 1 (Simple):  For listing services/cities  → ListItem{name, url}
// Mode 2 (Rich):    For listing companies on silo → ListItem{item: LocalBusiness}
// The rich mode nests a full LocalBusiness inside each ListItem
// to target Google's "zero position" featured snippets.
// ============================================

// ---- Simple mode props (services, cities) ----
interface SimpleItemListProps {
    type: 'services' | 'cities';
    items: { name: string; url: string }[];
    listName?: string;
    description?: string;
}

// ---- Rich mode props (companies on silo pages) ----
interface RichItemListProps {
    type: 'companies';
    advertisers: Advertiser[];
    cityNameAr: string;
    serviceNameAr: string;
    listName?: string;
    description?: string;
}

type ItemListJsonLdProps = SimpleItemListProps | RichItemListProps;

export function ItemListJsonLd(props: ItemListJsonLdProps) {
    const { type, listName, description } = props;

    const defaultNames: Record<string, string> = {
        companies: 'قائمة الشركات',
        services: 'قائمة الخدمات',
        cities: 'قائمة المدن',
    };

    // ---- Rich mode: companies with nested LocalBusiness ----
    if (type === 'companies') {
        const { advertisers, cityNameAr, serviceNameAr } = props as RichItemListProps;
        const top5 = advertisers.slice(0, 5); // Featured snippets: top 5 only

        const schema: ItemListSchema = {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: listName || `أفضل ${top5.length} شركات ${serviceNameAr} مجربة في ${cityNameAr}`,
            description: description || `قائمة أفضل شركات ${serviceNameAr} المعتمدة في ${cityNameAr} — مراجعات حقيقية وأسعار تنافسية`,
            numberOfItems: top5.length,
            itemListElement: top5.map((ad, index) => {
                const reviews = ad.reviews || [];
                const avgRating = reviews.length > 0
                    ? Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10
                    : undefined;

                return {
                    '@type': 'ListItem' as const,
                    position: index + 1,
                    item: {
                        '@type': 'LocalBusiness' as const,
                        name: ad.business_name,
                        url: `https://prokr.co/company/${ad.short_code}`,
                        ...(ad.phone_number && { telephone: ad.phone_number }),
                        ...(ad.logo_url && { image: ad.logo_url }),
                        ...(avgRating && reviews.length > 0 && {
                            aggregateRating: {
                                '@type': 'AggregateRating' as const,
                                ratingValue: avgRating,
                                reviewCount: reviews.length,
                                bestRating: 5,
                                worstRating: 1,
                            },
                        }),
                    },
                };
            }),
        };

        return (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
            />
        );
    }

    // ---- Simple mode: services / cities ----
    const { items } = props as SimpleItemListProps;

    const schema: ItemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: listName || defaultNames[type],
        description,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem' as const,
            position: index + 1,
            name: item.name,
            url: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
