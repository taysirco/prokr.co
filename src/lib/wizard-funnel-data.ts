// ============================================
// Wizard Funnel Data v2
// قمع الاحتجاز التفاعلي — ذكاء ومرونة
// ============================================

import { getMarketTimingPhase, getHourlyMode, type MarketTimingPhase } from './market-timing';

/**
 * Step 1: Service Types — 6 main categories
 */
export const WIZARD_SERVICE_TYPES = [
    { id: 'moving', label: 'نقل عفش', emoji: '🚛' },
    { id: 'cleaning', label: 'تنظيف', emoji: '🧹' },
    { id: 'pest-control', label: 'مكافحة حشرات', emoji: '🛡️' },
    { id: 'leak-detection', label: 'كشف تسربات', emoji: '💧' },
    { id: 'sewage', label: 'صرف صحي', emoji: '🔧' },
    { id: 'insulation', label: 'عزل', emoji: '🏗️' },
] as const;

export type WizardServiceType = typeof WIZARD_SERVICE_TYPES[number]['id'];

/**
 * Step 2: Property Types
 */
export const WIZARD_PROPERTY_TYPES = [
    { id: 'apartment', label: 'شقة', emoji: '🏢' },
    { id: 'villa', label: 'فيلا', emoji: '🏡' },
    { id: 'floor', label: 'دور', emoji: '🏠' },
    { id: 'palace', label: 'قصر', emoji: '🏰' },
    { id: 'office', label: 'مكتب / تجاري', emoji: '🏬' },
    { id: 'rest-house', label: 'استراحة', emoji: '🌴' },
] as const;

export type WizardPropertyType = typeof WIZARD_PROPERTY_TYPES[number]['id'];

/**
 * Step 4: Budget Ranges — vary by service
 */
export const WIZARD_BUDGET_RANGES: Record<string, { id: string; label: string }[]> = {
    moving: [
        { id: 'under-500', label: 'أقل من 500 ريال' },
        { id: '500-1000', label: '500 — 1,000 ريال' },
        { id: '1000-2000', label: '1,000 — 2,000 ريال' },
        { id: '2000-5000', label: '2,000 — 5,000 ريال' },
        { id: 'over-5000', label: 'أكثر من 5,000 ريال' },
    ],
    cleaning: [
        { id: 'under-200', label: 'أقل من 200 ريال' },
        { id: '200-500', label: '200 — 500 ريال' },
        { id: '500-1000', label: '500 — 1,000 ريال' },
        { id: 'over-1000', label: 'أكثر من 1,000 ريال' },
    ],
    'pest-control': [
        { id: 'under-200', label: 'أقل من 200 ريال' },
        { id: '200-500', label: '200 — 500 ريال' },
        { id: '500-1000', label: '500 — 1,000 ريال' },
        { id: 'over-1000', label: 'أكثر من 1,000 ريال' },
    ],
    'leak-detection': [
        { id: 'under-300', label: 'أقل من 300 ريال' },
        { id: '300-700', label: '300 — 700 ريال' },
        { id: '700-1500', label: '700 — 1,500 ريال' },
        { id: 'over-1500', label: 'أكثر من 1,500 ريال' },
    ],
    sewage: [
        { id: 'under-200', label: 'أقل من 200 ريال' },
        { id: '200-500', label: '200 — 500 ريال' },
        { id: '500-1000', label: '500 — 1,000 ريال' },
        { id: 'over-1000', label: 'أكثر من 1,000 ريال' },
    ],
    insulation: [
        { id: 'under-1000', label: 'أقل من 1,000 ريال' },
        { id: '1000-3000', label: '1,000 — 3,000 ريال' },
        { id: '3000-7000', label: '3,000 — 7,000 ريال' },
        { id: 'over-7000', label: 'أكثر من 7,000 ريال' },
    ],
};

/**
 * Major cities for Step 3 fallback
 */
export const WIZARD_MAJOR_CITIES = [
    { slug: 'riyadh', name: 'الرياض' },
    { slug: 'jeddah', name: 'جدة' },
    { slug: 'dammam', name: 'الدمام' },
    { slug: 'makkah', name: 'مكة المكرمة' },
    { slug: 'madinah', name: 'المدينة المنورة' },
    { slug: 'al-khobar', name: 'الخبر' },
    { slug: 'taif', name: 'الطائف' },
    { slug: 'tabuk', name: 'تبوك' },
    { slug: 'abha', name: 'أبها' },
    { slug: 'hail', name: 'حائل' },
    { slug: 'jubail', name: 'الجبيل' },
    { slug: 'khamis-mushait', name: 'خميس مشيط' },
    { slug: 'najran', name: 'نجران' },
    { slug: 'jazan', name: 'جازان' },
    { slug: 'yanbu', name: 'ينبع' },
    { slug: 'al-ahsa', name: 'الأحساء' },
    { slug: 'buraidah', name: 'بريدة' },
    { slug: 'qatif', name: 'القطيف' },
    { slug: 'al-baha', name: 'الباحة' },
    { slug: 'al-kharj', name: 'الخرج' },
    { slug: 'qassim', name: 'القصيم' },
    { slug: 'onizah', name: 'عنيزة' },
    { slug: 'dhahran', name: 'الظهران' },
    { slug: 'hafr-albatin', name: 'حفر الباطن' },
] as const;

/**
 * Wizard step labels
 */
export const WIZARD_STEPS = [
    { number: 1, label: 'نوع الخدمة', gaName: 'service_type' },
    { number: 2, label: 'نوع العقار', gaName: 'property_type' },
    { number: 3, label: 'الموقع', gaName: 'location' },
    { number: 4, label: 'الميزانية', gaName: 'budget' },
    { number: 5, label: 'رقم الجوال', gaName: 'phone_submit' },
] as const;

/**
 * WhatsApp number for lead delivery
 */
export const WIZARD_WHATSAPP_NUMBER = '966542317431';

// ============================================
// 🧠 Market Timing-Aware Content
// ============================================

export interface WizardTimingConfig {
    ctaText: string;
    ctaSubtext: string;
    modalTitle: string;
    modalSubtitle: string;
    ctaEmoji: string;
    badgeText: string;
    /** Extra budget option for urgency phase */
    extraBudgetOption?: { id: string; label: string };
    /** Whether to show installment badge in success */
    showInstallment: boolean;
    /** Whether this is night/emergency mode */
    isNightMode: boolean;
}

/**
 * Returns timing-aware wizard content based on market phase + time of day
 */
export function getWizardTimingConfig(): WizardTimingConfig {
    const hourlyMode = getHourlyMode();

    // Night emergency mode overrides everything
    if (hourlyMode === 'emergency') {
        return {
            ctaText: 'طوارئ ليلية — احصل على فريق الآن',
            ctaSubtext: 'استجابة فورية 24/7',
            modalTitle: '🚨 خدمة طوارئ ليلية',
            modalSubtitle: 'فرق جاهزة للتحرك خلال 30 دقيقة',
            ctaEmoji: '🚨',
            badgeText: 'متاح الآن',
            showInstallment: false,
            isNightMode: true,
        };
    }

    const phase = getMarketTimingPhase();
    return TIMING_CONFIGS[phase];
}

const TIMING_CONFIGS: Record<MarketTimingPhase, WizardTimingConfig> = {
    premium: {
        ctaText: 'احصل على 3 عروض VIP حصرية',
        ctaSubtext: 'موسم الرواتب — عروض لن تتكرر',
        modalTitle: '💎 عروض VIP — موسم الرواتب',
        modalSubtitle: 'استثمر في خدمة احترافية بضمان سنة كاملة',
        ctaEmoji: '💎',
        badgeText: '+10,000 عميل حصلوا على عروض VIP',
        showInstallment: false,
        isNightMode: false,
    },
    budget: {
        ctaText: 'احصل على أفضل سعر مضمون',
        ctaSubtext: 'أسعار خاصة لمنتصف الشهر',
        modalTitle: '💚 أفضل سعر مضمون',
        modalSubtitle: 'دع 3 شركات معتمدة تتنافس على خدمتك',
        ctaEmoji: '⚡',
        badgeText: '+10,000 عميل وفّروا مع بروكر',
        showInstallment: false,
        isNightMode: false,
    },
    urgency: {
        ctaText: 'احجز الآن — ادفع بعد الراتب 💳',
        ctaSubtext: 'تقسيط تابي وتمارا بدون فوائد',
        modalTitle: '🔥 احجز الآن — ادفع لاحقاً',
        modalSubtitle: 'تقسيط بدون فوائد عبر تابي وتمارا',
        ctaEmoji: '🔥',
        badgeText: 'تقسيط متاح — ادفع على 4 دفعات',
        extraBudgetOption: { id: 'pay-later', label: '💳 ادفع لاحقاً — تقسيط تابي/تمارا' },
        showInstallment: true,
        isNightMode: false,
    },
};

// ============================================
// 🏗️ Utility Functions
// ============================================

/**
 * Map service slug to wizard category ID
 */
export function mapServiceSlugToCategory(slug: string): string | undefined {
    const map: Record<string, string> = {
        'furniture-moving': 'moving', 'furniture-storage': 'moving', 'moving-out': 'moving',
        'international-moving': 'moving', 'furniture-assembly': 'moving', 'dyna': 'moving',
        'house-cleaning': 'cleaning', 'apartment-cleaning': 'cleaning', 'villa-cleaning': 'cleaning',
        'carpet-cleaning': 'cleaning', 'sofa-cleaning': 'cleaning', 'deep-cleaning': 'cleaning',
        'tank-cleaning': 'cleaning', 'facade-cleaning': 'cleaning', 'swimming-pool-cleaning': 'cleaning',
        'ac-cleaning': 'cleaning', 'office-cleaning': 'cleaning', 'after-construction-cleaning': 'cleaning',
        'cleaning': 'cleaning', 'apartments-cleaning': 'cleaning', 'villas-cleaning': 'cleaning',
        'pest-control': 'pest-control', 'termite-control': 'pest-control', 'cockroach-control': 'pest-control',
        'bed-bug-treatment': 'pest-control', 'rodent-control': 'pest-control', 'mosquito-control': 'pest-control',
        'snake-control': 'pest-control', 'pigeon-control': 'pest-control',
        'sewage-cleaning': 'sewage', 'sewer-repair': 'sewage', 'septic-tank': 'sewage',
        'sewage-suction': 'sewage', 'drain-unblocking': 'sewage',
        'water-leak-detection': 'leak-detection', 'roof-leak-repair': 'leak-detection',
        'pipe-repair': 'leak-detection', 'bathroom-leak-repair': 'leak-detection',
        'water-heater-repair': 'leak-detection',
        'roof-insulation': 'insulation', 'thermal-insulation': 'insulation',
        'water-insulation': 'insulation', 'foam-insulation': 'insulation',
        'swimming-pool-insulation': 'insulation', 'tank-insulation': 'insulation',
    };
    return map[slug] || undefined;
}

/**
 * Build WhatsApp message from wizard data
 */
export function buildWizardWhatsAppMessage(data: {
    service: string;
    property: string;
    location: string;
    budget: string;
    phone: string;
    /** Optional: company name being compared */
    compareWith?: string;
}): string {
    const serviceLabel = WIZARD_SERVICE_TYPES.find(s => s.id === data.service)?.label || data.service;
    const propertyLabel = WIZARD_PROPERTY_TYPES.find(p => p.id === data.property)?.label || data.property;

    const compareNote = data.compareWith
        ? `\n📊 مقارنة مع: ${data.compareWith}`
        : '';

    return encodeURIComponent(
        `🔔 طلب عروض أسعار جديد من بروكر\n\n` +
        `📋 الخدمة: ${serviceLabel}\n` +
        `🏠 العقار: ${propertyLabel}\n` +
        `📍 الموقع: ${data.location}\n` +
        `💰 الميزانية: ${data.budget}\n` +
        `📞 الجوال: ${data.phone}` +
        compareNote +
        `\n\n⏰ تم الإرسال: ${new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' })}`
    );
}
