import { safeJsonLd } from '@/lib/json-ld';
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
        // Reference the canonical #organization entity (defined by ProkrOrganizationJsonLd
        // on the homepage) instead of a duplicate anonymous publisher — connects the
        // WebSite into the brand graph and drops the old broken twitter sameAs.
        publisher: { '@id': 'https://prokr.co/#organization' },
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
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
