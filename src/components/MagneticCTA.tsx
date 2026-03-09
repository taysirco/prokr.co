'use client';

import { useState, useCallback } from 'react';

interface MagneticCTAProps {
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
 * MagneticCTA — Positive Friction Loop (Satiation Ping)
 *
 * Replaces plain <a href> CTA buttons with a tracked, delayed conversion.
 * On click:
 *   1. Fires `prokr_terminal_conversion` to dataLayer (GA4/GTM)
 *   2. Shows visual "engaged" feedback (scale + opacity)
 *   3. After 500ms delay, navigates to href
 *
 * The 500ms delay is imperceptible to humans but creates a measurable
 * "task completion" signal for Google's behavioral algorithms (Navboost).
 * Google interprets this as: user found what they needed → zero pogo-sticking.
 */
export default function MagneticCTA({
    href,
    type,
    label,
    cityName,
    serviceName,
    className = '',
    ariaLabel,
    children,
    external = false,
}: MagneticCTAProps) {
    const [isEngaged, setIsEngaged] = useState(false);

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
                });
            }

            // 2. Fire GA4 event directly (fallback if GTM not loaded)
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'generate_lead', {
                    event_category: 'conversion',
                    event_label: `${type}_${cityName || 'unknown'}_${serviceName || 'unknown'}`,
                    value: type === 'phone' ? 10 : 5,
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
        [href, type, cityName, serviceName, isEngaged, external]
    );

    // Engaged state text based on type
    const engagedLabel =
        type === 'phone' ? 'جاري فتح الاتصال...' : 'جاري فتح واتساب...';

    return (
        <a
            href={href}
            onClick={handleConversion}
            aria-label={ariaLabel}
            rel={external ? 'noopener noreferrer' : undefined}
            target={external ? '_blank' : undefined}
            className={`${className} transition-all duration-300 ${isEngaged
                    ? 'opacity-75 scale-95 pointer-events-none'
                    : 'hover:scale-[1.03] active:scale-95'
                }`}
        >
            {children}
            {label && (
                <span>{isEngaged ? engagedLabel : label}</span>
            )}
        </a>
    );
}
