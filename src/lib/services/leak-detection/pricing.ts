import { PricingItem } from '../types';

export const leakDetectionPricing: Record<string, PricingItem[]> = {
    'water-leak-detection': [
        { type: 'كشف إلكتروني (حمام/مطبخ)', unit: 'نقطة', minPrice: 150, maxPrice: 300 },
        { type: 'كشف شقة كاملة', unit: 'وحدة', minPrice: 300, maxPrice: 600 },
        { type: 'كشف فيلا كاملة', unit: 'وحدة', minPrice: 500, maxPrice: 1000 },
        { type: 'تقرير معتمد للمياه الوطنية', unit: 'تقرير', minPrice: 200, maxPrice: 400 },
    ],
    'tank-leak-detection': [
        { type: 'كشف خزان أرضي', unit: 'وحدة', minPrice: 250, maxPrice: 500 },
        { type: 'كشف خزان علوي', unit: 'وحدة', minPrice: 150, maxPrice: 300 },
    ],
};
