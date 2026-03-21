'use client';

import { useState, useCallback } from 'react';

interface CopyButtonProps {
    /** The value to copy to clipboard */
    value: string;
    /** Content type for GA4 tracking */
    type: 'phone' | 'address' | 'price' | 'crn';
    /** Button label (default: "📋 انسخ") */
    label?: string;
    /** Section ID for GA4 page_section tracking */
    sectionId?: string;
    /** Additional CSS classes */
    className?: string;
    /** Compact mode (icon only) */
    compact?: boolean;
}

/**
 * CopyButton — Clipboard Copy with GA4 Tracking (Section 11.2.1)
 *
 * Each copy action signals Chrome → CrUX → Google:
 * "High_Utility_Action" — user found actionable information and took it.
 * This signal is stronger than Dwell Time because it proves answer satisfaction.
 */
export default function CopyButton({
    value,
    type,
    label,
    sectionId,
    className = '',
    compact = false,
}: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const defaultLabels: Record<string, string> = {
        phone: '📋 انسخ الرقم',
        address: '📋 انسخ العنوان',
        price: '📋 انسخ السعر',
        crn: '📋 انسخ رقم السجل',
    };

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);

            // GA4: copy_action event — High_Utility_Action signal
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'copy_action', {
                    content_type: type,
                    page_section: sectionId || 'unknown',
                    event_category: 'engagement',
                    interaction_type: 'clipboard_copy',
                });
            }

            // Also push to dataLayer for GTM
            if (typeof window !== 'undefined' && (window as any).dataLayer) {
                (window as any).dataLayer.push({
                    event: 'prokr_copy_action',
                    copy_type: type,
                    section: sectionId || 'unknown',
                    timestamp: new Date().toISOString(),
                });
            }

            // Reset after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback for older browsers (Samsung Internet, some WebViews, Firefox Android)
            const textArea = document.createElement('textarea');
            textArea.value = value;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                document.execCommand('copy');
            } catch {
                // Silent fail — at least we tried
            }

            document.body.removeChild(textArea);
            setCopied(true);

            // Fire GA4 events in fallback too — critical for Samsung Internet / WebViews
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'copy_action', {
                    content_type: type,
                    page_section: sectionId || 'unknown',
                    event_category: 'engagement',
                    interaction_type: 'clipboard_copy_fallback',
                });
            }
            if (typeof window !== 'undefined' && (window as any).dataLayer) {
                (window as any).dataLayer.push({
                    event: 'prokr_copy_action',
                    copy_type: type,
                    section: sectionId || 'unknown',
                    timestamp: new Date().toISOString(),
                });
            }

            setTimeout(() => setCopied(false), 2000);
        }
    }, [value, type, sectionId]);

    if (compact) {
        return (
            <button
                onClick={handleCopy}
                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
                    copied
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 hover:bg-sky-50 text-gray-500 hover:text-sky-600'
                } ${className}`}
                aria-label={copied ? 'تم النسخ' : (label || defaultLabels[type])}
                title={copied ? '✅ تم النسخ' : (label || defaultLabels[type])}
            >
                {copied ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                )}
            </button>
        );
    }

    return (
        <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                copied
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-gray-50 hover:bg-sky-50 text-gray-600 hover:text-sky-700 border border-gray-200 hover:border-sky-200'
            } ${className}`}
        >
            {copied ? (
                <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ✅ تم النسخ
                </>
            ) : (
                <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {label || defaultLabels[type]}
                </>
            )}
        </button>
    );
}
