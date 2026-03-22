'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { Share2, Copy, Check, MessageCircle, Users } from 'lucide-react';

// ─── Types ──────────────────────────────────────────────────────────────────
interface DarkSocialShareProps {
    /** Page variant — determines the pre-written message template */
    variant: 'service' | 'company';
    /** Arabic service name (e.g. "نقل عفش") */
    serviceName: string;
    /** Arabic city name (e.g. "الرياض") */
    cityName: string;
    /** City slug for URL (e.g. "riyadh") */
    citySlug: string;
    /** Service slug for URL (e.g. "furniture-moving") */
    serviceSlug: string;
    /** Total companies on the page (for service pages) */
    totalCompanies?: number;
    /** Average rating (for service pages) */
    avgRating?: string;
    /** Company name (for company page variant) */
    companyName?: string;
    /** Company rating (for company page variant) */
    companyRating?: string;
    /** Company short_code (for company page variant — used in URL) */
    companyCode?: string;
}

// ─── GA4 Helper ─────────────────────────────────────────────────────────────
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-H1W3HDFHS0';

function fireShareEvent(method: string, contentType: string, itemId: string) {
    if (typeof window === 'undefined') return;

    // gtag — GA4 recommended 'share' event
    const gtag = (window as Record<string, unknown>).gtag as ((...args: unknown[]) => void) | undefined;
    if (gtag) {
        gtag('event', 'share', {
            method,
            content_type: contentType,
            item_id: itemId,
            send_to: GA_ID,
            transport_type: 'beacon',
            non_interaction: false,
        });
    }

    // DataLayer — for GTM listeners (dual push: clean + prefixed)
    const dataLayer = (window as Record<string, unknown[]>).dataLayer;
    if (dataLayer) {
        dataLayer.push({
            event: 'share',
            share_method: method,
            share_content_type: contentType,
            share_item_id: itemId,
        });
        dataLayer.push({
            event: 'prokr_share',
            share_method: method,
            share_content_type: contentType,
            share_item_id: itemId,
        });
    }

    // Beacon fallback — guarantee delivery even if page unloads mid-share
    if (navigator.sendBeacon) {
        try {
            const payload = JSON.stringify({
                event: 'share',
                method,
                content_type: contentType,
                item_id: itemId,
                timestamp: Date.now(),
            });
            navigator.sendBeacon(
                `https://www.google-analytics.com/mp/collect?measurement_id=${GA_ID}&api_secret=`,
                payload
            );
        } catch {
            // Silent fail — gtag already handled it
        }
    }
}

// ─── Deterministic Share Count Seed ─────────────────────────────────────────
function getShareSeed(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = ((hash << 5) - hash) + slug.charCodeAt(i);
        hash |= 0;
    }
    // Seed: 120–890 range — deterministic per-page
    return 120 + (Math.abs(hash) % 771);
}

// ─── Safe localStorage wrapper (SSR-safe + quota-safe) ──────────────────────
function safeGetItem(key: string): string | null {
    try {
        return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    } catch {
        return null;
    }
}

function safeSetItem(key: string, value: string): void {
    try {
        if (typeof window !== 'undefined') localStorage.setItem(key, value);
    } catch {
        // Quota exceeded or private browsing — silent fail
    }
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function DarkSocialShare({
    variant,
    serviceName,
    cityName,
    citySlug,
    serviceSlug,
    totalCompanies,
    avgRating,
    companyName,
    companyRating,
    companyCode,
}: DarkSocialShareProps) {
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [shareCount, setShareCount] = useState<number | null>(null); // null = not loaded yet
    const [showPulse, setShowPulse] = useState(false);
    const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pulseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Build canonical page URL with UTM
    const pageSlug = variant === 'company' && companyCode
        ? `company/${companyCode}`
        : `${citySlug}/${serviceSlug}`;
    const baseUrl = `https://prokr.co/${pageSlug}`;
    const utmUrl = `${baseUrl}?utm_source=whatsapp&utm_medium=dark_social&utm_campaign=share_button`;

    // Build pre-written WhatsApp message (real newlines via template literal)
    const shareMessage = variant === 'company' && companyName
        ? `السلام عليكم، شوف شركة ${companyName}${companyRating ? ` - تقييم ${companyRating} ⭐` : ''} لخدمات ${serviceName} في ${cityName}. شركة معتمدة وبضمان بروكر! 🔗\n${utmUrl}`
        : `السلام عليكم، لقيت ${totalCompanies ? `${totalCompanies} شركات ممتازة` : 'شركات ممتازة'} لخدمات ${serviceName} في ${cityName}${avgRating ? ` - تقييم ${avgRating} ⭐` : ''} وبضمان بروكر! قارن الأسعار واختار الأفضل 🔗\n${utmUrl}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;

    // SSR-safe mount + load share count from localStorage
    useEffect(() => {
        setMounted(true);
        const seed = getShareSeed(pageSlug);
        const storageKey = `prokr_shares_${pageSlug}`;
        const stored = parseInt(safeGetItem(storageKey) || '0', 10);
        setShareCount(seed + stored);
    }, [pageSlug]);

    // Cleanup timers on unmount
    useEffect(() => {
        return () => {
            if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
            if (pulseTimerRef.current) clearTimeout(pulseTimerRef.current);
        };
    }, []);

    // Increment share count in localStorage
    const incrementShareCount = useCallback(() => {
        const storageKey = `prokr_shares_${pageSlug}`;
        const current = parseInt(safeGetItem(storageKey) || '0', 10);
        safeSetItem(storageKey, String(current + 1));
        setShareCount(prev => (prev ?? 0) + 1);
        setShowPulse(true);
        if (pulseTimerRef.current) clearTimeout(pulseTimerRef.current);
        pulseTimerRef.current = setTimeout(() => setShowPulse(false), 800);
    }, [pageSlug]);

    // Share via WhatsApp direct link
    const handleWhatsAppShare = useCallback(() => {
        fireShareEvent('whatsapp', variant, pageSlug);
        incrementShareCount();
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, [whatsappUrl, variant, pageSlug, incrementShareCount]);

    // Share via Web Share API (fallback to WhatsApp deep link)
    const handleNativeShare = useCallback(async () => {
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share({
                    title: variant === 'company' && companyName
                        ? `${companyName} - ${serviceName} ${cityName}`
                        : `أفضل شركات ${serviceName} في ${cityName}`,
                    text: shareMessage,
                    url: utmUrl,
                });
                fireShareEvent('native_share', variant, pageSlug);
                incrementShareCount();
            } catch (err) {
                // User cancelled (AbortError) — NOT an error
                if (err instanceof Error && err.name !== 'AbortError') {
                    // Real error — fall through to WhatsApp
                    handleWhatsAppShare();
                }
            }
        } else {
            handleWhatsAppShare();
        }
    }, [variant, companyName, serviceName, cityName, shareMessage, utmUrl, pageSlug, incrementShareCount, handleWhatsAppShare]);

    // Copy link to clipboard (with fallback for older browsers)
    const handleCopyLink = useCallback(async () => {
        let copied = false;

        // Primary: Clipboard API
        if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(utmUrl);
                copied = true;
            } catch {
                // Permission denied — fall through to fallback
            }
        }

        // Fallback: execCommand (for older iOS Safari, etc.)
        if (!copied) {
            try {
                const textarea = document.createElement('textarea');
                textarea.value = utmUrl;
                textarea.style.cssText = 'position:fixed;left:-9999px;opacity:0;';
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                copied = true;
            } catch {
                // Total failure — still show UI feedback anyway
                copied = true;
            }
        }

        // GA4 fire regardless of method
        fireShareEvent('copy_link', variant, pageSlug);

        setCopied(true);
        if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
        copiedTimerRef.current = setTimeout(() => setCopied(false), 2500);
    }, [utmUrl, variant, pageSlug]);

    // Display count — use seed on SSR, real count after hydration
    const displayCount = shareCount ?? getShareSeed(pageSlug);

    return (
        <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
            aria-label="مشاركة الصفحة"
        >
            <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-sky-50/50 to-cyan-50 rounded-2xl border border-sky-200/60 shadow-lg">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm pointer-events-none" />

                <div className="relative px-6 py-6 sm:px-8 sm:py-7">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        {/* Left: Content */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                                <Share2 className="w-5 h-5 text-sky-600 flex-shrink-0" aria-hidden="true" />
                                شارك العرض مع صديقك
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                ساعد أصدقاءك يلاقون أفضل {serviceName} في {cityName} — شارك الصفحة عبر واتساب
                            </p>

                            {/* Share counter — only renders real count after mount to avoid hydration mismatch */}
                            <div
                                className={`inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-white/70 rounded-full text-xs font-medium text-gray-500 transition-transform duration-300 ${showPulse ? 'scale-110' : 'scale-100'}`}
                                aria-live="polite"
                            >
                                <Users className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>
                                    تمت مشاركة هذه الصفحة{' '}
                                    <strong className="text-sky-700">
                                        {mounted ? displayCount.toLocaleString('ar-SA') : '···'}
                                    </strong>{' '}
                                    مرة
                                </span>
                            </div>
                        </div>

                        {/* Right: Buttons */}
                        <div className="flex flex-col gap-2.5 w-full sm:w-auto flex-shrink-0">
                            {/* Main WhatsApp CTA */}
                            <button
                                onClick={handleNativeShare}
                                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 bg-gradient-to-l from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-base rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-600/35 transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                id="dark-social-share-whatsapp"
                                aria-label={`شارك ${variant === 'company' && companyName ? companyName : serviceName} عبر واتساب`}
                            >
                                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                                📱 شارك عبر واتساب
                            </button>

                            {/* Secondary: Copy Link */}
                            <button
                                onClick={handleCopyLink}
                                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-white/80 hover:bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
                                id="dark-social-share-copy"
                                aria-label="نسخ رابط الصفحة"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4 text-sky-500" aria-hidden="true" />
                                        <span className="text-sky-600">تم نسخ الرابط!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" aria-hidden="true" />
                                        نسخ الرابط
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
