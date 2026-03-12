'use client';

import { useEffect } from 'react';

/**
 * Service Worker Registrar
 * Registers /sw.js on window.load and provides Background Sync utilities.
 * Must be rendered as a client component (inside <Suspense>).
 */
export default function ServiceWorkerRegistrar() {
    useEffect(() => {
        if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
            return;
        }

        const registerSW = async () => {
            try {
                const registration = await navigator.serviceWorker.register('/sw.js', {
                    scope: '/',
                    updateViaCache: 'none',
                });

                if (process.env.NODE_ENV === 'development') {
                    console.log('[PWA] Service Worker registered:', registration.scope);
                }

                // Listen for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (!newWorker) return;

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
                            // New SW activated — optionally notify user of update
                            if (process.env.NODE_ENV === 'development') {
                                console.log('[PWA] New Service Worker activated');
                            }
                        }
                    });
                });
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('[PWA] Service Worker registration failed:', error);
                }
            }
        };

        // Register after page load to avoid blocking initial render
        if (document.readyState === 'complete') {
            registerSW();
        } else {
            window.addEventListener('load', registerSW, { once: true });
        }

        // Cleanup: remove listener if component unmounts before load
        return () => {
            window.removeEventListener('load', registerSW);
        };
    }, []);

    return null; // Invisible component
}

/**
 * Send a request with Background Sync fallback.
 * If the network is unavailable, the request is queued by the SW
 * and replayed automatically when connectivity returns.
 *
 * @param url - The URL to send the request to
 * @param options - Fetch options (method, body, headers)
 * @returns Response or queued acknowledgment
 */
export async function sendWithSync(
    url: string,
    options: RequestInit = {}
): Promise<{ success: boolean; queued: boolean; data?: unknown }> {
    try {
        const response = await fetch(url, options);
        const data = await response.json().catch(() => null);
        return { success: response.ok, queued: false, data };
    } catch {
        // Request failed — SW will automatically queue it via Background Sync
        // Return a graceful acknowledgment
        return {
            success: false,
            queued: true,
            data: { message: 'تم حفظ طلبك وسيُرسل عند عودة الاتصال' }
        };
    }
}

/**
 * Manually invalidate a cached URL via the Service Worker.
 * Useful when data changes (e.g., after adding a new company in admin).
 */
export function invalidateCache(url: string): void {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            type: 'CACHE_INVALIDATE',
            url,
        });
    }
}

/**
 * Get the current Service Worker version.
 */
export async function getSWVersion(): Promise<string | null> {
    if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
        return null;
    }

    return new Promise((resolve) => {
        const channel = new MessageChannel();
        channel.port1.onmessage = (event) => {
            resolve(event.data?.version ?? null);
        };
        navigator.serviceWorker.controller!.postMessage(
            { type: 'GET_VERSION' },
            [channel.port2]
        );

        // Timeout after 2s
        setTimeout(() => resolve(null), 2000);
    });
}
