import { safeJsonLd } from '@/lib/json-ld';
/**
 * SpeakableJsonLd — §14 Voice Search & AI Assistant Optimization
 *
 * STRATEGY:
 * 1. Google Assistant, Alexa, and Siri use Speakable markup to select
 *    the most relevant text for voice answers
 * 2. This tells voice assistants: "read THIS specific paragraph"
 * 3. Critical for Arabic voice search (growing 40%+ YoY in KSA)
 * 4. Combined with CitableSummary = AI Overview + Voice domination
 *
 * USAGE: Add to any page with a citable summary paragraph
 *   <SpeakableJsonLd
 *     url="https://prokr.co/riyadh/furniture-moving"
 *     cssSelector={[".direct-answer", ".content-intro", "h1"]}
 *   />
 */

interface SpeakableJsonLdProps {
    url: string;
    cssSelector?: string[];
    xpath?: string[];
}

export function SpeakableJsonLd({ url, cssSelector, xpath }: SpeakableJsonLdProps) {
    const speakable: Record<string, unknown> = {
        '@type': 'SpeakableSpecification',
    };

    if (cssSelector && cssSelector.length > 0) {
        speakable.cssSelector = cssSelector;
    }

    if (xpath && xpath.length > 0) {
        speakable.xpath = xpath;
    }

    // Fallback: if neither provided, use sensible defaults
    if (!cssSelector && !xpath) {
        speakable.cssSelector = ['.direct-answer', '.content-intro', 'h1', '.citable-summary'];
    }

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url,
        speakable,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
