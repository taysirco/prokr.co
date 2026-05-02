// ============================================
// الشركة المميزة الأساسية — تظهر أولاً في جميع صفحات الخدمات
// Featured Verified Company — appears first on ALL service pages
// ============================================

import type { Advertiser } from '@/types';
import { CITIES, SERVICES } from '@/lib/seed';

// جميع slugs المدن والخدمات لصفحة الشركة
const ALL_CITY_SLUGS = CITIES.map(c => c.slug);
const ALL_SERVICE_SLUGS = SERVICES.map(s => s.slug);

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
    logo_url: '/images/logos/al-ostora.webp',
    is_premium: true,
    priority_score: 100, // أعلى أولوية — دائماً الأول
    subscription_expiry: null,
    targeted_cities: ALL_CITY_SLUGS,
    targeted_services: ALL_SERVICE_SLUGS,
    targeted_neighborhoods: [],
    description: 'شركة الاسطورة — شركة رائدة في مجال الخدمات المنزلية الشاملة بالمملكة العربية السعودية. نقدم خدمات نقل العفش، التنظيف، مكافحة الحشرات، كشف تسربات المياه، العزل، وصيانة المكيفات بأعلى معايير الجودة. فريق عمل مدرب ومعتمد، أسعار تنافسية شفافة، وضمان على جميع الخدمات. نغطي جميع مدن المملكة بخبرة تمتد لسنوات في خدمة آلاف العملاء. مرخصة ومعتمدة بسجل تجاري ساري رقم 4030253566.',
    gallery: [],
    reviews: [
        {
            id: 'review-ostora-1',
            user: 'عبدالله م.',
            rating: 5,
            comment: 'شركة ممتازة والتزام بالمواعيد، خدمة احترافية من البداية حتى النهاية. تعاملت معهم في نقل عفش وكانت التجربة ممتازة.',
            date: '2026-03-15T10:00:00Z',
        },
        {
            id: 'review-ostora-2',
            user: 'خالد ع.',
            rating: 5,
            comment: 'أسعار منافسة وجودة عالية، أنصح بالتعامل معهم. تنظيف شامل واحترافي للشقة.',
            date: '2026-04-02T14:30:00Z',
        },
        {
            id: 'review-ostora-3',
            user: 'محمد س.',
            rating: 5,
            comment: 'فريق عمل محترف ومتعاون، تم تنفيذ خدمة مكافحة الحشرات بأعلى مستوى وبدون أي إزعاج.',
            date: '2026-04-20T09:15:00Z',
        },
        {
            id: 'review-ostora-4',
            user: 'فهد ر.',
            rating: 5,
            comment: 'كشف تسربات المياه بدقة عالية وإصلاح فوري. شركة موثوقة ومحترفة.',
            date: '2026-04-28T11:00:00Z',
        },
        {
            id: 'review-ostora-5',
            user: 'سعود ن.',
            rating: 4,
            comment: 'خدمة عزل ممتازة، الفريق ملتزم والنتائج واضحة. سعر معقول مقارنة بالسوق.',
            date: '2026-05-01T16:45:00Z',
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
    // إنشاء نسخة مع المدينة والخدمة الحالية في المقدمة
    const featured: Advertiser = {
        ...FEATURED_COMPANY,
        targeted_cities: [citySlug, ...FEATURED_COMPANY.targeted_cities.filter(c => c !== citySlug)],
        targeted_services: [serviceSlug, ...FEATURED_COMPANY.targeted_services.filter(s => s !== serviceSlug)],
    };

    // تأكد من عدم التكرار إذا كانت موجودة مسبقاً
    const filtered = premium.filter(a => a.id !== 'featured-al-ostora');

    // الاسطورة دائماً في المقدمة
    return [featured, ...filtered];
}

/**
 * التحقق من كون الكود هو كود الشركة المميزة
 */
export function isFeaturedCompanyCode(shortCode: string): boolean {
    return shortCode === FEATURED_COMPANY.short_code;
}

/**
 * الحصول على بيانات الشركة المميزة الكاملة لصفحة الشركة
 */
export function getFeaturedCompanyProfile(): Advertiser {
    return FEATURED_COMPANY;
}
