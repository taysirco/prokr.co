import { ServiceCategoryData } from '../types';
import { cleaningServices, cleaningImages } from './data';
import { cleaningPricing } from './pricing';
import { cleaningTrustFactors, cleaningExpertTips, cleaningWarnings, cleaningChecklist } from './content';
import { cleaningAiIntroTemplates, cleaningAiWhyUs, cleaningAiSolutions, cleaningAiSuccessStories } from './ai';
import { cleaningSemanticData } from './semantic';

export const cleaningCategory: ServiceCategoryData = {
    category: 'cleaning',
    services: cleaningServices,
    images: cleaningImages,
    pricing: cleaningPricing,
    trustFactors: cleaningTrustFactors,
    expertTips: cleaningExpertTips,
    warnings: cleaningWarnings,
    checklist: cleaningChecklist,
    aiIntroTemplates: cleaningAiIntroTemplates,
    aiWhyUs: cleaningAiWhyUs,
    aiSolutions: cleaningAiSolutions,
    aiSuccessStories: cleaningAiSuccessStories,
    semanticData: cleaningSemanticData,
};
