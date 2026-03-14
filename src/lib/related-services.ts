// ============================================
// Related Services Engine for Internal Linking
// Provides contextual links between related services
// ============================================

import { hasPageOverride } from '@/lib/overrides/registry';

export interface RelatedService {
    slug: string;
    context: string; // Natural sentence context for the link
    priority: number; // 1-3, higher = more relevant
}

// Per-category relation data imports
import { RELATIONS_MOVING } from './services/moving-relations';
import { RELATIONS_CLEANING } from './services/cleaning-relations';
import { RELATIONS_SEWAGE } from './services/sewage-relations';
import { RELATIONS_PEST_CONTROL } from './services/pest-control-relations';
import { RELATIONS_LEAK_DETECTION_INSULATION } from './services/leak-detection-insulation-relations';
import { getCanonicalSlug } from './services/super-page-groups';

// Aggregated service relationships map
export const SERVICE_RELATIONS: Record<string, RelatedService[]> = {
    ...RELATIONS_MOVING,
    ...RELATIONS_CLEANING,
    ...RELATIONS_SEWAGE,
    ...RELATIONS_PEST_CONTROL,
    ...RELATIONS_LEAK_DETECTION_INSULATION,
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get related services for a given service.
 * Resolves absorbed slugs to their canonical Super Page slugs.
 * Deduplicates if both canonical and absorbed appear in the relations.
 */
export function getRelatedServices(serviceSlug: string, limit: number = 3, citySlug?: string): RelatedService[] {
    // If this is an absorbed slug, merge its relations into the canonical's
    const canonical = getCanonicalSlug(serviceSlug);
    const lookupSlug = canonical || serviceSlug;

    const relations = SERVICE_RELATIONS[lookupSlug] || [];

    // Resolve absorbed target slugs → canonical target slugs
    const seen = new Set<string>();
    const resolved: RelatedService[] = [];

    for (const rel of relations) {
        const targetCanonical = getCanonicalSlug(rel.slug);
        const effectiveSlug = targetCanonical || rel.slug;

        // Skip if we already have this canonical/slug
        if (seen.has(effectiveSlug)) continue;
        // Don't link to self
        if (effectiveSlug === lookupSlug) continue;

        // 🛡️ Skip if target page doesn't exist for this city (prevents 404s)
        if (citySlug && !hasPageOverride(citySlug, effectiveSlug)) continue;

        seen.add(effectiveSlug);
        resolved.push({
            ...rel,
            slug: effectiveSlug, // Always use canonical slug for the link
        });
    }

    return resolved
        .sort((a, b) => b.priority - a.priority)
        .slice(0, limit);
}

/**
 * Generate internal link URL for a related service.
 * For absorbed slugs, produces /{city}/{canonical}#{absorbed-slug}
 * For canonical/standalone slugs, produces /{city}/{slug}
 */
export function generateServiceUrl(
    slug: string,
    citySlug: string,
): string {
    const canonical = getCanonicalSlug(slug);
    if (canonical) {
        return `/${citySlug}/${canonical}#${slug}`;
    }
    return `/${citySlug}/${slug}`;
}

/**
 * Generate internal link HTML for a related service
 */
export function generateInternalLink(
    related: RelatedService,
    citySlug: string,
    serviceName: string
): string {
    const url = generateServiceUrl(related.slug, citySlug);
    return `<a href="${url}" class="text-emerald-600 hover:text-emerald-700 font-medium">${serviceName}</a>`;
}

/**
 * Get contextual paragraph with embedded links
 */
export function getRelatedServicesContext(
    serviceSlug: string,
    citySlug: string,
    getServiceName: (slug: string) => string
): { context: string; linkedSlug: string }[] {
    const relations = getRelatedServices(serviceSlug, 3);

    return relations.map(rel => ({
        context: rel.context,
        linkedSlug: rel.slug,
    }));
}

// ============================================
// 🧠 In-Text Contextual Internal Linking — Internal Linking System
// Converts first mention of other services into
// contextual internal links (strongest link signal)
// ============================================

import { SERVICES } from './services';

/** Escape special regex characters in a string */
function escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Escape HTML entities to prevent XSS when using dangerouslySetInnerHTML */
export function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/**
 * Scans HTML text for domain phrases and converts the first mention
 * of each (up to maxLinks) into an internal contextual link.
 *
 * Uses CONTEXTUAL_TRIGGERS — common Arabic domain phrases found in AI text
 * that map to specific silos. More effective than exact name_ar
 * matching since AI text uses natural language variations.
 */
export function applyContextualLinks(
    html: string,
    citySlug: string,
    currentServiceSlug: string,
    maxLinks: number = 5
): string {
    let result = html;
    let linkCount = 0;

    const currentCanonical = getCanonicalSlug(currentServiceSlug);
    const currentEffective = currentCanonical || currentServiceSlug;

    // Trigger phrases — sorted longest first to prevent partial matches
    const triggers = CONTEXTUAL_TRIGGERS
        .filter(t => {
            const tCanonical = getCanonicalSlug(t.slug);
            return (tCanonical || t.slug) !== currentEffective;
        })
        .sort((a, b) => b.phrase.length - a.phrase.length);

    for (const trigger of triggers) {
        if (linkCount >= maxLinks) break;

        const escaped = escapeRegex(trigger.phrase);
        const regex = new RegExp(`(${escaped})(?![^<]*<\\/a>)`, 'u');

        if (regex.test(result)) {
            const canonical = getCanonicalSlug(trigger.slug);
            const targetSlug = canonical || trigger.slug;

            // 🛡️ Skip if target page doesn't exist for this city (prevents 404s)
            if (!hasPageOverride(citySlug, targetSlug)) continue;

            const url = `/${citySlug}/${targetSlug}`;

            result = result.replace(regex,
                `<a href="${url}" class="text-emerald-600 font-semibold hover:underline border-b border-emerald-200 border-dashed" title="${trigger.label} في ${citySlug}">${trigger.phrase}</a>`
            );
            linkCount++;
        }
    }

    return result;
}

// ============================================
// Contextual Trigger Phrases
// Common domain phrases in AI text → service links
// ALL slugs verified against real routes (33 services)
// ============================================
const CONTEXTUAL_TRIGGERS: { phrase: string; slug: string; label: string }[] = [
    // ═══════════════════════════════════════════
    // 🔍 Leak Detection (3 services)
    // ═══════════════════════════════════════════
    { phrase: 'تسربات الخزانات', slug: 'water-leak-detection', label: 'كشف تسربات المياه' },
    { phrase: 'تسربات الحمامات', slug: 'bathroom-leak-detection', label: 'كشف تسربات الحمامات' },
    { phrase: 'تسرب حمامات', slug: 'bathroom-leak-detection', label: 'كشف تسربات الحمامات' },
    { phrase: 'تسرب المياه', slug: 'water-leak-detection', label: 'كشف تسربات المياه' },
    { phrase: 'تسربات المياه', slug: 'water-leak-detection', label: 'كشف تسربات المياه' },
    { phrase: 'كشف تسربات', slug: 'water-leak-detection', label: 'كشف تسربات المياه' },
    { phrase: 'تسريب الماء', slug: 'water-leak-detection', label: 'كشف تسربات المياه' },
    { phrase: 'فاتورة المياه', slug: 'water-leak-detection', label: 'كشف تسربات المياه' },

    // ═══════════════════════════════════════════
    // 🛡️ Insulation (5 services)
    // ═══════════════════════════════════════════
    { phrase: 'عزل الخزانات', slug: 'tank-insulation', label: 'عزل خزانات' },
    { phrase: 'عزل خزانات', slug: 'tank-insulation', label: 'عزل خزانات' },
    { phrase: 'عزل الأسطح', slug: 'roof-insulation', label: 'عزل أسطح' },
    { phrase: 'عزل اسطح', slug: 'roof-insulation', label: 'عزل أسطح' },
    { phrase: 'عزل السطح', slug: 'roof-insulation', label: 'عزل أسطح' },
    { phrase: 'عزل مائي', slug: 'water-insulation', label: 'عزل مائي' },
    { phrase: 'العزل المائي', slug: 'water-insulation', label: 'عزل مائي' },
    { phrase: 'عزل حراري', slug: 'thermal-insulation', label: 'عزل حراري' },
    { phrase: 'العزل الحراري', slug: 'thermal-insulation', label: 'عزل حراري' },
    { phrase: 'عزل فوم', slug: 'foam-insulation', label: 'عزل فوم' },
    { phrase: 'عزل بولي يوريثان', slug: 'foam-insulation', label: 'عزل فوم' },
    { phrase: 'مواد عزل', slug: 'water-insulation', label: 'عزل مائي' },

    // ═══════════════════════════════════════════
    // 🐜 Pest Control (3 services)
    // ═══════════════════════════════════════════
    { phrase: 'مكافحة الحشرات', slug: 'pest-control', label: 'مكافحة حشرات' },
    { phrase: 'مكافحة حشرات', slug: 'pest-control', label: 'مكافحة حشرات' },
    { phrase: 'رش المبيدات', slug: 'pest-control', label: 'مكافحة حشرات' },
    { phrase: 'رش مبيدات', slug: 'pest-control', label: 'مكافحة حشرات' },
    { phrase: 'النمل الابيض', slug: 'termite-control', label: 'مكافحة النمل الأبيض' },
    { phrase: 'النمل الأبيض', slug: 'termite-control', label: 'مكافحة النمل الأبيض' },
    { phrase: 'مكافحة النمل', slug: 'termite-control', label: 'مكافحة النمل الأبيض' },
    { phrase: 'أرضة', slug: 'termite-control', label: 'مكافحة النمل الأبيض' },
    { phrase: 'الصراصير', slug: 'pest-control', label: 'مكافحة حشرات' },
    { phrase: 'بق الفراش', slug: 'pest-control', label: 'مكافحة حشرات' },

    // ═══════════════════════════════════════════
    // 🚿 Sewage (2 services)
    // ═══════════════════════════════════════════
    { phrase: 'تسليك المجاري', slug: 'sewage-unblocking', label: 'تسليك مجاري' },
    { phrase: 'تسليك مجاري', slug: 'sewage-unblocking', label: 'تسليك مجاري' },
    { phrase: 'انسداد المجاري', slug: 'sewage-unblocking', label: 'تسليك مجاري' },
    { phrase: 'شفط البيارات', slug: 'sewage-suction', label: 'شفط بيارات' },
    { phrase: 'شفط بيارات', slug: 'sewage-suction', label: 'شفط بيارات' },
    { phrase: 'شفط الصرف', slug: 'sewage-suction', label: 'شفط بيارات' },
    { phrase: 'تنظيف البيارة', slug: 'sewage-suction', label: 'شفط بيارات' },

    // ═══════════════════════════════════════════
    // 🚛 Moving & Storage (3 services)
    // ═══════════════════════════════════════════
    { phrase: 'نقل العفش', slug: 'furniture-moving', label: 'نقل عفش' },
    { phrase: 'نقل عفش', slug: 'furniture-moving', label: 'نقل عفش' },
    { phrase: 'نقل الأثاث', slug: 'furniture-moving', label: 'نقل عفش' },
    { phrase: 'نقل أثاث', slug: 'furniture-moving', label: 'نقل عفش' },
    { phrase: 'نقل اثاث', slug: 'furniture-moving', label: 'نقل عفش' },
    { phrase: 'تخزين الأثاث', slug: 'furniture-storage', label: 'تخزين أثاث' },
    { phrase: 'تخزين اثاث', slug: 'furniture-storage', label: 'تخزين أثاث' },
    { phrase: 'تخزين العفش', slug: 'furniture-storage', label: 'تخزين أثاث' },
    { phrase: 'مغادرة الشقة', slug: 'moving-out', label: 'تنظيف مغادرة' },
    { phrase: 'تنظيف مغادرة', slug: 'moving-out', label: 'تنظيف مغادرة' },
    { phrase: 'إخلاء الشقة', slug: 'moving-out', label: 'تنظيف مغادرة' },

    // ═══════════════════════════════════════════
    // 🧹 Cleaning Services (12 services)
    // ═══════════════════════════════════════════
    { phrase: 'تنظيف الخزانات', slug: 'tanks-cleaning', label: 'تنظيف خزانات' },
    { phrase: 'تنظيف خزانات', slug: 'tanks-cleaning', label: 'تنظيف خزانات' },
    { phrase: 'غسيل الخزان', slug: 'tanks-cleaning', label: 'تنظيف خزانات' },
    { phrase: 'تنظيف المكيفات', slug: 'air-conditioner-cleaning', label: 'تنظيف مكيفات' },
    { phrase: 'تنظيف مكيفات', slug: 'air-conditioner-cleaning', label: 'تنظيف مكيفات' },
    { phrase: 'غسيل المكيف', slug: 'air-conditioner-cleaning', label: 'تنظيف مكيفات' },
    { phrase: 'صيانة المكيفات', slug: 'air-conditioner-cleaning', label: 'تنظيف مكيفات' },
    { phrase: 'صيانة مكيفات', slug: 'air-conditioner-cleaning', label: 'تنظيف مكيفات' },
    { phrase: 'جلي البلاط', slug: 'floor-polishing', label: 'جلي بلاط' },
    { phrase: 'جلي الرخام', slug: 'marble-polishing', label: 'جلي رخام' },
    { phrase: 'تلميع الرخام', slug: 'marble-polishing', label: 'جلي رخام' },
    { phrase: 'تنظيف بالبخار', slug: 'steam-cleaning', label: 'تنظيف بالبخار' },
    { phrase: 'التنظيف بالبخار', slug: 'steam-cleaning', label: 'تنظيف بالبخار' },
    { phrase: 'تنظيف السجاد', slug: 'carpet-cleaning', label: 'تنظيف سجاد' },
    { phrase: 'تنظيف سجاد', slug: 'carpet-cleaning', label: 'تنظيف سجاد' },
    { phrase: 'غسيل السجاد', slug: 'carpet-cleaning', label: 'تنظيف سجاد' },
    { phrase: 'تنظيف المجالس', slug: 'councils-cleaning', label: 'تنظيف مجالس' },
    { phrase: 'تنظيف مجالس', slug: 'councils-cleaning', label: 'تنظيف مجالس' },
    { phrase: 'تنظيف الكنب', slug: 'sofa-cleaning', label: 'تنظيف كنب' },
    { phrase: 'تنظيف كنب', slug: 'sofa-cleaning', label: 'تنظيف كنب' },
    { phrase: 'غسيل الكنب', slug: 'sofa-cleaning', label: 'تنظيف كنب' },
    { phrase: 'تنظيف الفلل', slug: 'villas-cleaning', label: 'تنظيف فلل' },
    { phrase: 'تنظيف فلل', slug: 'villas-cleaning', label: 'تنظيف فلل' },
    { phrase: 'تنظيف المنازل', slug: 'cleaning', label: 'تنظيف منازل' },
    { phrase: 'تنظيف منازل', slug: 'cleaning', label: 'تنظيف منازل' },
    { phrase: 'تنظيف البيت', slug: 'cleaning', label: 'تنظيف منازل' },
    { phrase: 'تنظيف شقق', slug: 'cleaning', label: 'تنظيف منازل' },
    { phrase: 'تنظيف الشقق', slug: 'cleaning', label: 'تنظيف منازل' },
    { phrase: 'تنظيف المطابخ', slug: 'kitchen-cleaning', label: 'تنظيف مطابخ' },
    { phrase: 'تنظيف مطبخ', slug: 'kitchen-cleaning', label: 'تنظيف مطابخ' },
    { phrase: 'تنظيف الأفران', slug: 'oven-cleaning', label: 'تنظيف أفران' },
    { phrase: 'تنظيف الفرن', slug: 'oven-cleaning', label: 'تنظيف أفران' },
    { phrase: 'تنظيف المكاتب', slug: 'office-cleaning', label: 'تنظيف مكاتب' },
    { phrase: 'تنظيف مكاتب', slug: 'office-cleaning', label: 'تنظيف مكاتب' },
    { phrase: 'تنظيف المحلات', slug: 'shops-cleaning', label: 'تنظيف محلات' },
    { phrase: 'تنظيف واجهات زجاجية', slug: 'glass-facades-cleaning', label: 'تنظيف واجهات' },
    { phrase: 'تنظيف الواجهات', slug: 'glass-facades-cleaning', label: 'تنظيف واجهات' },
    { phrase: 'تنظيف المسابح', slug: 'swimming-pool-cleaning', label: 'تنظيف مسابح' },
    { phrase: 'تنظيف مسابح', slug: 'swimming-pool-cleaning', label: 'تنظيف مسابح' },
    { phrase: 'تنظيف البلاط', slug: 'floor-cleaning', label: 'تنظيف أرضيات' },
    { phrase: 'تنظيف الأرضيات', slug: 'floor-cleaning', label: 'تنظيف أرضيات' },
    { phrase: 'تعقيم المنزل', slug: 'sanitization', label: 'تعقيم' },
    { phrase: 'تعقيم وتطهير', slug: 'sanitization', label: 'تعقيم' },
    { phrase: 'التعقيم', slug: 'sanitization', label: 'تعقيم' },

    // ═══════════════════════════════════════════
    // 🚚 Transport (1 service)
    // ═══════════════════════════════════════════
    { phrase: 'دينا نقل', slug: 'dyna', label: 'دينا نقل' },
    { phrase: 'سيارة نقل', slug: 'dyna', label: 'دينا نقل' },
];
