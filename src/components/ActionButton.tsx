'use client';

import { useState, useCallback, useEffect } from 'react';
import { getHourlyMode } from '@/lib/market-timing';

interface ActionButtonProps {
    href: string;
    type: 'phone' | 'whatsapp';
    label: string;
    cityName?: string;
    serviceName?: string;
    className?: string;
    /** Accessible label for icon-only buttons */
    ariaLabel?: string;
    /** Optional children (icons etc.) to render alongside or instead of label */
    children?: React.ReactNode;
    /** Open in new tab (for WhatsApp links) */
    external?: boolean;
}

/**
 * ActionButton — Interactive Confirmation Button
 *
 * Replaces plain <a href> CTA buttons with a tracked, delayed conversion.
 * On click:
 *   1. Fires `prokr_terminal_conversion` to dataLayer (GA4/GTM)
 *   2. Shows visual "engaged" feedback (scale + opacity)
 *   3. After 500ms delay, navigates to href
 *
 * 🚨 Night Mode (12AM-6AM Riyadh):
 *   Phone buttons get red pulsing emergency CTA styling
 *   to maximize late-night emergency conversions.
 */
export default function ActionButton({
    href,
    type,
    label,
    cityName,
    serviceName,
    className = '',
    ariaLabel,
    children,
    external = false,
}: ActionButtonProps) {
    const [isEngaged, setIsEngaged] = useState(false);
    const [isEmergencyHour, setIsEmergencyHour] = useState(false);

    useEffect(() => {
        setIsEmergencyHour(getHourlyMode() === 'emergency');
    }, []);

    const handleConversion = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            if (isEngaged) return; // Prevent double-fire
            setIsEngaged(true);

            // 1. Fire satiation ping to dataLayer (GA4 / GTM)
            if (typeof window !== 'undefined' && (window as any).dataLayer) {
                (window as any).dataLayer.push({
                    event: 'prokr_terminal_conversion',
                    conversion_type: type,
                    city: cityName || '',
                    service: serviceName || '',
                    timestamp: new Date().toISOString(),
                    is_emergency_hour: isEmergencyHour,
                });
            }

            // 2. Fire GA4 event directly (fallback if GTM not loaded)
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'generate_lead', {
                    event_category: 'conversion',
                    event_label: `${type}_${cityName || 'unknown'}_${serviceName || 'unknown'}`,
                    value: type === 'phone' ? (isEmergencyHour ? 15 : 10) : 5,
                });
            }

            // 3. Positive friction delay — 500ms window
            setTimeout(() => {
                setIsEngaged(false);
                if (external) {
                    window.open(href, '_blank', 'noopener,noreferrer');
                } else {
                    window.location.href = href;
                }
            }, 500);
        },
        [href, type, cityName, serviceName, isEngaged, external, isEmergencyHour]
    );

    // Engaged state text based on type
    const engagedLabel =
        type === 'phone' ? 'جاري فتح الاتصال...' : 'جاري فتح واتساب...';

    // 🚨 Emergency night label for phone buttons
    const emergencyPhoneLabel = '🚨 اتصل الآن — طوارئ';
    const displayLabel = isEmergencyHour && type === 'phone' && !isEngaged
        ? emergencyPhoneLabel
        : (isEngaged ? engagedLabel : label);

    // 🚨 Emergency night styling for phone buttons
    const emergencyClasses = isEmergencyHour && type === 'phone'
        ? 'animate-pulse !bg-red-600 !border-red-500 hover:!bg-red-700 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
        : '';

    return (
        <a
            href={href}
            onClick={handleConversion}
            aria-label={ariaLabel}
            rel={external ? 'noopener noreferrer' : undefined}
            target={external ? '_blank' : undefined}
            className={`${className} ${emergencyClasses} transition-all duration-300 ${isEngaged
                    ? 'opacity-75 scale-95 pointer-events-none'
                    : 'hover:scale-[1.03] active:scale-95'
                }`}
        >
            {children}
            {label && (
                <span>{displayLabel}</span>
            )}
        </a>
    );
}

