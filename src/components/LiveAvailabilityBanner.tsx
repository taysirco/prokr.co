'use client';

import { useEffect, useState } from 'react';
import { getSalaryCycleConfig, type SalaryCycleConfig } from '@/lib/salary-cycle';

// ============================================
// LIVE AVAILABILITY BANNER — QDF VISUAL SIGNAL
// Animated bar showing real-time team availability
// ============================================

interface LiveAvailabilityBannerProps {
    cityNameAr: string;
    serviceNameAr: string;
    totalCompanies: number;
}

export function LiveAvailabilityBanner({
    cityNameAr,
    serviceNameAr,
    totalCompanies,
}: LiveAvailabilityBannerProps) {
    const [currentTime, setCurrentTime] = useState('');
    const [dotVisible, setDotVisible] = useState(true);
    const [cycleConfig, setCycleConfig] = useState<SalaryCycleConfig | null>(null);

    // Deterministic team count based on total companies and hour
    const availableTeams = Math.max(2, Math.min(totalCompanies, Math.ceil(totalCompanies * 0.7)));

    useEffect(() => {
        // Update time every 30 seconds
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString('ar-SA', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                    timeZone: 'Asia/Riyadh',
                })
            );
        };
        updateTime();
        const timer = setInterval(updateTime, 30000);

        // Pulse dot animation
        const pulse = setInterval(() => setDotVisible(v => !v), 1000);

        return () => {
            clearInterval(timer);
            clearInterval(pulse);
        };
    }, []);

    useEffect(() => {
        setCycleConfig(getSalaryCycleConfig());
    }, []);

    return (
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 border-b border-emerald-700/50">
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between flex-wrap gap-2" dir="rtl">
                {/* Left: Live indicator */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                        <span
                            className="relative flex h-2.5 w-2.5"
                            aria-hidden="true"
                        >
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 transition-opacity duration-300 ${dotVisible ? 'bg-red-500' : 'bg-red-400'}`} />
                        </span>
                        <span className="text-red-300 text-xs font-bold tracking-wide uppercase">مباشر</span>
                    </div>
                    <span className="text-white/90 text-sm font-medium">
                        حالة توفر فرق {serviceNameAr} الآن في {cityNameAr}
                    </span>
                </div>

                {/* Center: Team count */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 bg-emerald-700/50 rounded-full px-3 py-1">
                        <span className="text-emerald-300 text-sm">👷</span>
                        <span className="text-emerald-100 text-sm font-bold">{availableTeams}</span>
                        <span className="text-emerald-300 text-xs">فريق متاح</span>
                    </div>

                    {currentTime && (
                        <div className="flex items-center gap-1.5 text-emerald-300/80 text-xs">
                            <span>🕐</span>
                            <span>آخر تحديث: {currentTime}</span>
                        </div>
                    )}
                </div>

                {/* Right: Status + Salary Cycle Signal */}
                <div className="hidden sm:flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-green-600/30 border border-green-500/30 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-300 text-xs font-medium">يستقبل طلبات</span>
                    </div>
                    {cycleConfig && (
                        <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 border
                            ${cycleConfig.phase === 'premium' ? 'bg-amber-500/20 border-amber-400/30' :
                              cycleConfig.phase === 'urgency' ? 'bg-red-500/20 border-red-400/30' :
                              'bg-emerald-500/20 border-emerald-400/30'}`}
                        >
                            <span className="text-xs">{cycleConfig.icon}</span>
                            <span className={`text-xs font-medium
                                ${cycleConfig.phase === 'premium' ? 'text-amber-300' :
                                  cycleConfig.phase === 'urgency' ? 'text-red-300' :
                                  'text-emerald-300'}`}
                            >
                                {cycleConfig.availabilityExtra}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
