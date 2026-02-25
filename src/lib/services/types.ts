import { Service } from '@/types';

export interface PricingItem {
    type: string;
    unit: string;
    minPrice: number;
    maxPrice: number;
    time?: string;
}

// Blueprint: Per-service-slug semantic data for unique, non-templated content
export interface ServiceSemanticData {
    entities: string[];                                      // كيانات حقيقية (أجهزة، مواد، جهات)
    lsiNGrams: string[];                                     // متلازمات دلالية ثنائية/ثلاثية
    hiddenObjections: { fear: string; solution: string }[];  // مخاوف العميل + حلولنا
    counterNarratives: { myth: string; truth: string }[];    // خرافات شائعة + الحقيقة
    equipment: { name: string; use: string }[];              // معدات وتقنيات حقيقية
    govReferences: string[];                                 // تراخيص ومعايير حكومية
}

export interface ServiceCategoryData {
    category: string;
    services: Service[];
    images: Record<string, string[]>;
    pricing: Record<string, PricingItem[]>;
    trustFactors: string[];
    expertTips: string[];
    warnings: string[];
    checklist: string[];
    aiIntroTemplates: string[];
    aiWhyUs: string[];
    aiSolutions: Record<string, string>;
    aiSuccessStories: { title: string; result: string }[];
    semanticData: Record<string, ServiceSemanticData>;
}

