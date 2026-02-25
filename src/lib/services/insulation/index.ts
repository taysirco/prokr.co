import { ServiceCategoryData } from '../types';
import { insulationServices, insulationImages } from './data';
import { insulationPricing } from './pricing';
import { insulationTrustFactors, insulationExpertTips, insulationWarnings, insulationChecklist } from './content';
import { insulationAiIntroTemplates, insulationAiWhyUs, insulationAiSolutions, insulationAiSuccessStories } from './ai';
import { insulationSemanticData } from './semantic';

export const insulationCategory: ServiceCategoryData = {
    category: 'insulation',
    services: insulationServices,
    images: insulationImages,
    pricing: insulationPricing,
    trustFactors: insulationTrustFactors,
    expertTips: insulationExpertTips,
    warnings: insulationWarnings,
    checklist: insulationChecklist,
    aiIntroTemplates: insulationAiIntroTemplates,
    aiWhyUs: insulationAiWhyUs,
    aiSolutions: insulationAiSolutions,
    aiSuccessStories: insulationAiSuccessStories,
    semanticData: insulationSemanticData,
};
