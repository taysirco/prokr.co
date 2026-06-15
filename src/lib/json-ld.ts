// ============================================
// Safe JSON-LD serializer for inline <script type="application/ld+json">.
// Escapes the characters that can break out of a <script> element or be abused
// for XSS when the object embeds user/advertiser-controlled data (business
// names, review comments, audio transcripts). Use this instead of bare
// JSON.stringify() anywhere dynamic data is injected into JSON-LD.
// ============================================
export function safeJsonLd(obj: unknown): string {
    return JSON.stringify(obj)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026");
}

// Strip HTML-comment-breaking and tag characters from a string before it is
// interpolated into a hidden HTML comment block (e.g. LLM authority comments).
export function sanitizeForHtmlComment(s: string | undefined | null): string {
    return (s || "").replace(/[<>]/g, "").replace(/--+/g, "-");
}
