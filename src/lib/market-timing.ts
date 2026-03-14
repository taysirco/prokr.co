// ============================================
// 💰 Dynamic Pricing Display
// يعرض رسائل مختلفة حسب وقت الشهر
// ============================================

export type MarketTimingPhase = 'premium' | 'budget' | 'urgency';

export interface MarketTimingConfig {
    phase: MarketTimingPhase;
    /** Arabic label for the current phase */
    label: string;
    /** Emoji icon */
    icon: string;
    /** Badge text shown in hero */
    badgeText: string;
    /** CTA button text for lead gen */
    ctaText: string;
    /** Secondary CTA text */
    ctaSubtext: string;
    /** Color scheme (tailwind classes) */
    colors: {
        badgeBg: string;
        badgeText: string;
        badgeBorder: string;
        accentGradient: string;
    };
    /** Section heading suffix for company listings */
    companySectionSuffix: string;
    /** Pricing table note */
    pricingNote: string;
    /** LiveAvailabilityBanner extra text */
    availabilityExtra: string;
    /** FraudAlertBanner extra warning */
    fraudWarningExtra: string;
    /** Whether to show installment messaging */
    showInstallment: boolean;
    /** Whether to show VIP/annual contract messaging */
    showVip: boolean;
}

/**
 * Determines current market timing phase based on day of month.
 * Uses Saudi Arabia timezone (Asia/Riyadh).
 *
 * - PREMIUM (27→5): Post-salary spending period
 * - BUDGET (6→19): Mid-month conservation
 * - URGENCY (20→26): Late-month installment messaging
 */
export function getMarketTimingPhase(date?: Date): MarketTimingPhase {
    const d = date || new Date();
    // Use Riyadh timezone to determine day
    const riyadhDay = parseInt(
        d.toLocaleDateString('en-US', { day: 'numeric', timeZone: 'Asia/Riyadh' })
    );

    if (riyadhDay >= 27 || riyadhDay <= 5) return 'premium';
    if (riyadhDay >= 20) return 'urgency';
    return 'budget';
}

/**
 * Returns full configuration for the current market timing phase.
 */
export function getMarketTimingConfig(date?: Date): MarketTimingConfig {
    const phase = getMarketTimingPhase(date);
    return PHASE_CONFIGS[phase];
}

const PHASE_CONFIGS: Record<MarketTimingPhase, MarketTimingConfig> = {
    premium: {
        phase: 'premium',
        label: 'موسم الرواتب',
        icon: '💎',
        badgeText: 'عروض VIP — موسم الرواتب 🎯',
        ctaText: 'احجز باقة VIP الآن — ضمان سنة كاملة',
        ctaSubtext: 'استثمر راتبك في خدمة تدوم',
        colors: {
            badgeBg: 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400',
            badgeText: 'text-amber-900',
            badgeBorder: 'border-amber-300',
            accentGradient: 'from-amber-500 to-yellow-500',
        },
        companySectionSuffix: '— اختيارات VIP',
        pricingNote: '💎 باقات VIP وعقود سنوية متاحة — وفّر حتى 30% مع العقد السنوي',
        availabilityExtra: '📦 عقود سنوية متاحة',
        fraudWarningExtra: '',
        showInstallment: false,
        showVip: true,
    },
    budget: {
        phase: 'budget',
        label: 'أفضل الأسعار',
        icon: '💚',
        badgeText: 'أفضل الأسعار — وفّر أكثر 💚',
        ctaText: 'اطلب عرض سعر مخفّض',
        ctaSubtext: 'أسعار خاصة لمنتصف الشهر',
        colors: {
            badgeBg: 'bg-gradient-to-r from-emerald-100 to-green-100',
            badgeText: 'text-emerald-800',
            badgeBorder: 'border-emerald-200',
            accentGradient: 'from-emerald-500 to-green-500',
        },
        companySectionSuffix: '— أفضل سعر',
        pricingNote: '💚 أسعار منتصف الشهر — خصومات حصرية على الخدمات الأساسية',
        availabilityExtra: '💰 خصومات منتصف الشهر',
        fraudWarningExtra: '',
        showInstallment: false,
        showVip: false,
    },
    urgency: {
        phase: 'urgency',
        label: 'قبل الراتب',
        icon: '🔥',
        badgeText: 'تقسيط تابي وتمارا متاح 🔥',
        ctaText: 'احجز الآن — ادفع بعد الراتب 💳',
        ctaSubtext: 'تقسيط بدون فوائد عبر تابي وتمارا',
        colors: {
            badgeBg: 'bg-gradient-to-r from-red-100 via-orange-100 to-red-100',
            badgeText: 'text-red-800',
            badgeBorder: 'border-red-200',
            accentGradient: 'from-red-500 to-orange-500',
        },
        companySectionSuffix: '— خدمات الطوارئ',
        pricingNote: '💳 تقسيط بدون فوائد عبر تابي وتمارا — ادفع على 4 دفعات بعد الراتب',
        availabilityExtra: '⚡ خدمة طوارئ — ادفع لاحقاً عبر تمارا',
        fraudWarningExtra: '⚠️ احذر العروض الرخيصة جداً قبل الراتب — الشركات الوهمية تنشط في هذه الفترة وتستغل الحاجة.',
        showInstallment: true,
        showVip: false,
    },
};
