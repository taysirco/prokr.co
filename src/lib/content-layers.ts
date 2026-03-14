import { City, Service } from '@/types';
import { CITY_CONTEXT } from './city-context';
import { getServiceKeywordProfile, getCityKeyword, resolveKeywordTemplate } from './locale-formatting';
import { trackInteraction } from './interaction-tracking';

// Types for the Content Layers
export interface ContentLayers {
    introduction: string;
    whyUs: string[];
    localChallenges: string[];
    customSolutions: string[];
    successStories: { title: string; result: string }[];
    shortAnswer: string; // For Google Featured Snippets
    metaTitle: string;
    h1: string;
}

// Helper to pick random item from array based on seed (city+service)
// ensures consistency (same city+service always gets same content) but variety across pages
function getStableRandomItem<T>(arr: T[], seed: string): T {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    const index = Math.abs(hash) % arr.length;
    return arr[index];
}

import { INTRO_TEMPLATES, WHY_US_REASONS, SOLUTIONS_MAP, SUCCESS_STORIES } from './services';

// ==========================================
// 1. UNIQUE INTRODUCTIONS
// ==========================================
function generateIntroduction(city: City, service: Service, context: any): string {
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);
    const count = Math.floor(30 * (context.priceModifier || 1));
    const climateNote = context.climate === 'humid-coastal'
        ? 'الرطوبة الساحلية' : context.climate === 'mountain' ? 'تضاريس المنطقة الجبلية' : 'الحرارة المرتفعة والغبار';

    const templatesTemplate = INTRO_TEMPLATES[service.category] || INTRO_TEMPLATES['cleaning'] || [];

    // Replace the placeholders before picking a random one to ensure correct logic,
    // though getStableRandomItem picks one string then we could replace. Replacing all is fine.
    const templates = templatesTemplate.map((t: string) =>
        t.replace(/\{cityKw\}/g, cityKw)
            .replace(/\{location\}/g, city.name_ar)
            .replace(/\{city\.name_ar\}/g, city.name_ar)
            .replace(/\{serviceName\}/g, service.name_ar)
            .replace(/\{count\}/g, count.toString())
            .replace(/\{climateNote\}/g, climateNote)
            .replace(/\{responseTime\}/g, context.responseTime || 'السريع')
    );

    return getStableRandomItem(templates, `${city.slug}-${service.slug}-intro`);
}

// ==========================================
// 2. WHY CHOOSE US (City Specific)
// ==========================================
function generateWhyUs(city: City, service: Service, context: any): string[] {
    const climateReason = context.climate === 'humid-coastal'
        ? 'خبرة متخصصة في التعامل مع الرطوبة الساحلية'
        : context.climate === 'mountain'
            ? 'معدات وفرق مجهزة للمناطق الجبلية'
            : 'حلول مخصصة للتعامل مع الحرارة والغبار';

    const reasons = WHY_US_REASONS[service.category] || WHY_US_REASONS['cleaning'] || [];
    return [climateReason, ...reasons].slice(0, 5);
}

// ==========================================
// 3. LOCAL CHALLENGES & SOLUTIONS
// ==========================================
function generateChallengesAndSolutions(city: City, service: Service, context: any) {
    const specificNuances = context.serviceNuances?.[service.category] || [];
    const generalChallenges = context.challenges || [];
    const challenges = [...specificNuances, ...generalChallenges].slice(0, 3);

    const solutionsMap = SOLUTIONS_MAP[service.category] || SOLUTIONS_MAP['cleaning'] || {};
    const solutions = challenges.map((challenge: string) => {
        const key = Object.keys(solutionsMap).find(k => challenge.includes(k));
        return key ? solutionsMap[key] : 'نقدم حلولاً مبتكرة ومخصصة لهذا التحدي لضمان أفضل النتائج.';
    });

    return { challenges, solutions };
}

// ==========================================
// 4. SUCCESS STORIES (Simulated)
// ==========================================
function generateSuccessStories(city: City, service: Service, context: any) {
    const neighborhood = context.neighborhoods?.[0]?.name_ar || 'وسط المدينة';
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);

    const storiesTemplate = SUCCESS_STORIES[service.category] || SUCCESS_STORIES['cleaning'] || [];

    const stories = storiesTemplate.map((s: { title: string, result: string }) => ({
        title: s.title.replace(/\{neighborhood\}/g, neighborhood).replace(/\{cityKw\}/g, cityKw),
        result: s.result.replace(/\{neighborhood\}/g, neighborhood)
            .replace(/\{cityKw\}/g, cityKw)
            .replace(/\{responseTime\}/g, context.responseTime || 'السريع')
    }));

    return stories;
}

// ==========================================
// 5. FEATURED SNIPPET ANSWER
// ==========================================
function generateShortAnswer(city: City, service: Service, minPrice: number): string {
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);
    return `تبدأ أسعار ${service.name_ar} ${cityKw} من ${minPrice} ريال تقريباً لعام 2026. ${profile.usp}. قارن بين أفضل الشركات المعتمدة ${cityKw} عبر بروكر لضمان الجودة وأفضل سعر.`;
}

// ==========================================
// MAIN GENERATOR FUNCTION
// ==========================================
export function generateContentLayers(city: City, service: Service): ContentLayers {
    const context = CITY_CONTEXT[city.slug] || CITY_CONTEXT['riyadh']; // Fallback

    // Calculate base price estimate for Snippet
    const baseMin = 300 * (context.priceModifier || 1);

    const { challenges, solutions } = generateChallengesAndSolutions(city, service, context);

    return {
        introduction: generateIntroduction(city, service, context),
        whyUs: generateWhyUs(city, service, context),
        localChallenges: challenges,
        customSolutions: solutions,
        successStories: generateSuccessStories(city, service, context),
        shortAnswer: generateShortAnswer(city, service, Math.round(baseMin)),
        metaTitle: generateMetaTitle(city, service, Math.round(baseMin)),
        h1: generateH1(city, service)
    };
}

// ==========================================
// 6. DYNAMIC TITLES & H1s
// ==========================================

export function generateMetaTitle(city: City, service: Service, minPrice: number): string {
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);
    const context = CITY_CONTEXT[city.slug];
    const companiesCount = Math.floor(30 * (context?.priceModifier || 1));

    const baseTitle = resolveKeywordTemplate(profile.metaTitle, {
        city: cityKw,
        cityName: city.name_ar,
        serviceName: service.name_ar,
        price: minPrice,
        count: companiesCount,
    });

    // Title enhancement: add title formatting to auto-generated titles
    return trackInteraction(baseTitle, service.slug);
}

export function generateH1(city: City, service: Service): string {
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);

    return resolveKeywordTemplate(profile.h1, {
        city: cityKw,
        cityName: city.name_ar,
        serviceName: service.name_ar,
    });
}

// For Page: /[city]
export function generateCityMeta(city: City): { title: string; h1: string } {
    const cityKw = getCityKeyword(city.name_ar, 'ba');

    return {
        title: `خدمات منزلية ${cityKw} — نقل عفش، تنظيف، مكافحة حشرات، كشف تسربات 2026`,
        h1: `دليل الخدمات المنزلية ${cityKw} — أفضل الشركات المعتمدة 2026`,
    };
}

// For Page: /services-page/[service]
export function generateServiceCategoryMeta(service: Service): { title: string; h1: string } {
    return {
        title: `أفضل شركات ${service.name_ar} في السعودية — الرياض، جدة، الدمام وكل المدن 2026`,
        h1: `دليل شركات ${service.name_ar} في السعودية — مقارنة أسعار كل المدن 2026`,
    };
}
