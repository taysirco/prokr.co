import { ServiceCategoryData } from '../types';
import { leakDetectionServices, leakDetectionImages } from './data';
import { leakDetectionPricing } from './pricing';
import { leakDetectionTrustFactors, leakDetectionExpertTips, leakDetectionWarnings, leakDetectionChecklist } from './content';
import { leakDetectionAiIntroTemplates, leakDetectionAiWhyUs, leakDetectionAiSolutions, leakDetectionAiSuccessStories } from './ai';
import { leakDetectionSemanticData } from './semantic';

export const leakDetectionCategory: ServiceCategoryData = {
    category: 'leak-detection',
    services: leakDetectionServices,
    images: leakDetectionImages,
    pricing: leakDetectionPricing,
    trustFactors: leakDetectionTrustFactors,
    expertTips: leakDetectionExpertTips,
    warnings: leakDetectionWarnings,
    checklist: leakDetectionChecklist,
    aiIntroTemplates: leakDetectionAiIntroTemplates,
    aiWhyUs: leakDetectionAiWhyUs,
    aiSolutions: leakDetectionAiSolutions,
    aiSuccessStories: leakDetectionAiSuccessStories,
    semanticData: leakDetectionSemanticData,
};
