'use client';

// ============================================
// 🔐 Verify Page — Gmail Link Landing
// Handles Firebase email link sign-in completion
// ============================================

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { isEmailSignInLink, completeEmailSignIn } from '@/lib/firebase-auth';
import { CheckCircle, Loader2, AlertCircle, Building2 } from 'lucide-react';
import Link from 'next/link';

type VerifyState = 'verifying' | 'success' | 'error';

function VerifyContent() {
    const searchParams = useSearchParams();
    const mode = searchParams.get('mode'); // 'claim' or 'review'
    const companyCode = searchParams.get('code');
    const [state, setState] = useState<VerifyState>('verifying');
    const [message, setMessage] = useState('');

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
                    const prompted = window.prompt('يرجى إدخال البريد الإلكتروني المستخدم في التسجيل:');
                    if (!prompted) {
                        setState('error');
                        setMessage('لم يتم إدخال البريد الإلكتروني');
                        return;
                    }
                    // Complete Firebase sign-in with prompted email
                    await completeEmailSignIn(prompted, link);

                    if (mode === 'claim' && companyCode) {
                        // Save prompted email to localStorage for phone step
                        window.localStorage.setItem('claimEmail', prompted);
                        await fetch('/api/claim/verify', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: prompted, companyCode }),
                        });
                        setMessage('تم تأكيد البريد ✅ — الآن عد لصفحة المنشأة لإكمال الخطوة 2: تأكيد رقم الهاتف');
                    }
                } else {
                    // Complete Firebase sign-in
                    await completeEmailSignIn(email, link);

                    if (mode === 'claim' && companyCode) {
                        await fetch('/api/claim/verify', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, companyCode }),
                        });
                        setMessage('تم تأكيد البريد ✅ — الآن عد لصفحة المنشأة لإكمال الخطوة 2: تأكيد رقم الهاتف');
                    } else {
                        setMessage('تم التحقق من حسابك بنجاح!');
                    }
                }

                setState('success');

                // Clean up localStorage (keep claimEmail for phone step if claim mode)
                if (mode !== 'claim') {
                    window.localStorage.removeItem('claimEmail');
                }
                window.localStorage.removeItem('claimCompanyCode');
            } catch {
                setState('error');
                setMessage('حدث خطأ أثناء التحقق. حاول مرة أخرى.');
            }
        }

        verify();
    }, [mode, companyCode]);

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
