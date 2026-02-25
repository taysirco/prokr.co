import { PricingItem } from '../types';

export const insulationPricing: Record<string, PricingItem[]> = {
    'roof-insulation': [
        { type: 'عزل مائي وحراري (فوم)', unit: 'للمتر المربع', minPrice: 25, maxPrice: 45 },
        { type: 'عزل رولات بيتومين', unit: 'للمتر المربع', minPrice: 20, maxPrice: 35 },
        { type: 'عزل إيبوكسي', unit: 'للمتر المربع', minPrice: 30, maxPrice: 50 },
    ],
    'tank-insulation': [
        { type: 'عزل إيبوكسي لخزان أرضي', unit: 'خزان', minPrice: 1500, maxPrice: 3000 },
        { type: 'عزل أسمنتي لخزان أرضي', unit: 'خزان', minPrice: 1000, maxPrice: 2000 },
    ],
};
