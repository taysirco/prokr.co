// ============================================
// Page Override Resolver
// Merges per-page overrides with auto-generated content
// + Entity Intersection auto-injection
// ============================================

import type { City, Service } from '@/types';
import type { PageOverride } from './types';
import { getPageOverride, hasPageOverride } from './registry';
import { generateContentLayers, type ContentLayers } from '../ai-content-layers';
import { generateSeoContent } from '../seo-content';
import { getServiceKeywordProfile, getCityKeyword, resolveKeywordTemplate } from '../locale-formatting';
import { getCityContext, getAdjustedPriceRange } from '../city-context';
import { getRelatedServices, generateServiceUrl, type RelatedService } from '../related-services';
import { getCanonicalSlug } from '../services/super-page-groups';
import { getServiceEntities, getServiceSectorCategory } from './entities';
import { getClimateChallenges, getEntityIntersection } from './city-climate';
import { CONTENT_STRUCTURE_TEMPLATE } from './nlp-prompts';
import { getConsumerMythCorrection } from './consumer-myths';
import { trackInteraction } from '../interaction-tracking';

// ============================================
// SCIENTIFIC SYMBOL CLEANER
// تنظيف الرموز العلمية التي تربك المستخدم العادي
// ============================================

function cleanText(text: string): string {
  return text
    // === الرموز الكيميائية → مرادفات عربية ===
    .replace(/ΔT\s*\d*°?م?\s*/g, 'فرق حراري ')          // ΔT 48°م → فرق حراري
    .replace(/SiO₂/g, 'رمل')                               // SiO₂ → رمل
    .replace(/CaCO₃\s*\d*p?p?m?\s*/g, 'كلس ')             // CaCO₃ 600ppm → كلس
    .replace(/NH₃/g, 'أمونيا')                              // NH₃ → أمونيا
    .replace(/H₂S/g, 'كبريتيد')                             // H₂S → كبريتيد
    .replace(/PVAc/g, 'غراء')                               // PVAc → غراء
    .replace(/\bCYA\b/g, 'مثبت كلور')                       // CYA → مثبت كلور
    .replace(/\bHEPA\b/g, 'فلتر دقيق')                      // HEPA → فلتر دقيق
    .replace(/\bFeD\b/g, 'فحص أداء')                        // FeD → فحص أداء
    .replace(/\bDer p 1\b/g, 'عث الغبار')                    // Der p 1 → عث الغبار
    .replace(/\d+>\d+\.?\d*\s*Mohs/g, 'صلابة عالية')       // 7>5.5 Mohs → صلابة عالية
    .replace(/\bMohs\b/g, 'صلابة')                          // Mohs → صلابة
    // === المصطلحات التقنية → عربي واضح ===
    .replace(/Thermal\s*Fatigue/gi, 'إجهاد حراري')          // Thermal Fatigue → إجهاد حراري
    .replace(/Thermal\s*Cycling/gi, 'دورة حرارية')          // Thermal Cycling → دورة حرارية
    .replace(/Thermal\s*Shock/gi, 'صدمة حرارية')            // Thermal Shock → صدمة حرارية
    .replace(/Fiber\s*Cutting/gi, 'قطع ألياف')              // Fiber Cutting → قطع ألياف
    .replace(/Micro-Abrasion/gi, 'خدش دقيق')                // Micro-Abrasion → خدش دقيق
    .replace(/Micro-Swirls/gi, 'خدوش دائرية')               // Micro-Swirls → خدوش دائرية
    .replace(/Micro-Cracks/gi, 'شقوق دقيقة')                // Micro-Cracks → شقوق دقيقة
    .replace(/Fiber\s*Fatigue/gi, 'إجهاد ألياف')             // Fiber Fatigue → إجهاد ألياف
    .replace(/\bBiofilm\b/g, 'غشاء حيوي')                   // Biofilm → غشاء حيوي
    .replace(/\bScale\b/g, 'ترسبات')                        // Scale → ترسبات
    .replace(/\bSealant\b/g, 'مانع تسرب')                   // Sealant → مانع تسرب
    .replace(/\bDescaler\b/g, 'مزيل كلس')                   // Descaler → مزيل كلس
    .replace(/\bShrinkage\b/g, 'انكماش')                    // Shrinkage → انكماش
    .replace(/\bO-rings\b/gi, 'حلقات مطاطية')               // O-rings → حلقات مطاطية
    .replace(/\bOlibanum\b/g, 'لبان')                        // Olibanum → لبان
    .replace(/\bEster Bonds\b/g, 'روابط كيميائية')           // Ester Bonds → روابط كيميائية
    .replace(/\bEnzymatic\b/g, 'إنزيمي')                     // Enzymatic → إنزيمي
    .replace(/\bAnti-Static\b/g, 'مضاد كهرباء ساكنة')       // Anti-Static → مضاد كهرباء ساكنة
    .replace(/\bAnti-Fungal\b/g, 'مضاد فطريات')             // Anti-Fungal → مضاد فطريات
    .replace(/\bAnti-Biofilm\b/g, 'مضاد غشاء حيوي')         // Anti-Biofilm → مضاد غشاء حيوي
    .replace(/\bAspergillus\b/g, 'فطر العفن')                // Aspergillus → فطر العفن
    .replace(/\bSqueegee\b/g, 'ممسحة مطاطية')               // Squeegee → ممسحة مطاطية
    .replace(/\bAlgaecide\b/g, 'مبيد طحالب')                 // Algaecide → مبيد طحالب
    // === تنظيف المسافات الزائدة ===
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** Deep-clean all string values in an object or array */
function deepClean<T>(obj: T): T {
  if (typeof obj === 'string') return cleanText(obj) as T;
  if (Array.isArray(obj)) return obj.map(item => deepClean(item)) as T;
  if (obj && typeof obj === 'object') {
    const cleaned: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      cleaned[key] = deepClean(value);
    }
    return cleaned as T;
  }
  return obj;
}

// ============================================
// CONTENT LAYERS RESOLVER
// ============================================

/**
 * Resolves content layers: override fields take priority over auto-generated.
 */
export function resolveContentLayers(city: City, service: Service): ContentLayers & {
    heroSubtitle?: string;
    entityIntersection?: string;
} {
    const auto = generateContentLayers(city, service);
    const override = getPageOverride(city.slug, service.slug);

    // Resolve entity intersection from override or auto-generate from city-climate
    const sectorCategory = getServiceSectorCategory(service.slug);
    const autoEntityIntersection = sectorCategory
        ? getEntityIntersection(city.slug, sectorCategory) ?? undefined
        : undefined;
    const autoChallenges = sectorCategory
        ? getClimateChallenges(city.slug, sectorCategory)
        : [];

    if (!override?.content) {
        return {
            ...auto,
            // Auto-inject climate challenges if auto content is generic
            localChallenges: autoChallenges.length > 0 ? autoChallenges : auto.localChallenges,
            entityIntersection: autoEntityIntersection,
        };
    }

    const c = override.content;
    return deepClean({
        introduction: c.introduction ?? auto.introduction,
        shortAnswer: c.shortAnswer ?? auto.shortAnswer,
        whyUs: c.whyUs ?? auto.whyUs,
        localChallenges: c.localChallenges ?? (autoChallenges.length > 0 ? autoChallenges : auto.localChallenges),
        customSolutions: c.customSolutions ?? auto.customSolutions,
        successStories: c.successStories ?? auto.successStories,
        metaTitle: override.meta?.title ?? auto.metaTitle,
        h1: override.meta?.h1 ?? auto.h1,
        heroSubtitle: c.heroSubtitle,
        entityIntersection: override.entityContext?.intersectionParagraph ?? autoEntityIntersection,
    });
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

    // Dual-Layer CTR: apply emotional hooks to ALL titles (override + auto)
    const resolvedTitle = m?.title ?? auto.metaTitle;
    const ctrTitle = trackInteraction(resolvedTitle, service.slug);

    return deepClean({
        title: ctrTitle,
        description: m?.description ?? autoDescription,
        keywords: m?.keywords ?? autoKeywords,
        ogTitle: m?.ogTitle ?? ctrTitle,
        ogDescription: m?.ogDescription ?? m?.description ?? autoDescription,
        ogImage: m?.ogImage,
    });
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

    // Auto-generate entity data from central databases
    const sectorCategory = getServiceSectorCategory(service.slug);
    const autoEntities = getServiceEntities(service.slug);
    const autoChallenges = sectorCategory
        ? getClimateChallenges(city.slug, sectorCategory)
        : [];
    const autoIntersection = sectorCategory
        ? getEntityIntersection(city.slug, sectorCategory)
        : null;

    // Auto-generate equipment from sector entities if override doesn't have custom equipment
    const autoEquipment = autoEntities?.tools?.slice(0, 4).map(t => ({
        name: `${t.name} (${t.nameEn})`,
        use: t.use,
    })) ?? [];

    // Compile the Architectural NLP Prompt
    const compiledPrompt = CONTENT_STRUCTURE_TEMPLATE
        .replace(/\[اسم الخدمة\]/g, service.name_ar)
        .replace(/\[اسم المدينة\]/g, city.name_ar)
        .replace(/\[تحديات المناخ في المدينة\]/g, autoChallenges.join(' و '))
        .replace(/\[الممارسات الخاطئة\]/g, autoEntities?.wrongPractices?.map(w => w.name).join(' أو ') || '')
        .replace(/\[كيانات الأدوات والمواد\]/g, [...(autoEntities?.tools || []), ...(autoEntities?.materials || [])].slice(0, 3).map(e => e.name).join(' و '))
        .replace(/\[الأفعال النشطة \+ الأدوات\]/g, autoEntities?.activeVerbs?.slice(0, 2).join(' و ') || '')
        .replace(/\[الأعراض والكيانات الفيزيائية\]/g, [...(autoEntities?.symptoms || []), ...(autoEntities?.physics || [])].slice(0, 2).map(e => e.name).join(' و '));

    // Base Entity Context Object
    const baseEntityContext = {
        intersectionParagraph: autoIntersection || undefined,
        climateChallenges: autoChallenges,
        sectorEntities: autoEntities ? [...(autoEntities.tools || []), ...(autoEntities.materials || [])].map(e => e.name) : undefined,
        slangTerms: autoEntities?.slangTerms,
        activeVerbs: autoEntities?.activeVerbs,
        wrongPractices: autoEntities?.wrongPractices?.map(w => ({ name: w.name, use: w.use })),
        architectPrompt: compiledPrompt,
    };

    // Consumer Myth Correction: auto-append sector-specific consumer-education
    const mythCorrection = getConsumerMythCorrection(service.slug);

    if (!override) {
        const autoCounterNarratives = auto.semanticData?.consumerEducation ?? [];
        const correctedNarratives = mythCorrection
            ? [...autoCounterNarratives, mythCorrection]
            : autoCounterNarratives;

        return {
            ...auto,
            // Inject entity-enriched data into auto-generated content
            aiContent: {
                ...auto.aiContent,
                localChallenges: autoChallenges.length > 0 ? autoChallenges : auto.aiContent.localChallenges,
            },
            semanticData: auto.semanticData ? {
                ...auto.semanticData,
                equipment: autoEquipment.length > 0 ? autoEquipment : auto.semanticData.equipment,
                consumerEducation: correctedNarratives.length > 0 ? correctedNarratives : auto.semanticData.consumerEducation,
            } : null,
            entityContext: baseEntityContext,
        };
    }

    // If override has custom pricing, compute the display price string
    const resolvedPricing = override.pricing
        ? override.pricing.map(item => ({
            ...item,
            price: getAdjustedPriceRange(item.minPrice, item.maxPrice, city.slug),
        }))
        : auto.pricing;

    // Blueprint Rule #13: Resolve related services (7-11) from override or auto
    // Apply canonical slug resolution even for override-custom relations
    // 🛡️ CRITICAL: Filter by hasPageOverride to prevent broken links (61-link fix)
    const resolvedRelated = override.relatedServices
        ? (() => {
            const seen = new Set<string>();
            return override.relatedServices
                .map((rel: RelatedService) => {
                    const canonical = getCanonicalSlug(rel.slug);
                    const effectiveSlug = canonical || rel.slug;
                    if (seen.has(effectiveSlug) || effectiveSlug === service.slug) return null;
                    // 🛡️ Skip if target page doesn't exist for this city
                    if (!hasPageOverride(city.slug, effectiveSlug)) return null;
                    seen.add(effectiveSlug);
                    return { ...rel, slug: effectiveSlug };
                })
                .filter(Boolean)
                .sort((a: any, b: any) => a.priority - b.priority);
        })()
        : auto.relatedServices;

    // Build complementaryLinks from override relatedServices (fragment-aware)
    const { getServiceBySlug } = require('../seed');
    const resolvedComplementaryLinks = override.relatedServices
        ? resolvedRelated.map((rel: any) => {
            const relService = getServiceBySlug(rel.slug);
            return relService ? {
                name_ar: relService.name_ar,
                slug: relService.slug,
                url: generateServiceUrl(relService.slug, city.slug),
                context: rel.context,
            } : null;
        }).filter(Boolean)
        : auto.complementaryLinks;

    // Resolve equipment: override > auto-entities > auto-generated
    const resolvedEquipment = override.equipment ?? (autoEquipment.length > 0 ? autoEquipment : undefined);

    return {
        ...auto,
        pricing: resolvedPricing,
        faqItems: override.faq ?? auto.faqItems,
        expertTips: override.expertTips ?? auto.expertTips,
        warnings: override.warnings ?? auto.warnings,
        checklist: override.checklist ?? auto.checklist,
        trustFactors: override.trustFactors ?? auto.trustFactors,
        // Blueprint Rule #13: Related Services 7-11
        relatedServices: resolvedRelated,
        complementaryLinks: resolvedComplementaryLinks,
        // AI content layer overrides + entity injection
        aiContent: {
            ...auto.aiContent,
            introduction: override.content?.introduction ?? auto.aiContent.introduction,
            shortAnswer: override.content?.shortAnswer ?? auto.aiContent.shortAnswer,
            whyUs: override.content?.whyUs ?? auto.aiContent.whyUs,
            localChallenges: override.content?.localChallenges ?? (autoChallenges.length > 0 ? autoChallenges : auto.aiContent.localChallenges),
            customSolutions: override.content?.customSolutions ?? auto.aiContent.customSolutions,
            successStories: override.content?.successStories ?? auto.aiContent.successStories,
        },
        // Blueprint: Semantic data overrides + entity equipment + myth correction
        semanticData: auto.semanticData ? (() => {
            const baseNarratives = override.consumerEducation ?? auto.semanticData?.consumerEducation ?? [];
            const correctedNarratives = mythCorrection
                ? [...baseNarratives, mythCorrection]
                : baseNarratives;
            return {
                ...auto.semanticData,
                ...(override.hiddenObjections && { hiddenObjections: override.hiddenObjections }),
                consumerEducation: correctedNarratives,
                ...(resolvedEquipment && { equipment: resolvedEquipment }),
                ...(override.govReferences && { govReferences: override.govReferences }),
            };
        })() : null,
        // Entity Intersection context (Merge custom override with auto base NLP context)
        entityContext: override.entityContext ? {
            ...baseEntityContext,
            ...override.entityContext,
        } : baseEntityContext,
    };
}

// ============================================
// RELATED SERVICES RESOLVER
// ============================================

/**
 * Resolves related services: full replacement if override exists.
 * Always resolves absorbed slugs → canonical slugs for fragment URL architecture.
 */
export function resolveRelatedServices(serviceSlug: string, citySlug: string, limit: number = 11): RelatedService[] {
    const override = getPageOverride(citySlug, serviceSlug);

    if (override?.relatedServices) {
        // Even override-custom relations need canonical resolution
        const seen = new Set<string>();
        const resolved: RelatedService[] = [];

        for (const rel of override.relatedServices) {
            const canonical = getCanonicalSlug(rel.slug);
            const effectiveSlug = canonical || rel.slug;
            if (seen.has(effectiveSlug)) continue;
            if (effectiveSlug === serviceSlug) continue;
            // 🛡️ Skip if target page doesn't exist for this city (prevents 404s)
            if (!hasPageOverride(citySlug, effectiveSlug)) continue;
            seen.add(effectiveSlug);
            resolved.push({ ...rel, slug: effectiveSlug });
        }

        return resolved
            .sort((a: RelatedService, b: RelatedService) => b.priority - a.priority)
            .slice(0, limit);
    }

    return getRelatedServices(serviceSlug, limit, citySlug);
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
    const override = getPageOverride(citySlug, serviceSlug);
    return override ? deepClean(override) : undefined;
}
