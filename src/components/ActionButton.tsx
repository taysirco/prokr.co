'use client';

import { useState, useCallback, useEffect } from 'react';
import { getHourlyMode } from '@/lib/market-timing';
import WhatsAppConfirmPopup from './WhatsAppConfirmPopup';

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
    /** Advertiser name for WhatsApp popup display */
    advertiserName?: string;
    /** Optional inline styles (for hex overrides) */
    style?: React.CSSProperties;
}

/**
 * ActionButton — Interactive Confirmation Button with Interactive UX
 *
 * For PHONE buttons:
 *   1. Fires `prokr_terminal_conversion` to dataLayer (GA4/GTM)
 *   2. Shows visual "engaged" feedback (scale + opacity)
 *   3. After 500ms delay, navigates to href
 *
 * For WHATSAPP buttons:
 *   1. Shows WhatsAppConfirmPopup ("Preparing 10% discount...")
 *   2. Fires GA4 task_completion event during 2-second popup
 *   3. After 2.8s, opens WhatsApp link
 *   → RankBrain records 100% Task Completion
 *
 * 🚨 Night Mode (12AM-6AM Riyadh):
 *   Phone buttons get red pulsing emergency CTA styling
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
    advertiserName,
    style,
}: ActionButtonProps) {
    const [isEngaged, setIsEngaged] = useState(false);
    const [isEmergencyHour, setIsEmergencyHour] = useState(false);
    const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

    useEffect(() => {
        setIsEmergencyHour(getHourlyMode() === 'emergency');
    }, []);

    const handleConversion = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            if (isEngaged) return; // Prevent double-fire

            // ── WhatsApp: Show Engagement Popup ──
            if (type === 'whatsapp') {
                setShowWhatsAppPopup(true);

                // Fire initial engagement event
                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                        event: 'prokr_terminal_conversion',
                        conversion_type: 'whatsapp',
                        city: cityName || '',
                        service: serviceName || '',
                        timestamp: new Date().toISOString(),
                        is_emergency_hour: isEmergencyHour,
                    });
                }
                return;
            }

            // ── Phone: Original delay logic ──
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
                    value: isEmergencyHour ? 15 : 10,
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
        <>
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
                style={style}
            >
                {children}
                {label && (
                    <span>{displayLabel}</span>
                )}
            </a>

            {/* WhatsApp Engagement Popup */}
            {showWhatsAppPopup && (
                <WhatsAppConfirmPopup
                    whatsappUrl={href}
                    onClose={() => setShowWhatsAppPopup(false)}
                    advertiserName={advertiserName || serviceName}
                />
            )}
        </>
    );
}
