'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import {
    WIZARD_SERVICE_TYPES,
    WIZARD_PROPERTY_TYPES,
    WIZARD_BUDGET_RANGES,
    WIZARD_MAJOR_CITIES,
    WIZARD_STEPS,
    WIZARD_WHATSAPP_NUMBER,
    buildWizardWhatsAppMessage,
    getWizardTimingConfig,
    type WizardTimingConfig,
} from '@/lib/wizard-funnel-data';
import { getCityContext } from '@/lib/city-context';

// GA4 Measurement ID — single source of truth
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-H1W3HDFHS0';

interface WizardFunnelModalProps {
    isOpen: boolean;
    onClose: () => void;
    /** Pre-fill city slug (from page context) */
    prefilledCitySlug?: string;
    /** Pre-fill city name (from page context) */
    prefilledCityName?: string;
    /** Pre-fill service ID (from page context) */
    prefilledServiceId?: string;
    /** Company name for comparison context (company page) */
    compareWithCompany?: string;
}

type WizardData = {
    service: string;
    serviceLabel: string;
    property: string;
    propertyLabel: string;
    citySlug: string;
    cityName: string;
    neighborhood: string;
    budget: string;
    budgetLabel: string;
    phone: string;
};

/**
 * WizardFunnelModal v2
 *
 * Intelligence improvements:
 * 1. Context-aware smart skipping (pre-filled steps)
 * 2. Market timing integration (premium/budget/urgency/night)
 * 3. Micro-interactions (ripple, haptic, celebration)
 * 4. Deep GA4 funnel tracking (start/complete/abandon/deep_engagement)
 * 5. Exit intent recovery (step 3+)
 * 6. Enhanced success state (countdown, social proof, installment)
 * 7. Company comparison context
 */
export default function WizardFunnelModal({
    isOpen,
    onClose,
    prefilledCitySlug,
    prefilledCityName,
    prefilledServiceId,
    compareWithCompany,
}: WizardFunnelModalProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [data, setData] = useState<WizardData>({
        service: prefilledServiceId || '',
        serviceLabel: '',
        property: '',
        propertyLabel: '',
        citySlug: prefilledCitySlug || '',
        cityName: prefilledCityName || '',
        neighborhood: '',
        budget: '',
        budgetLabel: '',
        phone: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const [countdown, setCountdown] = useState(900); // 15 min countdown in seconds
    const [rippleTarget, setRippleTarget] = useState<string | null>(null);
    const [celebrateStep, setCelebrateStep] = useState(0);

    const startTimeRef = useRef<number>(Date.now());
    const stepStartTimeRef = useRef<number>(Date.now());
    const funnelIdRef = useRef<string>(`wf_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`);
    const deepEngagementFiredRef = useRef(false);
    const initialStepRef = useRef(1);

    // Neighborhoods from city context
    const [neighborhoods, setNeighborhoods] = useState<string[]>([]);

    // Market timing config
    const [timingConfig, setTimingConfig] = useState<WizardTimingConfig | null>(null);

    // Count skipped steps for smart display
    const [skippedSteps, setSkippedSteps] = useState<string[]>([]);

    // Initialize timing + determine start step
    useEffect(() => {
        if (!isOpen) return;
        startTimeRef.current = Date.now();
        stepStartTimeRef.current = Date.now();
        funnelIdRef.current = `wf_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
        deepEngagementFiredRef.current = false;

        const config = getWizardTimingConfig();
        setTimingConfig(config);

        let startStep = 1;
        const skipped: string[] = [];

        if (prefilledServiceId) {
            const svc = WIZARD_SERVICE_TYPES.find(s => s.id === prefilledServiceId);
            setData(d => ({
                ...d,
                service: prefilledServiceId,
                serviceLabel: svc?.label || '',
            }));
            skipped.push(svc?.label || '');
            startStep = 2;
        }
        if (prefilledCitySlug && prefilledCityName) {
            setData(d => ({
                ...d,
                citySlug: prefilledCitySlug,
                cityName: prefilledCityName,
            }));
            const ctx = getCityContext(prefilledCitySlug);
            if (ctx) {
                setNeighborhoods(ctx.neighborhoods.map(n => n.name_ar));
            }
            // Only skip city selection step if service is also known
            // (we still want neighborhood selection)
        }

        initialStepRef.current = startStep;
        setSkippedSteps(skipped);
        setCurrentStep(startStep);
        setSubmitted(false);
        setPhoneError('');
        setShowExitConfirm(false);
        setCelebrateStep(0);
        setRippleTarget(null);
        setCountdown(900);

        // Fire funnel_start event
        fireGA4Event('wizard_funnel_start', {
            start_step: startStep,
            prefilled_service: prefilledServiceId || 'none',
            prefilled_city: prefilledCitySlug || 'none',
            compare_with: compareWithCompany || 'none',
            timing_mode: config.isNightMode ? 'night' : 'day',
            funnel_id: funnelIdRef.current,
        });
    }, [isOpen, prefilledServiceId, prefilledCitySlug, prefilledCityName, compareWithCompany]);

    // Deep engagement timer (120s = 2 minutes)
    useEffect(() => {
        if (!isOpen || submitted) return;
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current;
            if (elapsed >= 120000 && !deepEngagementFiredRef.current) {
                deepEngagementFiredRef.current = true;
                fireGA4Event('wizard_deep_engagement', {
                    dwell_time_ms: elapsed,
                    current_step: currentStep,
                    funnel_id: funnelIdRef.current,
                });
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [isOpen, submitted, currentStep]);

    // Countdown timer after submission
    useEffect(() => {
        if (!submitted) return;
        const timer = setInterval(() => {
            setCountdown(c => Math.max(0, c - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, [submitted]);

    // ═══════ GA4 Event Helpers ═══════

    /**
     * Universal GA4 event dispatcher.
     * - Fires both gtag() AND dataLayer.push() for cross-platform coverage.
     * - `useBeacon = true` forces navigator.sendBeacon transport — guarantees
     *   delivery even during window.open(), tab close, or app switch.
     * - `send_to` targets the correct GA4 property explicitly.
     * - `non_interaction: false` ensures every step counts as active engagement.
     */
    function fireGA4Event(eventName: string, params: Record<string, unknown>, useBeacon = false) {
        if (typeof window === 'undefined') return;
        const w = window as any;
        const beaconParams = useBeacon
            ? { transport_type: 'beacon', send_to: GA_ID }
            : { send_to: GA_ID };

        if (w.gtag) {
            w.gtag('event', eventName, {
                event_category: 'wizard_funnel',
                non_interaction: false,
                timestamp: new Date().toISOString(),
                ...beaconParams,
                ...params,
            });
        }

        // DataLayer: push BOTH prefixed (for GTM custom triggers)
        // AND clean event name (for GTM GA4 event tags)
        if (w.dataLayer) {
            const payload = {
                ...params,
                event_category: 'wizard_funnel',
                timestamp: new Date().toISOString(),
            };
            w.dataLayer.push({ event: eventName, ...payload });
            w.dataLayer.push({ event: `prokr_${eventName}`, ...payload });
        }
    }

    /**
     * Fire step completion — sends THREE signals per step:
     * 1. `task_completion` — custom event for Prokr analytics
     * 2. `select_content` — GA4 recommended event for ML pipeline recognition
     * 3. dataLayer push — for GTM-based setups
     */
    const fireStepComplete = useCallback((step: number, stepName: string, value: string) => {
        const stepDwell = Date.now() - stepStartTimeRef.current;
        const totalDwell = Date.now() - startTimeRef.current;

        const stepParams = {
            step_number: step,
            step_name: stepName,
            selected_value: value,
            step_dwell_ms: stepDwell,
            total_dwell_ms: totalDwell,
            funnel_id: funnelIdRef.current,
        };

        // Primary: custom task completion event
        fireGA4Event('task_completion', stepParams);

        // Secondary: GA4 recommended event for Google ML pipeline
        fireGA4Event('select_content', {
            content_type: `wizard_step_${step}`,
            item_id: value,
            step_name: stepName,
            funnel_id: funnelIdRef.current,
        });

        stepStartTimeRef.current = Date.now();
    }, []);

    const fireAbandon = useCallback(() => {
        const totalDwell = Date.now() - startTimeRef.current;
        // Use beacon transport — abandon events fire during page unload/tab close
        fireGA4Event('wizard_abandon', {
            last_step: currentStep,
            total_dwell_ms: totalDwell,
            funnel_id: funnelIdRef.current,
            steps_completed: currentStep - initialStepRef.current,
        }, true); // beacon = guaranteed delivery
    }, [currentStep]);

    const fireCompleteEvent = useCallback((finalData: WizardData) => {
        const totalDwell = Date.now() - startTimeRef.current;
        // generate_lead is a GA4 recommended event.
        // MUST include `currency` and `value` for GA4 Monetization reports.
        // Use beacon transport — fires right before WhatsApp redirect.
        fireGA4Event('generate_lead', {
            conversion_type: 'wizard_complete',
            service: finalData.service,
            city: finalData.citySlug,
            neighborhood: finalData.neighborhood,
            budget: finalData.budget,
            currency: 'SAR',
            value: 25,
            dwell_time_ms: totalDwell,
            funnel_id: funnelIdRef.current,
            compare_with: compareWithCompany || 'none',
            timing_mode: timingConfig?.isNightMode ? 'night' : 'day',
        }, true); // beacon = guaranteed delivery during redirect
    }, [compareWithCompany, timingConfig]);

    // ═══════ Exit Tracking: beforeunload + visibilitychange ═══════
    // Catches: tab close, browser close, back button, app switch (mobile)

    useEffect(() => {
        if (!isOpen || submitted) return;

        const handleBeforeUnload = () => {
            if (currentStep > initialStepRef.current) {
                // Use beacon — last chance to deliver during page teardown
                fireGA4Event('wizard_abandon', {
                    last_step: currentStep,
                    total_dwell_ms: Date.now() - startTimeRef.current,
                    funnel_id: funnelIdRef.current,
                    steps_completed: currentStep - initialStepRef.current,
                    exit_type: 'page_unload',
                }, true);
            }
        };

        // visibilitychange fires on mobile when user switches app or locks screen
        // Safari iOS does NOT reliably fire beforeunload, but DOES fire visibilitychange
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden' && currentStep > initialStepRef.current) {
                fireGA4Event('wizard_abandon', {
                    last_step: currentStep,
                    total_dwell_ms: Date.now() - startTimeRef.current,
                    funnel_id: funnelIdRef.current,
                    steps_completed: currentStep - initialStepRef.current,
                    exit_type: 'visibility_hidden',
                }, true);
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isOpen, submitted, currentStep]);

    // ═══════ Micro-Interactions ═══════

    const triggerRipple = useCallback((id: string) => {
        setRippleTarget(id);
        // Haptic feedback on mobile
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(50);
        }
        setTimeout(() => setRippleTarget(null), 300);
    }, []);

    const triggerCelebration = useCallback((step: number) => {
        setCelebrateStep(step);
        setTimeout(() => setCelebrateStep(0), 800);
    }, []);

    // ═══════ Step Handlers ═══════

    const handleServiceSelect = useCallback((serviceId: string) => {
        const svc = WIZARD_SERVICE_TYPES.find(s => s.id === serviceId);
        triggerRipple(serviceId);
        setTimeout(() => {
            setData(d => ({ ...d, service: serviceId, serviceLabel: svc?.label || '' }));
            fireStepComplete(1, 'service_type', serviceId);
            triggerCelebration(1);
            setCurrentStep(2);
        }, 200);
    }, [fireStepComplete, triggerRipple, triggerCelebration]);

    const handlePropertySelect = useCallback((propertyId: string) => {
        const prop = WIZARD_PROPERTY_TYPES.find(p => p.id === propertyId);
        triggerRipple(propertyId);
        setTimeout(() => {
            setData(d => ({ ...d, property: propertyId, propertyLabel: prop?.label || '' }));
            fireStepComplete(2, 'property_type', propertyId);
            triggerCelebration(2);
            setCurrentStep(3);
        }, 200);
    }, [fireStepComplete, triggerRipple, triggerCelebration]);

    const handleCitySelect = useCallback((citySlug: string, cityName: string) => {
        triggerRipple(citySlug);
        setTimeout(() => {
            setData(d => ({ ...d, citySlug, cityName }));
            const ctx = getCityContext(citySlug);
            if (ctx) {
                setNeighborhoods(ctx.neighborhoods.map(n => n.name_ar));
            } else {
                setNeighborhoods([]);
            }
        }, 150);
    }, [triggerRipple]);

    const handleNeighborhoodSelect = useCallback((neighborhood: string) => {
        const locationValue = `${data.cityName} — ${neighborhood}`;
        triggerRipple(neighborhood);
        setTimeout(() => {
            setData(d => ({ ...d, neighborhood }));
            fireStepComplete(3, 'location', locationValue);
            triggerCelebration(3);
            // Night mode: skip budget step
            if (timingConfig?.isNightMode) {
                setData(d => ({ ...d, budget: 'emergency', budgetLabel: 'طوارئ — بدون تحديد' }));
                fireStepComplete(4, 'budget', 'emergency');
                setCurrentStep(5);
            } else {
                setCurrentStep(4);
            }
        }, 200);
    }, [fireStepComplete, data.cityName, triggerRipple, triggerCelebration, timingConfig]);

    const handleBudgetSelect = useCallback((budgetId: string, budgetLabel: string) => {
        triggerRipple(budgetId);
        setTimeout(() => {
            setData(d => ({ ...d, budget: budgetId, budgetLabel }));
            fireStepComplete(4, 'budget', budgetId);
            triggerCelebration(4);
            setCurrentStep(5);
        }, 200);
    }, [fireStepComplete, triggerRipple, triggerCelebration]);

    const handlePhoneSubmit = useCallback(() => {
        const cleaned = data.phone.replace(/\s/g, '');
        if (!/^05\d{8}$/.test(cleaned)) {
            setPhoneError('يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05');
            return;
        }
        setPhoneError('');
        fireStepComplete(5, 'phone_submit', 'submitted');
        fireCompleteEvent({ ...data, phone: cleaned });
        setSubmitted(true);
    }, [data, fireStepComplete, fireCompleteEvent]);

    // ═══════ Navigation ═══════

    const handleGoBack = useCallback(() => {
        if (currentStep > initialStepRef.current) {
            fireGA4Event('wizard_back_navigation', {
                from_step: currentStep,
                to_step: currentStep - 1,
                funnel_id: funnelIdRef.current,
            });
            // Skip budget step backwards too in night mode
            if (timingConfig?.isNightMode && currentStep === 5) {
                setCurrentStep(3);
            } else {
                setCurrentStep(s => s - 1);
            }
        }
    }, [currentStep, timingConfig]);

    // ═══════ Exit Intent Recovery ═══════

    const handleCloseAttempt = useCallback(() => {
        // If user has progressed past step 3 and hasn't submitted, show recovery
        if (currentStep >= 3 && !submitted) {
            setShowExitConfirm(true);
            fireGA4Event('wizard_exit_intent', {
                current_step: currentStep,
                funnel_id: funnelIdRef.current,
            });
            return;
        }
        // Otherwise, fire abandon and close
        if (!submitted && currentStep > initialStepRef.current) {
            fireAbandon();
        }
        onClose();
    }, [currentStep, submitted, onClose, fireAbandon]);

    const handleConfirmExit = useCallback(() => {
        fireGA4Event('wizard_exit_confirmed', {
            current_step: currentStep,
            recovered: false,
            funnel_id: funnelIdRef.current,
        });
        fireAbandon();
        setShowExitConfirm(false);
        onClose();
    }, [currentStep, onClose, fireAbandon]);

    const handleCancelExit = useCallback(() => {
        fireGA4Event('wizard_exit_recovered', {
            current_step: currentStep,
            recovered: true,
            funnel_id: funnelIdRef.current,
        });
        setShowExitConfirm(false);
    }, [currentStep]);

    // ═══════ WhatsApp ═══════

    const handleOpenWhatsApp = useCallback(() => {
        const totalDwell = Date.now() - startTimeRef.current;

        // Fire terminal_conversion — the ultimate monetized action
        // BEACON TRANSPORT: guarantees delivery even during window.open redirect.
        // Without beacon, Safari iOS and Chrome Android cancel XHR during navigation.
        fireGA4Event('terminal_conversion', {
            conversion_type: 'wizard_whatsapp',
            service: data.service,
            city: data.citySlug,
            neighborhood: data.neighborhood,
            budget: data.budget,
            currency: 'SAR',
            value: 25,
            funnel_id: funnelIdRef.current,
            dwell_time_ms: totalDwell,
            compare_with: compareWithCompany || 'none',
        }, true); // beacon = guaranteed delivery

        // Performance entry for INP + CrUX attribution
        if (typeof window !== 'undefined' && window.performance) {
            if (window.performance.mark) {
                window.performance.mark('wizard_terminal_start');
                window.performance.mark('wizard_terminal_end');
            }
            if (window.performance.measure) {
                try {
                    window.performance.measure(
                        'wizard_terminal_conversion',
                        'wizard_terminal_start',
                        'wizard_terminal_end'
                    );
                } catch { /* measure may fail if marks don't exist */ }
            }
        }

        const msg = buildWizardWhatsAppMessage({
            service: data.service,
            property: data.propertyLabel || data.property,
            location: data.neighborhood ? `${data.cityName} — ${data.neighborhood}` : data.cityName,
            budget: data.budgetLabel || data.budget,
            phone: data.phone,
            compareWith: compareWithCompany,
        });

        // Open WhatsApp first, then close modal after a brief delay
        // to guarantee GA4/dataLayer beacon events are fully queued
        // before React unmounts the component
        window.open(`https://wa.me/${WIZARD_WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
        setTimeout(() => onClose(), 150);
    }, [data, onClose, compareWithCompany]);

    if (!isOpen) return null;

    const budgetOptions = WIZARD_BUDGET_RANGES[data.service] || WIZARD_BUDGET_RANGES['cleaning'];
    const totalSteps = timingConfig?.isNightMode ? 4 : 5; // Night mode skips budget

    // Format countdown
    const countdownMin = Math.floor(countdown / 60);
    const countdownSec = countdown % 60;

    // Effective steps to show in progress (considering skipped)
    const effectiveTotal = totalSteps - (initialStepRef.current - 1);
    const effectiveCurrent = currentStep - (initialStepRef.current - 1);

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            style={{ WebkitBackdropFilter: 'blur(4px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) handleCloseAttempt(); }}
        >
            <div
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-popup-enter"
                dir="rtl"
            >
                {/* Close Button */}
                <button
                    onClick={handleCloseAttempt}
                    className="absolute top-3 left-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors text-lg"
                    aria-label="إغلاق"
                >
                    ✕
                </button>

                {/* ═══════ Exit Intent Recovery Overlay ═══════ */}
                {showExitConfirm && (
                    <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex items-center justify-center p-6 animate-wizard-slide-in">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center text-3xl">
                                😮
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {currentStep >= 4 ? 'باقي خطوة واحدة فقط!' : 'باقي خطوتين فقط!'}
                            </h3>
                            <p className="text-sm text-gray-500 mb-6">
                                أنت قريب جداً من الحصول على 3 عروض أسعار مجانية
                            </p>
                            <button
                                onClick={handleCancelExit}
                                className="w-full px-6 py-3.5 text-white font-bold rounded-xl shadow-lg shadow-sky-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] mb-3"
                                style={{ background: 'linear-gradient(to left, #0ea5e9, #3b82f6)' }}
                            >
                                ← أكمل طلبك
                            </button>
                            <button
                                onClick={handleConfirmExit}
                                className="w-full px-6 py-2 text-gray-400 hover:text-gray-600 text-sm transition-colors"
                            >
                                لا، أريد الخروج
                            </button>
                        </div>
                    </div>
                )}

                {/* ═══════ Header — Market Timing Aware ═══════ */}
                <div className={`px-6 py-5`}
                    style={{ background: timingConfig?.isNightMode ? 'linear-gradient(to left, #dc2626, #b91c1c, #991b1b)' : 'linear-gradient(to left, #0ea5e9, #3b82f6, #0284c7)' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                            {timingConfig?.ctaEmoji || '⚡'}
                        </div>
                        <div className="text-white">
                            <p className="font-bold text-lg">
                                {timingConfig?.modalTitle || '3 عروض أسعار في 60 ثانية'}
                            </p>
                            <p className={`text-sm ${timingConfig?.isNightMode ? 'text-red-200' : 'text-sky-100'}`}>
                                {timingConfig?.modalSubtitle || 'مجاناً • بدون التزام'}
                            </p>
                        </div>
                    </div>

                    {/* Smart context badge — show what's pre-filled */}
                    {skippedSteps.length > 0 && !submitted && (
                        <div className="mt-3 flex items-center gap-2 bg-white/15 rounded-lg px-3 py-1.5 text-xs text-white/90">
                            <span>✅</span>
                            <span>{skippedSteps.join(' • ')}</span>
                            {prefilledCityName && <span>• {prefilledCityName}</span>}
                        </div>
                    )}

                    {/* Company comparison badge */}
                    {compareWithCompany && !submitted && (
                        <div className="mt-2 flex items-center gap-2 bg-white/15 rounded-lg px-3 py-1.5 text-xs text-white/90">
                            <span>📊</span>
                            <span>مقارنة مع {compareWithCompany}</span>
                        </div>
                    )}
                </div>

                {/* ═══════ Progress Bar — Enhanced ═══════ */}
                {!submitted && (
                    <div className="px-6 pt-4">
                        <div className="flex items-center gap-1">
                            {Array.from({ length: effectiveTotal }).map((_, i) => (
                                <div key={i} className="flex items-center flex-1 relative">
                                    <div className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                                        i + 1 <= effectiveCurrent
                                            ? timingConfig?.isNightMode
                                                ? 'bg-red-500'
                                                : 'bg-sky-500'
                                            : 'bg-gray-200'
                                    }`}>
                                        {/* Celebration check mark */}
                                        {celebrateStep > 0 && i + 1 + (initialStepRef.current - 1) === celebrateStep && (
                                            <div className="absolute -top-1 right-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-wizard-celebrate text-white text-[8px] font-bold">
                                                ✓
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-xs text-gray-400">
                                الخطوة {effectiveCurrent} من {effectiveTotal} — {WIZARD_STEPS[currentStep - 1]?.label}
                            </p>
                            {effectiveTotal - effectiveCurrent <= 2 && effectiveTotal - effectiveCurrent > 0 && (
                                <span className="text-xs font-bold text-sky-600 animate-pulse">
                                    باقي {effectiveTotal - effectiveCurrent === 1 ? 'خطوة واحدة' : 'خطوتين'}!
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* ═══════ Content ═══════ */}
                <div className="px-6 py-5 min-h-[300px]">
                    {submitted ? (
                        /* ═══════ SUCCESS STATE — Enhanced ═══════ */
                        <div className="text-center py-4">
                            {/* Confetti burst */}
                            <div className="relative w-20 h-20 mx-auto mb-4">
                                <div className="absolute inset-0 bg-green-100 rounded-full flex items-center justify-center animate-success-bounce">
                                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                {/* Mini confetti particles */}
                                <div className="absolute -top-2 -right-2 w-3 h-3 bg-sky-400 rounded-full animate-wizard-confetti-1" />
                                <div className="absolute -top-1 -left-3 w-2 h-2 bg-green-400 rounded-full animate-wizard-confetti-2" />
                                <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-wizard-confetti-3" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">✅ تم إرسال طلبك بنجاح!</h3>

                            {/* Countdown timer */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-200 rounded-full mb-3">
                                <span className="text-sky-600 font-mono font-bold text-lg">
                                    {String(countdownMin).padStart(2, '0')}:{String(countdownSec).padStart(2, '0')}
                                </span>
                                <span className="text-sky-700 text-xs font-medium">
                                    سيتواصل معك 3 شركات
                                </span>
                            </div>

                            {/* Summary */}
                            <div className="bg-gray-50 rounded-xl p-3 mb-4 text-sm text-gray-600 space-y-1 text-right">
                                <p>📋 {data.serviceLabel} • {data.propertyLabel}</p>
                                <p>📍 {data.cityName}{data.neighborhood && data.neighborhood !== data.cityName ? ` — ${data.neighborhood}` : ''}</p>
                                <p>💰 {data.budgetLabel}</p>
                                {compareWithCompany && (
                                    <p>📊 مقارنة مع: {compareWithCompany}</p>
                                )}
                            </div>

                            {/* Installment badge (urgency phase) */}
                            {timingConfig?.showInstallment && (
                                <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-xl mb-4 text-sm text-red-700 font-bold">
                                    💳 تقسيط تابي وتمارا متاح مع هذه الشركات
                                </div>
                            )}

                            {/* Social proof */}
                            <p className="text-xs text-gray-400 mb-4">
                                آخر طلب مشابه: قبل {Math.floor(3 + Math.random() * 20)} دقيقة في {data.cityName || 'الرياض'}
                            </p>

                            <button
                                onClick={handleOpenWhatsApp}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-green-600/30"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.124 1.527 5.86L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.89 0-3.665-.5-5.2-1.38l-.373-.22-3.862 1.01 1.03-3.765-.242-.385A9.78 9.78 0 012.182 12 9.818 9.818 0 0112 2.182 9.818 9.818 0 0121.818 12 9.818 9.818 0 0112 21.818z" />
                                </svg>
                                تأكيد عبر واتساب
                            </button>

                            {/* Fallback phone */}
                            <a
                                href={`tel:+${WIZARD_WHATSAPP_NUMBER}`}
                                className="w-full mt-3 flex items-center justify-center gap-2 px-6 py-2.5 text-gray-500 hover:text-gray-700 text-sm transition-colors border border-gray-200 rounded-xl hover:bg-gray-50"
                            >
                                📞 اتصل بنا مباشرة
                            </a>

                            <button
                                onClick={onClose}
                                className="w-full mt-2 px-6 py-2 text-gray-400 hover:text-gray-600 text-xs transition-colors"
                            >
                                إغلاق
                            </button>
                        </div>
                    ) : (
                        /* ═══════ STEP CONTENT ═══════ */
                        <div className="animate-wizard-slide-in" key={`${currentStep}-${data.citySlug}`}>
                            {/* STEP 1: Service Type */}
                            {currentStep === 1 && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">ما نوع الخدمة المطلوبة؟</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {WIZARD_SERVICE_TYPES.map(svc => (
                                            <button
                                                key={svc.id}
                                                onClick={() => handleServiceSelect(svc.id)}
                                                className={`relative flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-sky-50 border-2 border-gray-200 hover:border-sky-400 rounded-xl transition-all duration-200 active:scale-95 group overflow-hidden ${
                                                    rippleTarget === svc.id ? 'animate-wizard-ripple' : ''
                                                }`}
                                            >
                                                <span className="text-3xl group-hover:scale-110 transition-transform">{svc.emoji}</span>
                                                <span className="font-bold text-gray-700 text-sm group-hover:text-sky-700">{svc.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: Property Type */}
                            {currentStep === 2 && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">ما نوع العقار؟</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {WIZARD_PROPERTY_TYPES.map(prop => (
                                            <button
                                                key={prop.id}
                                                onClick={() => handlePropertySelect(prop.id)}
                                                className={`relative flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-sky-50 border-2 border-gray-200 hover:border-sky-400 rounded-xl transition-all duration-200 active:scale-95 group overflow-hidden ${
                                                    rippleTarget === prop.id ? 'animate-wizard-ripple' : ''
                                                }`}
                                            >
                                                <span className="text-3xl group-hover:scale-110 transition-transform">{prop.emoji}</span>
                                                <span className="font-bold text-gray-700 text-sm group-hover:text-sky-700">{prop.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: Location */}
                            {currentStep === 3 && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">أين موقع العقار؟</h3>
                                    {!data.citySlug ? (
                                        <div>
                                            <p className="text-sm text-gray-500 mb-3">اختر المدينة:</p>
                                            <div className="grid grid-cols-3 gap-2 max-h-[240px] overflow-y-auto pr-1">
                                                {WIZARD_MAJOR_CITIES.map(city => (
                                                    <button
                                                        key={city.slug}
                                                        onClick={() => handleCitySelect(city.slug, city.name)}
                                                        className={`px-3 py-2.5 bg-gray-50 hover:bg-sky-50 border-2 border-gray-200 hover:border-sky-400 rounded-xl transition-all text-sm font-bold text-gray-700 hover:text-sky-700 active:scale-95 ${
                                                            rippleTarget === city.slug ? 'animate-wizard-ripple' : ''
                                                        }`}
                                                    >
                                                        {city.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ) : neighborhoods.length > 0 ? (
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-sm text-gray-500">🏙️ {data.cityName} —</span>
                                                {!prefilledCitySlug && (
                                                    <button
                                                        onClick={() => {
                                                            setData(d => ({ ...d, citySlug: '', cityName: '' }));
                                                            setNeighborhoods([]);
                                                        }}
                                                        className="text-xs text-sky-600 hover:text-sky-700 underline"
                                                    >
                                                        تغيير المدينة
                                                    </button>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 mb-3">اختر الحي:</p>
                                            <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto pr-1">
                                                {neighborhoods.map(hood => (
                                                    <button
                                                        key={hood}
                                                        onClick={() => handleNeighborhoodSelect(hood)}
                                                        className={`px-3 py-2.5 bg-gray-50 hover:bg-sky-50 border-2 border-gray-200 hover:border-sky-400 rounded-xl transition-all text-sm font-bold text-gray-700 hover:text-sky-700 active:scale-95 text-right ${
                                                            rippleTarget === hood ? 'animate-wizard-ripple' : ''
                                                        }`}
                                                    >
                                                        📍 {hood}
                                                    </button>
                                                ))}
                                                <button
                                                    onClick={() => handleNeighborhoodSelect('حي آخر')}
                                                    className="px-3 py-2.5 bg-gray-50 hover:bg-sky-50 border-2 border-gray-200 hover:border-sky-400 rounded-xl transition-all text-sm font-bold text-gray-700 hover:text-sky-700 active:scale-95 text-right col-span-2"
                                                >
                                                    📍 حي آخر
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-sm text-gray-500">🏙️ {data.cityName}</span>
                                                {!prefilledCitySlug && (
                                                    <button
                                                        onClick={() => {
                                                            setData(d => ({ ...d, citySlug: '', cityName: '' }));
                                                            setNeighborhoods([]);
                                                        }}
                                                        className="text-xs text-sky-600 hover:text-sky-700 underline"
                                                    >
                                                        تغيير المدينة
                                                    </button>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => handleNeighborhoodSelect(data.cityName)}
                                                className="w-full px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all active:scale-95"
                                            >
                                                متابعة ← {data.cityName}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* STEP 4: Budget */}
                            {currentStep === 4 && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">ما ميزانيتك التقريبية؟</h3>
                                    <div className="space-y-2">
                                        {budgetOptions.map(opt => (
                                            <button
                                                key={opt.id}
                                                onClick={() => handleBudgetSelect(opt.id, opt.label)}
                                                className={`w-full flex items-center gap-3 px-4 py-3.5 bg-gray-50 hover:bg-sky-50 border-2 border-gray-200 hover:border-sky-400 rounded-xl transition-all text-right font-bold text-gray-700 hover:text-sky-700 active:scale-[0.98] group ${
                                                    rippleTarget === opt.id ? 'animate-wizard-ripple' : ''
                                                }`}
                                            >
                                                <span className="text-xl group-hover:scale-110 transition-transform">💰</span>
                                                <span className="text-sm">{opt.label}</span>
                                            </button>
                                        ))}
                                        {/* Extra option for urgency phase */}
                                        {timingConfig?.extraBudgetOption && (
                                            <button
                                                onClick={() => handleBudgetSelect(
                                                    timingConfig.extraBudgetOption!.id,
                                                    timingConfig.extraBudgetOption!.label
                                                )}
                                                className="w-full flex items-center gap-3 px-4 py-3.5 bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-400 rounded-xl transition-all text-right font-bold text-red-700 hover:text-red-800 active:scale-[0.98] group"
                                            >
                                                <span className="text-xl group-hover:scale-110 transition-transform">💳</span>
                                                <span className="text-sm">{timingConfig.extraBudgetOption.label}</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* STEP 5: Phone Number */}
                            {currentStep === 5 && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">رقم الجوال للتواصل</h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {timingConfig?.isNightMode
                                            ? 'سيتصل بك فريق الطوارئ خلال دقائق'
                                            : 'سيتواصل معك 3 شركات معتمدة بعروض أسعار مجانية'
                                        }
                                    </p>

                                    {/* Summary */}
                                    <div className="bg-gray-50 rounded-xl p-3 mb-4 text-sm text-gray-600 space-y-1">
                                        <p>📋 {data.serviceLabel} • {data.propertyLabel}</p>
                                        <p>📍 {data.cityName}{data.neighborhood && data.neighborhood !== data.cityName ? ` — ${data.neighborhood}` : ''}</p>
                                        {!timingConfig?.isNightMode && <p>💰 {data.budgetLabel}</p>}
                                        {compareWithCompany && <p>📊 مقارنة مع: {compareWithCompany}</p>}
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            inputMode="tel"
                                            placeholder="05XXXXXXXX"
                                            maxLength={12}
                                            value={data.phone}
                                            onChange={(e) => {
                                                // Convert Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) to Western (0-9)
                                                // Also handles Persian/Urdu variants (۰۱۲۳۴۵۶۷۸۹)
                                                const arabicToWestern = (str: string) =>
                                                    str.replace(/[٠-٩]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 0x0660 + 48))
                                                       .replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 0x06F0 + 48));
                                                const val = arabicToWestern(e.target.value).replace(/[^0-9]/g, '').slice(0, 10);
                                                setData(d => ({ ...d, phone: val }));
                                                setPhoneError('');
                                            }}
                                            // Secondary conversion layer: intercept Arabic digits
                                            // before they enter the input on browsers that fire
                                            // onBeforeInput (Chrome, Safari, Edge)
                                            onBeforeInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                const nativeEvent = e.nativeEvent as InputEvent;
                                                if (nativeEvent.data && /[٠-٩۰-۹]/.test(nativeEvent.data)) {
                                                    e.preventDefault();
                                                    const converted = nativeEvent.data
                                                        .replace(/[٠-٩]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 0x0660 + 48))
                                                        .replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 0x06F0 + 48));
                                                    const current = data.phone;
                                                    const newVal = (current + converted).replace(/[^0-9]/g, '').slice(0, 10);
                                                    setData(d => ({ ...d, phone: newVal }));
                                                }
                                            }}
                                            className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-xl text-left font-mono text-lg tracking-wider focus:outline-none focus:ring-2 transition-all ${
                                                phoneError
                                                    ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                                                    : 'border-gray-200 focus:ring-sky-200 focus:border-sky-400'
                                            }`}
                                            dir="ltr"
                                            autoComplete="tel"
                                            autoFocus
                                        />
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🇸🇦</span>
                                    </div>
                                    {phoneError && (
                                        <p className="text-red-500 text-xs mt-1.5">{phoneError}</p>
                                    )}

                                    <button
                                        onClick={handlePhoneSubmit}
                                        disabled={data.phone.length < 10}
                                        className={`w-full mt-4 flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] ${
                                            timingConfig?.isNightMode
                                                ? 'bg-gradient-to-l from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/30'
                                                : 'bg-gradient-to-l from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white shadow-sky-500/30'
                                        }`}
                                    >
                                        {timingConfig?.isNightMode ? '🚨 أرسل طلب الطوارئ' : '🚀 أرسل طلبي الآن'}
                                    </button>

                                    <p className="text-center text-xs text-gray-400 mt-3">
                                        🔒 بياناتك محمية ولن تُشارك مع أطراف غير معتمدة
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer: Back button */}
                {!submitted && currentStep > initialStepRef.current && !showExitConfirm && (
                    <div className="px-6 pb-4">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            ← رجوع
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
