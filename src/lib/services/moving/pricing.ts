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
    'intercity-moving': [
        { type: 'نقل بين مدينتين (حتى 300 كم)', unit: 'شاحنة مغلقة', minPrice: 2000, maxPrice: 4000, time: 'يوم واحد' },
        { type: 'نقل بين مدينتين (300-700 كم)', unit: 'شاحنة مغلقة', minPrice: 4000, maxPrice: 7000, time: '1-2 يوم' },
        { type: 'نقل مسافات طويلة (700+ كم)', unit: 'شاحنة مغلقة', minPrice: 7000, maxPrice: 12000, time: '2-3 أيام' },
        { type: 'تغليف + فك + تركيب', unit: 'شقة متوسطة', minPrice: 1500, maxPrice: 3000 },
    ],
    'international-moving': [
        { type: 'شحن بري (دول الخليج)', unit: 'حاوية 20 قدم', minPrice: 5000, maxPrice: 10000, time: '3-5 أيام' },
        { type: 'شحن بري (الأردن/مصر)', unit: 'حاوية 20 قدم', minPrice: 8000, maxPrice: 15000, time: '5-10 أيام' },
        { type: 'شحن بحري', unit: 'حاوية 20 قدم', minPrice: 6000, maxPrice: 12000, time: '15-30 يوم' },
        { type: 'شحن جوي', unit: 'للكيلو', minPrice: 15, maxPrice: 35, time: '2-5 أيام' },
        { type: 'تخليص جمركي', unit: 'شحنة', minPrice: 1500, maxPrice: 3500 },
    ],
    'heavy-equipment-moving': [
        { type: 'نقل معدة حتى 5 طن', unit: 'رحلة', minPrice: 1500, maxPrice: 3000, time: '2-4 ساعات' },
        { type: 'نقل معدة 5-20 طن', unit: 'رحلة لوبد', minPrice: 3000, maxPrice: 7000, time: '4-8 ساعات' },
        { type: 'نقل معدة 20-50 طن', unit: 'رحلة لوبد + كرين', minPrice: 7000, maxPrice: 15000, time: 'يوم كامل' },
        { type: 'نقل معدة فائقة الثقل (50+ طن)', unit: 'مشروع متكامل', minPrice: 15000, maxPrice: 50000, time: '1-3 أيام' },
    ],
    'vehicle-transport': [
        { type: 'سطحة مفتوحة — داخل المدينة', unit: 'سيارة واحدة', minPrice: 150, maxPrice: 350 },
        { type: 'سطحة مغلقة — داخل المدينة', unit: 'سيارة واحدة', minPrice: 300, maxPrice: 600 },
        { type: 'شحن سيارة بين المدن (حتى 500 كم)', unit: 'سيارة واحدة', minPrice: 800, maxPrice: 1500, time: 'يوم واحد' },
        { type: 'شحن سيارة بين المدن (500+ كم)', unit: 'سيارة واحدة', minPrice: 1500, maxPrice: 3000, time: '1-2 يوم' },
        { type: 'شحن سيارة فارهة (مغلقة)', unit: 'سيارة واحدة', minPrice: 2500, maxPrice: 5000 },
    ],
    'furniture-packaging': [
        { type: 'تغليف شقة صغيرة (غرفة-غرفتين)', unit: 'شامل المواد', minPrice: 300, maxPrice: 500, time: '1-2 ساعة' },
        { type: 'تغليف شقة متوسطة (3-4 غرف)', unit: 'شامل المواد', minPrice: 500, maxPrice: 800, time: '2-3 ساعات' },
        { type: 'تغليف فيلا', unit: 'شامل المواد', minPrice: 800, maxPrice: 1500, time: '3-5 ساعات' },
        { type: 'تغليف قطعة واحدة (زجاج/كريستال)', unit: 'قطعة', minPrice: 50, maxPrice: 150 },
    ],
};
