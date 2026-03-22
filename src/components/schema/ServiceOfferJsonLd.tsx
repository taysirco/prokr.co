import type { City, Service } from '@/types';
import { resolvePageContent } from '@/lib/overrides';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/locale-formatting';

// ============================================
// WARRANTY PROMISE — WARRANTY COMPLIANCE
// Category-aware warranty for service schema
// ============================================
const WARRANTY_BY_CATEGORY: Record<string, {
    duration: string;       // ISO 8601 duration (P30D = 30 days)
    description: string;    // Arabic warranty text
    maxCompensation?: number;
}> = {
    moving: {
        duration: 'P30D',
        description: 'يضمن الدليل تعويض العميل مالياً حتى 5,000 ريال في حال تلف المنقولات أثناء عملية النقل. يشمل الضمان التعبئة والتغليف والنقل والتركيب.',
        maxCompensation: 5000,
    },
    cleaning: {
        duration: 'P7D',
        description: 'ضمان رضا العميل — إعادة التنظيف مجاناً خلال 7 أيام في حال عدم مطابقة المعايير المتفق عليها. يشمل جميع أنواع التنظيف المنزلي والمكتبي.',
        maxCompensation: 2000,
    },
    'leak-detection': {
        duration: 'P90D',
        description: 'ضمان دقة الكشف — في حال عدم تحديد مصدر التسرب بدقة يتم إعادة الفحص مجاناً مع تعويض حتى 3,000 ريال. يشمل الكشف الإلكتروني والحراري.',
        maxCompensation: 3000,
    },
    'pest-control': {
        duration: 'P60D',
        description: 'ضمان الإبادة الكاملة — إعادة المعالجة مجاناً خلال 60 يوماً في حال عودة الحشرات. يشمل جميع أنواع المكافحة بمبيدات معتمدة من هيئة الغذاء والدواء.',
        maxCompensation: 2500,
    },
    insulation: {
        duration: 'P365D',
        description: 'ضمان سنة كاملة على مواد العزل وجودة التطبيق. يشمل العزل المائي والحراري والفوم مع شهادة ضمان معتمدة.',
        maxCompensation: 10000,
    },
    sewage: {
        duration: 'P30D',
        description: 'ضمان 30 يوماً على خدمات الصرف الصحي — إعادة الخدمة مجاناً في حال تكرار المشكلة. يشمل التسليك وشفط البيارات.',
        maxCompensation: 1500,
    },
};

interface ServiceOfferJsonLdProps {
    city: City;
    service: Service;
}

export function ServiceOfferJsonLd({ city, service }: ServiceOfferJsonLdProps) {
    const content = resolvePageContent(city, service);
    const warranty = WARRANTY_BY_CATEGORY[service.category] || WARRANTY_BY_CATEGORY['cleaning'];

    // Calculate aggregate price range from pricing data
    const prices = content.pricing.slice(0, 5);
    const allMin = prices.map(p => p.minPrice).filter(Boolean);
    const allMax = prices.map(p => p.maxPrice).filter(Boolean);
    const lowestPrice = allMin.length > 0 ? Math.min(...allMin) : undefined;
    const highestPrice = allMax.length > 0 ? Math.max(...allMax) : undefined;

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
            "url": "https://prokr.co",
            "knowsAbout": [
                {
                    "@type": "GovernmentOrganization",
                    "name": "هيئة الزكاة والضريبة والجمارك (ZATCA)",
                    "url": "https://zatca.gov.sa",
                    "description": "الفوترة الإلكترونية — جميع شركاتنا ملتزمة بنظام فاتورة"
                },
                {
                    "@type": "GovernmentOrganization",
                    "name": "منصة قوى — أجير (Qiwa)",
                    "url": "https://qiwa.sa",
                    "description": "عقود عمالة موثقة — التأجير النظامي عبر منصة أجير"
                },
                {
                    "@type": "GovernmentOrganization",
                    "name": "برنامج نطاقات — وزارة الموارد البشرية",
                    "url": "https://hrsd.gov.sa",
                    "description": "شركات مصنفة في النطاق الأخضر — نسبة توطين عالية"
                }
            ]
        },
        // ── AggregateOffer with WarrantyPromise (Warranty Compliance) ──
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "SAR",
            ...(lowestPrice !== undefined && { "lowPrice": lowestPrice }),
            ...(highestPrice !== undefined && { "highPrice": highestPrice }),
            "offerCount": prices.length,
            "warranty": {
                "@type": "WarrantyPromise",
                "durationOfWarranty": {
                    "@type": "QuantitativeValue",
                    "value": warranty.duration,
                    "unitCode": "DAY",
                },
                "warrantyScope": "https://schema.org/Labor-PartsWarrantyScope",
                "description": warranty.description,
            },
        },
        // ── Offer Catalog (individual services) ──
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `خدمات ${service.name_ar}`,
            "itemListElement": prices.map((item) => ({
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
        },
        // ── ReserveAction — AI Booking Agent (Google Assistant + Web) ──
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `https://prokr.co/api/book?service=${service.slug}&city=${city.slug}&source=web`,
                "inLanguage": "ar-SA",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform",
                    "http://schema.org/IOSPlatform",
                    "http://schema.org/AndroidPlatform",
                    "http://schema.org/GoogleAssistantPlatform",
                ],
            },
            "result": {
                "@type": "Reservation",
                "name": `حجز خدمة ${service.name_ar} ${getCityKeyword(city.name_ar, getServiceKeywordProfile(service.slug).cityPrefixPattern)}`,
            },
            "object": {
                "@type": "Service",
                "name": service.name_ar,
                "provider": {
                    "@type": "Organization",
                    "name": "بروكر",
                },
            },
            "description": `احجز خدمة ${service.name_ar} من شركات معتمدة بسجل تجاري سعودي ساري. مقارنة فورية بين الأسعار والتقييمات.`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
