import { ServiceCategoryData } from '../types';
import { movingServices, movingImages } from './data';
import { movingPricing } from './pricing';
import { movingTrustFactors, movingExpertTips, movingWarnings, movingChecklist } from './content';
import { movingAiIntroTemplates, movingAiWhyUs, movingAiSolutions, movingAiSuccessStories } from './ai';
import { movingSemanticData } from './semantic';

export const movingCategory: ServiceCategoryData = {
    category: 'moving',
    services: movingServices,
    images: movingImages,
    pricing: movingPricing,
    trustFactors: movingTrustFactors,
    expertTips: movingExpertTips,
    warnings: movingWarnings,
    checklist: movingChecklist,
    aiIntroTemplates: movingAiIntroTemplates,
    aiWhyUs: movingAiWhyUs,
    aiSolutions: movingAiSolutions,
    aiSuccessStories: movingAiSuccessStories,
    semanticData: movingSemanticData,
};
