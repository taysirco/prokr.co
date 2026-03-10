import { PricingItem } from '../types';

export const movingPricing: Record<string, PricingItem[]> = {
    'furniture-moving': [
        { type: 'شقة صغيرة (غرفة-غرفتين)', unit: 'رحلة واحدة', minPrice: 500, maxPrice: 800, time: '2-4 ساعات' },
        { type: 'شقة متوسطة (3-4 غرف)', unit: 'رحلة واحدة', minPrice: 800, maxPrice: 1200, time: '4-6 ساعات' },
        { type: 'شقة كبيرة (5+ غرف)', unit: 'رحلة واحدة', minPrice: 1200, maxPrice: 2000, time: '6-8 ساعات' },
        { type: 'فيلا صغيرة', unit: 'رحلة واحدة', minPrice: 2000, maxPrice: 3500, time: 'يوم كامل' },
        { type: 'فيلا كبيرة / قصر', unit: 'رحلة واحدة', minPrice: 3500, maxPrice: 7000, time: '1-2 يوم' },
    ],
    'furniture-storage': [
        { type: 'غرفة واحدة', unit: 'شهرياً', minPrice: 200, maxPrice: 400 },
        { type: 'شقة صغيرة', unit: 'شهرياً', minPrice: 400, maxPrice: 700 },
        { type: 'شقة متوسطة', unit: 'شهرياً', minPrice: 700, maxPrice: 1200 },
        { type: 'فيلا', unit: 'شهرياً', minPrice: 1200, maxPrice: 2500 },
    ],
    'dyna': [
        { type: 'دينا صغيرة (3 طن)', unit: 'رحلة داخل المدينة', minPrice: 200, maxPrice: 350 },
        { type: 'دينا متوسطة (5 طن)', unit: 'رحلة داخل المدينة', minPrice: 300, maxPrice: 500 },
        { type: 'دينا كبيرة (7 طن)', unit: 'رحلة داخل المدينة', minPrice: 450, maxPrice: 700 },
    ],
    'moving-out': [
        { type: 'نقل بين مدينتين (حتى 300 كم)', unit: 'شاحنة مغلقة', minPrice: 2000, maxPrice: 4000, time: 'يوم واحد' },
        { type: 'نقل بين مدينتين (300-700 كم)', unit: 'شاحنة مغلقة', minPrice: 4000, maxPrice: 7000, time: '1-2 يوم' },
        { type: 'نقل مسافات طويلة (700+ كم)', unit: 'شاحنة مغلقة', minPrice: 7000, maxPrice: 12000, time: '2-3 أيام' },
        { type: 'تغليف + فك + تركيب', unit: 'شقة متوسطة', minPrice: 1500, maxPrice: 3000 },
    ],
    'dabab': [
        { type: 'دباب نقل صغير — داخل الحي', unit: 'رحلة', minPrice: 50, maxPrice: 100 },
        { type: 'دباب نقل — داخل المدينة', unit: 'رحلة', minPrice: 100, maxPrice: 200 },
        { type: 'دباب نقل — قطعة أثاث كبيرة', unit: 'قطعة', minPrice: 80, maxPrice: 150 },
    ],
};
