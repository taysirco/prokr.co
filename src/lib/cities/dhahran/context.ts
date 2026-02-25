import { CityContext } from '../../city-context';

export const dhahranContext: CityContext = {
    slug: 'dhahran',
    name_ar: 'الظهران',
    coordinates: { lat: 26.2361, lng: 50.1150 },
    climate: 'humid-coastal',
    challenges: [
        'منطقة أمنية (قرب أرامكو)',
        'تصاريح دخول مطلوبة أحياناً',
    ],
    urbanTraits: [
        'مقر أرامكو السعودية',
        'جامعة الملك فهد للبترول',
        'مجمعات سكنية مغلقة',
    ],
    priceModifier: 1.2,
    neighborhoods: [
        { name_ar: 'حي أرامكو', name_en: 'Aramco District', type: 'residential' },
        { name_ar: 'حي الجامعة', name_en: 'University District', type: 'mixed' },
        { name_ar: 'نادي الظهران', name_en: 'Dhahran Club', type: 'residential' },
    ],
    serviceNuances: {
        moving: [
            'تحتاج تصاريح لدخول المجمعات',
            'أوقات محددة للعمل',
        ],
    },
    responseTime: 'حسب التصريح',
    nearbyCities: ['الخبر', 'الدمام'],
};
