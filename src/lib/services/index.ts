import { movingCategory } from './moving';
import { cleaningCategory } from './cleaning';
import { pestControlCategory } from './pest-control';
import { sewageCategory } from './sewage';
import { leakDetectionCategory } from './leak-detection';
import { insulationCategory } from './insulation';
import { Service } from '@/types';

// Keyword profiles per category
import { MOVING_KEYWORDS } from './moving/keywords';
import { CLEANING_KEYWORDS } from './cleaning/keywords';
import { PEST_CONTROL_KEYWORDS } from './pest-control/keywords';
import { SEWAGE_KEYWORDS } from './sewage/keywords';
import { LEAK_DETECTION_KEYWORDS } from './leak-detection/keywords';
import { INSULATION_KEYWORDS } from './insulation/keywords';
import type { ServiceKeywordProfile } from '../locale-formatting';

const allCategories = [
    movingCategory,
    cleaningCategory,
    pestControlCategory,
    sewageCategory,
    leakDetectionCategory,
    insulationCategory,
];

export const SERVICES: Service[] = allCategories.flatMap(c => c.services);
export const SERVICE_IMAGES: Record<string, string[]> = allCategories.reduce((acc, c) => ({ ...acc, ...c.images }), {});
export const BASE_PRICING: Record<string, any[]> = allCategories.reduce((acc, c) => ({ ...acc, ...c.pricing }), {});

export const TRUST_FACTORS: Record<string, string[]> = allCategories.reduce((acc, c) => { acc[c.category] = c.trustFactors; return acc; }, {} as Record<string, string[]>);
export const EXPERT_TIPS: Record<string, string[]> = allCategories.reduce((acc, c) => { acc[c.category] = c.expertTips; return acc; }, {} as Record<string, string[]>);
export const WARNINGS: Record<string, string[]> = allCategories.reduce((acc, c) => { acc[c.category] = c.warnings; return acc; }, {} as Record<string, string[]>);
export const CHECKLISTS: Record<string, string[]> = allCategories.reduce((acc, c) => { acc[c.category] = c.checklist; return acc; }, {} as Record<string, string[]>);

export const INTRO_TEMPLATES: Record<string, string[]> = allCategories.reduce((acc, c) => { acc[c.category] = c.aiIntroTemplates; return acc; }, {} as Record<string, string[]>);
export const WHY_US_REASONS: Record<string, string[]> = allCategories.reduce((acc, c) => { acc[c.category] = c.aiWhyUs; return acc; }, {} as Record<string, string[]>);
export const SOLUTIONS_MAP: Record<string, Record<string, string>> = allCategories.reduce((acc, c) => { acc[c.category] = c.aiSolutions; return acc; }, {} as Record<string, Record<string, string>>);
export const SUCCESS_STORIES: Record<string, { title: string, result: string }[]> = allCategories.reduce((acc, c) => { acc[c.category] = c.aiSuccessStories; return acc; }, {} as Record<string, { title: string, result: string }[]>);

// Semantic data aggregated: slug → ServiceSemanticData
import type { ServiceSemanticData } from './types';
export type { ServiceSemanticData };
export const SEMANTIC_DATA: Record<string, ServiceSemanticData> = allCategories.reduce((acc, c) => ({ ...acc, ...c.semanticData }), {} as Record<string, ServiceSemanticData>);

// Keyword profiles aggregated from all categories
export const SERVICE_KEYWORDS: Record<string, ServiceKeywordProfile> = {
    ...MOVING_KEYWORDS,
    ...CLEANING_KEYWORDS,
    ...PEST_CONTROL_KEYWORDS,
    ...SEWAGE_KEYWORDS,
    ...LEAK_DETECTION_KEYWORDS,
    ...INSULATION_KEYWORDS,
};

