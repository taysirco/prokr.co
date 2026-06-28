// Sub-regions/Neighborhoods — no unused imports

// ============================================
// Sub-regions/Neighborhoods for Major Cities
// ============================================

// Optional hyper-local enrichment for a sub-region page. When present, the
// /regions/{city}/{subregion} page renders unique neighborhood content (intro,
// a focused service spotlight, pricing snapshot, tips, local FAQs) instead of the
// thin templated copy. This is how curated neighborhood content lives on its
// canonical, indexable URL — see the "enrich each page" note in the route's
// generateMetadata. Keep it optional so all other sub-regions render unchanged.
export interface SubRegionPricingRow {
    type: string;
    minPrice: number;
    maxPrice: number;
    unit?: string;
    time?: string;
}

export interface SubRegionLocalContent {
    /** Unique neighborhood intro paragraph (replaces the templated intro). */
    intro_ar: string;
    /** The lead service this neighborhood is best known for, e.g. 'furniture-moving'. */
    primaryServiceSlug?: string;
    /** Arabic label for the lead service, used as the spotlight heading, e.g. 'نقل عفش'. */
    primaryServiceLabel?: string;
    /** One-line, AI-citable direct answer for the spotlight service. */
    shortAnswer?: string;
    /** Estimated local pricing rows for the spotlight service. */
    pricing?: SubRegionPricingRow[];
    /** Practical local tips shown as a bullet list. */
    tips?: string[];
    /** Neighborhood-specific FAQs, prepended before the generic region FAQs. */
    faqs?: { question: string; answer: string }[];
}

export interface SubRegion {
    slug: string;
    name_ar: string;
    name_en: string;
    citySlug: string;
    services: string[];
    /** Optional curated, neighborhood-specific content (see SubRegionLocalContent). */
    localContent?: SubRegionLocalContent;
}

// Per-city sub-region imports
import { SUB_REGIONS_RIYADH } from './cities/riyadh/sub-regions';
import { SUB_REGIONS_AL_KHARJ } from './cities/al-kharj/sub-regions';
import { SUB_REGIONS_QASSIM } from './cities/qassim/sub-regions';
import { SUB_REGIONS_BURAIDAH } from './cities/buraidah/sub-regions';
import { SUB_REGIONS_ONIZAH } from './cities/onizah/sub-regions';
import { SUB_REGIONS_JEDDAH } from './cities/jeddah/sub-regions';
import { SUB_REGIONS_MAKKAH } from './cities/makkah/sub-regions';
import { SUB_REGIONS_MADINAH } from './cities/madinah/sub-regions';
import { SUB_REGIONS_TAIF } from './cities/taif/sub-regions';
import { SUB_REGIONS_YANBU } from './cities/yanbu/sub-regions';
import { SUB_REGIONS_DAMMAM } from './cities/dammam/sub-regions';
import { SUB_REGIONS_AL_KHOBAR } from './cities/al-khobar/sub-regions';
import { SUB_REGIONS_DHAHRAN } from './cities/dhahran/sub-regions';
import { SUB_REGIONS_JUBAIL } from './cities/jubail/sub-regions';
import { SUB_REGIONS_AL_AHSA } from './cities/al-ahsa/sub-regions';
import { SUB_REGIONS_QATIF } from './cities/qatif/sub-regions';
import { SUB_REGIONS_HAFR_ALBATIN } from './cities/hafr-albatin/sub-regions';
import { SUB_REGIONS_TABUK } from './cities/tabuk/sub-regions';
import { SUB_REGIONS_HAIL } from './cities/hail/sub-regions';
import { SUB_REGIONS_ABHA } from './cities/abha/sub-regions';
import { SUB_REGIONS_KHAMIS_MUSHAIT } from './cities/khamis-mushait/sub-regions';
import { SUB_REGIONS_NAJRAN } from './cities/najran/sub-regions';
import { SUB_REGIONS_JAZAN } from './cities/jazan/sub-regions';
import { SUB_REGIONS_AL_BAHA } from './cities/al-baha/sub-regions';
import { SUB_REGIONS_DIRIYAH } from './cities/diriyah/sub-regions';
import { SUB_REGIONS_MAJMAAH } from './cities/majmaah/sub-regions';
import { SUB_REGIONS_NEOM } from './cities/neom/sub-regions';
import { SUB_REGIONS_RABIGH } from './cities/rabigh/sub-regions';
import { SUB_REGIONS_RAS_TANURA } from './cities/ras-tanura/sub-regions';
import { SUB_REGIONS_AR_RASS } from './cities/ar-rass/sub-regions';

// Aggregated sub-regions by city
export const SUB_REGIONS: Record<string, SubRegion[]> = {
    'riyadh': SUB_REGIONS_RIYADH,
    'al-kharj': SUB_REGIONS_AL_KHARJ,
    'qassim': SUB_REGIONS_QASSIM,
    'buraidah': SUB_REGIONS_BURAIDAH,
    'onizah': SUB_REGIONS_ONIZAH,
    'diriyah': SUB_REGIONS_DIRIYAH,
    'majmaah': SUB_REGIONS_MAJMAAH,
    'jeddah': SUB_REGIONS_JEDDAH,
    'makkah': SUB_REGIONS_MAKKAH,
    'madinah': SUB_REGIONS_MADINAH,
    'taif': SUB_REGIONS_TAIF,
    'yanbu': SUB_REGIONS_YANBU,
    'rabigh': SUB_REGIONS_RABIGH,
    'dammam': SUB_REGIONS_DAMMAM,
    'al-khobar': SUB_REGIONS_AL_KHOBAR,
    'dhahran': SUB_REGIONS_DHAHRAN,
    'jubail': SUB_REGIONS_JUBAIL,
    'al-ahsa': SUB_REGIONS_AL_AHSA,
    'qatif': SUB_REGIONS_QATIF,
    'hafr-albatin': SUB_REGIONS_HAFR_ALBATIN,
    'ras-tanura': SUB_REGIONS_RAS_TANURA,
    'ar-rass': SUB_REGIONS_AR_RASS,
    'tabuk': SUB_REGIONS_TABUK,
    'hail': SUB_REGIONS_HAIL,
    'neom': SUB_REGIONS_NEOM,
    'abha': SUB_REGIONS_ABHA,
    'khamis-mushait': SUB_REGIONS_KHAMIS_MUSHAIT,
    'najran': SUB_REGIONS_NAJRAN,
    'jazan': SUB_REGIONS_JAZAN,
    'al-baha': SUB_REGIONS_AL_BAHA,
};

// Get sub-regions for a city
export function getSubRegionsByCity(citySlug: string): SubRegion[] {
    return SUB_REGIONS[citySlug] || [];
}

// Get a specific sub-region
export function getSubRegion(citySlug: string, subRegionSlug: string): SubRegion | undefined {
    const regions = SUB_REGIONS[citySlug];
    if (!regions) return undefined;
    return regions.find(r => r.slug === subRegionSlug);
}

// Get all cities with sub-regions
export function getCitiesWithSubRegions(): string[] {
    return Object.keys(SUB_REGIONS);
}

// Service slug mapping for sub-regions (some use different slugs like 'movers' instead of 'furniture-moving')
export const SUB_REGION_SERVICE_ALIASES: Record<string, string> = {
    'movers': 'furniture-moving',
    'mover': 'furniture-moving',
};

// Resolve service slug (handle aliases)
export function resolveServiceSlug(slug: string): string {
    return SUB_REGION_SERVICE_ALIASES[slug] || slug;
}
