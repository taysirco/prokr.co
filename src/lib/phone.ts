// ============================================
// Saudi phone normalizer for wa.me / WhatsApp deep-links.
// wa.me requires full international format with NO leading zero: 9665XXXXXXXX.
// Advertiser numbers may be stored as 05XXXXXXXX, 5XXXXXXXX, +9665XXXXXXXX,
// 9665XXXXXXXX, or with spaces/symbols. The old code only stripped non-digits,
// so a stored 05XXXXXXXX produced wa.me/05XXXXXXXX which WhatsApp rejects.
// ============================================
export function toWaNumber(raw: string | undefined | null): string {
    const d = (raw || '').replace(/\D/g, '');
    if (!d) return '';
    if (d.startsWith('966')) return d;        // already intl
    if (d.startsWith('0')) return '966' + d.slice(1); // 05XXXXXXXX → 9665XXXXXXXX
    if (d.startsWith('5') && d.length === 9) return '966' + d; // 5XXXXXXXX → 9665XXXXXXXX
    return d; // landlines / 920 unified numbers pass through (not WhatsApp-capable)
}
