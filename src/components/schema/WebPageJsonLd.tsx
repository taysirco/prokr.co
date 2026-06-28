import { safeJsonLd } from '@/lib/json-ld';
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
    // Optional @graph cross-references — e.g. a company page declares its
    // HomeAndConstructionBusiness as the page's mainEntity/about, and the
    // publishing Organization. Only spread when provided so other page types
    // (about-us, blog, locations, …) keep their current output unchanged.
    mainEntityId?: string;
    publisherId?: string;
}

export function WebPageJsonLd({ title, description, url, breadcrumbs, datePublished, dateModified, mainEntityId, publisherId }: WebPageJsonLdProps) {
    const schema: WebPageSchema & Record<string, unknown> = {
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
            name: 'بروكر الخدمي',
            url: 'https://prokr.co',
        },
        ...(mainEntityId && {
            mainEntity: { '@id': mainEntityId },
            about: { '@id': mainEntityId },
        }),
        ...(publisherId && { publisher: { '@id': publisherId } }),
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
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
