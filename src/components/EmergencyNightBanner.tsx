'use client';

import { useEffect, useState } from 'react';
import { getEmergencyConfig, type EmergencyConfig } from '@/lib/market-timing';

// ============================================
// 🚨 EmergencyNightBanner — 12AM-6AM Only
// Red pulsing full-width emergency banner
// Hidden during normal hours (no layout shift)
// ============================================

interface EmergencyNightBannerProps {
    cityNameAr: string;
    serviceNameAr: string;
}

export function EmergencyNightBanner({ cityNameAr, serviceNameAr }: EmergencyNightBannerProps) {
    const [config, setConfig] = useState<EmergencyConfig | null>(null);
    const [pulseActive, setPulseActive] = useState(true);
    const [responseMinutes, setResponseMinutes] = useState(30);

    useEffect(() => {
        const emergencyConfig = getEmergencyConfig(cityNameAr);
        setConfig(emergencyConfig);

        if (!emergencyConfig.isEmergency) return;

        // Pulse animation toggle
        const pulseTimer = setInterval(() => setPulseActive(v => !v), 800);

        // Simulated response time fluctuation (25-40 min)
        const responseTimer = setInterval(() => {
            setResponseMinutes(Math.floor(25 + Math.random() * 15));
        }, 12000);

        return () => {
            clearInterval(pulseTimer);
            clearInterval(responseTimer);
        };
    }, [cityNameAr]);

    // Don't render during normal hours
    if (!config?.isEmergency) return null;

    return (
        <div
            className={`relative overflow-hidden ${config.colors.bg} ${config.colors.border} border-b`}
            role="alert"
            aria-label="خدمة طوارئ ليلية متاحة"
        >
            {/* Animated glow background */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0 animate-pulse"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(239,68,68,0.4) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-3 sm:py-4" dir="rtl">
                <div className="flex items-center justify-between flex-wrap gap-3">
                    {/* Left: Emergency indicator */}
                    <div className="flex items-center gap-3">
                        {/* Flashing 🚨 */}
                        <span
                            className={`text-2xl transition-all duration-300 ${
                                pulseActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'scale-100'
                            }`}
                        >
                            🚨
                        </span>

                        <div className="flex flex-col">
                            <span className={`${config.colors.text} text-sm sm:text-base font-bold`}>
                                خدمة طوارئ ليلية متاحة الآن {cityNameAr.startsWith('ب') ? cityNameAr : `في ${cityNameAr}`}
                            </span>
                            <span className="text-red-300/80 text-xs sm:text-sm">
                                فرق {serviceNameAr} جاهزة للتحرك فوراً — خدمة 24/7
                            </span>
                        </div>
                    </div>

                    {/* Right: Response time + CTA */}
                    <div className="flex items-center gap-3">
                        {/* Response time badge */}
                        <div className="hidden sm:flex items-center gap-1.5 bg-red-700/50 rounded-full px-3 py-1.5 border border-red-500/30">
                            <span
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    pulseActive ? 'bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.8)]' : 'bg-red-500'
                                }`}
                            />
                            <span className="text-red-200 text-xs font-bold">
                                متوسط الاستجابة: {responseMinutes} دقيقة
                            </span>
                        </div>

                        {/* Emergency CTA */}
                        <a
                            href="tel:+966553165555"
                            className={`${config.colors.ctaBg} ${config.colors.ctaText}
                                px-4 py-2 rounded-lg text-sm font-bold
                                shadow-lg ${config.colors.glow}
                                hover:shadow-xl hover:scale-105 transition-all duration-300
                                animate-pulse`}
                        >
                            📞 اتصل الآن
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
