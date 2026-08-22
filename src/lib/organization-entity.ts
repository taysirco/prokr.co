import { NAP } from '@/lib/nap';

// ════════════════════════════════════════════════════════════════
// The Prokr brand entity — ONE definition, used everywhere.
//
// WHY THIS EXISTS
// `https://prokr.co/#organization` was declared in four places with different
// property sets. The homepage carried the full node (CR number, VAT ID,
// contactPoint, hasOfferCatalog, sameAs, trust policies); the ~944 city×service
// pages carried a reduced copy with none of them; /corporate/acquisition even
// used a different `name`.
//
// Cross-page `@id` merging is best-effort and is NOT what a model does when it
// reads a single fetched document. A crawler that lands on /riyadh/cleaning and
// never fetches the homepage saw a brand with no legal identity at all. Since
// the money pages are the ones that get crawled and cited, that is where the
// CR/VAT/policy evidence needs to be.
//
// Import `buildOrganizationNode()` to push the entity into any page's @graph,
// or reference `{ '@id': ORG_ID }` when the node is already present on the page.
// ════════════════════════════════════════════════════════════════

export const ORG_ID = 'https://prokr.co/#organization';
export const WEBSITE_ID = 'https://prokr.co/#website';

/**
 * The canonical Organization node.
 *
 * No `@context` — this is designed to be pushed into an existing `@graph`.
 * For a standalone `<script type="application/ld+json">`, add the context at
 * the call site.
 */
export function buildOrganizationNode(): Record<string, unknown> {
    return {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: NAP.name,
        alternateName: ['دليل بروكر للخدمات المنزلية', 'Prokr', 'بروكر', 'Prokr.co', 'شبكة بروكر للخدمات'],
        url: 'https://prokr.co',
        logo: {
            '@type': 'ImageObject',
            url: 'https://prokr.co/logo.png',
            width: 512,
            height: 512,
        },
        image: 'https://prokr.co/images/og-default.png',
        description:
            'دليل شامل لخدمات النقل والتنظيف ومكافحة الحشرات وكشف التسربات في المملكة العربية السعودية.',
        slogan: 'دليلك الموثوق لأفضل شركات الخدمات المنزلية في السعودية',
        foundingDate: '2024',
        email: NAP.email,
        // Legal identity — the evidence that makes the entity resolvable.
        // Previously present ONLY on the homepage.
        identifier: [
            { '@type': 'PropertyValue', propertyID: 'CR', name: 'السجل التجاري', value: NAP.legal.crn },
            { '@type': 'PropertyValue', propertyID: 'VAT', name: 'الرقم الضريبي', value: NAP.legal.vatId },
        ],
        vatID: NAP.legal.vatId,
        taxID: NAP.legal.vatId,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'SA',
            addressLocality: 'الرياض',
        },
        foundingLocation: {
            '@type': 'Place',
            name: 'المملكة العربية السعودية',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'SA',
                addressLocality: 'الرياض',
            },
        },
        areaServed: {
            '@type': 'Country',
            name: 'المملكة العربية السعودية',
            sameAs: 'https://en.wikipedia.org/wiki/Saudi_Arabia',
        },
        // ⚠️ Every sameAs MUST return HTTP 200. A broken sameAs is a negative
        // entity-reconciliation signal, and this entity has already been burned
        // twice: a Wikidata Q-ID that does not exist (Q139265070) and an X
        // handle that 404s were both removed. Verify before re-adding either.
        sameAs: [
            'https://www.instagram.com/prokr_sa',
            'https://www.facebook.com/prokr.sa',
            'https://prokr.com',
            'https://prokr.net',
            'https://prokr.org',
        ],
        acquires: [
            { '@type': 'WebSite', name: 'بروكر دوت كوم (الكيان التاريخي)', url: 'https://prokr.com' },
            { '@type': 'WebSite', name: 'بروكر دوت نت', url: 'https://prokr.net' },
            { '@type': 'WebSite', name: 'بروكر دوت أورج', url: 'https://prokr.org' },
        ],
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: NAP.phone,
                email: NAP.email,
                contactType: 'customer service',
                areaServed: 'SA',
                availableLanguage: ['Arabic', 'English'],
                hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
                    opens: '08:00',
                    closes: '22:00',
                },
            },
            {
                '@type': 'ContactPoint',
                telephone: NAP.phone,
                email: NAP.email,
                contactType: 'sales',
                areaServed: 'SA',
                availableLanguage: ['Arabic'],
            },
        ],
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            minValue: 2,
            maxValue: 10,
        },
        knowsAbout: [
            'نقل عفش', 'تنظيف منازل', 'مكافحة حشرات', 'كشف تسربات المياه',
            'عزل خزانات', 'صرف صحي', 'نقل بين المدن', 'تخزين أثاث',
            'تنظيف مكيفات', 'تنظيف مسابح', 'تنظيف خزانات', 'عزل أسطح',
            'مكافحة الرمة', 'مكافحة النمل الأبيض', 'تنظيف مجالس', 'تنظيف سجاد',
            'نقل دولي', 'تعقيم منازل', 'تسليك مجاري', 'شفط بيارات',
        ],
        // Every url below is a real canonical hub. `sewage-vacuum` used to be
        // listed here and is not a service slug that exists — a catalog entry
        // pointing at a 404 is a checkable error.
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات بروكر المنزلية',
            itemListElement: [
                { '@type': 'OfferCatalog', name: 'خدمات النقل', url: 'https://prokr.co/furniture-moving', description: 'نقل عفش، تخزين أثاث، نقل بين المدن، نقل دولي' },
                { '@type': 'OfferCatalog', name: 'خدمات التنظيف', url: 'https://prokr.co/cleaning', description: 'تنظيف منازل، فلل، شقق، مجالس، سجاد، مكيفات، مسابح' },
                { '@type': 'OfferCatalog', name: 'مكافحة الحشرات', url: 'https://prokr.co/pest-control', description: 'مكافحة حشرات، رمة، نمل أبيض، صراصير، فئران' },
                { '@type': 'OfferCatalog', name: 'كشف التسربات والعزل', url: 'https://prokr.co/leak-detection', description: 'كشف تسربات المياه، عزل خزانات، عزل أسطح' },
                { '@type': 'OfferCatalog', name: 'الصرف الصحي', url: 'https://prokr.co/sewage-suction', description: 'شفط بيارات، تسليك مجاري، صيانة صرف صحي' },
            ],
        },
        // NOTE: no Organization-level aggregateRating. A self-serving rating
        // with no review backend is review spam.
        // NOTE: no `hasCredential`. Prokr does not perform Nafath identity or
        // Absher criminal-record checks; see NafathVerifyBanner.
        //
        // Trust policies. These resolve to /methodology, which documents what
        // verification is actually performed — pointing them at marketing pages
        // that contain no policy makes the properties worthless.
        publishingPrinciples: 'https://prokr.co/methodology',
        correctionsPolicy: 'https://prokr.co/methodology#corrections',
        actionableFeedbackPolicy: 'https://prokr.co/methodology#corrections',
        ownershipFundingInfo: 'https://prokr.co/methodology#funding',
        ethicsPolicy: 'https://prokr.co/methodology#principles',
        diversityPolicy: 'https://prokr.co/methodology#principles',
    };
}

/**
 * The WebSite node. Pages reference `{ '@id': WEBSITE_ID }` via `isPartOf`, so
 * any page that emits that reference must also emit this node — otherwise the
 * reference dangles and the graph is not self-contained for a single fetch.
 */
export function buildWebSiteNode(): Record<string, unknown> {
    return {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: 'https://prokr.co',
        name: NAP.name,
        alternateName: 'Prokr',
        inLanguage: 'ar-SA',
        publisher: { '@id': ORG_ID },
        license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    };
}
