// ============================================
// Service Groups — Fragment URL Architecture
// Service Consolidation: Synonym slugs → Canonical Service
// ============================================
//
// Each group defines:
//   canonical : The canonical slug that will be the indexed page
//   absorbed  : Slugs that will 301-redirect → canonical#absorbed-slug
//   category  : The service category for filtering
//
// HOW IT WORKS:
//   1. User visits /riyadh/pesticide-spraying
//   2. middleware.ts detects "pesticide-spraying" is absorbed by "pest-control"
//   3. → 301 redirect to /riyadh/pest-control#pesticide-spraying
//   4. On pest-control page, a fragment section renders the absorbed content
//   5. Sitemap excludes absorbed slugs
//   6. Canonical tag on all pages points to the main service
//
// MAKKAH NOTE: ac-maintenance, ac-installation, epoxy-coating only exist
// in Makkah. The redirect logic handles this via override-gated existence.
// ============================================

export interface SuperPageGroup {
    /** The canonical slug for this service group */
    canonical: string;
    /** Synonymous slugs merged as #fragment sections */
    absorbed: string[];
    /** The service category */
    category: string;
    /** Arabic labels for each absorbed slug (for section headings) */
    absorbedLabels: Record<string, string>;
}

export const SUPER_PAGE_GROUPS: SuperPageGroup[] = [
    // ───────────────────────────────────
    // PEST CONTROL
    // ───────────────────────────────────
    {
        canonical: 'pest-control',
        absorbed: ['pesticide-spraying', 'insects-spraying'],
        category: 'pest-control',
        absorbedLabels: {
            'pesticide-spraying': 'رش مبيدات',
            'insects-spraying': 'رش حشرات',
        },
    },

    // ───────────────────────────────────
    // CLEANING
    // ───────────────────────────────────
    {
        canonical: 'cleaning',
        absorbed: ['hourly-cleaning'],
        category: 'cleaning',
        absorbedLabels: {
            'hourly-cleaning': 'تنظيف بالساعة',
        },
    },
    {
        canonical: 'sofa-cleaning',
        absorbed: ['furniture-cleaning', 'councils-cleaning'],
        category: 'cleaning',
        absorbedLabels: {
            'furniture-cleaning': 'تنظيف أثاث',
            'councils-cleaning': 'تنظيف مجالس',
        },
    },
    {
        canonical: 'floor-polishing',
        absorbed: ['marble-polishing'],
        category: 'cleaning',
        absorbedLabels: {
            'marble-polishing': 'جلي رخام',
        },
    },
    {
        canonical: 'villas-cleaning',
        absorbed: ['palaces-cleaning'],
        category: 'cleaning',
        absorbedLabels: {
            'palaces-cleaning': 'تنظيف قصور',
        },
    },
    {
        canonical: 'shops-cleaning',
        absorbed: ['office-cleaning'],
        category: 'cleaning',
        absorbedLabels: {
            'office-cleaning': 'تنظيف مكاتب',
        },
    },
    {
        canonical: 'kitchen-cleaning',
        absorbed: ['oven-cleaning', 'restaurant-chimney-cleaning'],
        category: 'cleaning',
        absorbedLabels: {
            'oven-cleaning': 'تنظيف أفران',
            'restaurant-chimney-cleaning': 'تنظيف مداخن مطاعم',
        },
    },
    {
        canonical: 'air-conditioner-cleaning',
        absorbed: ['ac-maintenance', 'ac-installation'],
        category: 'cleaning',
        absorbedLabels: {
            'ac-maintenance': 'صيانة مكيفات',
            'ac-installation': 'تركيب مكيفات',
        },
    },

    // ───────────────────────────────────
    // LEAK DETECTION
    // ───────────────────────────────────
    {
        canonical: 'water-leak-detection',
        absorbed: ['tank-leak-detection', 'bathroom-leak-detection'],
        category: 'leak-detection',
        absorbedLabels: {
            'tank-leak-detection': 'كشف تسربات الخزانات',
            'bathroom-leak-detection': 'كشف تسربات الحمامات',
        },
    },

    // ───────────────────────────────────
    // INSULATION
    // ───────────────────────────────────
    {
        canonical: 'roof-insulation',
        absorbed: ['foam-insulation', 'thermal-insulation'],
        category: 'insulation',
        absorbedLabels: {
            'foam-insulation': 'عزل فوم',
            'thermal-insulation': 'عزل حراري',
        },
    },
    {
        canonical: 'tank-insulation',
        absorbed: ['water-insulation', 'epoxy-coating'],
        category: 'insulation',
        absorbedLabels: {
            'water-insulation': 'عزل مائي',
            'epoxy-coating': 'دهان ايبوكسي',
        },
    },

    // ───────────────────────────────────
    // MOVING
    // ───────────────────────────────────
    {
        canonical: 'furniture-moving',
        absorbed: ['dyna', 'dabab'],
        category: 'moving',
        absorbedLabels: {
            'dyna': 'دينا نقل',
            'dabab': 'دباب نقل عفش',
        },
    },
];

// ============================================
// LOOKUP MAPS (O(1) runtime, built once)
// ============================================

/** Map: absorbed slug → canonical slug */
const _absorbedToCanonical = new Map<string, string>();

/** Map: canonical slug → SuperPageGroup */
const _canonicalToGroup = new Map<string, SuperPageGroup>();

/** Set: all absorbed slugs */
const _absorbedSlugs = new Set<string>();

// Build lookup maps
for (const group of SUPER_PAGE_GROUPS) {
    _canonicalToGroup.set(group.canonical, group);
    for (const slug of group.absorbed) {
        _absorbedToCanonical.set(slug, group.canonical);
        _absorbedSlugs.add(slug);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Returns the canonical slug for an absorbed slug.
 * Returns null if the slug is not absorbed by any group.
 *
 * @example getCanonicalSlug('pesticide-spraying') → 'pest-control'
 * @example getCanonicalSlug('pest-control') → null (it IS the canonical)
 */
export function getCanonicalSlug(slug: string): string | null {
    return _absorbedToCanonical.get(slug) ?? null;
}

/**
 * Returns the full SuperPageGroup for a canonical slug.
 * Returns undefined if slug is not a canonical.
 *
 * @example getSuperPageGroup('pest-control') → { canonical: 'pest-control', absorbed: [...], ... }
 */
export function getSuperPageGroup(canonicalSlug: string): SuperPageGroup | undefined {
    return _canonicalToGroup.get(canonicalSlug);
}

/**
 * Returns all absorbed slugs for a canonical slug.
 * Returns empty array if slug is not a canonical.
 *
 * @example getAbsorbedSlugs('pest-control') → ['pesticide-spraying', 'insects-spraying']
 */
export function getAbsorbedSlugs(canonicalSlug: string): string[] {
    return _canonicalToGroup.get(canonicalSlug)?.absorbed ?? [];
}

/**
 * Checks if a slug is an absorbed (non-canonical) slug.
 *
 * @example isAbsorbedSlug('pesticide-spraying') → true
 * @example isAbsorbedSlug('pest-control') → false
 */
export function isAbsorbedSlug(slug: string): boolean {
    return _absorbedSlugs.has(slug);
}

/**
 * Checks if a slug is a canonical service page slug.
 *
 * @example isCanonicalSlug('pest-control') → true
 * @example isCanonicalSlug('pesticide-spraying') → false
 */
export function isCanonicalSlug(slug: string): boolean {
    return _canonicalToGroup.has(slug);
}

/**
 * Returns the Arabic label for an absorbed slug within its group.
 *
 * @example getAbsorbedLabel('pesticide-spraying') → 'رش مبيدات'
 */
export function getAbsorbedLabel(absorbedSlug: string): string | undefined {
    const canonical = _absorbedToCanonical.get(absorbedSlug);
    if (!canonical) return undefined;
    return _canonicalToGroup.get(canonical)?.absorbedLabels[absorbedSlug];
}

/**
 * Builds the full redirect URL for an absorbed slug.
 *
 * @example buildRedirectUrl('riyadh', 'pesticide-spraying')
 *   → '/riyadh/pest-control#pesticide-spraying'
 */
export function buildRedirectUrl(citySlug: string, absorbedSlug: string): string | null {
    const canonical = _absorbedToCanonical.get(absorbedSlug);
    if (!canonical) return null;
    return `/${citySlug}/${canonical}#${absorbedSlug}`;
}

/**
 * Returns all groups for a given category.
 *
 * @example getGroupsByCategory('cleaning') → [group1, group2, ...]
 */
export function getGroupsByCategory(category: string): SuperPageGroup[] {
    return SUPER_PAGE_GROUPS.filter(g => g.category === category);
}

/**
 * Returns a flat list of ALL absorbed slugs across all groups.
 * Used by sitemap.ts to exclude from sitemap.
 */
export function getAllAbsorbedSlugs(): string[] {
    return [..._absorbedSlugs];
}

/**
 * Total counts for debugging/logging
 */
export const SUPER_PAGE_STATS = {
    totalGroups: SUPER_PAGE_GROUPS.length,
    totalAbsorbedSlugs: _absorbedSlugs.size,
    totalCanonicals: _canonicalToGroup.size,
} as const;
