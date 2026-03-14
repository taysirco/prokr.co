// ═══════════════════════════════════════════════════════════════
// Dual-Layer CTR Title Hooks — Pattern Interrupt Injection
//
// Adds emotional CTR magnets to auto-generated <title> tags.
// The technical entities stay in <meta description> and Schema.
// The <title> gets visual brackets + emojis + fear/salvation hooks.
//
// Strategy: sector-specific hooks that hit emotional triggers:
// - Fear (خوف): losing money, health risks
// - Salvation (نجاة): certified guarantee, official report
// - Government authority (سلطة): NWC, SFDA, SBC, TGA
// ═══════════════════════════════════════════════════════════════

type ServiceCategory = 'leak-detection' | 'insulation' | 'pest-control' | 'cleaning' | 'moving' | 'sewage';

interface CTRHook {
    /** Emoji for pattern interrupt (placed before bracket) */
    emoji: string;
    /** Emotional hook inside visual brackets */
    bracket: string;
    /** Optional trailing trust badge */
    badge?: string;
}

/**
 * Sector-specific CTR hooks that create "Pattern Interrupt" in SERPs.
 * These make users' eyes STOP on our result among 10 blue links.
 */
const SECTOR_CTR_HOOKS: Record<ServiceCategory, CTRHook> = {
    'leak-detection': {
        emoji: '🛑',
        bracket: '✔️ تقرير NWC معتمد لخفض الفاتورة',
        badge: undefined,
    },
    'insulation': {
        emoji: '🛡️',
        bracket: '✔️ وفر 40% كهرباء — كود SBC معتمد',
        badge: undefined,
    },
    'pest-control': {
        emoji: '🛡️',
        bracket: '✔️ إبادة نهائية — مبيدات SFDA آمنة',
        badge: undefined,
    },
    'cleaning': {
        emoji: '✨',
        bracket: '✔️ بخار 180°م + تعقيم طبي',
        badge: undefined,
    },
    'moving': {
        emoji: '📦',
        bracket: '✔️ تأمين شامل + ترخيص TGA',
        badge: undefined,
    },
    'sewage': {
        emoji: '🚨',
        bracket: '✔️ كاميرا تنظير + فحص مجاني',
        badge: undefined,
    },
};

/**
 * Inject CTR hook into an auto-generated meta title.
 * ONLY called for auto-generated titles, NOT overrides.
 *
 * Input:  "مكافحة حشرات بالرياض — مبيدات آمنة + ضمان سنة + بدون مغادرة المنزل 2026"
 * Output: "مكافحة حشرات بالرياض 🛡️ [✔️ إبادة نهائية — مبيدات SFDA آمنة] (2026)"
 */
export function trackInteraction(title: string, serviceSlug: string): string {
    // Map slug → sector
    const category = getServiceCategory(serviceSlug);
    if (!category) return title; // No hook for unknown sectors

    const hook = SECTOR_CTR_HOOKS[category];
    if (!hook) return title;

    // Extract the primary keyword (before the dash —)
    const dashIndex = title.indexOf('—');
    const primaryKeyword = dashIndex > -1
        ? title.substring(0, dashIndex).trim()
        : title.replace(/\s*2026\s*$/, '').trim();

    // Build the CTR-enhanced title
    // Format: "{primary keyword} {emoji} [{bracket}] (2026)"
    const enhanced = `${primaryKeyword} ${hook.emoji} [${hook.bracket}] (2026)`;

    // Google truncates at ~60 chars. If too long, shorten the bracket
    if (enhanced.length > 62) {
        const short = `${primaryKeyword} ${hook.emoji} [${hook.bracket}]`;
        if (short.length > 62) {
            // Ultra-short: just primary + emoji + year
            return `${primaryKeyword} ${hook.emoji} (2026)`;
        }
        return short;
    }

    return enhanced;
}

// ═══════════════════════════════════════════════════════════════
// Service slug → ServiceCategory mapping
// (Reuses same logic as consumer-myths.ts)
// ═══════════════════════════════════════════════════════════════

function getServiceCategory(serviceSlug: string): ServiceCategory | null {
    const CATEGORY_MAP: Record<string, ServiceCategory> = {
        // Leak detection
        'water-leak-detection': 'leak-detection',
        'bathroom-leak-detection': 'leak-detection',
        'tank-leak-detection': 'leak-detection',
        // Insulation
        'water-insulation': 'insulation',
        'roof-insulation': 'insulation',
        'tank-insulation': 'insulation',
        'thermal-insulation': 'insulation',
        'foam-insulation': 'insulation',
        'epoxy-painting': 'insulation',
        // Pest control
        'pest-control': 'pest-control',
        'cockroach-control': 'pest-control',
        'bed-bug-control': 'pest-control',
        'ant-control': 'pest-control',
        'termite-control': 'pest-control',
        'snake-scorpion-control': 'pest-control',
        'pigeon-control': 'pest-control',
        'rat-control': 'pest-control',
        'pesticide-spraying': 'pest-control',
        'bird-control': 'pest-control',
        'bedbugs-control': 'pest-control',
        // Cleaning
        'cleaning': 'cleaning',
        'apartments-cleaning': 'cleaning',
        'villas-cleaning': 'cleaning',
        'hourly-cleaning': 'cleaning',
        'sofa-cleaning': 'cleaning',
        'carpet-cleaning': 'cleaning',
        'mattress-cleaning': 'cleaning',
        'marble-polishing': 'cleaning',
        'tanks-cleaning': 'cleaning',
        'pool-cleaning': 'cleaning',
        'oven-cleaning': 'cleaning',
        'kitchen-chimney-cleaning': 'cleaning',
        'councils-cleaning': 'cleaning',
        'mosque-cleaning': 'cleaning',
        'facade-cleaning': 'cleaning',
        'auto-cleaning': 'cleaning',
        'ac-duct-cleaning': 'cleaning',
        'steam-cleaning': 'cleaning',
        'air-conditioner-cleaning': 'cleaning',
        'glass-facades-cleaning': 'cleaning',
        'swimming-pool-cleaning': 'cleaning',
        'restaurant-chimney-cleaning': 'cleaning',
        'office-cleaning': 'cleaning',
        'furniture-cleaning': 'cleaning',
        'floor-polishing': 'cleaning',
        'palaces-cleaning': 'cleaning',
        // Moving
        'furniture-moving': 'moving',
        'furniture-storage': 'moving',
        'dyna': 'moving',
        'international-moving': 'moving',
        'crane-rental': 'moving',
        'moving-out': 'moving',
        'dabab': 'moving',
        // Sewage
        'sewage-unblocking': 'sewage',
        'sewage-suction': 'sewage',
    };

    return CATEGORY_MAP[serviceSlug] ?? null;
}
