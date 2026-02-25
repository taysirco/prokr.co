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
 * Get related services for a given service
 */
export function getRelatedServices(serviceSlug: string, limit: number = 3): RelatedService[] {
    const relations = SERVICE_RELATIONS[serviceSlug] || [];
    return relations
        .sort((a, b) => b.priority - a.priority)
        .slice(0, limit);
}

/**
 * Generate internal link HTML for a related service
 */
export function generateInternalLink(
    related: RelatedService,
    citySlug: string,
    serviceName: string
): string {
    return `<a href="/${citySlug}/${related.slug}" class="text-emerald-600 hover:text-emerald-700 font-medium">${serviceName}</a>`;
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
