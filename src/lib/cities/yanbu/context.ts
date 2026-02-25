import { CityContext } from '../../city-context';

export const yanbuContext: CityContext = {
    slug: 'yanbu',
    name_ar: 'ينبع',
    coordinates: { lat: 24.0895, lng: 38.0618 },
    climate: 'humid-coastal',
    challenges: [
        'الرطوبة الساحلية العالية',
        'ملوحة الهواء',
        'مدينة صناعية',
    ],
    urbanTraits: [
        'ميناء صناعي رئيسي',
        'وجود مصانع بتروكيماوية',
        'سكن للعمالة الصناعية',
    ],
    priceModifier: 0.95,
    neighborhoods: [
        { name_ar: 'ينبع الصناعية', name_en: 'Yanbu Industrial', type: 'industrial' },
        { name_ar: 'ينبع البحر', name_en: 'Yanbu Al Bahr', type: 'residential' },
        { name_ar: 'الحي المتوسط', name_en: 'Central District', type: 'mixed' },
    ],
    serviceNuances: {
        cleaning: [
            'تنظيف من الأتربة الصناعية',
            'مكافحة التآكل من الملوحة',
        ],
        'pest-control': [
            'مكافحة حشرات المستودعات الصناعية',
        ],
    },
    responseTime: 'خلال ساعتين',
    nearbyCities: ['المدينة المنورة', 'رابغ'],
};
