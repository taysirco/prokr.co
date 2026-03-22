'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
    getWizardTimingConfig,
    mapServiceSlugToCategory,
} from '@/lib/wizard-funnel-data';

// Lazy-load the modal to avoid loading it on every page
const WizardFunnelModal = dynamic(() => import('./WizardFunnelModal'), {
    ssr: false,
});

interface WizardFunnelButtonProps {
    /** Pre-fill the city context */
    citySlug?: string;
    cityName?: string;
    /** Pre-fill the service context */
    serviceSlug?: string;
    /** Company name for comparison (company page only) */
    compareWithCompany?: string;
    /** Button placement style */
    placement?: 'hero' | 'inline' | 'compact';
    /** Additional CSS classes */
    className?: string;
}

/**
 * WizardFunnelButton v2 CTA Trigger
 *
 * Market timing-aware CTA text.
 * Supports company comparison context.
 * Dynamic content based on time of day + month phase.
 */
export default function WizardFunnelButton({
    citySlug,
    cityName,
    serviceSlug,
    compareWithCompany,
    placement = 'hero',
    className = '',
}: WizardFunnelButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [timingConfig, setTimingConfig] = useState<ReturnType<typeof getWizardTimingConfig> | null>(null);

    // Map service slug to wizard funnel category ID
    const serviceId = serviceSlug ? mapServiceSlugToCategory(serviceSlug) : undefined;

    // Load timing config on client only
    useEffect(() => {
        setTimingConfig(getWizardTimingConfig());
    }, []);

    const ctaText = timingConfig?.ctaText || 'احصل على 3 عروض أسعار في 60 ثانية';
    const ctaEmoji = timingConfig?.ctaEmoji || '⚡';
    const badgeText = timingConfig?.badgeText || '+10,000 عميل حصلوا على عروض تنافسية';
    const ctaSubtext = timingConfig?.ctaSubtext || 'مجاناً • بدون التزام';
    const isNight = timingConfig?.isNightMode || false;

    const gradientClass = isNight
        ? 'from-red-600 via-red-700 to-red-800'
        : 'from-amber-500 via-orange-500 to-amber-600';
    const gradientClassBl = isNight
        ? 'from-red-600 via-red-700 to-red-800'
        : 'from-amber-500 via-orange-500 to-orange-600';

    if (placement === 'compact') {
        return (
            <>
                <button
                    onClick={() => setIsOpen(true)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-l ${gradientClass} text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg active:scale-[0.98] text-sm ${className}`}
                >
                    <span className="text-base">{ctaEmoji}</span>
                    {compareWithCompany
                        ? `قارن مع ${compareWithCompany.length > 15 ? compareWithCompany.slice(0, 15) + '…' : compareWithCompany}`
                        : 'احصل على 3 عروض أسعار'
                    }
                </button>

                {isOpen && (
                    <WizardFunnelModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        prefilledCitySlug={citySlug}
                        prefilledCityName={cityName}
                        prefilledServiceId={serviceId}
                        compareWithCompany={compareWithCompany}
                    />
                )}
            </>
        );
    }

    if (placement === 'inline') {
        return (
            <>
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
                    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-l ${gradientClass} p-6 sm:p-8 text-center shadow-xl`}>
                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-black/10 rounded-full blur-2xl" />

                        <div className="relative">
                            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                                {ctaEmoji} {isNight ? 'خدمة طوارئ ليلية متاحة' : 'مقارنة عروض أسعار فورية'}
                            </h3>
                            <p className={`mb-5 text-sm sm:text-base ${isNight ? 'text-red-200' : 'text-amber-100'}`}>
                                {isNight
                                    ? 'فرق جاهزة للتحرك خلال 30 دقيقة — اطلب الآن'
                                    : 'دع 3 شركات معتمدة تتنافس على خدمتك — مجاناً وبدون التزام'
                                }
                            </p>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-black text-lg rounded-2xl hover:bg-amber-50 shadow-xl transition-all hover:scale-105 active:scale-[0.98] animate-wizard-pulse-cta"
                            >
                                <span className="text-xl">{ctaEmoji}</span>
                                {ctaText}
                            </button>
                            <p className={`text-xs mt-3 ${isNight ? 'text-red-300' : 'text-amber-200'}`}>
                                🔒 {isNight ? 'استجابة فورية 24/7' : `مجاني تماماً • ${badgeText}`}
                            </p>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <WizardFunnelModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        prefilledCitySlug={citySlug}
                        prefilledCityName={cityName}
                        prefilledServiceId={serviceId}
                    />
                )}
            </>
        );
    }

    // Hero placement (default)
    return (
        <>
            <section className={`py-12 ${className}`}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-bl ${gradientClassBl} p-8 sm:p-12 text-center shadow-2xl`}>
                        {/* Background shapes */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

                        <div className="relative">
                            {/* Badge — timing aware */}
                            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-white text-sm font-medium`}>
                                <span>🏆</span>
                                <span>{badgeText}</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                                {isNight
                                    ? '🚨 خدمة طوارئ ليلية — فرق جاهزة الآن'
                                    : 'وفّر وقتك — دع الشركات تتنافس عليك'
                                }
                            </h2>
                            <p className={`mb-8 max-w-2xl mx-auto text-base sm:text-lg ${isNight ? 'text-red-200' : 'text-amber-100'}`}>
                                {isNight
                                    ? 'اطلب فريق طوارئ يصلك خلال 30 دقيقة — خدمة متاحة على مدار الساعة'
                                    : `أجب على أسئلة سريعة واحصل على 3 عروض أسعار من شركات معتمدة خلال دقائق — ${ctaSubtext}`
                                }
                            </p>

                            <button
                                onClick={() => setIsOpen(true)}
                                className={`inline-flex items-center gap-3 px-10 py-5 bg-white font-black text-lg sm:text-xl rounded-2xl hover:bg-gray-50 shadow-2xl transition-all hover:scale-105 active:scale-[0.98] animate-wizard-pulse-cta ${
                                    isNight ? 'text-red-600' : 'text-orange-600'
                                }`}
                            >
                                <span className="text-2xl">{ctaEmoji}</span>
                                {ctaText}
                            </button>

                            <div className={`flex flex-wrap items-center justify-center gap-4 mt-6 text-xs sm:text-sm ${isNight ? 'text-red-300' : 'text-amber-200'}`}>
                                <span>✅ مجاناً بالكامل</span>
                                <span>•</span>
                                <span>🔒 بياناتك محمية</span>
                                <span>•</span>
                                <span>{isNight ? '🚨 استجابة فورية' : '⏱️ 60 ثانية فقط'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isOpen && (
                <WizardFunnelModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    prefilledCitySlug={citySlug}
                    prefilledCityName={cityName}
                    prefilledServiceId={serviceId}
                />
            )}
        </>
    );
}
