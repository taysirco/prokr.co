import { PricingItem } from '../types';

export const cleaningPricing: Record<string, PricingItem[]> = {
    'cleaning': [
        { type: 'تنظيف شقة صغيرة (غرفة-غرفتين) — عادي', unit: 'شقة', minPrice: 200, maxPrice: 350, time: '3-4 ساعات' },
        { type: 'تنظيف شقة متوسطة (3-4 غرف) — عادي', unit: 'شقة', minPrice: 350, maxPrice: 500, time: '4-6 ساعات' },
        { type: 'تنظيف فيلا صغيرة — عميق بالبخار + HEPA', unit: 'فيلا', minPrice: 500, maxPrice: 800, time: '6-8 ساعات' },
        { type: 'تنظيف فيلا كبيرة — شامل مع مجاري التكييف', unit: 'فيلا', minPrice: 800, maxPrice: 1500, time: 'يوم كامل' },
        { type: 'عقد شهري (4 زيارات) — فيلا أو مكتب', unit: 'شهرياً', minPrice: 1200, maxPrice: 3000 },
    ],
    'tanks-cleaning': [
        { type: 'خزان صغير (1-3 طن)', unit: 'تنظيف + تعقيم', minPrice: 150, maxPrice: 250 },
        { type: 'خزان متوسط (4-8 طن)', unit: 'تنظيف + تعقيم', minPrice: 250, maxPrice: 400 },
        { type: 'خزان كبير (10+ طن)', unit: 'تنظيف + تعقيم', minPrice: 400, maxPrice: 700 },
    ],
    'sofa-cleaning': [
        { type: 'كنبة 3 مقاعد', unit: 'قطعة', minPrice: 80, maxPrice: 120 },
        { type: 'كنبة 4 مقاعد', unit: 'قطعة', minPrice: 100, maxPrice: 150 },
        { type: 'طقم كنب كامل (L-shape)', unit: 'طقم', minPrice: 300, maxPrice: 500 },
        { type: 'مجلس عربي', unit: 'للمتر الطولي', minPrice: 30, maxPrice: 50 },
    ],
    'carpet-cleaning': [
        { type: 'سجادة صغيرة (2×3 م)', unit: 'قطعة', minPrice: 50, maxPrice: 80 },
        { type: 'سجادة متوسطة (3×4 م)', unit: 'قطعة', minPrice: 80, maxPrice: 120 },
        { type: 'سجادة كبيرة (4×6 م)', unit: 'قطعة', minPrice: 120, maxPrice: 180 },
        { type: 'موكيت', unit: 'للمتر المربع', minPrice: 8, maxPrice: 15 },
    ],
    'air-conditioner-cleaning': [
        { type: 'مكيف سبليت — غسيل داخلي بالبخار', unit: 'وحدة', minPrice: 80, maxPrice: 120 },
        { type: 'مكيف شباك — تنظيف شامل', unit: 'وحدة', minPrice: 60, maxPrice: 90 },
        { type: 'مكيف مركزي — تنظيف فلاتر + مجاري', unit: 'وحدة', minPrice: 150, maxPrice: 300 },
    ],
    'steam-cleaning': [
        { type: 'تنظيف بالبخار — شقة صغيرة', unit: 'شقة', minPrice: 250, maxPrice: 400, time: '2-3 ساعات' },
        { type: 'تنظيف بالبخار — شقة متوسطة', unit: 'شقة', minPrice: 400, maxPrice: 600, time: '3-5 ساعات' },
        { type: 'تنظيف بالبخار — فيلا', unit: 'فيلا', minPrice: 600, maxPrice: 1000, time: '5-8 ساعات' },
        { type: 'تعقيم بالبخار — سيارة', unit: 'سيارة', minPrice: 100, maxPrice: 180 },
    ],
    'sanitization': [
        { type: 'تعقيم شقة — ضبابي ULV', unit: 'شقة', minPrice: 200, maxPrice: 350 },
        { type: 'تعقيم فيلا — ضبابي + أوزون', unit: 'فيلا', minPrice: 350, maxPrice: 600 },
        { type: 'تعقيم مكتب / محل تجاري', unit: 'وحدة', minPrice: 300, maxPrice: 500 },
        { type: 'عقد تعقيم شهري (4 زيارات)', unit: 'شهرياً', minPrice: 800, maxPrice: 1500 },
    ],
    'mattress-cleaning': [
        { type: 'مرتبة مفردة (120 سم)', unit: 'قطعة', minPrice: 50, maxPrice: 80 },
        { type: 'مرتبة مزدوجة (160 سم)', unit: 'قطعة', minPrice: 80, maxPrice: 120 },
        { type: 'مرتبة كينج (180-200 سم)', unit: 'قطعة', minPrice: 100, maxPrice: 150 },
        { type: 'تنظيف مرتبة بالبخار + تعقيم مضاد للعث', unit: 'قطعة', minPrice: 120, maxPrice: 180 },
    ],
    'glass-facades-cleaning': [
        { type: 'واجهات زجاجية — مبنى صغير (3 طوابق)', unit: 'واجهة', minPrice: 500, maxPrice: 1000 },
        { type: 'واجهات زجاجية — برج تجاري', unit: 'للمتر المربع', minPrice: 5, maxPrice: 12 },
        { type: 'واجهات ألمنيوم + كلادينج', unit: 'للمتر المربع', minPrice: 8, maxPrice: 15 },
    ],
    'floor-cleaning': [
        { type: 'تنظيف أرضيات — شقة', unit: 'شقة', minPrice: 150, maxPrice: 300 },
        { type: 'تنظيف أرضيات — فيلا', unit: 'فيلا', minPrice: 300, maxPrice: 600 },
        { type: 'تنظيف أرضيات — مستودع / معرض', unit: 'للمتر المربع', minPrice: 5, maxPrice: 10 },
    ],
    'floor-polishing': [
        { type: 'جلي بلاط سيراميك — شقة', unit: 'شقة', minPrice: 300, maxPrice: 600 },
        { type: 'جلي بلاط بورسلان — فيلا', unit: 'فيلا', minPrice: 600, maxPrice: 1200 },
        { type: 'جلي + تلميع أرضيات', unit: 'للمتر المربع', minPrice: 10, maxPrice: 20 },
    ],
    'marble-polishing': [
        { type: 'جلي رخام — شقة', unit: 'شقة', minPrice: 500, maxPrice: 1000 },
        { type: 'جلي رخام — فيلا أو قصر', unit: 'فيلا', minPrice: 1000, maxPrice: 2500 },
        { type: 'جلي + تلميع كريستال', unit: 'للمتر المربع', minPrice: 15, maxPrice: 30 },
    ],
    'villas-cleaning': [
        { type: 'فيلا صغيرة (3 غرف + صالة)', unit: 'فيلا', minPrice: 500, maxPrice: 800, time: '5-7 ساعات' },
        { type: 'فيلا متوسطة (5 غرف + حديقة)', unit: 'فيلا', minPrice: 800, maxPrice: 1200, time: '7-10 ساعات' },
        { type: 'فيلا كبيرة / دوبلكس', unit: 'فيلا', minPrice: 1200, maxPrice: 2000, time: 'يوم كامل' },
    ],
    'apartments-cleaning': [
        { type: 'شقة غرفة واحدة — استوديو', unit: 'شقة', minPrice: 150, maxPrice: 250, time: '2-3 ساعات' },
        { type: 'شقة غرفتين', unit: 'شقة', minPrice: 200, maxPrice: 350, time: '3-4 ساعات' },
        { type: 'شقة 3 غرف أو أكثر', unit: 'شقة', minPrice: 350, maxPrice: 550, time: '4-6 ساعات' },
    ],
    'palaces-cleaning': [
        { type: 'قصر — تنظيف أساسي', unit: 'زيارة', minPrice: 2000, maxPrice: 4000, time: 'يوم كامل' },
        { type: 'قصر — تنظيف عميق شامل', unit: 'زيارة', minPrice: 4000, maxPrice: 8000, time: '2-3 أيام' },
        { type: 'عقد شهري — قصر', unit: 'شهرياً', minPrice: 5000, maxPrice: 12000 },
    ],
    'shops-cleaning': [
        { type: 'محل تجاري صغير', unit: 'زيارة', minPrice: 100, maxPrice: 200 },
        { type: 'محل تجاري كبير / معرض', unit: 'زيارة', minPrice: 200, maxPrice: 400 },
        { type: 'عقد تنظيف يومي', unit: 'شهرياً', minPrice: 1000, maxPrice: 2000 },
    ],
    'office-cleaning': [
        { type: 'مكتب صغير (حتى 100 م²)', unit: 'زيارة', minPrice: 150, maxPrice: 300 },
        { type: 'مكتب متوسط (100-300 م²)', unit: 'زيارة', minPrice: 300, maxPrice: 500 },
        { type: 'عقد تنظيف مكاتب يومي', unit: 'شهرياً', minPrice: 2000, maxPrice: 4000 },
    ],
    'furniture-cleaning': [
        { type: 'طقم كنب (5-7 قطع)', unit: 'طقم', minPrice: 250, maxPrice: 450 },
        { type: 'مجلس عربي كامل', unit: 'مجلس', minPrice: 200, maxPrice: 400 },
        { type: 'ستائر (للمتر)', unit: 'للمتر الطولي', minPrice: 15, maxPrice: 30 },
    ],
    'kitchen-cleaning': [
        { type: 'تنظيف مطبخ — عادي', unit: 'مطبخ', minPrice: 100, maxPrice: 200 },
        { type: 'تنظيف مطبخ — عميق مع إزالة الدهون', unit: 'مطبخ', minPrice: 200, maxPrice: 350 },
        { type: 'تنظيف مطبخ تجاري / مطعم', unit: 'مطبخ', minPrice: 500, maxPrice: 1000 },
    ],
    'swimming-pool-cleaning': [
        { type: 'تنظيف مسبح صغير (حتى 30 م³)', unit: 'مسبح', minPrice: 200, maxPrice: 400 },
        { type: 'تنظيف مسبح كبير (30+ م³)', unit: 'مسبح', minPrice: 400, maxPrice: 700 },
        { type: 'عقد صيانة شهري — مسبح', unit: 'شهرياً', minPrice: 500, maxPrice: 1000 },
    ],
    'auto-cleaning': [
        { type: 'غسيل سيارة خارجي', unit: 'سيارة', minPrice: 30, maxPrice: 60 },
        { type: 'تنظيف داخلي + خارجي — سيدان', unit: 'سيارة', minPrice: 80, maxPrice: 150 },
        { type: 'تنظيف عميق — جيب / SUV', unit: 'سيارة', minPrice: 120, maxPrice: 200 },
        { type: 'تلميع + حماية سيراميك', unit: 'سيارة', minPrice: 300, maxPrice: 800 },
    ],
    'oven-cleaning': [
        { type: 'فرن كهربائي / غاز — عادي', unit: 'فرن', minPrice: 50, maxPrice: 100 },
        { type: 'فرن مدمج / بلت إن — عميق', unit: 'فرن', minPrice: 80, maxPrice: 150 },
        { type: 'فرن تجاري / مطعم', unit: 'فرن', minPrice: 150, maxPrice: 300 },
    ],
    'councils-cleaning': [
        { type: 'مجلس صغير (حتى 4 م طولي)', unit: 'مجلس', minPrice: 100, maxPrice: 180 },
        { type: 'مجلس متوسط (4-8 م طولي)', unit: 'مجلس', minPrice: 180, maxPrice: 300 },
        { type: 'مجلس كبير (8+ م) — بخار + تعقيم', unit: 'مجلس', minPrice: 300, maxPrice: 500 },
    ],
    'hourly-cleaning': [
        { type: 'عاملة تنظيف — ساعة واحدة', unit: 'ساعة', minPrice: 35, maxPrice: 50 },
        { type: 'عاملة تنظيف — 4 ساعات', unit: 'جلسة', minPrice: 120, maxPrice: 180 },
        { type: 'عاملة تنظيف — يوم كامل (8 ساعات)', unit: 'يوم', minPrice: 200, maxPrice: 350 },
    ],
    'restaurant-chimney-cleaning': [
        { type: 'مدخنة مطعم صغير', unit: 'مدخنة', minPrice: 300, maxPrice: 600 },
        { type: 'مدخنة مطعم كبير / سلسلة', unit: 'مدخنة', minPrice: 600, maxPrice: 1200 },
        { type: 'فلاتر + مروحة شفط', unit: 'وحدة', minPrice: 200, maxPrice: 400 },
    ],
    'ac-maintenance': [
        { type: 'صيانة مكيف سبليت — فحص + تعبئة فريون', unit: 'وحدة', minPrice: 100, maxPrice: 200 },
        { type: 'صيانة مكيف مركزي — فحص شامل', unit: 'وحدة', minPrice: 200, maxPrice: 400 },
        { type: 'عقد صيانة سنوي — 4 زيارات', unit: 'سنوياً', minPrice: 400, maxPrice: 800 },
    ],
    'ac-installation': [
        { type: 'تركيب مكيف سبليت (1-1.5 طن)', unit: 'وحدة', minPrice: 200, maxPrice: 350 },
        { type: 'تركيب مكيف سبليت (2-2.5 طن)', unit: 'وحدة', minPrice: 300, maxPrice: 500 },
        { type: 'تركيب مكيف كونسيلد / مركزي', unit: 'وحدة', minPrice: 500, maxPrice: 1000 },
    ],
};
