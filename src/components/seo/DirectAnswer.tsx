import React from 'react';

interface DirectAnswerProps {
    city: string;
    service: string;
    answer: string;
}

/**
 * Structured Answer Formatting
 *
 * Transforms the DirectAnswer from a dense paragraph into a structured
 * `<ul>` list formatted for clear, scannable presentation.
 *
 * Parser auto-detects two patterns:
 * 1. Content template pattern (override pages): splits on `. ف` / `، ت` / `لذا` / `مما`
 * 2. Pricing pattern (auto pages): splits on `. ي` / `. ش` / `. ب`
 *
 * Technical entities inside [...] brackets are auto-bolded.
 * Equipment names in (...) parentheses are auto-bolded.
 */
export const DirectAnswer: React.FC<DirectAnswerProps> = ({ city, service, answer }) => {
    const { intro, bullets, guarantee } = parseAnswer(answer);

    return (
        <div
            id="quick-summary"
            className="direct-answer bg-blue-50/80 border-r-4 border-blue-600 p-5 my-6 rounded-lg shadow-sm"
        >
            <h3 className="font-bold text-lg mb-3 text-blue-900">
                ملخص سريع عن {service} في {city}
            </h3>

            {/* Intro sentence — the hook */}
            {intro && (
                <p
                    className="font-semibold text-gray-900 mb-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: boldEntities(intro) }}
                />
            )}

            {/* Structured bullet list — Featured snippet format */}
            {bullets.length > 0 && (
                <ul className="list-disc pr-6 space-y-2 text-gray-800">
                    {bullets.map((bullet, i) => (
                        <li
                            key={i}
                            className="leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: boldEntities(bullet) }}
                        />
                    ))}
                </ul>
            )}

            {/* Guarantee closer — trust signal */}
            {guarantee && (
                <p
                    className="mt-3 text-blue-800 font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: boldEntities(guarantee) }}
                />
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════
// Answer Parser — Auto-detect pattern and split
// ═══════════════════════════════════════════════════

interface ParsedAnswer {
    intro: string;
    bullets: string[];
    guarantee: string;
}

function parseAnswer(answer: string): ParsedAnswer {
    // Pattern 1: Content template — "على عكس... يعتمد... ففي ظل... لذا... مما يضمن"
    if (answer.includes('يعتمد') && answer.includes('ففي ظل')) {
        return parseContentTemplatePattern(answer);
    }

    // Pattern 2: PRICING style — "service: price1, price2. includes: x + y + z"
    if (answer.includes('ريال') && (answer.includes('يشمل') || answer.includes('من'))) {
        return parsePricingPattern(answer);
    }

    // Fallback: split on sentence boundaries (period + space)
    return parseFallbackPattern(answer);
}

/**
 * Parse content template pattern:
 * "على عكس [X]... يعتمد بروتوكولنا... على استخدام [equipment].
 *  ففي ظل [challenges]... تتفاقم ظاهرة [problem].
 *  لذا؛ يتدخل خبراؤنا عبر [steps]...
 *  مما يضمن لك [guarantee]."
 */
function parseContentTemplatePattern(text: string): ParsedAnswer {
    let intro = '';
    const bullets: string[] = [];
    let guarantee = '';

    // Split on key Arabic discourse markers
    // Looking for: sentence boundaries that start new semantic units
    const guaranteeMatch = text.match(/[،,]\s*مما\s+يضمن\s+لك\s+(.+)$/);
    if (guaranteeMatch) {
        guarantee = '✅ ' + guaranteeMatch[1].replace(/\.$/, '').trim();
        text = text.replace(guaranteeMatch[0], '');
    }

    // Split into semantic chunks using Arabic discourse markers
    const parts = text.split(/\.\s+(?=ففي ظل|لذا|فلذلك|حيث)/);

    if (parts.length >= 1) {
        intro = parts[0].trim();
        // Remove trailing period
        if (intro.endsWith('.')) intro = intro.slice(0, -1);
    }

    // Process remaining parts as bullets
    for (let i = 1; i < parts.length; i++) {
        const part = parts[i].trim();
        if (part.length > 10) {
            bullets.push(part.replace(/\.$/, '').trim());
        }
    }

    // If intro is too long and has sub-clauses with arrows, break those out
    if (bullets.length === 0 && intro.includes('←')) {
        const arrowParts = intro.split('←').map(p => p.trim());
        if (arrowParts.length >= 2) {
            // Keep first part as intro, rest as bullets
            intro = arrowParts[0];
            for (let i = 1; i < arrowParts.length; i++) {
                bullets.push(arrowParts[i]);
            }
        }
    }

    // If still no bullets, split on ]. ف pattern
    if (bullets.length === 0) {
        const sentenceParts = text.split(/(?<=[\].])\s+(?=[فل])/);
        if (sentenceParts.length >= 2) {
            intro = sentenceParts[0].trim().replace(/\.$/, '');
            for (let i = 1; i < sentenceParts.length; i++) {
                const p = sentenceParts[i].trim().replace(/\.$/, '');
                if (p.length > 10) bullets.push(p);
            }
        }
    }

    return { intro, bullets, guarantee };
}

/**
 * Parse PRICING pattern:
 * "service_name بالمدينة: type1 من X ريال, type2 من Y ريال. يشمل: x + y + z."
 */
function parsePricingPattern(text: string): ParsedAnswer {
    const sentences = text.split(/\.\s+/).filter(s => s.trim().length > 5);
    const intro = sentences[0]?.trim().replace(/\.$/, '') || '';
    const bullets = sentences.slice(1).map(s => s.trim().replace(/\.$/, '')).filter(s => s.length > 5);
    return { intro, bullets, guarantee: '' };
}

/**
 * Fallback: split on sentence boundaries
 */
function parseFallbackPattern(text: string): ParsedAnswer {
    const sentences = text.split(/\.\s+/).filter(s => s.trim().length > 5);
    if (sentences.length <= 1) {
        return { intro: text, bullets: [], guarantee: '' };
    }
    const intro = sentences[0].trim().replace(/\.$/, '');
    const bullets = sentences.slice(1).map(s => s.trim().replace(/\.$/, '')).filter(s => s.length > 5);
    return { intro, bullets, guarantee: '' };
}

// ═══════════════════════════════════════════════════
// Entity Bolding — Auto-detect technical terms
// ═══════════════════════════════════════════════════

/**
 * Auto-bold technical entities:
 * 1. Text inside square brackets [...] → <strong>content</strong>
 * 2. Text inside parentheses that looks like equipment (Latin chars)
 * 3. Numbers with units (ppm, بار, ريال, °م, %)
 */
function boldEntities(text: string): string {
    return text
        // Bold content inside [square brackets] and remove brackets
        .replace(/\[([^\]]+)\]/g, '<strong>$1</strong>')
        // Bold equipment/technical names in (parentheses) with Latin characters
        .replace(/\(([^)]*[A-Za-z][^)]*)\)/g, '<strong>($1)</strong>')
        // Bold numbers with technical units
        .replace(/(\d+[\d,.]*\s*(?:ppm|PPM|بار|ريال|°[مس]|%|لتر|سنة|سنوات|أشهر|شهر|شهور|ساعة|ساعات|سم|ميكرون|كجم|م²|م³))/g, '<strong>$1</strong>');
}
