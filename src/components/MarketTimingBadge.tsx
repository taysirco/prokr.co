'use client';

import { useEffect, useState } from 'react';
import { getMarketTimingConfig, type MarketTimingConfig } from '@/lib/market-timing';

// ============================================
// 💰 MarketTimingBadge — Visual phase indicator
// Reads client date, shows phase-appropriate badge
// ============================================

interface MarketTimingBadgeProps {
    /** Compact mode for smaller spaces */
    compact?: boolean;
    /** Additional CSS classes */
    className?: string;
}

export default function MarketTimingBadge({ compact = false, className = '' }: MarketTimingBadgeProps) {
    const [config, setConfig] = useState<MarketTimingConfig | null>(null);

    useEffect(() => {
        setConfig(getMarketTimingConfig());
    }, []);

    // SSR: return null to avoid hydration mismatch (div→span type change in compact mode)
    if (!config) return null;

    // Map phase to guaranteed hex colors for text
    const textColorMap: Record<string, string> = {
        premium: '#78350f',  // amber-900
        budget: '#075985',   // sky-800
        urgency: '#991b1b',  // red-800
    };
    const textHex = textColorMap[config.phase] || '#1f2937';

    if (compact) {
        return (
            <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                    ${config.colors.badgeBg} border ${config.colors.badgeBorder}
                    animate-fade-in ${className}`}
                style={{ color: textHex }}
            >
                <span>{config.icon}</span>
                <span>{config.label}</span>
            </span>
        );
    }

    return (
        <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border
                ${config.colors.badgeBg} ${config.colors.badgeBorder}
                animate-fade-in shadow-sm ${className}`}
        >
            <span className="text-lg">{config.icon}</span>
            <div className="flex flex-col">
                <span className="text-sm font-bold" style={{ color: textHex }}>
                    {config.badgeText}
                </span>
                {config.showInstallment && (
                    <span className="text-xs text-red-600 font-medium">
                        تقسيط على 4 دفعات — بدون فوائد
                    </span>
                )}
                {config.showVip && (
                    <span className="text-xs text-amber-700 font-medium">
                        خصم 30% على العقود السنوية
                    </span>
                )}
            </div>
        </div>
    );
}

/**
 * Inline market-timing note for tables/pricing.
 * Renders a single-line note matching the current phase.
 */
export function MarketTimingNote({ className = '' }: { className?: string }) {
    const [config, setConfig] = useState<MarketTimingConfig | null>(null);

    useEffect(() => {
        setConfig(getMarketTimingConfig());
    }, []);

    if (!config) return null;

    const noteTextColorMap: Record<string, string> = {
        premium: '#78350f',
        budget: '#075985',
        urgency: '#991b1b',
    };
    const noteTextHex = noteTextColorMap[config.phase] || '#1f2937';

    return (
        <p className={`text-xs font-medium mt-2 px-3 py-1.5 rounded-lg border
            ${config.colors.badgeBg} ${config.colors.badgeBorder}
            ${className}`}
            style={{ color: noteTextHex }}
        >
            {config.icon} {config.pricingNote}
        </p>
    );
}
