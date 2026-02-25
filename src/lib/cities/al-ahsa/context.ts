import { CityContext } from '../../city-context';

export const alAhsaContext: CityContext = {
    slug: 'al-ahsa',
    name_ar: 'الاحساء',
    coordinates: { lat: 25.3648, lng: 49.5889 },
    climate: 'dry-hot',
    challenges: [
        'واحة زراعية كبيرة',
        'حشرات زراعية موسمية',
        'رطوبة من الينابيع',
    ],
    urbanTraits: [
        'أكبر واحة نخيل في العالم',
        'تراث ثقافي غني',
        'سياحة زراعية',
    ],
    priceModifier: 0.8,
    neighborhoods: [
        { name_ar: 'الهفوف', name_en: 'Al Hofuf', type: 'mixed' },
        { name_ar: 'المبرز', name_en: 'Al Mubarraz', type: 'residential' },
        { name_ar: 'العيون', name_en: 'Al Oyoun', type: 'residential' },
        { name_ar: 'الطرف', name_en: 'Al Taraf', type: 'residential' },
    ],
    serviceNuances: {
        'pest-control': [
            'مكافحة حشرات النخيل',
            'سوسة النخيل منتشرة',
            'ذباب الفاكهة',
        ],
    },
    responseTime: 'خلال ساعتين',
    nearbyCities: ['الدمام', 'القطيف', 'الجبيل'],
};
