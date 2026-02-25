import { CityContext } from '../../city-context';

export const jubailContext: CityContext = {
    slug: 'jubail',
    name_ar: 'الجبيل',
    coordinates: { lat: 27.0046, lng: 49.6225 },
    climate: 'humid-coastal',
    challenges: [
        'مدينة صناعية',
        'غبار المصانع',
        'بعد نسبي عن المدن الكبرى',
    ],
    urbanTraits: [
        'أكبر مدينة صناعية',
        'مصانع بتروكيماوية',
        'سكن للعمالة',
    ],
    priceModifier: 0.9,
    neighborhoods: [
        { name_ar: 'الجبيل الصناعية', name_en: 'Jubail Industrial', type: 'industrial' },
        { name_ar: 'الجبيل البلد', name_en: 'Jubail City', type: 'residential' },
        { name_ar: 'حي الفناتير', name_en: 'Al Fanateer', type: 'residential' },
    ],
    serviceNuances: {
        cleaning: [
            'تنظيف من الأتربة الصناعية',
            'فلاتر المكيفات تحتاج تبديلاً أكثر',
        ],
    },
    responseTime: 'نفس اليوم',
    nearbyCities: ['الدمام', 'القطيف'],
};
