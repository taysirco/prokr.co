import { PricingItem } from '../types';

export const cleaningPricing: Record<string, PricingItem[]> = {
    'cleaning': [
        { type: 'شقة صغيرة', unit: 'تنظيف شامل', minPrice: 200, maxPrice: 350, time: '3-4 ساعات' },
        { type: 'شقة متوسطة', unit: 'تنظيف شامل', minPrice: 350, maxPrice: 500, time: '4-6 ساعات' },
        { type: 'فيلا صغيرة', unit: 'تنظيف شامل', minPrice: 500, maxPrice: 800, time: '6-8 ساعات' },
        { type: 'فيلا كبيرة', unit: 'تنظيف شامل', minPrice: 800, maxPrice: 1500, time: 'يوم كامل' },
        { type: 'تنظيف بالساعة', unit: 'ساعة واحدة', minPrice: 35, maxPrice: 50 },
    ],
    'tanks-cleaning': [
        { type: 'خزان صغير (1-3 طن)', unit: 'تنظيف + تعقيم', minPrice: 150, maxPrice: 250 },
        { type: 'خزان متوسط (4-8 طن)', unit: 'تنظيف + تعقيم', minPrice: 250, maxPrice: 400 },
        { type: 'خزان كبير (10+ طن)', unit: 'تنظيف + تعقيم', minPrice: 400, maxPrice: 700 },
    ],
    'sofa-cleaning': [
        { type: 'كنبة 3 مقاعد', unit: 'قطعة', minPrice: 80, maxPrice: 120 },
        { type: 'كنبة 4 مقاعد', unit: 'قطعة', minPrice: 100, maxPrice: 150 },
        { type: 'طقم كنب كامل', unit: 'طقم', minPrice: 300, maxPrice: 500 },
        { type: 'مجلس عربي', unit: 'للمتر الطولي', minPrice: 30, maxPrice: 50 },
    ],
    'carpet-cleaning': [
        { type: 'سجادة صغيرة (2×3 م)', unit: 'قطعة', minPrice: 50, maxPrice: 80 },
        { type: 'سجادة متوسطة (3×4 م)', unit: 'قطعة', minPrice: 80, maxPrice: 120 },
        { type: 'سجادة كبيرة (4×6 م)', unit: 'قطعة', minPrice: 120, maxPrice: 180 },
        { type: 'موكيت', unit: 'للمتر المربع', minPrice: 8, maxPrice: 15 },
    ],
    'air-conditioner-cleaning': [
        { type: 'مكيف سبليت', unit: 'وحدة', minPrice: 80, maxPrice: 120 },
        { type: 'مكيف شباك', unit: 'وحدة', minPrice: 60, maxPrice: 90 },
        { type: 'مكيف مركزي', unit: 'وحدة', minPrice: 150, maxPrice: 300 },
    ],
};
