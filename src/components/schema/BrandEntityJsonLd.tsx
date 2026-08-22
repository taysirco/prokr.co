import { safeJsonLd } from '@/lib/json-ld';
import { buildOrganizationNode, buildWebSiteNode } from '@/lib/organization-entity';

/**
 * Emits the Organization + WebSite entity pair for page types that do not build
 * their own @graph.
 *
 * Several page types referenced `{ '@id': 'https://prokr.co/#organization' }`
 * (as publisher, provider or parentOrganization) without ever defining that
 * node on the page, leaving a dangling reference. Others defined no brand
 * entity at all, so a crawler that fetched only that URL saw content with no
 * identifiable publisher.
 *
 * Render this once per page. If the page already pushes
 * `buildOrganizationNode()` into its own graph (money pages, blog articles,
 * /methodology), do NOT also render this — that would duplicate the node.
 */
export function BrandEntityJsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [buildOrganizationNode(), buildWebSiteNode()],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
