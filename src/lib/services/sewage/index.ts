import { ServiceCategoryData } from '../types';
import { sewageServices, sewageImages } from './data';
import { sewagePricing } from './pricing';
import { sewageTrustFactors, sewageExpertTips, sewageWarnings, sewageChecklist } from './content';
import { sewageAiIntroTemplates, sewageAiWhyUs, sewageAiSolutions, sewageAiSuccessStories } from './ai';
import { sewageSemanticData } from './semantic';

export const sewageCategory: ServiceCategoryData = {
    category: 'sewage',
    services: sewageServices,
    images: sewageImages,
    pricing: sewagePricing,
    trustFactors: sewageTrustFactors,
    expertTips: sewageExpertTips,
    warnings: sewageWarnings,
    checklist: sewageChecklist,
    aiIntroTemplates: sewageAiIntroTemplates,
    aiWhyUs: sewageAiWhyUs,
    aiSolutions: sewageAiSolutions,
    aiSuccessStories: sewageAiSuccessStories,
    semanticData: sewageSemanticData,
};
