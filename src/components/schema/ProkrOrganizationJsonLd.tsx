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
