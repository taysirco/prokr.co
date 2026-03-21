// ============================================
// 💰 Dynamic Pricing Display + ⏰ Temporal Intent Engine
// يعرض رسائل مختلفة حسب وقت الشهر + وقت اليوم
// ============================================

export type MarketTimingPhase = 'premium' | 'budget' | 'urgency';
export type HourlyMode = 'emergency' | 'normal';

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

export interface EmergencyConfig {
    isEmergency: boolean;
    bannerText: string;
    bannerSubtext: string;
    ctaText: string;
    ctaSubtext: string;
    responseTime: string;
    colors: {
        bg: string;
        text: string;
        border: string;
        ctaBg: string;
        ctaText: string;
        glow: string;
    };
}

export interface DispatchMessage {
    icon: string;          // 🟢 🟡 🔴
    text: string;          // Main dispatch text
    urgencyLevel: 'high' | 'medium' | 'low';
    neighborhood: string;  // Arabic neighborhood name
}

// ============================================
// ⏰ Hourly Mode — Time-of-Day Intelligence
// 12AM-6AM = Emergency | 6AM-12AM = Normal
// ============================================

/**
 * Determines if we're in emergency night mode (12AM-6AM Riyadh time).
 */
export function getHourlyMode(date?: Date): HourlyMode {
    const d = date || new Date();
    const riyadhHour = parseInt(
        d.toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, timeZone: 'Asia/Riyadh' })
    );
    return (riyadhHour >= 0 && riyadhHour < 6) ? 'emergency' : 'normal';
}

/**
 * Returns emergency-specific config for the 12AM-6AM night mode.
 */
export function getEmergencyConfig(cityNameAr: string): EmergencyConfig {
    const mode = getHourlyMode();
    return {
        isEmergency: mode === 'emergency',
        bannerText: `🚨 خدمة طوارئ ليلية متاحة الآن في ${cityNameAr}`,
        bannerSubtext: 'فرق متخصصة جاهزة للتحرك فوراً — خدمة 24/7',
        ctaText: 'متاح الآن: فرق طوارئ ليلية جاهزة',
        ctaSubtext: 'اتصل الآن — استجابة خلال 30 دقيقة',
        responseTime: '30 دقيقة',
        colors: {
            bg: 'bg-gradient-to-r from-red-900 via-red-800 to-red-900',
            text: 'text-red-100',
            border: 'border-red-600/50',
            ctaBg: 'bg-gradient-to-r from-red-600 via-red-500 to-red-600',
            ctaText: 'text-white',
            glow: 'shadow-red-500/30',
        },
    };
}

// ============================================
// 🚗 Live Dispatch Message Generator
// Uber-style rotating availability messages
// ============================================

/** Service category → Arabic name mapping for dispatch */
const SERVICE_DISPATCH_NAMES: Record<string, string[]> = {
    moving: ['دينا نقل عفش', 'فريق نقل', 'شاحنة نقل مجهزة'],
    cleaning: ['فريق تنظيف', 'طاقم تنظيف محترف', 'فريق تعقيم'],
    'pest-control': ['فريق مكافحة حشرات', 'فني رش مبيدات', 'طاقم إبادة متخصص'],
    sewage: ['فريق صيانة صرف صحي', 'شاحنة شفط', 'فني سباكة'],
    'leak-detection': ['فني كشف تسربات', 'فريق فحص بالحرارية', 'فني صيانة مائية'],
    insulation: ['فريق عزل', 'فني عزل أسطح', 'طاقم عزل متخصص'],
    default: ['فريق خدمة', 'فني صيانة', 'طاقم متخصص'],
};

/**
 * Generates rotating dispatch messages for a specific city + service.
 * Messages change based on time-of-day mode (emergency vs normal).
 */
export function getDispatchMessages(
    neighborhoods: string[],
    serviceNameAr: string,
    serviceCategory: string,
    totalCompanies: number,
): DispatchMessage[] {
    const mode = getHourlyMode();
    const safeNeighborhoods = neighborhoods.length > 0
        ? neighborhoods
        : ['وسط المدينة', 'الحي الشمالي', 'الحي الجنوبي'];

    const teamNames = SERVICE_DISPATCH_NAMES[serviceCategory]
        || SERVICE_DISPATCH_NAMES.default;

    const messages: DispatchMessage[] = [];

    if (mode === 'emergency') {
        // 🔴 Night emergency dispatch (12AM-6AM)
        for (let i = 0; i < Math.min(safeNeighborhoods.length, 5); i++) {
            const hood = safeNeighborhoods[i];
            const team = teamNames[i % teamNames.length];
            const arrivalMin = 25 + (i * 5);

            if (i === 0) {
                messages.push({
                    icon: '🔴',
                    text: `${team} طوارئ متوفر الآن في حي ${hood} — وقت الوصول: ${arrivalMin} دقيقة`,
                    urgencyLevel: 'high',
                    neighborhood: hood,
                });
            } else if (i % 2 === 1) {
                messages.push({
                    icon: '🟡',
                    text: `متاح ${team} واحد في ${hood} — خدمة ليلية عاجلة`,
                    urgencyLevel: 'medium',
                    neighborhood: hood,
                });
            } else {
                messages.push({
                    icon: '🔴',
                    text: `تم إرسال ${team} إلى ${hood} — فريق إضافي في الطريق`,
                    urgencyLevel: 'high',
                    neighborhood: hood,
                });
            }
        }
    } else {
        // 🟢 Normal daytime dispatch (6AM-12AM)
        const availableTeams = Math.max(2, Math.min(totalCompanies, Math.ceil(totalCompanies * 0.7)));

        for (let i = 0; i < Math.min(safeNeighborhoods.length, 6); i++) {
            const hood = safeNeighborhoods[i];
            const team = teamNames[i % teamNames.length];
            const teamCount = Math.max(1, availableTeams - i);
            const arrivalMin = 30 + (i * 10);

            if (i === 0) {
                messages.push({
                    icon: '🟢',
                    text: `${teamCount} ${teamCount > 2 ? 'فرق' : 'فريق'} ${serviceNameAr} متوفرة الآن في حي ${hood} — وقت الوصول: ${arrivalMin} دقيقة`,
                    urgencyLevel: 'low',
                    neighborhood: hood,
                });
            } else if (i % 3 === 1) {
                messages.push({
                    icon: '🟡',
                    text: `فريق واحد متبقي في حي ${hood} — احجز قبل نفاد المواعيد`,
                    urgencyLevel: 'medium',
                    neighborhood: hood,
                });
            } else if (i % 3 === 2) {
                messages.push({
                    icon: '🟢',
                    text: `${team} جديد أصبح متاحاً في ${hood} — أقرب موعد خلال ${arrivalMin} دقيقة`,
                    urgencyLevel: 'low',
                    neighborhood: hood,
                });
            } else {
                messages.push({
                    icon: '🟢',
                    text: `${teamCount} فرق متاحة في ${hood} — حجز فوري`,
                    urgencyLevel: 'low',
                    neighborhood: hood,
                });
            }
        }
    }

    return messages;
}

// ============================================
// 💰 Monthly Phase System (existing)
// ============================================

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
            badgeBg: 'bg-gradient-to-r from-sky-100 to-green-100',
            badgeText: 'text-sky-800',
            badgeBorder: 'border-sky-200',
            accentGradient: 'from-sky-500 to-green-500',
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
