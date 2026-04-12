'use client';

import { useState, useCallback } from 'react';
import { Share2, Check, Copy, MessageCircle } from 'lucide-react';

/**
 * ShareButton — §11.4.1 Dark Social Engine
 *
 * STRATEGY:
 * 1. Dark Social shares are 500x more powerful than a purchased backlink (§11.4.1)
 * 2. When someone shares via WhatsApp/Telegram, it creates organic citations
 * 3. Google tracks these indirect signals via Chrome usage data
 * 4. A shared URL = implicit endorsement = Navboost uplift
 *
 * IMPLEMENTATION:
 * - Uses Web Share API (native share sheet on mobile)
 * - Clipboard fallback for desktop
 * - WhatsApp direct share as secondary CTA
 * - GA4 event tracking for attribution
 */

interface ShareButtonProps {
    title: string;
    text?: string;
    url?: string;
    className?: string;
    compact?: boolean;
}

export default function ShareButton({ title, text, url, className = '', compact = false }: ShareButtonProps) {
    const [copied, setCopied] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    const shareText = text || title;

    // GA4 tracking
    const trackShare = useCallback((method: string) => {
        if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).gtag) {
            (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', 'share', {
                event_category: 'engagement',
                event_label: method,
                content_type: 'page',
                item_id: shareUrl,
            });
        }
    }, [shareUrl]);

    // Native share (mobile)
    const handleNativeShare = useCallback(async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title, text: shareText, url: shareUrl });
                trackShare('native_share');
            } catch (err) {
                // User cancelled — that's fine
                if ((err as Error).name !== 'AbortError') {
                    setShowMenu(true);
                }
            }
        } else {
            setShowMenu(true);
        }
    }, [title, shareText, shareUrl, trackShare]);

    // Copy to clipboard
    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
            setCopied(true);
            trackShare('clipboard_copy');
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = `${shareText}\n${shareUrl}`;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            trackShare('clipboard_copy_fallback');
            setTimeout(() => setCopied(false), 2000);
        }
    }, [shareText, shareUrl, trackShare]);

    // WhatsApp direct share
    const handleWhatsApp = useCallback(() => {
        const message = encodeURIComponent(`${shareText}\n${shareUrl}`);
        window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer');
        trackShare('whatsapp_share');
        setShowMenu(false);
    }, [shareText, shareUrl, trackShare]);

    // Twitter/X share
    const handleTwitter = useCallback(() => {
        const tweetText = encodeURIComponent(shareText);
        const tweetUrl = encodeURIComponent(shareUrl);
        window.open(`https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`, '_blank', 'noopener,noreferrer');
        trackShare('twitter_share');
        setShowMenu(false);
    }, [shareText, shareUrl, trackShare]);

    if (compact) {
        return (
            <button
                onClick={handleNativeShare}
                className={`inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-sky-600 transition-colors ${className}`}
                aria-label="مشاركة"
            >
                <Share2 className="w-4 h-4" />
                <span>مشاركة</span>
            </button>
        );
    }

    return (
        <div className={`relative ${className}`}>
            {/* Main Share Button */}
            <button
                onClick={handleNativeShare}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-sky-100 text-gray-700 hover:text-sky-700 font-medium py-2.5 px-5 rounded-xl transition-all hover:shadow-sm active:scale-[0.98]"
                aria-label="مشاركة الصفحة"
            >
                <Share2 className="w-4 h-4" />
                مشاركة
            </button>

            {/* Fallback Menu (desktop browsers without Web Share API) */}
            {showMenu && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                    <div className="absolute bottom-full mb-2 left-0 bg-white rounded-xl shadow-xl border border-gray-200 p-2 z-50 min-w-[200px] animate-[fadeIn_0.15s_ease-out]">
                        {/* WhatsApp */}
                        <button
                            onClick={handleWhatsApp}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-green-50 transition-colors text-right"
                        >
                            <MessageCircle className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">واتساب</span>
                        </button>

                        {/* Twitter/X */}
                        <button
                            onClick={handleTwitter}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-sky-50 transition-colors text-right"
                        >
                            <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">تويتر / X</span>
                        </button>

                        {/* Copy */}
                        <button
                            onClick={handleCopy}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-right"
                        >
                            {copied ? (
                                <Check className="w-5 h-5 text-green-600" />
                            ) : (
                                <Copy className="w-5 h-5 text-gray-500" />
                            )}
                            <span className="text-sm font-medium text-gray-700">
                                {copied ? 'تم النسخ!' : 'نسخ الرابط'}
                            </span>
                        </button>
                    </div>

                    <style dangerouslySetInnerHTML={{ __html: `
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(4px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    `}} />
                </>
            )}
        </div>
    );
}
