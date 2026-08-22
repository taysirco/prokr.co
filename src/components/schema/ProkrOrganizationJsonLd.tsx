import { safeJsonLd } from '@/lib/json-ld';
import { buildOrganizationNode } from '@/lib/organization-entity';
// ============================================
// PROKR ORGANIZATION SCHEMA (Homepage)
// Brand-level schema for the website owner
// E-E-A-T Tier-0 Entity — §4.1 Master Blueprint
// ============================================
export function ProkrOrganizationJsonLd() {
    // Single definition, shared with every other page type.
    // See src/lib/organization-entity.ts for why this was consolidated.
    const schema = {
        '@context': 'https://schema.org',
        ...buildOrganizationNode(),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
