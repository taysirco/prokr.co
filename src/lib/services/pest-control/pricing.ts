import { PricingItem } from '../types';

export const pestControlPricing: Record<string, PricingItem[]> = {
    'pest-control': [
        { type: 'شقة صغيرة', unit: 'رش شامل', minPrice: 150, maxPrice: 250 },
        { type: 'شقة متوسطة/كبيرة', unit: 'رش شامل', minPrice: 250, maxPrice: 400 },
        { type: 'فيلا', unit: 'رش شامل', minPrice: 400, maxPrice: 700 },
        { type: 'مكافحة النمل الأبيض', unit: 'للمتر المربع', minPrice: 15, maxPrice: 25 },
        { type: 'عقد سنوي', unit: '4 زيارات', minPrice: 800, maxPrice: 1500 },
    ],
    'termite-control': [
        { type: 'معالجة موضعية', unit: 'نقطة', minPrice: 300, maxPrice: 500 },
        { type: 'معالجة شاملة (شقة)', unit: 'وحدة', minPrice: 1000, maxPrice: 2000 },
        { type: 'معالجة شاملة (فيلا)', unit: 'وحدة', minPrice: 2000, maxPrice: 5000 },
        { type: 'حماية ما قبل البناء', unit: 'للمتر المربع', minPrice: 20, maxPrice: 40 },
    ],
};
