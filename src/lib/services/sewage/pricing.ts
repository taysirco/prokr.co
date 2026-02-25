import { PricingItem } from '../types';

export const sewagePricing: Record<string, PricingItem[]> = {
    'sewage-suction': [
        { type: 'وايت شفط صغير (4 طن)', unit: 'نقلة', minPrice: 100, maxPrice: 150 },
        { type: 'وايت شفط متوسط (8 طن)', unit: 'نقلة', minPrice: 150, maxPrice: 250 },
        { type: 'وايت شفط كبير (12 طن)', unit: 'نقلة', minPrice: 250, maxPrice: 400 },
    ],
    'sewage-unblocking': [
        { type: 'تسليك بالضغط', unit: 'نقطة', minPrice: 150, maxPrice: 300 },
        { type: 'تسليك بسوستة كهربائية', unit: 'نقطة', minPrice: 200, maxPrice: 400 },
        { type: 'تنظيف غرف التفتيش', unit: 'غرفة', minPrice: 100, maxPrice: 200 },
    ],
};
