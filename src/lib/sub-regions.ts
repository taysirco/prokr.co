import type { City } from '@/types';

// ============================================
// Sub-regions/Neighborhoods for Major Cities
// ============================================

export interface SubRegion {
    slug: string;
    name_ar: string;
    name_en: string;
    citySlug: string;
    services: string[];
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

// Aggregated sub-regions by city
export const SUB_REGIONS: Record<string, SubRegion[]> = {
    'riyadh': SUB_REGIONS_RIYADH,
    'al-kharj': SUB_REGIONS_AL_KHARJ,
    'qassim': SUB_REGIONS_QASSIM,
    'buraidah': SUB_REGIONS_BURAIDAH,
    'onizah': SUB_REGIONS_ONIZAH,
    'jeddah': SUB_REGIONS_JEDDAH,
    'makkah': SUB_REGIONS_MAKKAH,
    'madinah': SUB_REGIONS_MADINAH,
    'taif': SUB_REGIONS_TAIF,
    'yanbu': SUB_REGIONS_YANBU,
    'dammam': SUB_REGIONS_DAMMAM,
    'al-khobar': SUB_REGIONS_AL_KHOBAR,
    'dhahran': SUB_REGIONS_DHAHRAN,
    'jubail': SUB_REGIONS_JUBAIL,
    'al-ahsa': SUB_REGIONS_AL_AHSA,
    'qatif': SUB_REGIONS_QATIF,
    'hafr-albatin': SUB_REGIONS_HAFR_ALBATIN,
    'tabuk': SUB_REGIONS_TABUK,
    'hail': SUB_REGIONS_HAIL,
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
