'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import {
    getWizardTimingConfig,
    mapServiceSlugToCategory,
} from '@/lib/wizard-funnel-data';

// GA4 Measurement ID — single source of truth
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-H1W3HDFHS0';

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
        // GA4 event — fire both gtag AND dataLayer for cross-browser reliability
        if (typeof window !== 'undefined') {
            const w = window as any;
            if (w.gtag) {
                w.gtag('event', 'wizard_fab_click', {
                    event_category: 'wizard_funnel',
                    non_interaction: false,
                    send_to: GA_ID,
                    source: 'fab',
                    timestamp: new Date().toISOString(),
                });
            }
            if (w.dataLayer) {
                const payload = {
                    source: 'fab',
                    event_category: 'wizard_funnel',
                    timestamp: new Date().toISOString(),
                };
                w.dataLayer.push({ event: 'wizard_fab_click', ...payload });
                w.dataLayer.push({ event: 'prokr_wizard_fab_click', ...payload });
            }
        }
    }, []);

    const handleDismiss = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setDismissed(true);
        setIsVisible(false);
        // Track FAB dismissal
        if (typeof window !== 'undefined') {
            const w = window as any;
            if (w.gtag) {
                w.gtag('event', 'wizard_fab_dismiss', {
                    event_category: 'wizard_funnel',
                    non_interaction: false,
                    send_to: GA_ID,
                });
            }
            if (w.dataLayer) {
                w.dataLayer.push({ event: 'wizard_fab_dismiss' });
                w.dataLayer.push({ event: 'prokr_wizard_fab_dismiss' });
            }
        }
    }, []);

    // Fix hydration: move timing config to state + useEffect
    // (prevents SSR mismatch — server renders null, client renders config)
    const [timingConfig, setTimingConfig] = useState<ReturnType<typeof getWizardTimingConfig> | null>(null);
    useEffect(() => { setTimingConfig(getWizardTimingConfig()); }, []);
    const isNight = timingConfig?.isNightMode || false;

    if (dismissed && !isModalOpen) return null;

    return (
        <>
            {/* Floating Button */}
            {isVisible && !isModalOpen && (
                <div className="fixed bottom-6 left-6 z-[9990] animate-wizard-fab-enter">
                    <button
                        onClick={handleOpen}
                        className={`relative flex items-center gap-3 px-5 py-3.5 rounded-2xl font-bold text-white shadow-2xl transition-all hover:scale-105 active:scale-95`}
                        style={{ background: isNight ? 'linear-gradient(to left, #dc2626, #b91c1c)' : 'linear-gradient(to left, #f59e0b, #f97316)', boxShadow: isNight ? '0 10px 30px -5px rgba(220,38,38,0.4)' : '0 10px 30px -5px rgba(245,158,11,0.4)' }}
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
                        <span
                            role="button"
                            tabIndex={0}
                            onClick={handleDismiss}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleDismiss(e as any); } }}
                            className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white/80 text-xs transition-colors mr-1 cursor-pointer"
                            aria-label="إخفاء"
                        >
                            ✕
                        </span>
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
