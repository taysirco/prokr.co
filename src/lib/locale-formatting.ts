// ============================================
// Keyword Strategy Database — 51 Services
// Professional Arabic SEO keyword targeting
// ============================================

export interface ServiceKeywordProfile {
    slug: string;
    // Alternative names people search for the same service
    synonyms: string[];
    // Primary keyword pattern (highest search volume)
    primaryKeyword: string;
    // Optimized meta title template
    metaTitle: string;
    // Optimized meta description template
    metaDescription: string;
    // Optimized H1 template
    h1: string;
    // Secondary keywords (high volume)
    secondaryKeywords: string[];
    // Long-tail keywords (lower competition, higher conversion)
    longTailKeywords: string[];
    // Service-specific FAQ questions people actually search
    topQuestions: string[];
    // Whether "بـ" or "في" is more searched for this service
    cityPrefixPattern: 'ba' | 'fi';
    // Unique selling point for descriptions
    usp: string;
}

// ============================================
// Smart "بـ" Prefix Helper
// ============================================
export function getCityKeyword(cityNameAr: string, pattern: 'ba' | 'fi' = 'ba'): string {
    if (pattern === 'fi') {
        return `في ${cityNameAr}`;
    }
    // "بـ" prefix logic for Arabic cities
    if (cityNameAr.startsWith('ال')) {
        // الرياض → بالرياض, الدمام → بالدمام, الخبر → بالخبر
        return `ب${cityNameAr}`;
    }
    // جدة → بجدة, مكة → بمكة, تبوك → بتبوك
    return `ب${cityNameAr}`;
}

// Also export a version that returns both variants for keywords coverage
export function getCityKeywordVariants(cityNameAr: string): string[] {
    return [
        getCityKeyword(cityNameAr, 'ba'),
        `في ${cityNameAr}`,
        cityNameAr,
    ];
}


// ============================================
// KEYWORD DATABASE — ALL 51 SERVICES
// Imported from per-category modules in src/lib/services/
// ============================================

import { SERVICE_KEYWORDS } from './services';
export { SERVICE_KEYWORDS };

// HELPER FUNCTIONS
// ============================================

/**
 * Get keyword profile for a service, with fallback to generic profile
 */
export function getServiceKeywordProfile(serviceSlug: string): ServiceKeywordProfile {
    return SERVICE_KEYWORDS[serviceSlug] || createGenericProfile(serviceSlug);
}

/**
 * Generate a generic profile for services not explicitly listed
 */
function createGenericProfile(slug: string): ServiceKeywordProfile {
    return {
        slug,
        synonyms: [],
        primaryKeyword: 'شركة {serviceName} {city}',
        metaTitle: '{serviceName} {city} — أفضل الشركات المعتمدة مع ضمان 2026',
        metaDescription: 'أفضل شركة {serviceName} {city} ✓ شركات معتمدة ✓ أسعار تنافسية ✓ ضمان. قارن أسعار {count}+ شركة {serviceName} {city}.',
        h1: 'أفضل شركات {serviceName} {city} 2026',
        secondaryKeywords: [
            '{serviceName} {city}',
            'شركة {serviceName} {city}',
            'ارخص {serviceName} {city}',
        ],
        longTailKeywords: [
            '{serviceName} {city} رخيص',
            '{serviceName} {city} حي {neighborhood}',
        ],
        topQuestions: [
            'كم سعر {serviceName} {city}؟',
            'ما أفضل شركة {serviceName} {city}؟',
        ],
        cityPrefixPattern: 'ba',
        usp: 'شركات معتمدة + ضمان',
    };
}

/**
 * Resolve all template placeholders in a keyword string
 */
export function resolveKeywordTemplate(
    template: string,
    opts: {
        city?: string;       // getCityKeyword() result — e.g. "بالرياض"
        cityName?: string;   // raw city name — e.g. "الرياض"
        serviceName?: string;
        price?: number;
        count?: number;
        neighborhood?: string;
        nearCity?: string;
    }
): string {
    let result = template;
    if (opts.city) result = result.replace(/\{city\}/g, opts.city);
    if (opts.cityName) result = result.replace(/\{cityName\}/g, opts.cityName);
    if (opts.serviceName) result = result.replace(/\{serviceName\}/g, opts.serviceName);
    if (opts.price !== undefined) result = result.replace(/\{price\}/g, String(opts.price));
    if (opts.count !== undefined) result = result.replace(/\{count\}/g, String(opts.count));
    if (opts.neighborhood) result = result.replace(/\{neighborhood\}/g, opts.neighborhood);
    if (opts.nearCity) result = result.replace(/\{nearCity\}/g, opts.nearCity);
    return result;
}

// ============================================
// Company display name — "شركة {name} {service phrase}"
// e.g. "شركة الأسطورة لنقل العفش" / "شركة النجوم للتنظيف"
// ============================================
const COMPANY_SERVICE_PHRASE: Record<string, string> = {
    'moving': 'لنقل العفش',
    'cleaning': 'للتنظيف',
    'sewage': 'للصرف الصحي',
    'pest-control': 'لمكافحة الحشرات',
    'leak-detection': 'لكشف التسربات',
    'insulation': 'للعزل',
};

/** Arabic "لـ..." service phrase for a service category. */
export function getServicePhrase(category?: string): string {
    return (category && COMPANY_SERVICE_PHRASE[category]) || 'للخدمات المنزلية';
}

/**
 * Build a company display name like "شركة {name} {service phrase}".
 * Avoids doubling the "شركة"/"مؤسسة"/… prefix when the name already has one.
 */
export function formatCompanyDisplayName(businessName: string, category?: string): string {
    const name = (businessName || 'الخدمات').trim();
    const prefixes = ['شركة', 'مؤسسة', 'مكتب', 'مجموعة'];
    const base = prefixes.some(p => name.startsWith(p)) ? name : `شركة ${name}`;
    return `${base} ${getServicePhrase(category)}`;
}
