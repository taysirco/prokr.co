// ============================================
// Unified JSON-LD Structured Data
// Merges 10 separate JSON-LD scripts into ONE
// interconnected @graph with @id cross-references.
// Optimized for structured data processing.
// ============================================

import type { Advertiser, City, Service } from '@/types';
import type { CityContext } from '@/lib/city-context';
import type { ContentLayers } from '@/lib/content-layers';
import { resolvePageContent } from '@/lib/overrides';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/locale-formatting';
import { getCanonicalSlug } from '@/lib/services/super-page-groups';
import { getHourlyMode } from '@/lib/market-timing';
import { safeJsonLd, absolutizeUrl } from '@/lib/json-ld';
import { NAP } from '@/lib/nap';
import { buildOrganizationNode, ORG_ID } from '@/lib/organization-entity';

// ── WARRANTY DATA (mirrored from ServiceOfferJsonLd) ──
const WARRANTY_BY_CATEGORY: Record<string, {
    duration: string;
    description: string;
    maxCompensation?: number;
}> = {
    moving: { duration: 'P30D', description: 'يضمن الدليل تعويض العميل مالياً حتى 5,000 ريال في حال تلف المنقولات أثناء عملية النقل. يشمل الضمان التعبئة والتغليف والنقل والتركيب.', maxCompensation: 5000 },
    cleaning: { duration: 'P7D', description: 'ضمان رضا العميل — إعادة التنظيف مجاناً خلال 7 أيام في حال عدم مطابقة المعايير المتفق عليها. يشمل جميع أنواع التنظيف المنزلي والمكتبي.', maxCompensation: 2000 },
    'leak-detection': { duration: 'P90D', description: 'ضمان دقة الكشف — في حال عدم تحديد مصدر التسرب بدقة يتم إعادة الفحص مجاناً مع تعويض حتى 3,000 ريال. يشمل الكشف الإلكتروني والحراري.', maxCompensation: 3000 },
    'pest-control': { duration: 'P60D', description: 'ضمان الإبادة الكاملة — إعادة المعالجة مجاناً خلال 60 يوماً في حال عودة الحشرات. يشمل جميع أنواع المكافحة بمبيدات معتمدة من هيئة الغذاء والدواء.', maxCompensation: 2500 },
    insulation: { duration: 'P365D', description: 'ضمان سنة كاملة على مواد العزل وجودة التطبيق. يشمل العزل المائي والحراري والفوم مع شهادة ضمان معتمدة.', maxCompensation: 10000 },
    sewage: { duration: 'P30D', description: 'ضمان 30 يوماً على خدمات الصرف الصحي — إعادة الخدمة مجاناً في حال تكرار المشكلة. يشمل التسليك وشفط البيارات.', maxCompensation: 1500 },
};

// ============================================
// PROPS — كل البيانات المطلوبة لبناء الـ @graph
// ============================================
interface UnifiedGraphCompilerProps {
    city: City;
    service: Service;
    advertisers: Advertiser[];
    aiContent: ContentLayers & { heroSubtitle?: string; localizedContent?: string };
    breadcrumbs: { name: string; url: string }[];
    heroImageUrl: string;
    canonicalPageUrl: string;
    cityContext: CityContext | null;
}

export function UnifiedGraphCompiler({
    city,
    service,
    advertisers,
    aiContent,
    breadcrumbs,
    heroImageUrl,
    canonicalPageUrl,
    cityContext,
}: UnifiedGraphCompilerProps) {
    const kwProfile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, kwProfile.cityPrefixPattern);
    const canonicalSlug = getCanonicalSlug(service.slug) || service.slug;
    const baseUrl = `https://prokr.co/${city.slug}/${canonicalSlug}`;

    // ── Resolve SEO content for FAQ + Pricing ──
    const pageContent = resolvePageContent(city, service);
    const warranty = WARRANTY_BY_CATEGORY[service.category] || WARRANTY_BY_CATEGORY['cleaning'];

    // ── AggregateRating calculation ──
    // Only VERIFIED reviews (server-set at /api/review-verify) may power stars.
    // This replaces the previous hardcoded `featured-al-ostora` exclusion: the
    // rule is now principled rather than one-off, so any future seeded partner
    // is covered automatically and cannot mint an identical fabricated rating
    // across ~945 pages.
    const allReviews = advertisers
        .flatMap(ad => ad.reviews || [])
        .filter(r => r.verified === true);
    const avgRating = allReviews.length > 0
        ? Math.round((allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length) * 10) / 10
        : undefined;

    // ── Pricing calculation ──
    const prices = pageContent.pricing.slice(0, 5);
    const allMin = prices.map(p => p.minPrice).filter(Boolean);
    const allMax = prices.map(p => p.maxPrice).filter(Boolean);
    const lowestPrice = allMin.length > 0 ? Math.min(...allMin) : undefined;
    const highestPrice = allMax.length > 0 ? Math.max(...allMax) : undefined;

    // ============================================
    // 🏗️ BUILD THE @graph — كل كائن مربوط بـ @id
    // ============================================
    const graph: Record<string, unknown>[] = [];

    // ── 0. Organization (#organization) — the brand entity.
    //    Uses the SAME definition as the homepage (CR number, VAT ID,
    //    contactPoint, hasOfferCatalog, sameAs, trust policies). This block
    //    previously carried a reduced copy with none of that, which meant the
    //    ~944 crawled money pages showed a brand with no legal identity —
    //    exactly the pages an answer engine reads and cites.
    graph.push(buildOrganizationNode());

    // ── 1. WebPage (#webpage) — القلب الذي يربط كل شيء ──
    graph.push({
        '@type': 'WebPage',
        '@id': `${baseUrl}#webpage`,
        url: canonicalPageUrl,
        name: aiContent.metaTitle,
        description: aiContent.shortAnswer,
        inLanguage: 'ar',
        publisher: { '@id': ORG_ID },
        isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://prokr.co#website',
            name: 'بروكر الخدمي',
            url: 'https://prokr.co',
            publisher: { '@id': ORG_ID },
        },
        // 🔗 ربط الصفحة بالخدمة
        about: { '@id': `${baseUrl}#service` },
        // 🔗 ربط الصفحة بالأسئلة
        mainEntity: { '@id': `${baseUrl}#faq` },
        // 🔗 ربط الصفحة بالبريدكرمب
        breadcrumb: { '@id': `${baseUrl}#breadcrumb` },
        // 🔗 ربط الصفحة بالصورة الرئيسية
        primaryImageOfPage: { '@id': `${baseUrl}#primaryImage` },
        // 🎙️ Speakable (Voice Search)
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.direct-answer', 'h1', '.content-intro'],
        },
        ...(aiContent.shortAnswer && { abstract: aiContent.shortAnswer }),
        dateModified: new Date().toISOString(),
    });

    // ── 2. Service (#service) — الخدمة الموحدة (يدمج 3 schemas!) ──
    const serviceNode: Record<string, unknown> = {
        '@type': 'Service',
        '@id': `${baseUrl}#service`,
        name: `${service.name_ar} ${cityKw}`,
        description: aiContent.shortAnswer,
        serviceType: service.name_ar,
        // ── AreaServed with GeoCoordinates ──
        areaServed: {
            '@type': 'City',
            name: city.name_ar,
            addressCountry: 'SA',
            ...(cityContext?.coordinates && {
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: cityContext.coordinates.lat,
                    longitude: cityContext.coordinates.lng,
                },
            }),
            containedInPlace: {
                '@type': 'Country',
                name: 'المملكة العربية السعودية',
            },
        },
        // ── Providers: brand Organization (by @id) + top 10 advertisers ──
        provider: [
            { '@id': ORG_ID },
            ...advertisers.slice(0, 10).map(ad => ({
                '@type': 'Organization' as const,
                name: ad.business_name,
                url: `https://prokr.co/company/${ad.short_code}`,
            })),
        ],
        // ── ServiceChannel ──
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: baseUrl,
            serviceLocation: {
                '@type': 'Place',
                name: city.name_ar,
                address: { '@type': 'PostalAddress', addressLocality: city.name_ar, addressCountry: 'SA' },
            },
        },
        // ── AggregateOffer with WarrantyPromise ──
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'SAR',
            ...(lowestPrice !== undefined && { lowPrice: lowestPrice }),
            ...(highestPrice !== undefined && { highPrice: highestPrice }),
            offerCount: prices.length,
            warranty: {
                '@type': 'WarrantyPromise',
                // value must be a NUMBER of days; warranty.duration is an ISO 8601
                // string like 'P30D' which is invalid alongside unitCode 'DAY'.
                durationOfWarranty: { '@type': 'QuantitativeValue', value: parseInt(warranty.duration.replace(/\D/g, ''), 10) || 0, unitCode: 'DAY' },
                // warrantyScope omitted: schema.org WarrantyScope has no valid
                // enumeration members ('Labor-PartsWarrantyScope' / 'LaborWarranty' are not real).
                description: warranty.description,
            },
        },
        // ── Offer Catalog ──
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `خدمات ${service.name_ar}`,
            itemListElement: prices.map(item => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: item.type },
                priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'SAR', minPrice: item.minPrice, maxPrice: item.maxPrice },
            })),
        },
        // ── ReserveAction (AI Booking) ──
        potentialAction: {
            '@type': 'ReserveAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `https://prokr.co/api/book?service=${service.slug}&city=${city.slug}&source=web`,
                inLanguage: 'ar-SA',
                actionPlatform: [
                    'http://schema.org/DesktopWebPlatform',
                    'http://schema.org/MobileWebPlatform',
                    'http://schema.org/IOSPlatform',
                    'http://schema.org/AndroidPlatform',
                    'http://schema.org/GoogleAssistantPlatform',
                ],
            },
            result: { '@type': 'Reservation', name: `حجز خدمة ${service.name_ar} ${cityKw}` },
            object: { '@type': 'Service', name: service.name_ar, provider: { '@type': 'Organization', name: 'بروكر الخدمي' } },
            description: `احجز خدمة ${service.name_ar} من شركات معتمدة بسجل تجاري سعودي ساري. مقارنة فورية بين الأسعار والتقييمات.`,
        },
    };

    // ── SpatialCoverage (من ServiceAreaJsonLd) ──
    if (cityContext?.neighborhoods && cityContext.neighborhoods.length > 0) {
        serviceNode.spatialCoverage = cityContext.neighborhoods.map(n => ({
            '@type': 'Place',
            name: `حي ${n.name_ar}، ${city.name_ar}`,
        }));
    }

    // ── 🔗 AggregateRating مربوط مباشرة بالخدمة (ليس جزيرة منفصلة!) ──
    if (avgRating && allReviews.length > 0) {
        serviceNode.aggregateRating = {
            '@type': 'AggregateRating',
            '@id': `${baseUrl}#aggregate-rating`,
            ratingValue: avgRating,
            reviewCount: allReviews.length,
            bestRating: 5,
            worstRating: 1,
        };
        serviceNode.review = allReviews.slice(0, 3).map(r => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: r.user },
            reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
            reviewBody: r.comment,
            datePublished: new Date(r.date).toISOString().split('T')[0],
        }));
    }

    graph.push(serviceNode);

    // ── 3. FAQPage (#faq) — مرتبط بـ WebPage ──
    graph.push({
        '@type': 'FAQPage',
        '@id': `${baseUrl}#faq`,
        isPartOf: { '@id': `${baseUrl}#webpage` },
        mainEntity: pageContent.faqItems.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    });

    // ── 4. BreadcrumbList (#breadcrumb) ──
    graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    });

    // ── 5. ItemList (#company-list) — قائمة الشركات ──
    const top5 = advertisers.slice(0, 5);
    if (top5.length > 0) {
        graph.push({
            '@type': 'ItemList',
            '@id': `${baseUrl}#company-list`,
            name: `أفضل ${top5.length} شركات ${service.name_ar} مجربة ${cityKw.startsWith('ب') ? cityKw : `في ${cityKw}`}`,
            description: `قائمة أفضل شركات ${service.name_ar} المعتمدة ${cityKw.startsWith('ب') ? cityKw : `في ${cityKw}`} — مراجعات حقيقية وأسعار تنافسية`,
            numberOfItems: top5.length,
            about: { '@id': `${baseUrl}#service` },
            itemListElement: top5.map((ad, index) => {
                const reviews = (ad.reviews || []).filter(r => r.verified === true);
                const adAvgRating = reviews.length > 0
                    ? Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10
                    : undefined;
                return {
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                        '@type': 'LocalBusiness',
                        name: ad.business_name,
                        url: `https://prokr.co/company/${ad.short_code}`,
                        ...(ad.phone_number && { telephone: ad.phone_number }),
                        ...(absolutizeUrl(ad.logo_url) && { image: absolutizeUrl(ad.logo_url) }),
                        // `reviews` is already filtered to verified-only above, so
                        // seeded marketing reviews cannot produce stars here.
                        ...(adAvgRating && reviews.length > 0 && {
                            aggregateRating: {
                                '@type': 'AggregateRating',
                                ratingValue: adAvgRating,
                                reviewCount: reviews.length,
                                bestRating: 5,
                                worstRating: 1,
                            },
                        }),
                        // Company-declared employee verification. `has_verified_employees`
                        // is a declaration recorded against the advertiser — it is NOT a
                        // criminal-record result and must never be worded as one, and it
                        // is not recognised by a government body, so no `recognizedBy`.
                        ...(ad.has_verified_employees && {
                            knowsAbout: 'توثيق بيانات العمالة لدى الجهات النظامية (إقرار من الشركة)',
                        }),
                    },
                };
            }),
        });
    }

    // ── 6. HowTo (#howto) — مرتبط بالخدمة ──
    graph.push({
        '@type': 'HowTo',
        '@id': `${baseUrl}#howto`,
        name: `كيف تختار أفضل شركة ${service.name_ar} ${cityKw}`,
        description: `دليل خطوة بخطوة لاختيار شركة ${service.name_ar} موثوقة ${cityKw}`,
        about: { '@id': `${baseUrl}#service` },
        step: [
            { '@type': 'HowToStep', position: 1, name: 'حدد احتياجاتك بدقة', text: `حدد نوع الخدمة المطلوبة وحجم العمل قبل التواصل مع شركات ${service.name_ar} ${cityKw}.` },
            { '@type': 'HowToStep', position: 2, name: 'قارن بين العروض', text: `احصل على عروض أسعار من 3 شركات ${service.name_ar} على الأقل ${cityKw} وقارن بينها.` },
            { '@type': 'HowToStep', position: 3, name: 'تحقق من الترخيص', text: 'تأكد من أن الشركة مرخصة ومعتمدة رسمياً من الجهات المختصة.' },
            { '@type': 'HowToStep', position: 4, name: 'اقرأ تقييمات العملاء', text: 'راجع تقييمات وتجارب العملاء السابقين للتأكد من جودة الخدمة.' },
            { '@type': 'HowToStep', position: 5, name: 'احجز الخدمة', text: `تواصل مع الشركة المختارة واتفق على الموعد والسعر النهائي لخدمة ${service.name_ar}.` },
        ],
    });

    // ── 7. ImageObject (#primaryImage) ──
    graph.push({
        '@type': 'ImageObject',
        '@id': `${baseUrl}#primaryImage`,
        url: absolutizeUrl(heroImageUrl) || heroImageUrl,
        name: `${service.name_ar} ${cityKw}`,
        description: `صورة توضيحية لخدمة ${service.name_ar} ${cityKw} - أفضل الشركات المعتمدة عبر بروكر`,
        width: 1200,
        height: 800,
        contentLocation: { '@type': 'Place', name: `${city.name_ar}، المملكة العربية السعودية` },
        creator: { '@id': ORG_ID },
    });

    // ── 8. EmergencyService (#emergency) — Night Mode Schema (12AM-6AM) ──
    const hourlyMode = getHourlyMode();
    if (hourlyMode === 'emergency') {
        graph.push({
            '@type': 'EmergencyService',
            '@id': `${baseUrl}#emergency`,
            name: `خدمة طوارئ ${service.name_ar} ليلية ${cityKw}`,
            description: `فرق ${service.name_ar} ليلية جاهزة للتحرك فوراً ${cityKw} — خدمة طوارئ 24/7. استجابة خلال 30 دقيقة.`,
            serviceType: `طوارئ ${service.name_ar}`,
            areaServed: {
                '@type': 'City',
                name: city.name_ar,
                addressCountry: 'SA',
                ...(cityContext?.coordinates && {
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: cityContext.coordinates.lat,
                        longitude: cityContext.coordinates.lng,
                    },
                }),
            },
            // Reference the canonical entity rather than minting an unlinked
            // duplicate. The old inline node also published a second phone
            // number that exists nowhere in NAP — a conflicting NAP phone is
            // the fastest way to make an assistant state the wrong number.
            provider: { '@id': ORG_ID },
            hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                    'Friday', 'Saturday', 'Sunday',
                ],
                opens: '00:00',
                closes: '06:00',
            },
            potentialAction: {
                '@type': 'CommunicateAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `tel:${NAP.phone}`,
                    actionPlatform: 'http://schema.org/TelephoneActionPlatform',
                },
                name: `اتصل لطلب طوارئ ${service.name_ar} ${cityKw}`,
            },
            isRelatedTo: { '@id': `${baseUrl}#service` },
        });
    }

    // ============================================
    // 💥 OUTPUT: النتيجة النهائية: JSON-LD موحد
    // ============================================
    const unifiedSchema = {
        '@context': 'https://schema.org',
        '@graph': graph,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(unifiedSchema) }}
        />
    );
}
