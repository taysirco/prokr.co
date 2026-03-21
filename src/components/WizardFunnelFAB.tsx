'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import {
    getWizardTimingConfig,
    mapServiceSlugToCategory,
} from '@/lib/wizard-funnel-data';

const WizardFunnelModal = dynamic(() => import('./WizardFunnelModal'), {
    ssr: false,
});

interface WizardFunnelFABProps {
    citySlug?: string;
    cityName?: string;
    serviceSlug?: string;
}

/**
 * WizardFunnelFAB — Floating Action Button
 *
 * Appears after 30 seconds + 40% scroll depth.
 * Hides when the main CTA button is visible in viewport.
 * Remembers if the user already opened the modal (sessionStorage).
 */
export default function WizardFunnelFAB({
    citySlug,
    cityName,
    serviceSlug,
}: WizardFunnelFABProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const timePassedRef = useRef(false);
    const scrollPassedRef = useRef(false);
    const alreadyOpenedRef = useRef(false);

    const serviceId = serviceSlug ? mapServiceSlugToCategory(serviceSlug) : undefined;

    // Check if already opened in this session
    useEffect(() => {
        if (typeof sessionStorage !== 'undefined') {
            const opened = sessionStorage.getItem('wizard_fab_opened');
            if (opened === 'true') {
                alreadyOpenedRef.current = true;
                setDismissed(true);
            }
        }
    }, []);

    // Time trigger: 30 seconds
    useEffect(() => {
        if (dismissed) return;
        const timer = setTimeout(() => {
            timePassedRef.current = true;
            if (scrollPassedRef.current) setIsVisible(true);
        }, 30000);
        return () => clearTimeout(timer);
    }, [dismissed]);

    // Scroll trigger: 40% page depth
    useEffect(() => {
        if (dismissed) return;

        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrollPercent >= 0.4) {
                scrollPassedRef.current = true;
                if (timePassedRef.current) setIsVisible(true);
            }

            // Hide if main CTA is visible
            const mainCta = document.querySelector('[data-wizard-cta]');
            if (mainCta) {
                const rect = mainCta.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
                if (isInViewport && isVisible) {
                    setIsVisible(false);
                } else if (!isInViewport && timePassedRef.current && scrollPassedRef.current) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dismissed, isVisible]);

    const handleOpen = useCallback(() => {
        setIsModalOpen(true);
        setIsVisible(false);
        if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem('wizard_fab_opened', 'true');
        }
        // GA4 event
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'wizard_fab_click', {
                event_category: 'wizard_funnel',
                source: 'fab',
            });
        }
    }, []);

    const handleDismiss = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setDismissed(true);
        setIsVisible(false);
    }, []);

    const timingConfig = typeof window !== 'undefined' ? getWizardTimingConfig() : null;
    const isNight = timingConfig?.isNightMode || false;

    if (dismissed && !isModalOpen) return null;

    return (
        <>
            {/* Floating Button */}
            {isVisible && !isModalOpen && (
                <div className="fixed bottom-6 left-6 z-[9990] animate-wizard-fab-enter">
                    <button
                        onClick={handleOpen}
                        className={`relative flex items-center gap-3 px-5 py-3.5 rounded-2xl font-bold text-white shadow-2xl transition-all hover:scale-105 active:scale-95 ${
                            isNight
                                ? 'bg-gradient-to-l from-red-600 to-red-700 shadow-red-600/40'
                                : 'bg-gradient-to-l from-amber-500 to-orange-500 shadow-amber-500/40'
                        }`}
                    >
                        {/* Pulse ring */}
                        <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full animate-ping ${
                            isNight ? 'bg-red-400' : 'bg-amber-300'
                        }`} />
                        <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
                            isNight ? 'bg-red-400' : 'bg-amber-300'
                        }`} />

                        <span className="text-xl">{isNight ? '🚨' : '⚡'}</span>
                        <span className="text-sm whitespace-nowrap">
                            {isNight ? 'طوارئ ليلية' : '3 عروض مجانية'}
                        </span>

                        {/* Dismiss X */}
                        <button
                            onClick={handleDismiss}
                            className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white/80 text-xs transition-colors mr-1"
                            aria-label="إخفاء"
                        >
                            ✕
                        </button>
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <WizardFunnelModal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        setDismissed(true);
                    }}
                    prefilledCitySlug={citySlug}
                    prefilledCityName={cityName}
                    prefilledServiceId={serviceId}
                />
            )}
        </>
    );
}
