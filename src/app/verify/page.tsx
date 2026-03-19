'use client';

// ============================================
// 🔐 Verify Page — Gmail Link Landing
// Handles Firebase email link sign-in completion
// ============================================

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { isEmailSignInLink, completeEmailSignIn } from '@/lib/firebase-auth';
import { CheckCircle, Loader2, AlertCircle, Building2, Mail } from 'lucide-react';
import Link from 'next/link';

type VerifyState = 'verifying' | 'needs-email' | 'success' | 'error';

function VerifyContent() {
    const searchParams = useSearchParams();
    const mode = searchParams.get('mode'); // 'claim' or 'review'
    const companyCode = searchParams.get('code');
    const [state, setState] = useState<VerifyState>('verifying');
    const [message, setMessage] = useState('');
    const [manualEmail, setManualEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // Core verification logic — extracted for reuse
    async function processVerification(email: string) {
        const link = window.location.href;
        await completeEmailSignIn(email, link);

        if (mode === 'claim' && companyCode) {
            // Save email to localStorage for phone step
            window.localStorage.setItem('claimEmail', email);
            await fetch('/api/claim/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, companyCode }),
            });
            setMessage('تم تأكيد البريد ✅ — الآن عد لصفحة المنشأة لإكمال الخطوة 2: تأكيد رقم الهاتف');
        } else {
            setMessage('تم التحقق من حسابك بنجاح!');
        }

        setState('success');

        // Clean up localStorage (keep claimEmail for phone step if claim mode)
        if (mode !== 'claim') {
            window.localStorage.removeItem('claimEmail');
        }
        window.localStorage.removeItem('claimCompanyCode');
    }

    useEffect(() => {
        async function verify() {
            try {
                const link = window.location.href;

                if (!isEmailSignInLink(link)) {
                    setState('error');
                    setMessage('رابط التأكيد غير صالح أو منتهي الصلاحية');
                    return;
                }

                // Get stored email
                const email = window.localStorage.getItem('claimEmail');

                if (!email) {
                    // No email in localStorage — show inline form instead of window.prompt()
                    // This handles: different device, in-app browser, private mode
                    setState('needs-email');
                    return;
                }

                await processVerification(email);
            } catch {
                setState('error');
                setMessage('حدث خطأ أثناء التحقق. حاول مرة أخرى.');
            }
        }

        verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode, companyCode]);

    // Handle manual email submission (replaces window.prompt)
    async function handleEmailSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!manualEmail || !manualEmail.includes('@')) return;

        setSubmitting(true);
        try {
            await processVerification(manualEmail);
        } catch {
            setState('error');
            setMessage('حدث خطأ أثناء التحقق. تأكد من البريد الإلكتروني وحاول مرة أخرى.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 max-w-md w-full text-center">
                {state === 'verifying' && (
                    <>
                        <Loader2 className="w-16 h-16 text-amber-500 animate-spin mx-auto mb-4" />
                        <h1 className="text-xl font-bold text-gray-900 mb-2">جاري التحقق...</h1>
                        <p className="text-gray-500 text-sm">يرجى الانتظار بينما نتحقق من هويتك</p>
                    </>
                )}

                {/* Email input form — replaces window.prompt() for mobile compatibility */}
                {state === 'needs-email' && (
                    <>
                        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-10 h-10 text-amber-600" />
                        </div>
                        <h1 className="text-xl font-bold text-gray-900 mb-2">تأكيد البريد الإلكتروني</h1>
                        <p className="text-gray-600 text-sm mb-6">
                            يبدو أنك فتحت الرابط من جهاز أو متصفح مختلف. أدخل بريدك الإلكتروني المستخدم في التسجيل.
                        </p>
                        <form onSubmit={handleEmailSubmit} className="space-y-3">
                            <input
                                type="email"
                                value={manualEmail}
                                onChange={(e) => setManualEmail(e.target.value)}
                                placeholder="owner@company.com"
                                dir="ltr"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-center"
                                required
                                autoFocus
                                autoComplete="email"
                                inputMode="email"
                            />
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-3 bg-gradient-to-l from-amber-500 to-yellow-500 text-white font-bold text-sm rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
                            >
                                {submitting ? (
                                    <><Loader2 className="w-4 h-4 animate-spin" /> جاري التحقق...</>
                                ) : (
                                    <><CheckCircle className="w-4 h-4" /> تأكيد البريد</>
                                )}
                            </button>
                        </form>
                    </>
                )}

                {state === 'success' && (
                    <>
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h1 className="text-xl font-bold text-emerald-900 mb-2">
                            {mode === 'claim' ? '✅ تم تأكيد البريد — الخطوة 1 من 2' : '✅ تم التحقق!'}
                        </h1>
                        <p className="text-gray-600 text-sm mb-6">{message}</p>

                        {companyCode && (
                            <Link
                                href={`/company/${companyCode}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-emerald-500 to-teal-500 text-white font-bold text-sm rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg"
                            >
                                <Building2 className="w-4 h-4" />
                                العودة لصفحة المنشأة
                            </Link>
                        )}
                    </>
                )}

                {state === 'error' && (
                    <>
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="w-10 h-10 text-red-500" />
                        </div>
                        <h1 className="text-xl font-bold text-red-900 mb-2">حدث خطأ</h1>
                        <p className="text-gray-600 text-sm mb-6">{message}</p>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-bold text-sm rounded-xl hover:bg-gray-200 transition-all"
                        >
                            العودة للرئيسية
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default function VerifyPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
                <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
                    <Loader2 className="w-16 h-16 text-amber-500 animate-spin mx-auto mb-4" />
                    <h1 className="text-xl font-bold text-gray-900 mb-2">جاري التحميل...</h1>
                </div>
            </div>
        }>
            <VerifyContent />
        </Suspense>
    );
}
