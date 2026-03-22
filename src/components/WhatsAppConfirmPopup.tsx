'use client';

import { useState, useEffect, useCallback } from 'react';

interface WhatsAppConfirmPopupProps {
    whatsappUrl: string;
    onClose: () => void;
    advertiserName?: string;
}

/**
 * WhatsApp Engagement Popup
 *
 * UX Flow: Instead of immediately opening WhatsApp,
 * this popup creates a 2-second "task completion" event that:
 * 1. Prevents RankBrain from registering a bounce
 * 2. Fires GA4 task_completion event for 100% success rate
 * 3. Creates positive CrUX/INP interaction signals
 *
 * Animations are defined in globals.css (not styled-jsx) to avoid
 * hydration mismatches with Next.js SSR.
 */
export default function WhatsAppConfirmPopup({
    whatsappUrl,
    onClose,
    advertiserName,
}: WhatsAppConfirmPopupProps) {
    const [phase, setPhase] = useState<'loading' | 'success'>('loading');

    // User-initiated click → window.open (allowed by popup blockers)
    const openWhatsApp = useCallback(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        onClose();
    }, [whatsappUrl, onClose]);

    // Timer-based redirect → window.location.href (not blocked by popup blockers)
    // Mobile Safari/iOS/Samsung browsers block window.open from setTimeout
    const redirectToWhatsApp = useCallback(() => {
        window.location.href = whatsappUrl;
        onClose();
    }, [whatsappUrl, onClose]);

    useEffect(() => {
        // Phase 1: Fire GA4 task_completion event immediately
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'task_completion', {
                event_category: 'behavioral',
                conversion_type: 'whatsapp_anti_bounce',
                status: 'initiated',
                advertiser: advertiserName || 'unknown',
            });
        }

        // Also push to dataLayer for GTM
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'prokr_task_completion',
                task_type: 'whatsapp_discount_prep',
                timestamp: new Date().toISOString(),
            });
        }

        // Phase 2: After 2 seconds, show success + fire completion event
        const successTimer = setTimeout(() => {
            setPhase('success');

            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'task_completion', {
                    event_category: 'behavioral',
                    conversion_type: 'whatsapp_anti_bounce',
                    status: 'success',
                    advertiser: advertiserName || 'unknown',
                });
            }
        }, 2000);

        // Phase 3: After 2.8 seconds total, open WhatsApp
        // Use location.href for auto-redirect (not blocked by popup blockers)
        const redirectTimer = setTimeout(() => {
            redirectToWhatsApp();
        }, 2800);

        return () => {
            clearTimeout(successTimer);
            clearTimeout(redirectTimer);
        };
    }, [advertiserName, openWhatsApp, redirectToWhatsApp]);

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            style={{ WebkitBackdropFilter: 'blur(4px)' }}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                className="relative w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden animate-popup-enter"
                dir="rtl"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 left-2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors text-lg"
                    aria-label="إغلاق"
                >
                    ✕
                </button>

                {/* Green Header */}
                <div className="bg-gradient-to-l from-green-500 to-green-600 px-6 py-5">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.124 1.527 5.86L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.89 0-3.665-.5-5.2-1.38l-.373-.22-3.862 1.01 1.03-3.765-.242-.385A9.78 9.78 0 012.182 12 9.818 9.818 0 0112 2.182 9.818 9.818 0 0121.818 12 9.818 9.818 0 0112 21.818z" />
                            </svg>
                        </div>
                        <div className="text-white">
                            <p className="font-bold text-lg">واتساب</p>
                            {advertiserName && (
                                <p className="text-green-100 text-sm">{advertiserName}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-8 text-center">
                    {phase === 'loading' ? (
                        <>
                            {/* Spinning Loader */}
                            <div className="w-16 h-16 mx-auto mb-4 relative">
                                <div className="absolute inset-0 border-4 border-green-100 rounded-full"></div>
                                <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-2xl">
                                    🎁
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                جاري تجهيز كود خصم 10%...
                            </h3>
                            <p className="text-sm text-gray-500">
                                يرجى الانتظار لحظة..
                            </p>
                            {/* Progress Bar */}
                            <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-l from-green-400 to-green-600 rounded-full animate-progress-bar"></div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Success State */}
                            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center animate-success-bounce">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-green-700 mb-2">
                                ✅ تم تجهيز الخصم!
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                يتم تحويلك لواتساب الآن...
                            </p>
                            <button
                                onClick={openWhatsApp}
                                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors text-sm"
                            >
                                افتح واتساب الآن
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
