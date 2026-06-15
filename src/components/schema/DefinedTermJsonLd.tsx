import { safeJsonLd } from '@/lib/json-ld';
// ============================================
// DEFINED TERM SCHEMA — Service Glossary
// Declares Prokr as the authority that *defines*
// each service term (e.g. "نقل عفش", "كشف تسربات")
// ============================================

interface DefinedTermJsonLdProps {
    termName: string;          // e.g. "نقل عفش"
    termNameEn: string;        // e.g. "Furniture Moving"
    description: string;       // 1-2 sentence definition
    serviceSlug: string;       // e.g. "furniture-moving"
    category: string;          // e.g. "moving"
}

export function DefinedTermJsonLd({
    termName,
    termNameEn,
    description,
    serviceSlug,
    category,
}: DefinedTermJsonLdProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        '@id': `https://prokr.co/${serviceSlug}#term`,
        name: termName,
        alternateName: termNameEn,
        description,
        inLanguage: 'ar',
        termCode: serviceSlug,
        inDefinedTermSet: {
            '@type': 'DefinedTermSet',
            '@id': 'https://prokr.co/#service-glossary',
            name: 'مسرد خدمات بروكر — دليل الخدمات المنزلية السعودي',
            alternateName: 'Prokr Service Glossary — Saudi Home Services',
            description: 'مسرد شامل لتعريفات الخدمات المنزلية في المملكة العربية السعودية، مقدم من دليل بروكر المعتمد.',
            url: 'https://prokr.co/services-page',
            hasDefinedTerm: {
                '@id': `https://prokr.co/${serviceSlug}#term`,
            },
        },
        url: `https://prokr.co/${serviceSlug}`,
        // Cross-reference to the Service schema
        sameAs: `https://prokr.co/${serviceSlug}`,
        subjectOf: {
            '@type': 'WebPage',
            '@id': `https://prokr.co/${serviceSlug}#webpage`,
            url: `https://prokr.co/${serviceSlug}`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
