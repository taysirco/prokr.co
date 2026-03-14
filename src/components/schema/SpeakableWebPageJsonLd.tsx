// ============================================
// SPEAKABLE WEB PAGE SCHEMA
// For voice search and AI engine optimization
// ⚡ Atomic SGE Sync: speakableText must be the EXACT same
//    variable rendered in .direct-answer div
// ============================================
interface SpeakableWebPageJsonLdProps {
    title: string;
    description: string;
    url: string;
    speakableSelectors: string[];
    speakableText?: string;  // ⚡ Atomic binding — same variable as DirectAnswer
    dateModified?: string;
    about?: { name: string; type: string };
    mentions?: { name: string; type: string }[];
}

export function SpeakableWebPageJsonLd({ title, description, url, speakableSelectors, speakableText, dateModified, about, mentions }: SpeakableWebPageJsonLdProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: title,
        description,
        url,
        inLanguage: 'ar',
        isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://prokr.co#website',
            name: 'بروكر',
            url: 'https://prokr.co',
        },
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: speakableSelectors,
        },
        // ⚡ Structured Data: Sync the EXACT DirectAnswer text
        // into the schema as abstract — byte-for-byte match with
        // what the user sees in .direct-answer div
        ...(speakableText && { abstract: speakableText }),
        ...(dateModified && { dateModified }),
        ...(about && {
            about: {
                '@type': about.type,
                name: about.name,
            },
        }),
        ...(mentions && mentions.length > 0 && {
            mentions: mentions.map(m => ({
                '@type': m.type,
                name: m.name,
            })),
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

