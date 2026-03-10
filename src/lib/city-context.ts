import type { City } from '@/types';

// ============================================
// City Context Data for AI-Ready SEO Content
// Provides unique environmental/geographic context per city
// ============================================

export type ClimateType = 'dry-hot' | 'humid-coastal' | 'mountain' | 'desert' | 'moderate';

export interface Neighborhood {
    name_ar: string;
    name_en: string;
    type: 'residential' | 'commercial' | 'mixed' | 'industrial';
}

export interface CityContext {
    slug: string;
    name_ar: string;
    // Geo coordinates for Local SEO Schema
    coordinates: { lat: number; lng: number };
    // Environmental factors
    climate: ClimateType;
    challenges: string[];
    // Geographic/Urban characteristics
    urbanTraits: string[];
    // Price modifier relative to Riyadh (1.0 = baseline)
    priceModifier: number;
    // Major neighborhoods
    neighborhoods: Neighborhood[];
    // Service-specific challenges (applied to certain service categories)
    serviceNuances: {
        moving?: string[];
        cleaning?: string[];
        'pest-control'?: string[];
        'leak-detection'?: string[];
        insulation?: string[];
    };
    // Response time claim for this city
    responseTime: string;
    // Nearby cities for "Do you serve outside?" FAQ
    nearbyCities: string[];
    // Phantom Geo-Hijacking — Major landmark for Google Maps Directions link
    majorLandmark: string;         // Arabic display name (e.g. برج المملكة)
    majorLandmarkEn: string;       // URL-safe English query (e.g. Kingdom+Tower+Riyadh)
    coverageRadius: string;        // Coverage radius claim (e.g. 45 كم)
}

// ============================================
// Complete City Context Data (24 Cities)
// ============================================

import { riyadh } from './cities/riyadh';
import { alKharj } from './cities/al-kharj';
import { qassim } from './cities/qassim';
import { buraidah } from './cities/buraidah';
import { onizah } from './cities/onizah';
import { jeddah } from './cities/jeddah';
import { makkah } from './cities/makkah';
import { madinah } from './cities/madinah';
import { taif } from './cities/taif';
import { yanbu } from './cities/yanbu';
import { dammam } from './cities/dammam';
import { alKhobar } from './cities/al-khobar';
import { dhahran } from './cities/dhahran';
import { jubail } from './cities/jubail';
import { alAhsa } from './cities/al-ahsa';
import { qatif } from './cities/qatif';
import { hafrAlbatin } from './cities/hafr-albatin';
import { tabuk } from './cities/tabuk';
import { hail } from './cities/hail';
import { abha } from './cities/abha';
import { khamisMushait } from './cities/khamis-mushait';
import { najran } from './cities/najran';
import { jazan } from './cities/jazan';
import { alBaha } from './cities/al-baha';

// ============================================
// Complete City Context Data
// Now imported from individual files for better maintainability
// ============================================

export const CITY_CONTEXT: Record<string, CityContext> = {
    // Central Region
    'riyadh': riyadh,
    'al-kharj': alKharj,
    'qassim': qassim,
    'buraidah': buraidah,
    'onizah': onizah,

    // Western Region
    'jeddah': jeddah,
    'makkah': makkah,
    'madinah': madinah,
    'taif': taif,
    'yanbu': yanbu,

    // Eastern Region
    'dammam': dammam,
    'al-khobar': alKhobar,
    'dhahran': dhahran,
    'jubail': jubail,
    'al-ahsa': alAhsa,
    'qatif': qatif,
    'hafr-albatin': hafrAlbatin,

    // Northern Region
    'tabuk': tabuk,
    'hail': hail,

    // Southern Region
    'abha': abha,
    'khamis-mushait': khamisMushait,
    'najran': najran,
    'jazan': jazan,
    'al-baha': alBaha,
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get city context by slug
 */
export function getCityContext(slug: string): CityContext | null {
    return CITY_CONTEXT[slug] || null;
}

/**
 * Get adjusted price for a city (multiply base price by modifier)
 */
export function getAdjustedPrice(basePrice: number, citySlug: string): number {
    const context = getCityContext(citySlug);
    if (!context) return basePrice;
    return Math.round(basePrice * context.priceModifier);
}

/**
 * Get price range string adjusted for city
 */
export function getAdjustedPriceRange(minPrice: number, maxPrice: number, citySlug: string): string {
    const context = getCityContext(citySlug);
    if (!context) return `${minPrice} - ${maxPrice}`;

    const adjustedMin = Math.round(minPrice * context.priceModifier);
    const adjustedMax = Math.round(maxPrice * context.priceModifier);

    return `${adjustedMin.toLocaleString('ar-SA')} - ${adjustedMax.toLocaleString('ar-SA')}`;
}

/**
 * Get service-specific challenges for a city
 */
export function getServiceNuances(citySlug: string, serviceCategory: string): string[] {
    const context = getCityContext(citySlug);
    if (!context) return [];

    return context.serviceNuances[serviceCategory as keyof typeof context.serviceNuances] || [];
}

/**
 * Get neighborhoods formatted for display
 */
export function getNeighborhoodsList(citySlug: string): string[] {
    const context = getCityContext(citySlug);
    if (!context) return [];

    return context.neighborhoods.map(n => n.name_ar);
}

/**
 * Get climate-based content suggestions
 */
export function getClimateContent(climate: ClimateType): {
    challenges: string[];
    tips: string[];
} {
    switch (climate) {
        case 'humid-coastal':
            return {
                challenges: ['الرطوبة العالية', 'ملوحة الهواء', 'صدأ المعادن'],
                tips: ['تغليف إضافي لحماية الأثاث', 'صيانة دورية للأجهزة', 'تنظيف وتعقيم متكرر'],
            };
        case 'dry-hot':
            return {
                challenges: ['الغبار والعواصف الرملية', 'الحرارة المرتفعة'],
                tips: ['تنظيف فلاتر المكيفات', 'حماية الأثاث من الشمس'],
            };
        case 'mountain':
            return {
                challenges: ['الطرق الجبلية', 'الأمطار والضباب', 'البرودة'],
                tips: ['نقل في الأوقات المناسبة', 'عزل جيد للمباني', 'سائقون محترفون'],
            };
        case 'desert':
            return {
                challenges: ['البرودة الشتوية الشديدة', 'العواصف الرملية'],
                tips: ['عزل حراري ممتاز', 'حماية الخزانات من التجمد'],
            };
        default:
            return { challenges: [], tips: [] };
    }
}
