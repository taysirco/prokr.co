import { CityContext } from '../../city-context';

export const dammamContext: CityContext = {
    slug: 'dammam',
    name_ar: 'الدمام',
    coordinates: { lat: 26.4207, lng: 50.0888 },
    climate: 'humid-coastal',
    challenges: [
        'الرطوبة العالية من الخليج',
        'العواصف الرملية أحياناً',
        'كثافة سكانية عالية',
    ],
    urbanTraits: [
        'عاصمة المنطقة الشرقية',
        'مركز صناعي ونفطي',
        'مجمعات سكنية لموظفي أرامكو',
    ],
    priceModifier: 1.05,
    neighborhoods: [
        { name_ar: 'الفيصلية', name_en: 'Al Faisaliyah', type: 'residential' },
        { name_ar: 'الدانة', name_en: 'Al Danah', type: 'residential' },
        { name_ar: 'الراكة', name_en: 'Al Rakah', type: 'residential' },
        { name_ar: 'الخالدية', name_en: 'Al Khalidiyah', type: 'mixed' },
        { name_ar: 'الشاطئ الشرقي', name_en: 'Eastern Beach', type: 'residential' },
        { name_ar: 'الواحة', name_en: 'Al Wahah', type: 'residential' },
    ],
    serviceNuances: {
        moving: [
            'نقل للمجمعات السكنية الخاصة',
            'تحتاج تصاريح لبعض المناطق النفطية',
        ],
        cleaning: [
            'تنظيف من الغبار الصناعي',
            'معالجة الصدأ من الرطوبة',
        ],
        'pest-control': [
            'مكافحة الذباب والبعوض الساحلي',
            'النمل الأبيض في المباني القديمة',
        ],
    },
    responseTime: 'خلال ساعة',
    nearbyCities: ['الخبر', 'الظهران', 'القطيف'],
};
