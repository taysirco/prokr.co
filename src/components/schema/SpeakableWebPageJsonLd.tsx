// ============================================
// SPEAKABLE WEB PAGE SCHEMA (additive)
// For voice search and AI engine optimization.
// IMPORTANT: this emits an ADDITIVE node sharing the SAME @id as the page's
// WebPageJsonLd (#webpage), carrying only the speakable / abstract / freshness /
// topic properties. Previously it emitted a SECOND full WebPage with the same
// @id (and re-declared #website), which is a duplicate-@id collision parsers
// resolve unpredictably. JSON-LD merges nodes by @id, so this just enriches the
// canonical WebPage. speakableText must match the .direct-answer div text.
// ============================================
import { safeJsonLd } from '@/lib/json-ld';

interface SpeakableWebPageJsonLdProps {
    title: string;
    description: string;
    url: string;
    speakableSelectors: string[];
    speakableText?: string;  // Synced with DirectAnswer text
    dateModified?: string;
    about?: { name: string; type: string };
    mentions?: { name: string; type: string }[];
}

export function SpeakableWebPageJsonLd({ url, speakableSelectors, speakableText, dateModified, about, mentions }: SpeakableWebPageJsonLdProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@id': `${url}#webpage`,
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: speakableSelectors,
        },
        // Byte-for-byte match with the visible .direct-answer text.
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
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
