'use client';

import { useEffect } from 'react';

/**
 * Error Boundary — Catches unhandled errors in route segments.
 * 
 * Shows a branded error page instead of Next.js default,
 * with a retry button and link to homepage.
 * 
 * IMPORTANT: This MUST be a Client Component ('use client').
 */
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log to analytics in production
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'exception', {
                description: error.message,
                fatal: false,
            });
        }
    }, [error]);

    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4" dir="rtl">
            <div className="text-center max-w-md">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    حدث خطأ غير متوقع
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    نعتذر عن هذا الخطأ. يمكنك المحاولة مرة أخرى أو العودة للصفحة الرئيسية.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors shadow-sm"
                    >
                        حاول مرة أخرى
                    </button>
                    <a
                        href="/"
                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    >
                        العودة للرئيسية
                    </a>
                </div>

                {/* Error digest for debugging (only visible in dev) */}
                {process.env.NODE_ENV === 'development' && error.digest && (
                    <p className="mt-6 text-xs text-gray-400 font-mono">
                        Digest: {error.digest}
                    </p>
                )}
            </div>
        </div>
    );
}
