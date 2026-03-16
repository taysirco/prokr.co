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
                telephone: '+966542317431',
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
