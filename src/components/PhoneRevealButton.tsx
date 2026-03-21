'use client';

import { useState, useCallback, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { getHourlyMode } from '@/lib/market-timing';
import CopyButton from './CopyButton';

interface PhoneRevealButtonProps {
    /** Full phone number (e.g. "0501234567") */
    phoneNumber: string;
    /** Phone link (tel:XXXX) for the call button */
    phoneLink?: string;
    /** Section ID for GA4 tracking */
    sectionId?: string;
    /** Show call link after reveal */
    showCallLink?: boolean;
    /** City name for GA4 tracking */
    cityName?: string;
    /** Service name for GA4 tracking */
    serviceName?: string;
    /** Additional CSS classes */
    className?: string;
}

/**
 * PhoneRevealButton — Unified Phone Component (Section 11.2)
 *
 * BEFORE reveal:
 * ┌──────────────────────────────────────────┐
 * │  📞 05555•••  [👁️ اضغط لكشف الرقم الموثق]  │
 * └──────────────────────────────────────────┘
 *
 * AFTER reveal:
 * ┌──────────────────────────────────────────┐
 * │  📞 05555555  [📋]  [📞 اتصل الآن]      │
 * └──────────────────────────────────────────┘
 *
 * Night Mode (12AM-6AM):
 * ┌──────────────────────────────────────────┐
 * │  📞 05555555  [📋]  [🚨 اتصل الآن — طوارئ]│  ← Red pulsing
 * └──────────────────────────────────────────┘
 *
 * Signals:
 * - phone_reveal → INP (CrUX Micro-Friction)
 * - terminal_conversion → GA4 (on call click)
 * - copy_action → GA4 (on copy)
 * - generate_lead → GA4 (on call click)
 */
export default function PhoneRevealButton({
    phoneNumber,
    phoneLink,
    sectionId = 'contact',
    showCallLink = true,
    cityName = '',
    serviceName = '',
    className = '',
}: PhoneRevealButtonProps) {
    const [revealed, setRevealed] = useState(false);
    const [isEmergencyHour, setIsEmergencyHour] = useState(false);
    const [callEngaged, setCallEngaged] = useState(false);

    useEffect(() => {
        setIsEmergencyHour(getHourlyMode() === 'emergency');
    }, []);

    // Mask the phone number: show all but last 3 digits
    const masked = phoneNumber.slice(0, -3) + '•••';

    const handleReveal = useCallback(() => {
        setRevealed(true);

        // GA4: phone_reveal event — Critical INP signal
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'phone_reveal', {
                event_category: 'engagement',
                interaction_type: 'crux_inp_signal',
                page_section: sectionId,
            });
        }

        // dataLayer for GTM
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'prokr_phone_reveal',
                section: sectionId,
                timestamp: new Date().toISOString(),
            });
        }
    }, [sectionId]);

    const handleCallClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (callEngaged) return;
        setCallEngaged(true);

        // GA4: terminal_conversion
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'prokr_terminal_conversion',
                conversion_type: 'phone',
                city: cityName,
                service: serviceName,
                timestamp: new Date().toISOString(),
                is_emergency_hour: isEmergencyHour,
            });
        }

        // GA4: generate_lead
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'generate_lead', {
                event_category: 'conversion',
                event_label: `phone_${cityName || 'unknown'}_${serviceName || 'unknown'}`,
                value: isEmergencyHour ? 15 : 10,
            });
        }

        // Positive friction delay, then dial
        setTimeout(() => {
            setCallEngaged(false);
            window.location.href = phoneLink || `tel:${phoneNumber}`;
        }, 500);
    }, [phoneNumber, phoneLink, cityName, serviceName, isEmergencyHour, callEngaged]);

    // Emergency styling for the call button
    const callButtonClasses = isEmergencyHour
        ? 'bg-red-600 hover:bg-red-700 text-white shadow-[0_0_12px_rgba(239,68,68,0.4)] animate-pulse'
        : 'bg-emerald-600 hover:bg-emerald-700 text-white';

    const callLabel = isEmergencyHour ? '🚨 اتصل — طوارئ' : '📞 اتصل الآن';

    return (
        <div className={`${className}`}>
            {!revealed ? (
                /* ═══════ MASKED STATE ═══════ */
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span dir="ltr" className="text-gray-400 font-mono tracking-wider text-sm flex-1">
                        {masked}
                    </span>
                    <button
                        onClick={handleReveal}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold transition-all duration-200 animate-pulse hover:animate-none cursor-pointer"
                    >
                        <span className="text-base">👁️</span>
                        اضغط لكشف الرقم الموثق
                    </button>
                </div>
            ) : (
                /* ═══════ REVEALED STATE ═══════ */
                <div className="animate-phone-reveal">
                    {/* Number + Copy Row */}
                    <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                        <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />

                        {showCallLink ? (
                            <a
                                href={phoneLink || `tel:${phoneNumber}`}
                                dir="ltr"
                                className="text-emerald-700 font-mono font-bold tracking-wider text-sm hover:text-emerald-800 transition-colors flex-1"
                                onClick={(e) => {
                                    // Let it navigate naturally for direct tel: links
                                    // GA4 tracking still fires
                                    if (typeof window !== 'undefined' && (window as any).gtag) {
                                        (window as any).gtag('event', 'phone_reveal', {
                                            event_category: 'engagement',
                                            interaction_type: 'number_tap',
                                            page_section: sectionId,
                                        });
                                    }
                                }}
                            >
                                {phoneNumber}
                            </a>
                        ) : (
                            <span dir="ltr" className="text-gray-900 font-mono font-bold tracking-wider text-sm flex-1">
                                {phoneNumber}
                            </span>
                        )}

                        <CopyButton
                            value={phoneNumber}
                            type="phone"
                            sectionId={sectionId}
                            compact
                        />
                    </div>

                    {/* Call Button — Integrated with GA4 + Night Mode */}
                    {showCallLink && (
                        <a
                            href={phoneLink || `tel:${phoneNumber}`}
                            onClick={handleCallClick}
                            className={`mt-2 flex items-center justify-center gap-2 w-full px-4 py-3 font-medium rounded-xl transition-all duration-300 ${callButtonClasses} ${
                                callEngaged ? 'opacity-75 scale-95 pointer-events-none' : 'hover:scale-[1.02] active:scale-95'
                            }`}
                        >
                            <Phone className="w-5 h-5" />
                            <span>{callEngaged ? 'جاري فتح الاتصال...' : callLabel}</span>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
