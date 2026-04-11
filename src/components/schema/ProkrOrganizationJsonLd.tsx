// ============================================
// PROKR ORGANIZATION SCHEMA (Homepage)
// Brand-level schema for the website owner
// ============================================
export function ProkrOrganizationJsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://prokr.co/#organization',
        name: 'دليل بروكر للخدمات المنزلية',
        alternateName: ['Prokr', 'بروكر', 'Prokr.co', 'شبكة بروكر للخدمات'],
        url: 'https://prokr.co',
        logo: {
            '@type': 'ImageObject',
            url: 'https://prokr.co/logo.png',
            width: 512,
            height: 512,
        },
        image: 'https://prokr.co/images/og-default.png',
        description: 'أكبر دليل شامل لخدمات النقل والتنظيف ومكافحة الحشرات وكشف التسربات في المملكة العربية السعودية. يغطي 24 مدينة مع أكثر من 500 شركة معتمدة.',
        slogan: 'دليلك الموثوق لأفضل شركات الخدمات المنزلية في السعودية',
        foundingDate: '2024',
        foundingLocation: {
            '@type': 'Place',
            name: 'المملكة العربية السعودية',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'SA',
            },
        },
        areaServed: {
            '@type': 'Country',
            name: 'المملكة العربية السعودية',
            sameAs: 'https://en.wikipedia.org/wiki/Saudi_Arabia',
        },
        // §13.5 Entity Consolidation: Social + Domains + Knowledge Graph
        // NOTE: Add Wikidata Q-ID here once entity is created on wikidata.org
        // Example: 'https://www.wikidata.org/wiki/Q123456789'
        sameAs: [
            'https://twitter.com/prokr_sa',
            'https://www.instagram.com/prokr_sa',
            'https://www.facebook.com/prokr.sa',
            'https://prokr.com',
            'https://prokr.net',
            'https://prokr.org',
            // Wikidata will be added here after entity creation
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
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+966542317431',
            contactType: 'customer service',
            areaServed: 'SA',
            availableLanguage: ['Arabic'],
        },
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            minValue: 2,
            maxValue: 10,
        },
        knowsAbout: [
            'نقل عفش',
            'تنظيف منازل',
            'مكافحة حشرات',
            'كشف تسربات المياه',
            'عزل خزانات',
            'صرف صحي',
            'نقل بين المدن',
            'تخزين أثاث',
        ],
        // Additional schema signals for E-E-A-T
        ethicsPolicy: 'https://prokr.co/terms-of-service',
        publishingPrinciples: 'https://prokr.co/about-us',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
