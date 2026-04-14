'use client';

/**
 * Global Error Boundary — Catches errors in the ROOT layout.
 * 
 * This is the last-resort error handler. Unlike error.tsx,
 * this must render its own <html> and <body> tags because
 * the root layout itself may have failed.
 */
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="ar" dir="rtl">
            <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, backgroundColor: '#f8fafc' }}>
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                }}>
                    <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
                        <div style={{
                            width: '5rem',
                            height: '5rem',
                            margin: '0 auto 1.5rem',
                            borderRadius: '50%',
                            backgroundColor: '#fef2f2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                        }}>
                            ⚠️
                        </div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '0.75rem' }}>
                            حدث خطأ في النظام
                        </h1>
                        <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                            نعتذر عن هذا العطل. فريقنا التقني يعمل على إصلاحه.
                        </p>
                        <button
                            onClick={reset}
                            style={{
                                padding: '0.75rem 2rem',
                                backgroundColor: '#0284c7',
                                color: 'white',
                                border: 'none',
                                borderRadius: '0.75rem',
                                fontWeight: '600',
                                fontSize: '1rem',
                                cursor: 'pointer',
                            }}
                        >
                            حاول مرة أخرى
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
