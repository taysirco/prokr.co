import { PricingItem } from '../types';

export const leakDetectionPricing: Record<string, PricingItem[]> = {
    'water-leak-detection': [
        { type: 'فحص إلكتروني — شقة/فيلا صغيرة', unit: 'فحص', minPrice: 150, maxPrice: 300 },
        { type: 'فحص فيلا كبيرة + نيتروجين', unit: 'فحص', minPrice: 300, maxPrice: 600 },
        { type: 'إصلاح نقطة تسرب', unit: 'نقطة', minPrice: 200, maxPrice: 500 },
        { type: 'تمديد PPR كامل (بدل حديد)', unit: 'شقة', minPrice: 3000, maxPrice: 6000 },
        { type: 'تقرير NWC معتمد', unit: 'تقرير', minPrice: 200, maxPrice: 400 },
    ],
    'tank-leak-detection': [
        { type: 'كشف تسرب خزان أرضي — إلكتروني + ضغط', unit: 'وحدة', minPrice: 250, maxPrice: 500 },
        { type: 'كشف تسرب خزان علوي', unit: 'وحدة', minPrice: 150, maxPrice: 300 },
        { type: 'إصلاح تسرب خزان + إعادة عزل', unit: 'خزان', minPrice: 500, maxPrice: 1500 },
    ],
    'bathroom-leak-detection': [
        { type: 'كشف تسرب حمام — فحص بالكاميرا الحرارية', unit: 'حمام', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
        { type: 'كشف + إصلاح نقطة تسرب أرضية (بدون تكسير كامل)', unit: 'نقطة', minPrice: 300, maxPrice: 700, time: '2-4 ساعات' },
        { type: 'إعادة عزل حمام كامل + تبليط', unit: 'حمام', minPrice: 1500, maxPrice: 3500, time: '2-3 أيام' },
    ],
};
