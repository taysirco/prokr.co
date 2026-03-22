// ============================================
// Page Override System — Public API
// ============================================

// Types
export type { PageOverride, OverrideKey } from './types';
export { makeOverrideKey } from './types';

// Registry (data lookup)
export { getPageOverride, hasPageOverride, getOverriddenPages } from './registry';

// Resolver (merge functions)
export {
    resolveContentLayers,
    resolveMetadata,
    resolvePageContent,
    resolveRelatedServices,
    isSchemaDisabled,
    getOverrideForPage,
} from './resolver';

// Entity Database
export { getServiceEntities, getServiceSectorCategory, SECTOR_ENTITIES } from './entities';
export type { EntityItem, SectorEntities, ServiceCategory } from './entities';

// City Climate Profiles
export { getCityClimate, getEntityIntersection, getClimateChallenges, CITY_CLIMATE } from './city-climate';
export type { ClimateZone, CityClimateProfile } from './city-climate';

// Trust Anchors (including geographic amanas)
export { GOV, EXPERTS, REGULATIONS, AMANA, getAmanaForCity } from './gov-references';

// Content Templates (for generating page content)
export { MASTER_CONTENT_PROMPT, CONTENT_STRUCTURE_TEMPLATE } from './content-templates';
