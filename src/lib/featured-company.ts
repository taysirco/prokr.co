// ============================================
// الشركة المميزة الأساسية — تظهر أولاً في جميع صفحات الخدمات
// Featured Verified Company — appears first on ALL service pages
// ============================================

import type { Advertiser } from '@/types';

/**
 * الاسطورة — شركة موثقة أساسية تظهر في كل صفحات الخدمات
 * بجميع المدن وجميع القطاعات
 * 
 * السجل التجاري: 4030253566
 * الرقم الضريبي: 311280328300003
 */
export const FEATURED_COMPANY: Advertiser = {
    id: 'featured-al-ostora',
    short_code: 'OSTORA',
    business_name: 'الاسطورة',
    phone_number: '+966564612017',
    whatsapp_number: '+966564612017',
    logo_url: '',
    is_premium: true,
    priority_score: 100, // أعلى أولوية — دائماً الأول
    subscription_expiry: null,
    targeted_cities: [], // ستُملأ ديناميكياً — تغطي جميع المدن
    targeted_services: [], // ستُملأ ديناميكياً — تغطي جميع الخدمات
    targeted_neighborhoods: [],
    description: 'شركة الاسطورة — خدمات منزلية شاملة في جميع مدن المملكة العربية السعودية. شركة مرخصة ومعتمدة بسجل تجاري ساري.',
    gallery: [],
    reviews: [
        {
            id: 'review-ostora-1',
            user: 'عبدالله م.',
            rating: 5,
            comment: 'شركة ممتازة والتزام بالمواعيد، خدمة احترافية من البداية حتى النهاية.',
            date: '2026-03-15T10:00:00Z',
        },
        {
            id: 'review-ostora-2',
            user: 'خالد ع.',
            rating: 5,
            comment: 'أسعار منافسة وجودة عالية، أنصح بالتعامل معهم.',
            date: '2026-04-02T14:30:00Z',
        },
        {
            id: 'review-ostora-3',
            user: 'محمد س.',
            rating: 5,
            comment: 'فريق عمل محترف ومتعاون، تم تنفيذ الخدمة بأعلى مستوى.',
            date: '2026-04-20T09:15:00Z',
        },
    ],
    is_active: true,
    created_at: new Date('2025-01-01'),
    updated_at: new Date('2026-05-01'),
    // بيانات التحقق الرسمية
    crn: '4030253566',
    zatca_registered: true,
    qiwa_registered: true,
    has_verified_employees: true,
    nitaqat_band: 'platinum',
};

/**
 * حقن الشركة المميزة في بداية قائمة المعلنين
 * يتم استدعاؤها تلقائياً من getAdvertisersBySilo
 */
export function injectFeaturedCompany(
    premium: Advertiser[],
    citySlug: string,
    serviceSlug: string
): Advertiser[] {
    // إنشاء نسخة مع المدينة والخدمة الحالية
    const featured: Advertiser = {
        ...FEATURED_COMPANY,
        targeted_cities: [citySlug],
        targeted_services: [serviceSlug],
    };

    // تأكد من عدم التكرار إذا كانت موجودة مسبقاً
    const filtered = premium.filter(a => a.id !== 'featured-al-ostora');

    // الاسطورة دائماً في المقدمة
    return [featured, ...filtered];
}
