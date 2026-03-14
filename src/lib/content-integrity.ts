// ============================================
// 🛡️ Content Origin Verification — Content Origin Engine
// Injects invisible watermarks into SEO text at render time.
// If a competitor scrapes and pastes, the fingerprint proves origin.
// ============================================

/**
 * Zero-Width Unicode characters — invisible to humans, present in DOM.
 * Used to encode a binary fingerprint into text.
 */
const ZW_0 = '\u200B'; // Zero-Width Space       (binary 0)
const ZW_1 = '\u200C'; // Zero-Width Non-Joiner   (binary 1)

/**
 * Generates a deterministic 16-bit fingerprint from a page slug.
 * Same slug always produces the same fingerprint → SSG-safe.
 */
function generateOriginId(slug: string): string {
    let hash = 0;
    const key = `prokr:${slug}`;
    for (let i = 0; i < key.length; i++) {
        hash = ((hash << 5) - hash) + key.charCodeAt(i);
        hash |= 0; // Convert to 32-bit integer
    }
    // Take only the last 16 bits for a compact, fixed-length fingerprint
    const binary = Math.abs(hash).toString(2).slice(-16).padStart(16, '0');
    return binary
        .split('')
        .map(b => (b === '0' ? ZW_0 : ZW_1))
        .join('');
}

/**
 * Injects an invisible watermark into text content.
 * Inserts a 16-char ZW fingerprint after the first 3 sentence-ending periods.
 *
 * @param text    - Raw text to watermark
 * @param pageSlug - Unique page identifier (e.g. "riyadh-water-leak-detection")
 * @returns Watermarked text (visually identical to input)
 */
export function verifyOrigin(text: string, pageSlug: string): string {
    if (!text) return '';
    const fingerprint = generateOriginId(pageSlug);
    let count = 0;
    return text.replace(/\./g, (match) => {
        count++;
        return count <= 3 ? `${match}${fingerprint}` : match;
    });
}
