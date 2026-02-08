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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ============================================
// HOWTO SCHEMA
// For service selection guidance on silo pages
// ============================================
interface HowToJsonLdProps {
    service: Service;
    city: City;
}

export function HowToJsonLd({ service, city }: HowToJsonLdProps) {
    const kwProfile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, kwProfile.cityPrefixPattern);
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `كيف تختار أفضل شركة ${service.name_ar} ${cityKw}`,
        description: `دليل خطوة بخطوة لاختيار شركة ${service.name_ar} موثوقة ${cityKw}`,
        step: [
            {
                '@type': 'HowToStep',
                position: 1,
                name: 'حدد احتياجاتك بدقة',
                text: `حدد نوع الخدمة المطلوبة وحجم العمل قبل التواصل مع شركات ${service.name_ar} ${cityKw}.`,
            },
            {
                '@type': 'HowToStep',
                position: 2,
                name: 'قارن بين العروض',
                text: `احصل على عروض أسعار من 3 شركات ${service.name_ar} على الأقل ${cityKw} وقارن بينها.`,
            },
            {
                '@type': 'HowToStep',
                position: 3,
                name: 'تحقق من الترخيص',
                text: 'تأكد من أن الشركة مرخصة ومعتمدة رسمياً من الجهات المختصة.',
            },
            {
                '@type': 'HowToStep',
                position: 4,
                name: 'اقرأ تقييمات العملاء',
                text: 'راجع تقييمات وتجارب العملاء السابقين للتأكد من جودة الخدمة.',
            },
            {
                '@type': 'HowToStep',
                position: 5,
                name: 'احجز الخدمة',
                text: `تواصل مع الشركة المختارة واتفق على الموعد والسعر النهائي لخدمة ${service.name_ar}.`,
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ============================================
// SPEAKABLE WEB PAGE SCHEMA
// For voice search and AI engine optimization
// ============================================
interface SpeakableWebPageJsonLdProps {
    title: string;
    description: string;
    url: string;
    speakableSelectors: string[];
    dateModified?: string;
    about?: { name: string; type: string };
    mentions?: { name: string; type: string }[];
}

export function SpeakableWebPageJsonLd({ title, description, url, speakableSelectors, dateModified, about, mentions }: SpeakableWebPageJsonLdProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: title,
        description,
        url,
        inLanguage: 'ar',
        isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://prokr.co#website',
            name: 'بروكر',
            url: 'https://prokr.co',
        },
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: speakableSelectors,
        },
        ...(dateModified && { dateModified }),
        ...(about && {
            about: {
                '@type': about.type,
                name: about.name,
            },
        }),
        ...(mentions && mentions.length > 0 && {
            mentions: mentions.map(m => ({
                '@type': m.type,
                name: m.name,
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

// ============================================
// ITEM LIST SCHEMA
// For listing pages (companies/services/cities)
// ============================================
interface ItemListJsonLdProps {
    type: 'companies' | 'services' | 'cities';
    items: { name: string; url: string }[];
    listName?: string;
    description?: string;
}

export function ItemListJsonLd({ type, items, listName, description }: ItemListJsonLdProps) {
    const defaultNames = {
        companies: 'قائمة الشركات',
        services: 'قائمة الخدمات',
        cities: 'قائمة المدن',
    };

    const schema: ItemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: listName || defaultNames[type],
        description,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            url: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ============================================
// WEB PAGE SCHEMA
// For category/section pages
// ============================================
interface WebPageJsonLdProps {
    title: string;
    description: string;
    url: string;
    breadcrumbs?: { name: string; url: string }[];
}

export function WebPageJsonLd({ title, description, url, breadcrumbs }: WebPageJsonLdProps) {
    const schema: WebPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: title,
        description,
        url,
        isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://prokr.co#website',
            name: 'بروكر',
            url: 'https://prokr.co',
        },
        ...(breadcrumbs && {
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: breadcrumbs.map((item, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: item.name,
                    item: item.url,
                })),
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

// ============================================
// BREADCRUMB SCHEMA
// ============================================
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

// ============================================
// WEBSITE SCHEMA
// ============================================
interface WebsiteJsonLdProps {
    url: string;
    name: string;
    description: string;
}

export function WebsiteJsonLd({ url, name, description }: WebsiteJsonLdProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${url}#website`,
        url,
        name,
        description,
        inLanguage: 'ar',
        about: {
            '@type': 'Thing',
            name: 'دليل الخدمات المنزلية',
            description: 'دليل شامل لخدمات النقل والتنظيف ومكافحة الحشرات وكشف التسربات والعزل في المملكة العربية السعودية',
        },
        publisher: {
            '@type': 'Organization',
            name: 'بروكر',
            url: 'https://prokr.co',
            logo: {
                '@type': 'ImageObject',
                url: 'https://prokr.co/logo.png',
            },
            sameAs: [
                'https://twitter.com/prokr_sa',
                'https://www.instagram.com/prokr_sa',
                'https://www.facebook.com/prokr.sa',
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+966500000000',
                contactType: 'customer service',
                areaServed: 'SA',
                availableLanguage: 'Arabic',
            },
        },
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

// ============================================
// PROKR ORGANIZATION SCHEMA (Homepage)
// Brand-level schema for the website owner
// ============================================
export function ProkrOrganizationJsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://prokr.co/#organization',
        name: 'بروكر',
        alternateName: 'Prokr',
        url: 'https://prokr.co',
        logo: {
            '@type': 'ImageObject',
            url: 'https://prokr.co/logo.png',
            width: 512,
            height: 512,
        },
        description: 'أكبر دليل شامل لخدمات النقل والتنظيف ومكافحة الحشرات وكشف التسربات في المملكة العربية السعودية. يغطي 24 مدينة مع أكثر من 500 شركة معتمدة.',
        foundingDate: '2024',
        areaServed: {
            '@type': 'Country',
            name: 'المملكة العربية السعودية',
            sameAs: 'https://en.wikipedia.org/wiki/Saudi_Arabia',
        },
        sameAs: [
            'https://twitter.com/prokr_sa',
            'https://www.instagram.com/prokr_sa',
            'https://www.facebook.com/prokr.sa',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+966500000000',
            contactType: 'customer service',
            areaServed: 'SA',
            availableLanguage: ['Arabic'],
        },
        knowsAbout: [
            'نقل عفش',
            'تنظيف منازل',
            'مكافحة حشرات',
            'كشف تسربات المياه',
            'عزل خزانات',
            'صرف صحي',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

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
        description: `صورة توضيحية لخدمة ${service.name_ar} ${cityKw} - أفضل الشركات المعتمدة عبر بروكر`,
        width: 1200,
        height: 800,
        contentLocation: {
            '@type': 'Place',
            name: `${city.name_ar}، المملكة العربية السعودية`,
        },
        creator: {
            '@type': 'Organization',
            name: 'بروكر',
            url: 'https://prokr.co',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

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
