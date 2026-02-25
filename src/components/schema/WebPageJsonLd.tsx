import type { WebPageSchema } from '@/types';

// ============================================
// WEB PAGE SCHEMA
// For category/section pages
// ============================================
interface WebPageJsonLdProps {
    title: string;
    description: string;
    url: string;
    breadcrumbs?: { name: string; url: string }[];
    datePublished?: string;
    dateModified?: string;
}

export function WebPageJsonLd({ title, description, url, breadcrumbs, datePublished, dateModified }: WebPageJsonLdProps) {
    const schema: WebPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: title,
        description,
        url,
        inLanguage: 'ar',
        datePublished: datePublished || '2025-01-01',
        dateModified: dateModified || new Date().toISOString().split('T')[0],
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
