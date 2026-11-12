'use client';

import { NAP } from '@/lib/nap';

const WA_NUMBER = NAP.phone.replace('+', '');
const WA_TEXT = encodeURIComponent('مرحباً، أحتاج مساعدة في إيجاد شركة خدمات مناسبة');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

/**
 * FloatingWhatsAppButton — always-visible WhatsApp shortcut (bottom-right).
 *
 * Bottom-left is taken by WizardFunnelFAB, so this sits on the right.
 * Plain <a> (not next/link) so it never triggers an RSC prefetch.
 */
export default function FloatingWhatsAppButton() {
    const track = () => {
        if (typeof window === 'undefined') return;
        const w = window as unknown as {
            gtag?: (...args: unknown[]) => void;
            dataLayer?: Record<string, unknown>[];
        };
        w.gtag?.('event', 'whatsapp_click', {
            event_category: 'conversion',
            event_label: 'floating_whatsapp',
            value: 1,
        });
        w.dataLayer?.push({ event: 'prokr_whatsapp_float_click' });
    };

    return (
        <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={track}
            aria-label={`تواصل معنا عبر واتساب ${NAP.phoneDisplay}`}
            title="تواصل معنا عبر واتساب"
            className="fixed bottom-5 right-5 z-[9989] flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 print:hidden"
            style={{ backgroundColor: '#25D366', boxShadow: '0 8px 24px -6px rgba(37,211,102,0.55)' }}
        >
            <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} aria-hidden="true" />
            <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true" className="relative">
                <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3zm0 23.62c-2.02 0-4-.54-5.72-1.57l-.41-.24-3.96 1.04 1.06-3.86-.27-.4A10.6 10.6 0 0 1 5.38 16c0-5.86 4.77-10.62 10.63-10.62 5.85 0 10.61 4.76 10.61 10.62 0 5.86-4.76 10.62-10.62 10.62zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.3 3.29.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
            </svg>
        </a>
    );
}
