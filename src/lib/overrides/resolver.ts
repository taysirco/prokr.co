// ============================================
// Page Override Resolver
// Merges per-page overrides with auto-generated content
// ============================================

import type { City, Service } from '@/types';
import type { PageOverride } from './types';
import { getPageOverride } from './registry';
import { generateContentLayers, type ContentLayers } from '../ai-content-layers';
import { generateSeoContent } from '../seo-content';
import { getServiceKeywordProfile, getCityKeyword, resolveKeywordTemplate } from '../keyword-strategy';
import { getCityContext, getAdjustedPriceRange } from '../city-context';
import { getRelatedServices, type RelatedService } from '../related-services';

// ============================================
// CONTENT LAYERS RESOLVER
// ============================================

/**
 * Resolves content layers: override fields take priority over auto-generated.
 */
export function resolveContentLayers(city: City, service: Service): ContentLayers & {
    heroSubtitle?: string;
} {
    const auto = generateContentLayers(city, service);
    const override = getPageOverride(city.slug, service.slug);

    if (!override?.content) {
        return auto;
    }

    const c = override.content;
    return {
        introduction: c.introduction ?? auto.introduction,
        shortAnswer: c.shortAnswer ?? auto.shortAnswer,
        whyUs: c.whyUs ?? auto.whyUs,
        localChallenges: c.localChallenges ?? auto.localChallenges,
        customSolutions: c.customSolutions ?? auto.customSolutions,
        successStories: c.successStories ?? auto.successStories,
        metaTitle: override.meta?.title ?? auto.metaTitle,
        h1: override.meta?.h1 ?? auto.h1,
        heroSubtitle: c.heroSubtitle,
    };
}

// ============================================
// METADATA RESOLVER
// ============================================

interface ResolvedMetadata {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImage?: string;
}

/**
 * Resolves metadata: override fields take priority over auto-generated.
 */
export function resolveMetadata(city: City, service: Service): ResolvedMetadata {
    const override = getPageOverride(city.slug, service.slug);
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);
    const cityContext = getCityContext(city.slug);
    const neighborhoods = cityContext?.neighborhoods || [];
    const neighborhoodNames = neighborhoods.slice(0, 3).map(n => n.name_ar).join(' و');
    const companiesCount = Math.floor(30 * (cityContext?.priceModifier || 1));

    // Auto-generated content layers for title
    const auto = generateContentLayers(city, service);

    // Auto-generated description
    const resolvedDesc = resolveKeywordTemplate(profile.metaDescription, {
        city: cityKw,
        cityName: city.name_ar,
        serviceName: service.name_ar,
        count: companiesCount,
    });
    const autoDescription = `${resolvedDesc} ${neighborhoodNames ? `نغطي أحياء ${neighborhoodNames} والمناطق المجاورة.` : ''}`;

    // Auto-generated keywords
    const resolveKw = (kw: string) => resolveKeywordTemplate(kw, {
        city: cityKw,
        cityName: city.name_ar,
        serviceName: service.name_ar,
        neighborhood: neighborhoods[0]?.name_ar || '',
    });

    const autoKeywords = [
        resolveKw(profile.primaryKeyword),
        ...profile.synonyms.map(s => `${s} ${cityKw}`),
        ...profile.secondaryKeywords.map(resolveKw),
        ...profile.longTailKeywords.slice(0, 4).map(resolveKw),
        `${service.name_ar} ${city.name_ar} 2026`,
    ];

    const m = override?.meta;

    return {
        title: m?.title ?? auto.metaTitle,
        description: m?.description ?? autoDescription,
        keywords: m?.keywords ?? autoKeywords,
        ogTitle: m?.ogTitle ?? m?.title ?? auto.metaTitle,
        ogDescription: m?.ogDescription ?? m?.description ?? autoDescription,
        ogImage: m?.ogImage,
    };
}

// ============================================
// SEO CONTENT RESOLVER
// ============================================

/**
 * Resolves SEO content (pricing, FAQ, tips etc.): override fields take priority.
 */
export function resolveSeoContent(city: City, service: Service) {
    const auto = generateSeoContent({ city, service });
    const override = getPageOverride(city.slug, service.slug);

    if (!override) {
        return auto;
    }

    // If override has custom pricing, compute the display price string
    const resolvedPricing = override.pricing
        ? override.pricing.map(item => ({
            ...item,
            price: getAdjustedPriceRange(item.minPrice, item.maxPrice, city.slug),
        }))
        : auto.pricing;

    return {
        ...auto,
        pricing: resolvedPricing,
        faqItems: override.faq ?? auto.faqItems,
        expertTips: override.expertTips ?? auto.expertTips,
        warnings: override.warnings ?? auto.warnings,
        checklist: override.checklist ?? auto.checklist,
        trustFactors: override.trustFactors ?? auto.trustFactors,
        // AI content layer overrides
        aiContent: {
            ...auto.aiContent,
            introduction: override.content?.introduction ?? auto.aiContent.introduction,
            shortAnswer: override.content?.shortAnswer ?? auto.aiContent.shortAnswer,
            whyUs: override.content?.whyUs ?? auto.aiContent.whyUs,
            localChallenges: override.content?.localChallenges ?? auto.aiContent.localChallenges,
            customSolutions: override.content?.customSolutions ?? auto.aiContent.customSolutions,
            successStories: override.content?.successStories ?? auto.aiContent.successStories,
        },
        // Blueprint: Semantic data overrides
        semanticData: auto.semanticData ? {
            ...auto.semanticData,
            ...(override.hiddenObjections && { hiddenObjections: override.hiddenObjections }),
            ...(override.counterNarratives && { counterNarratives: override.counterNarratives }),
            ...(override.equipment && { equipment: override.equipment }),
            ...(override.govReferences && { govReferences: override.govReferences }),
        } : null,
    };
}

// ============================================
// RELATED SERVICES RESOLVER
// ============================================

/**
 * Resolves related services: full replacement if override exists.
 */
export function resolveRelatedServices(serviceSlug: string, citySlug: string, limit: number = 3): RelatedService[] {
    const override = getPageOverride(citySlug, serviceSlug);

    if (override?.relatedServices) {
        return override.relatedServices
            .sort((a: RelatedService, b: RelatedService) => b.priority - a.priority)
            .slice(0, limit);
    }

    return getRelatedServices(serviceSlug, limit);
}

// ============================================
// SCHEMA RESOLVER
// ============================================

/**
 * Check if a specific schema should be disabled for this page.
 */
export function isSchemaDisabled(citySlug: string, serviceSlug: string, schemaName: string): boolean {
    const override = getPageOverride(citySlug, serviceSlug);
    return override?.schema?.disableSchemas?.includes(schemaName) ?? false;
}

/**
 * Get the override object for a page (for passing to components).
 */
export function getOverrideForPage(citySlug: string, serviceSlug: string): PageOverride | undefined {
    return getPageOverride(citySlug, serviceSlug);
}
