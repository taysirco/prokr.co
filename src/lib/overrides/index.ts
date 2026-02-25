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
    resolveSeoContent,
    resolveRelatedServices,
    isSchemaDisabled,
    getOverrideForPage,
} from './resolver';
