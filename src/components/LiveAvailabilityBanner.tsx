'use client';

import { useEffect, useState, useCallback } from 'react';
import { getMarketTimingConfig, getHourlyMode, getDispatchMessages, type MarketTimingConfig, type DispatchMessage } from '@/lib/market-timing';

// ============================================
// 🚗 Live Dispatch Banner — Uber-style
// Rotating neighborhood-aware availability
// Switches between day (green) and night (red) modes
// ============================================

interface LiveAvailabilityBannerProps {
    cityNameAr: string;
    serviceNameAr: string;
    serviceCategory?: string;
    totalCompanies: number;
    neighborhoods?: string[];
}

export function LiveAvailabilityBanner({
    cityNameAr,
    serviceNameAr,
    serviceCategory,
    totalCompanies,
    neighborhoods,
}: LiveAvailabilityBannerProps) {
    const [currentTime, setCurrentTime] = useState('');
    const [dotVisible, setDotVisible] = useState(true);
    const [cycleConfig, setCycleConfig] = useState<MarketTimingConfig | null>(null);
    const [isEmergency, setIsEmergency] = useState(false);
    const [dispatchMessages, setDispatchMessages] = useState<DispatchMessage[]>([]);
    const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // Deterministic team count
    const availableTeams = Math.max(2, Math.min(totalCompanies, Math.ceil(totalCompanies * 0.7)));

    // Initialize dispatch messages
    const refreshDispatch = useCallback(() => {
        const mode = getHourlyMode();
        setIsEmergency(mode === 'emergency');
        const msgs = getDispatchMessages(neighborhoods || [], serviceNameAr, serviceCategory || 'default', totalCompanies);
        setDispatchMessages(msgs);
    }, [neighborhoods, serviceNameAr, serviceCategory, totalCompanies]);

    useEffect(() => {
        // Time update
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
        const timeTimer = setInterval(updateTime, 30000);

        // Pulse dot
        const pulse = setInterval(() => setDotVisible(v => !v), 1000);

        // Initialize
        setCycleConfig(getMarketTimingConfig());
        refreshDispatch();

        return () => {
            clearInterval(timeTimer);
            clearInterval(pulse);
        };
    }, [refreshDispatch]);

    // Rotate dispatch messages every 8 seconds with fade
    useEffect(() => {
        if (dispatchMessages.length <= 1) return;

        const rotateTimer = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentMsgIndex(prev => (prev + 1) % dispatchMessages.length);
                setIsFading(false);
            }, 400); // 400ms fade out, then switch
        }, 8000);

        return () => clearInterval(rotateTimer);
    }, [dispatchMessages.length]);

    const currentMsg = dispatchMessages[currentMsgIndex];

    // Dynamic colors based on mode
    const bgClass = isEmergency
        ? 'bg-gradient-to-r from-red-900 via-red-800 to-red-900 border-red-700/50'
        : 'bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 border-emerald-700/50';

    const liveColor = isEmergency ? 'bg-red-500' : 'bg-red-500';
    const livePing = isEmergency ? 'bg-red-400' : 'bg-red-400';
    const liveText = isEmergency ? 'text-red-300' : 'text-red-300';
    const statusBg = isEmergency ? 'bg-red-600/30 border-red-500/30' : 'bg-green-600/30 border-green-500/30';
    const statusDot = isEmergency ? 'bg-red-400' : 'bg-green-400';
    const statusText = isEmergency ? 'text-red-300' : 'text-green-300';
    const statusLabel = isEmergency ? 'خدمة طوارئ ليلية' : 'يستقبل طلبات';
    const teamBg = isEmergency ? 'bg-red-700/50' : 'bg-emerald-700/50';
    const teamTextColor = isEmergency ? 'text-red-100' : 'text-emerald-100';
    const teamLabelColor = isEmergency ? 'text-red-300' : 'text-emerald-300';
    const teamIcon = isEmergency ? '🚨' : '👷';

    return (
        <div className={`${bgClass} border-b`}>
            <div className="max-w-7xl mx-auto px-4 py-2.5" dir="rtl">
                {/* Top row: status indicators */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                    {/* Left: Live indicator */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${livePing} opacity-75`} />
                                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 transition-opacity duration-300 ${dotVisible ? liveColor : 'opacity-60'} ${liveColor}`} />
                            </span>
                            <span className={`${liveText} text-xs font-bold tracking-wide uppercase`}>مباشر</span>
                        </div>
                        <span className="text-white/90 text-sm font-medium">
                            {isEmergency
                                ? `فرق طوارئ ${serviceNameAr} الليلية في ${cityNameAr}`
                                : `حالة توفر فرق ${serviceNameAr} الآن في ${cityNameAr}`
                            }
                        </span>
                    </div>

                    {/* Center: Team count */}
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center gap-1.5 ${teamBg} rounded-full px-3 py-1`}>
                            <span className={`${teamLabelColor} text-sm`}>{teamIcon}</span>
                            <span className={`${teamTextColor} text-sm font-bold`}>
                                {isEmergency ? Math.max(1, Math.ceil(availableTeams * 0.3)) : availableTeams}
                            </span>
                            <span className={`${teamLabelColor} text-xs`}>
                                {isEmergency ? 'فريق طوارئ' : 'فريق متاح'}
                            </span>
                        </div>

                        {currentTime && (
                            <div className={`flex items-center gap-1.5 ${teamLabelColor} text-xs`}>
                                <span>🕐</span>
                                <span>آخر تحديث: {currentTime}</span>
                            </div>
                        )}
                    </div>

                    {/* Right: Status + Monthly phase */}
                    <div className="hidden sm:flex items-center gap-2">
                        <div className={`flex items-center gap-1.5 ${statusBg} border rounded-full px-3 py-1`}>
                            <span className={`w-1.5 h-1.5 ${statusDot} rounded-full animate-pulse`} />
                            <span className={`${statusText} text-xs font-medium`}>{statusLabel}</span>
                        </div>
                        {cycleConfig && !isEmergency && (
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

                {/* Bottom row: Rotating dispatch message */}
                {currentMsg && (
                    <div
                        className={`flex items-center gap-2 py-1 transition-all duration-400 ${
                            isFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
                        }`}
                    >
                        <span className="text-base">{currentMsg.icon}</span>
                        <span className={`text-sm font-medium ${
                            currentMsg.urgencyLevel === 'high' ? 'text-red-200' :
                            currentMsg.urgencyLevel === 'medium' ? 'text-yellow-200' :
                            'text-emerald-200'
                        }`}>
                            {currentMsg.text}
                        </span>

                        {/* Progress dots showing which message we're on */}
                        {dispatchMessages.length > 1 && (
                            <div className="hidden sm:flex items-center gap-1 mr-auto">
                                {dispatchMessages.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-1 h-1 rounded-full transition-all duration-300 ${
                                            i === currentMsgIndex
                                                ? (isEmergency ? 'bg-red-400 w-2' : 'bg-emerald-400 w-2')
                                                : 'bg-white/20'
                                        }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
