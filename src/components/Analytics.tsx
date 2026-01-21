'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Analytics component for tracking page views and user interactions
 * Uses Google Analytics 4 and custom event tracking
 */
export default function Analytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Track page views
        const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');

        // Send to Google Analytics if available
        if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag('event', 'page_view', {
                page_path: url,
                page_title: document.title,
            });
        }

        // Log for debugging in development
        if (process.env.NODE_ENV === 'development') {
            console.log('[Analytics] Page view:', url);
        }
    }, [pathname, searchParams]);

    return null; // This component doesn't render anything
}

/**
 * Track a CTA click (Call button, WhatsApp button)
 */
export function trackClick(action: 'call' | 'whatsapp' | 'profile', advertiserCode: string, city?: string, service?: string) {
    if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag('event', 'cta_click', {
            event_category: 'Engagement',
            event_label: action,
            advertiser_code: advertiserCode,
            city: city || 'unknown',
            service: service || 'unknown',
        });
    }

    // Log for debugging
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] CTA Click: ${action} for ${advertiserCode}`);
    }
}

/**
 * Track search interactions
 */
export function trackSearch(query: string, resultCount: number) {
    if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag('event', 'search', {
            search_term: query,
            result_count: resultCount,
        });
    }
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: 'contact' | 'advertise' | 'admin', success: boolean) {
    if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag('event', 'form_submit', {
            form_name: formName,
            success: success,
        });
    }
}
