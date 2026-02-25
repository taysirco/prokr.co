import { CityContext } from '../../city-context';

export const buraidahContext: CityContext = {
    slug: 'buraidah',
    name_ar: 'بريدة',
    coordinates: { lat: 26.3292, lng: 43.9610 },
    climate: 'dry-hot',
    challenges: [
        'الرياح الباردة شتاءً تتطلب عزلاً جيداً',
        'الغبار في فصل الربيع',
    ],
    urbanTraits: [
        'عاصمة منطقة القصيم',
        'سوق التمور الشهير',
        'مدينة تجارية نشطة',
    ],
    priceModifier: 0.78,
    neighborhoods: [
        { name_ar: 'حي الخليج', name_en: 'Al Khaleej', type: 'residential' },
        { name_ar: 'حي الفايزية', name_en: 'Al Faiziyah', type: 'residential' },
        { name_ar: 'حي الإسكان', name_en: 'Al Iskan', type: 'residential' },
        { name_ar: 'الريان', name_en: 'Al Rayyan', type: 'mixed' },
    ],
    serviceNuances: {
        insulation: [
            'العزل الحراري مهم للبرودة الشتوية',
            'الخزانات تحتاج حماية من التجمد',
        ],
    },
    responseTime: 'خلال ساعتين',
    nearbyCities: ['عنيزة', 'القصيم', 'الرس'],
};
