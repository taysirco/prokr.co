// ============================================
// Related Services Engine for Internal Linking
// Provides contextual links between related services
// ============================================

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
export function getRelatedServices(serviceSlug: string, limit: number = 3): RelatedService[] {
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
