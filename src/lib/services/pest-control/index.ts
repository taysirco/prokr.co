import { ServiceCategoryData } from '../types';
import { pestControlServices, pestControlImages } from './data';
import { pestControlPricing } from './pricing';
import { pestControlTrustFactors, pestControlExpertTips, pestControlWarnings, pestControlChecklist } from './content';
import { pestControlAiIntroTemplates, pestControlAiWhyUs, pestControlAiSolutions, pestControlAiSuccessStories } from './ai';
import { pestControlSemanticData } from './semantic';

export const pestControlCategory: ServiceCategoryData = {
    category: 'pest-control',
    services: pestControlServices,
    images: pestControlImages,
    pricing: pestControlPricing,
    trustFactors: pestControlTrustFactors,
    expertTips: pestControlExpertTips,
    warnings: pestControlWarnings,
    checklist: pestControlChecklist,
    aiIntroTemplates: pestControlAiIntroTemplates,
    aiWhyUs: pestControlAiWhyUs,
    aiSolutions: pestControlAiSolutions,
    aiSuccessStories: pestControlAiSuccessStories,
    semanticData: pestControlSemanticData,
};
