import { safeJsonLd } from '@/lib/json-ld';
import { NAP } from '@/lib/nap';
// ============================================
// PROKR ORGANIZATION SCHEMA (Homepage)
// Brand-level schema for the website owner
// E-E-A-T Tier-0 Entity — §4.1 Master Blueprint
// ============================================
export function ProkrOrganizationJsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://prokr.co/#organization',
        name: 'بروكر الخدمي',
        alternateName: ['دليل بروكر للخدمات المنزلية', 'Prokr', 'بروكر', 'Prokr.co', 'شبكة بروكر للخدمات'],
        url: 'https://prokr.co',
        logo: {
            '@type': 'ImageObject',
            url: 'https://prokr.co/logo.png',
            width: 512,
            height: 512,
        },
        image: 'https://prokr.co/images/og-default.png',
        description: 'أكبر دليل شامل لخدمات النقل والتنظيف ومكافحة الحشرات وكشف التسربات في المملكة العربية السعودية. يغطي 30 مدينة مع أكثر من 500 شركة معتمدة.',
        slogan: 'دليلك الموثوق لأفضل شركات الخدمات المنزلية في السعودية',
        foundingDate: '2024',
        // Legal entity identifiers (E-E-A-T verification — Saudi MoC + ZATCA)
        identifier: [
            { '@type': 'PropertyValue', propertyID: 'CR', name: 'السجل التجاري', value: NAP.legal.crn },
            { '@type': 'PropertyValue', propertyID: 'VAT', name: 'الرقم الضريبي', value: NAP.legal.vatId },
        ],
        vatID: NAP.legal.vatId,
        taxID: NAP.legal.vatId,
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
        // §13.5 Entity Consolidation: Social + Domains + Knowledge Graph
        // NOTE: the Wikidata sameAs (Q139265070) was REMOVED — that entity does not
        // exist (the API returns "missing", the page 404s), so it was a broken sameAs
        // = a negative entity-reconciliation signal. Re-add a real Q-ID once the
        // Wikidata item for بروكر الخدمي is actually created/claimed.
        sameAs: [
            // twitter.com/prokr_sa removed — it 404s, and a broken sameAs is a
            // negative entity-reconciliation signal. Re-add the real X handle
            // (https://x.com/<handle>) once verified to return HTTP 200.
            'https://www.instagram.com/prokr_sa',
            'https://www.facebook.com/prokr.sa',
            'https://prokr.com',
            'https://prokr.net',
            'https://prokr.org',
        ],
        // Entity Acquisition Declaration — domain consolidation proof
        acquires: [
            {
                '@type': 'WebSite',
                name: 'بروكر دوت كوم (الكيان التاريخي)',
                url: 'https://prokr.com',
            },
            {
                '@type': 'WebSite',
                name: 'بروكر دوت نت',
                url: 'https://prokr.net',
            },
            {
                '@type': 'WebSite',
                name: 'بروكر دوت أورج',
                url: 'https://prokr.org',
            },
        ],
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+966542317431',
                contactType: 'customer service',
                areaServed: 'SA',
                availableLanguage: ['Arabic', 'English'],
                hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Saturday'],
                    opens: '08:00',
                    closes: '22:00',
                },
            },
            {
                '@type': 'ContactPoint',
                telephone: '+966542317431',
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
        // §14 — E-E-A-T: Comprehensive Service Knowledge
        knowsAbout: [
            'نقل عفش',
            'تنظيف منازل',
            'مكافحة حشرات',
            'كشف تسربات المياه',
            'عزل خزانات',
            'صرف صحي',
            'نقل بين المدن',
            'تخزين أثاث',
            'تنظيف مكيفات',
            'تنظيف مسابح',
            'تنظيف خزانات',
            'عزل أسطح',
            'مكافحة الرمة',
            'مكافحة النمل الأبيض',
            'تنظيف مجالس',
            'تنظيف سجاد',
            'نقل دولي',
            'تعقيم منازل',
            'تسليك مجاري',
            'شفط بيارات',
        ],
        // §4.1 — Service Offer Catalog
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات بروكر المنزلية',
            itemListElement: [
                { '@type': 'OfferCatalog', name: 'خدمات النقل', url: 'https://prokr.co/furniture-moving', description: 'نقل عفش، تخزين أثاث، نقل بين المدن، نقل دولي' },
                { '@type': 'OfferCatalog', name: 'خدمات التنظيف', url: 'https://prokr.co/cleaning', description: 'تنظيف منازل، فلل، شقق، مجالس، سجاد، مكيفات، مسابح' },
                { '@type': 'OfferCatalog', name: 'مكافحة الحشرات', url: 'https://prokr.co/pest-control', description: 'مكافحة حشرات، رمة، نمل أبيض، صراصير، فئران' },
                { '@type': 'OfferCatalog', name: 'كشف التسربات والعزل', url: 'https://prokr.co/leak-detection', description: 'كشف تسربات المياه، عزل خزانات، عزل أسطح' },
                { '@type': 'OfferCatalog', name: 'الصرف الصحي', url: 'https://prokr.co/sewage-vacuum', description: 'شفط بيارات، تسليك مجاري، صيانة صرف صحي' },
            ],
        },
        // NOTE: self-serving Organization aggregateRating REMOVED — it was a
        // hardcoded 4.7 / 2847 / 1523 with no real review backend (Google
        // structured-data review-spam policy). Only emit AggregateRating that is
        // data-driven and rendered on-page (see AggregateRatingJsonLd / company pages).
        // Transparency Policies — E-E-A-T trust signals
        ethicsPolicy: 'https://prokr.co/terms-of-service',
        publishingPrinciples: 'https://prokr.co/about-us',
        correctionsPolicy: 'https://prokr.co/contact-us',
        diversityPolicy: 'https://prokr.co/about-us',
        actionableFeedbackPolicy: 'https://prokr.co/contact-us',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
