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
    'leak-detection': [
        { type: 'كشف تسرب — فحص إلكتروني', unit: 'فحص', minPrice: 150, maxPrice: 300 },
        { type: 'كشف + إصلاح نقطة تسرب', unit: 'نقطة', minPrice: 250, maxPrice: 500 },
        { type: 'تقرير كشف تسرب معتمد', unit: 'تقرير', minPrice: 200, maxPrice: 400 },
    ],
    'plumbing': [
        { type: 'سباك — إصلاح بسيط (حنفية / سيفون)', unit: 'قطعة', minPrice: 50, maxPrice: 150 },
        { type: 'سباك — تمديد سباكة حمام', unit: 'حمام', minPrice: 500, maxPrice: 1500 },
        { type: 'سباك — تمديد سباكة شقة كاملة', unit: 'شقة', minPrice: 3000, maxPrice: 7000 },
        { type: 'سباك — طوارئ (خارج الدوام)', unit: 'زيارة', minPrice: 150, maxPrice: 300 },
    ],
};

