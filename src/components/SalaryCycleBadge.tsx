'use client';

import { useEffect, useState } from 'react';
import { getSalaryCycleConfig, type SalaryCycleConfig } from '@/lib/salary-cycle';

// ============================================
// 💰 SalaryCycleBadge — Visual phase indicator
// Reads client date, shows phase-appropriate badge
// ============================================

interface SalaryCycleBadgeProps {
    /** Compact mode for smaller spaces */
    compact?: boolean;
    /** Additional CSS classes */
    className?: string;
}

export default function SalaryCycleBadge({ compact = false, className = '' }: SalaryCycleBadgeProps) {
    const [config, setConfig] = useState<SalaryCycleConfig | null>(null);

    useEffect(() => {
        setConfig(getSalaryCycleConfig());
    }, []);

    // SSR: render invisible placeholder (ensures hydration target exists)
    if (!config) return <div className={className} aria-hidden="true" />;

    if (compact) {
        return (
            <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                    ${config.colors.badgeBg} ${config.colors.badgeText} border ${config.colors.badgeBorder}
                    animate-fade-in ${className}`}
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
                <span className={`text-sm font-bold ${config.colors.badgeText}`}>
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
 * Inline salary-cycle note for tables/pricing.
 * Renders a single-line note matching the current phase.
 */
export function SalaryCycleNote({ className = '' }: { className?: string }) {
    const [config, setConfig] = useState<SalaryCycleConfig | null>(null);

    useEffect(() => {
        setConfig(getSalaryCycleConfig());
    }, []);

    if (!config) return <div className={className} aria-hidden="true" />;

    return (
        <p className={`text-xs font-medium mt-2 px-3 py-1.5 rounded-lg border
            ${config.colors.badgeBg} ${config.colors.badgeText} ${config.colors.badgeBorder}
            ${className}`}
        >
            {config.icon} {config.pricingNote}
        </p>
    );
}
