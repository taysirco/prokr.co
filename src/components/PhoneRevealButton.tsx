'use client';

import { useState, useCallback } from 'react';
import CopyButton from './CopyButton';

interface PhoneRevealButtonProps {
    /** Full phone number (e.g. "0501234567") */
    phoneNumber: string;
    /** Section ID for GA4 tracking */
    sectionId?: string;
    /** Show call link after reveal */
    showCallLink?: boolean;
    /** Additional CSS classes */
    className?: string;
}

/**
 * PhoneRevealButton — CrUX Micro-Friction (Section 11.2)
 *
 * Hides the last 3 digits of the phone number behind a pulsing reveal button.
 * Every visitor is FORCED to interact (Click/Touch) to see the full number.
 * 
 * Chrome sends immediate INP ping to Google servers:
 * "This user interacted intensely" → 100% Engagement Rate in CrUX.
 *
 * After reveal, a CopyButton appears for additional High_Utility_Action signal.
 */
export default function PhoneRevealButton({
    phoneNumber,
    sectionId = 'contact',
    showCallLink = true,
    className = '',
}: PhoneRevealButtonProps) {
    const [revealed, setRevealed] = useState(false);

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

    return (
        <div className={`${className}`}>
            {!revealed ? (
                <div className="flex items-center gap-3">
                    {/* Masked Number */}
                    <span dir="ltr" className="text-gray-400 font-mono tracking-wider text-sm">
                        {masked}
                    </span>

                    {/* Pulsing Reveal Button */}
                    <button
                        onClick={handleReveal}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold transition-all duration-200 animate-pulse hover:animate-none cursor-pointer"
                    >
                        <span className="text-base">👁️</span>
                        اضغط لكشف الرقم الموثق
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-2 animate-phone-reveal">
                    {/* Full Number */}
                    {showCallLink ? (
                        <a
                            href={`tel:${phoneNumber}`}
                            dir="ltr"
                            className="text-emerald-700 font-mono font-bold tracking-wider text-sm hover:text-emerald-800 transition-colors"
                        >
                            {phoneNumber}
                        </a>
                    ) : (
                        <span dir="ltr" className="text-gray-900 font-mono font-bold tracking-wider text-sm">
                            {phoneNumber}
                        </span>
                    )}

                    {/* Copy Button */}
                    <CopyButton
                        value={phoneNumber}
                        type="phone"
                        sectionId={sectionId}
                        compact
                    />
                </div>
            )}
        </div>
    );
}
